FROM dockerhub.timeweb.cloud/library/node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Генерируем Prisma клиент
RUN npx prisma generate

# Собираем приложение
RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "start"] 