#stage 1
FROM node:latest as node
EXPOSE 80
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/shell /usr/share/nginx/html
COPY --from=node /app/nginx-custom.conf /etc/nginx/conf.d/default.conf