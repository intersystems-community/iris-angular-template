ARG IMAGE=intersystemsdc/iris-community
FROM $IMAGE

USER root

RUN apt update && apt-get -y install git

# Install Node
RUN apt-get -y install curl
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs

# Install Java (for OpenAPI generation)
RUN apt-get install -y openjdk-11-jre-headless && \
    apt-get clean;

RUN npm install @openapitools/openapi-generator-cli -g

# Allow zpm "angular-template generate" to work
RUN chown ${ISC_PACKAGE_MGRUSER}:${ISC_PACKAGE_IRISGROUP} /usr/lib/node_modules/@openapitools -R

RUN npm i -g @angular/cli@14.2.3

COPY . /irisdev/app

RUN chown ${ISC_PACKAGE_MGRUSER}:${ISC_PACKAGE_IRISGROUP} /irisdev/app -R

USER ${ISC_PACKAGE_MGRUSER}

WORKDIR /irisdev/app

RUN git config --global --add safe.directory /irisdev/app

RUN iris start IRIS && \
	iris session IRIS < iris.script && \
    iris stop IRIS quietly