#inventory/Dockerfile
# Stage 1: Build
FROM node:20-bullseye-slim AS build
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY tsconfig.json ./
COPY src ./src

RUN npm run build

# Stage 2: Production
FROM node:20-bullseye-slim
WORKDIR /usr/src/app

COPY package*.json ./
COPY --from=build /usr/src/app/dist ./dist
RUN npm install --omit=dev

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["node", "dist/app.mjs"]
