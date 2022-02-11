FROM nodejs-base-img
WORKDIR /usr/app
COPY package.json package-lock.json .
COPY index.js .
RUN npm install
CMD [ "node", "index.js" ]