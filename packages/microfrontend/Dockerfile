#stage 1
FROM node:latest as node
EXPOSE 80
WORKDIR /app
COPY . .
RUN npm install
RUN npm run shell:prod:docker
RUN npm run webapp:prod:docker
RUN npm run form:prod:docker
RUN npm run dashboard:prod:docker

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/apps /usr/share/nginx/html

RUN chmod -R 777 /usr/share/nginx/html/*
COPY --from=node /app/nginx-custom.conf /etc/nginx/conf.d/default.conf
COPY ssl.crt /usr/share/nginx
COPY ssl.pass /usr/share/nginx
COPY ssl.key /usr/share/nginx

EXPOSE 80:443
ENTRYPOINT nginx -g 'daemon off;'
