
ARG IMAGE=store/intersystems/iris-community:2020.1.0.199.0
ARG IMAGE=intersystemsdc/iris-community:2019.4.0.383.0-zpm
ARG IMAGE=intersystemsdc/iris-community:2020.1.0.209.0-zpm
ARG IMAGE=intersystemsdc/iris-community:2020.2.0.196.0-zpm
ARG IMAGE=intersystemsdc/iris-community:2020.3.0.200.0-zpm
ARG IMAGE=intersystemsdc/iris-community
FROM $IMAGE


WORKDIR /home/irisowner/zpm

USER root
COPY --chown=irisowner:irisowner . /home/irisowner/zpm
#RUN mkdir /home/irisowner/zpm/ng/app/node_modules
RUN chmod +w -R /home/irisowner/zpm/ng/app
RUN apt update && apt-get -y install git

# Install Node
RUN apt-get -y install curl
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs
RUN node -v


USER ${ISC_PACKAGE_MGRUSER}

# RUN mkdir /home/irisowner/zpm/ng/app/node_modules

ARG TESTS=0
ARG MODULE="app-name"
ARG NAMESPACE="APP-NAME"

RUN --mount=type=bind,src=.,dst=. \
    iris start IRIS && \
	iris session IRIS < iris.script && \
    iris stop IRIS quietly

