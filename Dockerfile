FROM registry.access.redhat.com/ubi8/ubi
RUN dnf install -y gcc-c++ make curl
RUN curl -sL https://rpm.nodesource.com/setup_14.x | bash -
RUN dnf install -y nodejs
WORKDIR /usr/app
COPY package.json package-lock.json ./
COPY index.js ./
RUN npm install
CMD [ "node", "index.js" ]