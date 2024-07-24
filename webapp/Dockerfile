# Stage 1: Build the Angular application (non-persistent)
FROM node:alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy Angular application code
COPY . .

# Build the Angular application for production
RUN npm run build --prod

# Stage 2: Serve the Angular application (slim image)
FROM nginx:stable-alpine

# Copy the built Angular application from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/nginx-custom.conf /etc/nginx/conf.d/default.conf

# Expose the port that Nginx listens on (typically 80)
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
