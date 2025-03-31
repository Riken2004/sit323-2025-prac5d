# Use Node.js as the base image
FROM node:18


WORKDIR /app

# install dependencies
COPY package.json package-lock.json ./

RUN npm install


COPY . .

# application port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
