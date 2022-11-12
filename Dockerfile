FROM node:alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run api-generate
RUN npm run build

FROM nginx:alpine
COPY ./config/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/todo-app /usr/share/nginx/html