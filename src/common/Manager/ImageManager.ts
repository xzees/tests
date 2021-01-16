import _ from "lodash";
import { getModuleAssetsUrl } from "common/Config/APIConfig";

class ImageManager {
  static default: ImageManager = new ImageManager();

  private constructor() {
    
  }

  images = {
    common: {
      BG2: getModuleAssetsUrl("template") + "/bg3.jpg",
      BGCONTENT: getModuleAssetsUrl("template") + "/banner-672.jpg",
      dropDownArrowWhite:
        getModuleAssetsUrl("common") + "/drop-down-arrow-white.svg",
      arrowLeftWhite: getModuleAssetsUrl("common") + "/left-arrow-white.svg",
      arrowRightWhite: getModuleAssetsUrl("common") + "/right-arrow-white.svg",
      calendarWhite: getModuleAssetsUrl("common") + "/calendar-white.svg",
      checkedWhite: getModuleAssetsUrl("common") + "/checked-white.svg",
      logo: getModuleAssetsUrl("common") + "/logo.png",
      logoWhite: getModuleAssetsUrl("common") + "/logo-white.png",
      menuBlue: getModuleAssetsUrl("common") + "/menu-blue.svg",
      creditCard:
        getModuleAssetsUrl("common") + "/payment-methods/credit-card.svg",
      bank: getModuleAssetsUrl("common") + "/payment-methods/bank.svg",
      counter: getModuleAssetsUrl("common") + "/payment-methods/counter.svg",
      flag: {
        TH: getModuleAssetsUrl("common") + "/flag/TH.svg",
        EN: getModuleAssetsUrl("common") + "/flag/EN.svg"
      },
      creditCardIcons: {
        visa:
          getModuleAssetsUrl("common") +
          "/payment-methods/credit-card-icons/visa.png",
        masterCard:
          getModuleAssetsUrl("common") +
          "/payment-methods/credit-card-icons/mastercard.png",
        amax:
          getModuleAssetsUrl("common") +
          "/payment-methods/credit-card-icons/amax.png"
      },
      creditCardBrands: {
        ktc:
          getModuleAssetsUrl("common") +
          "/payment-methods/credit-card-brands/ktc.png?v=2",
        citiBank:
          getModuleAssetsUrl("common") +
          "/payment-methods/credit-card-brands/citibank.png?v=1"
      },
      counterIcons: {
        bigC:
          getModuleAssetsUrl("common") +
          "/payment-methods/counter-icons/big-c.jpg",
        counterService:
          getModuleAssetsUrl("common") +
          "/payment-methods/counter-icons/counter-service.jpg",
        sevenEleven:
          getModuleAssetsUrl("common") +
          "/payment-methods/counter-icons/seven-eleven.jpg"
      },
      bankInstructions: {
        internetBankingDisabled:
          getModuleAssetsUrl("common") +
          "/payment-methods/bank-instructions/internet-banking-disabled.png",
        atmDisabled:
          getModuleAssetsUrl("common") +
          "/payment-methods/bank-instructions/atm-disabled.png",
        counterDisabled:
          getModuleAssetsUrl("common") +
          "/payment-methods/bank-instructions/counter-service-disabled.png"
      },
      bankIcons: {
        kbank: {
          icon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-icons/kbank.png",
          appIcon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-app-icons/kbank.png",
          appIconDisabed:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-app-icons/kbank-disabled.png",
          internetBankingIcon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-instructions/internet-banking-kbank.png",
          atmIcon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-instructions/atm-kbank.png",
          counterIcon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-instructions/counter-service-kbank.png"
        },
        bay: {
          icon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-icons/bay.png",
          appIcon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-app-icons/bay.png",
          appIconDisabed:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-app-icons/bay-disabled.png",
          internetBankingIcon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-instructions/internet-banking-bay.png",
          atmIcon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-instructions/atm-bay.png",
          counterIcon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-instructions/counter-service-bay.png"
        },
        uob: {
          icon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-icons/uob.png",
          appIcon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-app-icons/uob.png",
          appIconDisabed:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-app-icons/uob-disabled.png",
          internetBankingIcon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-instructions/internet-banking-uob.png",
          atmIcon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-instructions/atm-uob.png",
          counterIcon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-instructions/counter-service-uob.png"
        },
        tmb: {
          icon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-icons/tmb.png",
          appIcon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-app-icons/tmb.png",
          appIconDisabed:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-app-icons/tmb-disabled.png",
          internetBankingIcon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-instructions/internet-banking-tmb.png",
          atmIcon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-instructions/atm-tmb.png",
          counterIcon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-instructions/counter-service-tmb.png"
        },
        ktb: {
          icon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-icons/ktb.png",
          appIcon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-app-icons/ktb.png",
          appIconDisabed:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-app-icons/ktb-disabled.png",
          internetBankingIcon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-instructions/internet-banking-ktb.png",
          atmIcon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-instructions/atm-ktb.png",
          counterIcon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-instructions/counter-service-ktb.png"
        },
        bbl: {
          icon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-icons/bbl.png",
          appIcon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-app-icons/bbl.png",
          appIconDisabed:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-app-icons/bbl-disabled.png",
          internetBankingIcon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-instructions/internet-banking-bbl.png",
          atmIcon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-instructions/atm-bbl.png",
          counterIcon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-instructions/counter-service-bbl.png"
        },
        scb: {
          icon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-icons/scb.png",
          appIcon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-app-icons/scb.png",
          appIconDisabed:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-app-icons/scb-disabled.png",
          internetBankingIcon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-instructions/internet-banking-scb.png",
          atmIcon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-instructions/atm-scb.png",
          counterIcon:
            getModuleAssetsUrl("common") +
            "/payment-methods/bank-instructions/counter-service-scb.png"
        }
      },
      emailWhite:
        getModuleAssetsUrl("common") + "/payment-methods/email-white.png",
      crown: getModuleAssetsUrl("common") + "/crown.png",
      header: {
        LogoImage: getModuleAssetsUrl("template") + "/ttc-logo.svg",
        DownloadApp: getModuleAssetsUrl("template") + "/download.svg",
        LineIcon: getModuleAssetsUrl("template") + "/line-color.svg",
        FBIcon: getModuleAssetsUrl("template") + "/facebook-color.svg",
        IGIcon: getModuleAssetsUrl("template") + "/instagram-color.svg",
        Avatar: getModuleAssetsUrl("template") + "/Bright.jpg",
        ThaiFlag: getModuleAssetsUrl("template") + "/thailand-flag.svg",
        currencyIcon: getModuleAssetsUrl("template") + "/currency.svg"
      },
      menu: {
        IconHome: getModuleAssetsUrl("template") + "/home.svg",
        IconFlight: getModuleAssetsUrl("template") + "/flight.svg",
        IconHotel: getModuleAssetsUrl("template") + "/hotel.svg",
        IconTour: getModuleAssetsUrl("template") + "/tour.svg",
        IconPKTour: getModuleAssetsUrl("template") + "/package-tour.svg",
        IconSS: getModuleAssetsUrl("template") + "/sightseeing.svg",
        IconInsurance: getModuleAssetsUrl("template") + "/insurance.svg",
        IconDMC: getModuleAssetsUrl("template") + "/dmc.svg",
        IconCruise: getModuleAssetsUrl("template") + "/cruise.svg",
        IconRail: getModuleAssetsUrl("template") + "/rail.svg",
        IconCars: getModuleAssetsUrl("template") + "/car.svg",
        IconVisa: getModuleAssetsUrl("template") + "/visa.svg"
      },
      toggleMenu: {
        lineIcon: getModuleAssetsUrl("template") + "/line.svg",
        messengerIcon: getModuleAssetsUrl("template") + "/messenger.svg",
        appstoreImage: getModuleAssetsUrl("template") + "/appstore-color.svg",
        playstoreImage: getModuleAssetsUrl("template") + "/googleplay-color.svg"
      },
      footerImage: getModuleAssetsUrl("common") + "/footer-image.png",
      footer: {
        bgfooter: getModuleAssetsUrl("template") + "/kanok.svg",
        newsletter: getModuleAssetsUrl("template") + "/3737.png",
        appstoreImage: getModuleAssetsUrl("template") + "/appstore.svg",
        playstoreImage: getModuleAssetsUrl("template") + "/googleplay.svg",
        socialIcon: {
          facebookIcon: getModuleAssetsUrl("template") + "/facebook.svg",
          twitterIcon: getModuleAssetsUrl("template") + "/twitter.svg",
          youtubeIcon: getModuleAssetsUrl("template") + "/youtube.svg",
          instagramIcon: getModuleAssetsUrl("template") + "/instagram.svg"
        }
      },
      lineShared: getModuleAssetsUrl("template") + "/line-shared-color.svg",
      pdf: getModuleAssetsUrl("template") + "/pdf.svg",
      printer: getModuleAssetsUrl("template") + "/printer.svg",
      email: getModuleAssetsUrl("template") + "/email.svg",
      shared: getModuleAssetsUrl("template") + "/share.svg",
      map: getModuleAssetsUrl("template") + "/map-point.svg"
    },
    sabuypay: {
      icon: {
        logo: (getModuleAssetsUrl('sabuypay') + '/icons/SabuyPay-LOGO-Vertical-1.svg'),
      },
      logofooter: (getModuleAssetsUrl('sabuypay') + '/gdsv.png'),

    },
  };
}

export default ImageManager;
