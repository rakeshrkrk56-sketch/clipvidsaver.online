# Stage 1: Build Phase
FROM node:18-slim AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Set PUPPETEER_SKIP_CHROMIUM_DOWNLOAD to speed up npm install during build
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

# Install ALL dependencies (including devDependencies required for vite build)
RUN npm install

# Copy application source code
COPY . .

# Build the frontend and backend 
RUN npm run build

# Stage 2: Production Phase
FROM node:18-slim

# Set environment variables to skip Puppeteer's internal Chromium download
# and point to the system-installed Chromium.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium
ENV NODE_ENV=production
ENV PORT=3000

# Install Chromium and necessary dependencies
RUN apt-get update && apt-get install -y \
    chromium \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package descriptors
COPY package*.json ./

# Install ONLY production dependencies
RUN npm ci --omit=dev

# Copy built application from the builder stage
COPY --from=builder /app/dist ./dist

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
