#!/bin/bash -e

fatal() {
  echo $@
  exit 1
}

# ssh command wrap
remote() {
  ssh -q -o "StrictHostKeyChecking no" -i deploy_rsa -l -p ${SFTP_PORT} ${SFTP_USER}@www.asatake.com $@
}

[ -z "$SFTP_HOST" ] && fatal 'SFTP_HOST is not set'
[ -z "$SFTP_PORT" ] && fatal 'SFTP_PORT is not set'

# copy build
tar cvf - build | remote tar xvf -

remote <<EOF
  set -e
  mv build /srv/www/
EOF
