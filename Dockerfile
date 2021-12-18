FROM node:latest
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
COPY . .
RUN  npm run build
EXPOSE 8085
RUN chown -R node /usr/src/app
CMD ["node", "dist/main"]
