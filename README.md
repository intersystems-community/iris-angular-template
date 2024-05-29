
# InterSystems IRIS Angular Full Stack demo and template
This repository contains a sample application which consists of InterSystems IRIS REST API and Frontend Application which demoes a coffee-maker shop. 

It demonstrates the way to communicate with InterSystes IRIS from an angular application.
It demoes the way to develop using Docker containers.
It demoes how to package the application in ZPM module and how to deploy it using ZPM.

For more information on how to use and customize the angular template, see the [dev.md](https://github.com/isc-etchenko/iris-angular-template/blob/master/dev.md) file.

## Installation
### Docker way
Clone the repo, run:
```
set DOCKER_BUILDKIT=1
```
and then
```
docker-compose up -d
```
There are 2 options for running your angular application, depending on preference. 

#### Within IRIS
To have the angular application run from within IRIS, run

```
docker-compose exec iris iris session iris -U angular-template
```

to open an iris terminal, and then

```
zpm "angular-template activate -verbose"
```

to activate the zpm module and build the application. This should be done anytime you want changes in your angular code to be reflected in the served application.

Run the application with URL: http://localhost:8080/angular-template/

#### Locally

To run the application locally, simply run the command

```
docker-compose exec iris bash -c "cd ng/app ; ng serve --open"
```

This will build your angular application in the container rather than in IRIS, and can be accessed at the URL: http://localhost:4200/angular-template/

This is recommended if you are doing local Angular development, since your changes will automatically be rebuilt and served.

## Development
### Code Changes

The angular application lives within the /ng/app/ folder, while all Objectscript code lives in the /cls/ folder.

### Prerequisites
Make sure you have [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [Docker desktop](https://www.docker.com/products/docker-desktop) installed.
This repository is ready to code in VSCode with ObjectScript plugin.
Install [VSCode](https://code.visualstudio.com/), [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) and [ObjectScript](https://marketplace.visualstudio.com/items?itemName=daimor.vscode-objectscript) plugin and open the folder in VSCode.

## ZPM Package Manager
This module is zpm-packaged, which means that it is described with [module.xml](https://github.com/isc-etchenko/iris-angular-template/blob/master/module.xml).

Feel free to use as an example and change the module.xml to package your own InterSystems IRIS full-stack solution using angular.


## Credits
Demo is built using original fullstack-template [iris-fullstack-template](https://github.com/intersystems/iris-fullstack-template)

