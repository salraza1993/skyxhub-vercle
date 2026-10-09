# Dockerfile for Next.js app
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --frozen-lockfile || npm install

# Copy source code
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
COPY .env* ./
# Set default values for build args
ARG SENDGRID_API_KEY=""
ARG SENDGRID_FROM_EMAIL=""
ARG CONTACT_RECEIVER=""
ENV SENDGRID_API_KEY=${SENDGRID_API_KEY}
ENV SENDGRID_FROM_EMAIL=${SENDGRID_FROM_EMAIL}
ENV CONTACT_RECEIVER=${CONTACT_RECEIVER}
RUN npm run build

# Production image
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/server.js ./server.js
EXPOSE 3000
CMD ["npm", "start"]