FROM node:12 as builder

WORKDIR /staging
COPY package* /staging/
RUN npm ci

COPY . /staging/
RUN npm run build

FROM node:12-alpine
COPY --from=builder /staging/ /app/
EXPOSE 3000

CMD [ "node", "/app/dist/app.js" ]