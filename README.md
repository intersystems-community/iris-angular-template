 [![Gitter](https://img.shields.io/badge/Available%20on-Intersystems%20Open%20Exchange-00b2a9.svg)](https://openexchange.intersystems.com/package/iris-fullstack-template)
# InterSystems IRIS Angular Full Stack demo and template
This repository contains a sample application which consists of InterSystems IRIS REST API and Frontend Application which demoes a coffee-maker shop. 

It demonstrates the way to communicate with InterSystes IRIS from an angular application.
It demoes the way to develop using Docker containers.
It demoes how to package the application in ZPM module and how to deploy it using ZPM.

## Installation
### Docker way
Clone the repo, run:
```
docker-compose up -d
```

To build the angular application in the container, run

```
docker-compose exec iris iris session iris -U APP-NAME
```

to open and iris terminal, and then

```
zpm "app-name activate --verbose"
```

to activate the zpm module and build the application.

Run the application with URL: http://localhost:8080/app-name/

## Development
### Prerequisites
Make sure you have [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [Docker desktop](https://www.docker.com/products/docker-desktop) installed.
This repository is ready to code in VSCode with ObjectScript plugin.
Install [VSCode](https://code.visualstudio.com/), [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) and [ObjectScript](https://marketplace.visualstudio.com/items?itemName=daimor.vscode-objectscript) plugin and open the folder in VSCode.

## ZPM Package Manager
This module is zpm-packaged, which means that it is described with [module.xml](https://github.com/intersystems-community/iris-angular-template/blob/40d39a688df604ef11681c80fc24254a6570fe43/module.xml).

Feel free to use as an example and change the module.xml to package your own InterSystems IRIS full-stack solution using angular.


## Credits
Demo is built using original fullstack-template [iris-fullstack-template](https://github.com/intersystems/iris-fullstack-template)

