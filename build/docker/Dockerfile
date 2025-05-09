# Use the official Nginx image as the base image
FROM nginx:latest

# Copy the static files into the Nginx image
COPY src/images/ /usr/share/nginx/html/images/
COPY src/index.html src/script.js src/styles.css /usr/share/nginx/html/

# Expose port 80
EXPOSE 8080

# Start Nginx when the container has provisioned.
CMD ["nginx", "-g", "daemon off;"]
