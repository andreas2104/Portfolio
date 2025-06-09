FROM node:18-alpine as builder

WORDKIR /app
COPY package.json package-lock.json ./
