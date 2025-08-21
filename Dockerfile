# Stage 1: Build
FROM node:20-slim AS build

WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all source files
COPY ./src ./src
COPY tsconfig.json ./

# Build TypeScript
RUN npm run build

# Stage 2: Production
FROM node:20-slim

WORKDIR /usr/src/app

# Copy only production files
COPY package*.json ./
COPY --from=build /usr/src/app/dist ./dist

# Install only production dependencies
RUN npm ci --omit=dev

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose port
EXPOSE 3000

# Run the built app
CMD ["node", "dist/app.mjs"]
