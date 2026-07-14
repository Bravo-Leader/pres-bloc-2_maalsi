FROM nginx:alpine

# Version de cache-busting (passée au build : --build-arg CACHE_BUST=<sha>).
# Ajoute ?v=<sha> aux CSS/JS pour forcer Cloudflare à recharger les assets
# modifiés, tout en conservant le cache CDN pour les versions inchangées.
ARG CACHE_BUST=dev

COPY . /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN set -e; cd /usr/share/nginx/html; \
    sed -i "s|href=\"css/\([A-Za-z0-9_.-]*\.css\)\"|href=\"css/\1?v=${CACHE_BUST}\"|g" index-dynamic.html; \
    sed -i "s|src=\"js/\([A-Za-z0-9_.-]*\.js\)\"|src=\"js/\1?v=${CACHE_BUST}\"|g" index-dynamic.html; \
    sed -i "s|from '\./\([A-Za-z0-9_.-]*\.js\)'|from './\1?v=${CACHE_BUST}'|g" js/main.js

EXPOSE 80
