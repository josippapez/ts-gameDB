FROM node:14-alpine

WORKDIR /app

RUN cd /tmp && npm install
RUN npm build
RUN npm prune --production

RUN rm -rf src && \
  chown -R node:node /app

USER node

EXPOSE 3000
CMD npm run start
