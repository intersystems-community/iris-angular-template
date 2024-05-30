
ARG IMAGE=store/intersystems/iris-community:2020.1.0.199.0
ARG IMAGE=intersystemsdc/iris-community:2019.4.0.383.0-zpm
ARG IMAGE=intersystemsdc/iris-community:2020.1.0.209.0-zpm
ARG IMAGE=intersystemsdc/iris-community:2020.2.0.196.0-zpm
ARG IMAGE=intersystemsdc/iris-community:2020.3.0.200.0-zpm
ARG IMAGE=intersystemsdc/iris-community
FROM $IMAGE


WORKDIR /irisdev/app

USER root

RUN mkdir /irisdev/app/ng/app/node_modules -p
RUN chown ${ISC_PACKAGE_MGRUSER}:${ISC_PACKAGE_IRISGROUP} /irisdev/app -R
RUN chmod a+rwx /irisdev/app/ng/app/node_modules -R

VOLUME /irisdev/app

RUN apt update && apt-get -y install git

# Install Node
RUN apt-get -y install curl
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs

# Install Java (for OpenAPI generation)
RUN apt-get install -y openjdk-11-jre-headless && \
    apt-get clean;

RUN cd ng/app && npm install @openapitools/openapi-generator-cli -g

# Allow zpm "angular-template generate" to work
RUN chown ${ISC_PACKAGE_MGRUSER}:${ISC_PACKAGE_IRISGROUP} /usr/lib/node_modules/@openapitools -R

RUN npm i -g @angular/cli@14.2.3


USER ${ISC_PACKAGE_MGRUSER}

RUN --mount=type=bind,src=. \
    iris start IRIS && \
	iris session IRIS < iris.script && \
    iris stop IRIS quietly

