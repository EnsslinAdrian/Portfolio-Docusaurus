FROM node:24-alpine AS buildcontainer
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

FROM nginx:alpine
LABEL maintainer="Adrian Enßlin"

COPY nginx/default.conf /etc/nginx/conf.d
COPY --from=buildcontainer /usr/src/app/build /usr/share/nginx/html
