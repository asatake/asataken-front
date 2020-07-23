#!/usr/bin/env bash
set -euo pipefail

ENVIRONMENT=${DEPLOY_ENV}
APPLICATION=$1

start_app() {
    npm run build
    npm run start
}

case $ENVIRONMENT in
    local)
        start_app
        ;;
    prod)
        start_app
        ;;
esac
