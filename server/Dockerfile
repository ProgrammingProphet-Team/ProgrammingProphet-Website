FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm ci --only=production

# Bundle app source
COPY . .

# Ensure uploads directory exists
RUN mkdir -p uploads

# Map port 5000
EXPOSE 5000

# Start server
CMD ["node", "index.js"]
