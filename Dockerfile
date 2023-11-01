# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /promos-app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI globally and project dependencies
RUN npm install -g @angular/cli && npm install

# Copy the entire project directory to the container
COPY . .

# Expose the default Angular development server port
EXPOSE 4200

# Start the Angular development server with hot reload
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "1"]
