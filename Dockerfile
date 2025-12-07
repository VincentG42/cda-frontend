# Stage 1: Build the Astro.js/Vite application
FROM node:20-alpine as builder

WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Astro.js application
# Assuming 'npm run build' outputs to a 'dist' directory
RUN npm run build

# Stage 2: Serve the built application with Nginx
FROM nginx:alpine

# Copy custom Nginx configuration (if any, otherwise default is used)
# If you have a custom nginx.conf, place it in a 'nginx' folder next to your Dockerfile
# Copy custom Nginx configuration
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built application from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
