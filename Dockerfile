FROM node:14 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:14-alpine
WORKDIR /app
COPY --from=0 /app/build /app/build
COPY --from=0 /app/package.json /app/package.json
COPY --from=0 /app/public /app/public
COPY --from=0 /app/dist /app/dist
CMD ["npm", "run", "start:prod"]