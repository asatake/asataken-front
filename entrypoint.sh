#!/usr/bin/env bash
set -euo pipefail

ENVIRONMENT=prod

start_app_dev() {
    npm run dev
}

start_app() {
    npm run build
    npm run start
}

# case $ENVIRONMENT in
#     local)
#         start_app_dev
#         ;;
#     prod)
#         start_app
#         ;;
# esac

start_app
