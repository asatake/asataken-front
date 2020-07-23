FROM node:12.18.2-alpine

RUN apk update

ARG APP_HOME=/usr/src/app
RUN mkdir -p ${APP_HOME}

COPY ./package.json ${APP_HOME}
COPY ./package-lock.json ${APP_HOME}

WORKDIR ${APP_HOME}
RUN npm ci

COPY ./ ${APP_HOME}

ENTRYPOINT ["/bin/sh", "entrypoint.sh"]

