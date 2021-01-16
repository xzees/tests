import express from "express";
import React from "react";
import RootStore from "stores";
import { renderToString } from "react-dom/server";
import compression from "compression";
import { StaticRouter } from "react-router-dom";
import { ServerStyleSheet } from "styled-components";
import { ServerStyleSheets, ThemeProvider } from "@material-ui/styles";
import { Capture } from "react-loadable";
import serialize from "serialize-javascript";
import { getBundles } from "react-loadable/webpack";
import theme from "theme";
import { html as htmlTemplate, oneLineTrim } from "common-tags";
import Routes from "routes";
import { Helmet } from "react-helmet";
import { BrandEnum } from "common/enumerations/BrandEnum";
import ThemeManager from "utilities/ThemeManager";
const themes = ThemeManager.setupTheme(BrandEnum.TTC);
import { dehydrate } from "utilities/hydrate";
import { runtimeConfig } from "common/Config/Config";
import InitializeManager from "common/Manager/InitializeManager";
import _ from "lodash";
import PaymentGateway from 'modules/payment/gateway'

const isProduction = process.env.NODE_ENV == "production";
let assets: any;
const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const productionMiddlewares = isProduction ? [compression()] : [compression()];
const HELMET_ATTRIBUTE_REGEXP = / data-react-helmet="true"/g;

const GoogleBotAgents = [
  "googlebot",
  "google-structured-data-testing-tool",
  "bingbot",
  "linkedinbot",
  "mediapartners-google",
  "chrome-lighthouse"
];

const server = express()
  .disable("x-powered-by")
  .use(...productionMiddlewares)
  .use(
    process.env.PUBLIC_PATH || "",
    express.static(process.env.RAZZLE_PUBLIC_DIR!)
  )
  .use('/payment', PaymentGateway)
  .use(async (req, res) => {
    const userAgent = req.headers["user-agent"]?.toLowerCase() || "";
    const isBotAgent = _.some(
      GoogleBotAgents.map((x) => userAgent.indexOf(x) >= 0)
    );
    const isMobileBotAgent = isBotAgent && userAgent.indexOf("mobile") >= 0;

    RootStore.create();
    RootStore.default.setThemeStore(themes);

    if (isBotAgent) RootStore.default.ScreenStore.botType = "desktop";
    if (isMobileBotAgent) RootStore.default.ScreenStore.botType = "mobile";

    const routerContext: any = {};
    const modules: any[] = [];
    const sheet = new ServerStyleSheet();
    const materialSheet = new ServerStyleSheets();

    const dehydratedState = dehydrate({
      data: (req as any).DataGateway
    });

    const dataGateway = (req as any)?.DataGateway;
    InitializeManager.default.rehydrate(dehydratedState);

    const markup = renderToString(
        sheet.collectStyles(
          materialSheet.collect(
            <Capture report={(moduleName) => modules.push(moduleName)}>
              <ThemeProvider theme={theme}>
                <StaticRouter location={req.url} context={routerContext}>
                  <Routes />
                </StaticRouter>
              </ThemeProvider>
            </Capture>
          )
        )
    );
    const css = materialSheet.toString();
    const styleTags = sheet.getStyleTags();

    if (routerContext.url) {
      res.status(302).setHeader("Location", routerContext.url);
      res.end();
      return;
    }

    const stats = require("../dist/react-loadable.json").default;
    const bundles = getBundles(stats as any, modules);
    const chunks = bundles.filter((bundle) => bundle.file.endsWith(".js"));
    const styles = bundles.filter((bundle) => bundle.file.endsWith(".css"));

    
    res
      .status(
        routerContext.missed ? 404 : routerContext.serverStatusCode || 200
      )
      .send(
        oneLineTrim(
          htmlTemplate`<!doctype html>
          <html lang="th">
          <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="language" content="th">
          <meta name="robots" content="noindex,nofollow"> 
          ${
              !isBotAgent
                ? isProduction
                  ? `<link rel="prefetch" href="${process.env.PUBLIC_PATH}static/assets/fonts/DBHeaventRounded/DBHeaventRoundedv32.woff2" as="font" type="font/woff2" crossorigin>
              <link rel="prefetch" href="${process.env.PUBLIC_PATH}static/assets/fonts/DBHeaventRounded-Med/DBHeaventRoundedMedv32.woff2" as="font" type="font/woff2" crossorigin>
              <link rel="prefetch" href="${process.env.PUBLIC_PATH}static/assets/fonts/Sarabun/Sarabun-Regular.woff2" as="font" type="font/woff2" crossorigin>
              <link rel="preload" href="${process.env.PUBLIC_PATH}static/assets/fonts/font.css" as="style" crossorigin>
              <link rel="stylesheet" href="${process.env.PUBLIC_PATH}static/assets/fonts/font.css" as="style" crossorigin>`
                  : ``
                : `<link href="/static/assets/fonts/DBHeaventRounded/DBHeaventRoundedv32.woff2" as="font" type="font/woff2" crossorigin>
              <link href="/static/assets/fonts/DBHeaventRounded-Med/DBHeaventRoundedMedv32.woff2" as="font" type="font/woff2" crossorigin>
              <link href="/static/assets/fonts/Sarabun/Sarabun-Regular.woff2" as="font" type="font/woff2" crossorigin>
              <link href="/static/assets/fonts/font.css" as="style" crossorigin>
              <link rel="stylesheet" href="/static/assets/fonts/font.css" as="style" crossorigin>`
            }
            ${
              assets.client.css
                ? `<link rel="preload" href="${assets.client.css}" as="style" >`
                : ""
            }
            ${
              assets.client.css
                ? `<link rel="stylesheet" href="${assets.client.css}" as="style" rel="preload">`
                : ""
            }
            ${styles
              .map((style) => {
                return `<link href="${style.file}" rel="preload"/>`;
              })
              .join("\n")}
            
            ${css ? `<style id='jss-ssr'>${css}</style>` : ""}
            <!-- Render the style tags gathered from the components into the DOM -->
          `
        ) +
          `${styleTags}` +
          oneLineTrim(
            htmlTemplate`
          ${
            !isBotAgent
              ? `
          <style>
            body { overflow: overlay; overflow-x: hidden; padding: 0 !important; }
            .MuiPopover-root { z-index:10000 !important; }
            .d-none { display: none !important; }
            @media(min-width:600px) { .d-md-none { display: none !important } .d-md-block { display: block !important } }
            body::-webkit-scrollbar { border-radius: 5px; width: 6px; }
            body::-webkit-scrollbar-thumb { background-color: #409; border: 1px solid #420999; border-radius: 5px; }
          </style>
          `
              : ""
          }
          </head>
          <body>
          ${
            !isBotAgent
              ? `<!-- Google Tag Manager (noscript) --><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WXXQ6QQ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><!-- End Google Tag Manager (noscript) -->`
              : ""
          }
         
          ${chunks
            .map((chunk) =>
              isProduction
                ? `<script src="${process.env.PUBLIC_PATH}${chunk.file}"></script>`
                : `<script src="http://${process.env.HOST}:${
                    parseInt(process.env.PORT || "", 10) + 1
                  }/${chunk.file}" async defer></script>`
            )
            .join("\n")}
          <main id="root">${markup}</main>
          ${
            !isBotAgent
              ? isProduction
                ? `<script src="${assets.client.js}" defer></script>`
                : `<script src="${
                    assets.client.js
                  }?v=${Math.random()}"  async crossorigin></script>`
              : ""
          }
          <script>window.env = ${serialize(runtimeConfig)};</script>
          <script>try{ window.main(); } catch(error) {}</script>
          <script id="__STATE">window.__STATE = ${dehydratedState}</script>
          </body>
          </html>`
          )
      );
  });

export default server;
