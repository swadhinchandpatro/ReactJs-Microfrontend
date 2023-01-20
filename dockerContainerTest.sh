#!/usr/bin/env bash

# Set -E to stop if any command other than conditional command fails to execute
set -e

docker run \
  --restart=always \
  --name=react-microfrontend \
  -p 80:80 -p 443:443 -p 3301:3301 \
  -d \
  react/microfrontend

# Example
#docker run \
#  -v ~/containerMount/nginx/logs:/var/logs \
#  -v ~/containerMount/nginx/config:/etc/nginx/conf.d \
#  -v ~/containerMount/nginx/config/streams:/etc/nginx/streams-enabled \
#  --restart=always \
#  --name=nginx \
#  --net=elastic_default \
#  -p 80:80 -p 443:443 \
#  --hostname=CentralLogger \
#  -d \
#  react/microfrontend/nginx
