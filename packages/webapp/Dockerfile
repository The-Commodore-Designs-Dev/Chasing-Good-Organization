#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npmrun build --prod

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/webapp /usr/share/nginx/html