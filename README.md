
# InterSystems IRIS Angular Full Stack demo and template
This repository contains a sample application consisting of an InterSystems IRIS REST API and Angular Application. 

It demonstrates the way to communicate with InterSystes IRIS from an angular application.
It demonstrates the way to develop using Docker containers.
It demonstrates how to package the application in IPM module and how to deploy it using IPM.

For more information on how to use and customize this template, see [dev.md](https://github.com/intersystems-community/iris-angular-template/blob/master/dev.md).

## Installation
### Build and Run in Docker
Clone the repo, run:
```
set DOCKER_BUILDKIT=1
```
and then
```
docker-compose up -d
```
There are two options for running your angular application: 

#### Within IRIS
To have the angular application run from within IRIS, run

```
docker-compose exec iris iris session iris -U angular-template
```

to open an IRIS terminal, and then

```
zpm "angular-template activate -verbose"
```

to build the application. This can be done any time you want changes in your Angular code to be reflected in the served application within the container.

Run the application in your browser at this URL: http://localhost:8080/angular-template/

#### Locally

To run the application locally, follow the above steps for installing the application in IRIS, and then simply run the command:

```
docker-compose exec iris bash -c "cd ng/app; npm install; ng serve --host 0.0.0.0"
```

This will build your angular application in the container rather than in IRIS, and can be accessed at the URL: http://localhost:4200/

This is recommended if you are doing local Angular development, since your changes will automatically be rebuilt and served.

## Development
### Code Changes

The angular application lives within the /ng/app/ folder, while all Objectscript code lives in the /cls/ folder.

### Prerequisites
Make sure you have [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [Docker Desktop](https://www.docker.com/products/docker-desktop) installed.
This repository is ready to code in VSCode with ObjectScript plugin.
Install [VSCode](https://code.visualstudio.com/), [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) and [ObjectScript](https://marketplace.visualstudio.com/items?itemName=daimor.vscode-objectscript) plugin and open the folder in VSCode.

## InterSystems Package Manager
This module is defined using InterSystems Package Manager (IPM), which means that it is described with [module.xml](https://github.com/intersystems-community/iris-angular-template/blob/master/module.xml).

Feel free to use as an example and change the module.xml to package your own InterSystems IRIS-based full-stack solution using Angular.

## Credits
Demo is built using original fullstack-template [iris-fullstack-template](https://github.com/intersystems/iris-fullstack-template)

