# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy backend package files and install dependencies
COPY backend/package*.json ./backend/
RUN cd backend && npm install

# Copy backend source code
COPY backend ./backend

# Set working directory to backend
WORKDIR /app/backend

# Set environment variable for PORT
ENV PORT=5000
EXPOSE $PORT

# Start the app using npm
CMD ["npm", "start"]
