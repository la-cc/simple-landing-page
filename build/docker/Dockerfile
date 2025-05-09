FROM nginxinc/nginx-unprivileged:stable-alpine

# Copy the static files into the Nginx image
COPY src/images/ /usr/share/nginx/html/images/
COPY src/index.html src/script.js src/styles.css /usr/share/nginx/html/

# Expose port 8080
EXPOSE 8080

# Start Nginx when the container has provisioned.
CMD ["nginx", "-g", "daemon off;"]
