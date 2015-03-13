FROM centos:centos7

WORKDIR /
RUN yum install -y wget
RUN wget http://nodejs.org/dist/v0.10.30/node-v0.10.30.tar.gz
RUN yum install -y tar
RUN tar xzvf node-v* && cd node-v*
RUN yum install -y gcc gcc-c++
WORKDIR /node-v0.10.30
RUN ./configure
RUN yum install -y make
RUN make
RUN make install

WORKDIR /
RUN yum install -y git
RUN git clone https://github.com/npm/npm.git
RUN cd npm && make install

RUN npm install -D sqlite3
CMD cd /simonopitz.me && npm start --$stage && /bin/bash
