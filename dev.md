Overview
========

This template is a basic angular application that interfaces with IRIS. It includes a script for automated setup so that developers have a ready environment in which to code.

The template uses the [InterSystems Package Manager (IPM)](https://github.com/intersystems/ipm) to easily install applications onto new machines.

Basic Use
---------

The Angular application can be hosted locally using `ng serve`, as well as on your IRIS instance. In order to re-run the angular build that is hosted on your IRIS instance, run the command `zpm "angular-template activate"` in your IRIS terminal.

The "proxy.conf.js" file is used to point to the IRIS instance you are using. If working with a remote IRIS instance, you can change the proxy to point to that instance.

For information on how to set up VSCode for IRIS, refrer to the documentation: [Documentation](https://docs.intersystems.com/components/csp/docbook/DocBook.UI.Page.cls?KEY=GVSCO)

Source Control
--------------

The template uses [git-source-control](https://github.com/intersystems/git-source-control) to enable embedded/server-side source control using Git. For more information visit the GitHub repository.

REST Services
=============

The template uses the [isc.rest](https://github.com/intersystems/isc-rest) package from the Open Exchange for REST services. It is installed automatically as an IPM dependency. For full details, read the documentation and user guide in the GitHub repository for isc.rest.

A few simple notes on use of isc.rest:

Creating a REST Service
-----------------------

First, we want to have a class extend %pkg.isc.rest.model, either the adaptor or the resource. This class must also have a parameter called RESOURCENAME

```
Class Example.Class Extends (%Persistent, %pkg.isc.rest.model.adaptor)   

Parameter RESOURCENAME = "example";
```

After writing a method or query that we want to call from angular, we must define an ActionMap, to expose the REST endpoint. The actionmap can have many action endpoints.

If we wanted to call a `DoSomething` classmethod in our code from an endpoint, it will be as follows:

```
XData ActionMap [XMLNamespace = “http://www.instersystems.com/_pkg/isc/rest/action" ] {
        <actions>    
            <action name="do-something" method="GET" call="DoSomething" target="class">
                <argument name="objectName" target="objectName" source="body" required="true" />    
            </action>    
        </actions> 
    }
```

Finally, we want to create a ClassMethod called "CheckPermission", which decides whether a REST operation is allowed.

```
ClassMethod CheckPermission(pID As %String, pOperation As %String, pUserContext As %RegisteredObject, ByRef URLParams) As %Boolean {
    Quit $IsObject(pUserContext) && ((pOperation = $$$OperationAction("do-something"))   
}
```

We can add each future action that we want to allow to the CheckPermission method. This gives us a basic setup for REST calls using IRIS.

OpenAPI generator
-----------------

OpenAPI Generator is a tool that generates REST API documentation from a REST API specification. The template uses openapi-generator-cli to generate the documentation, TypeScript models, and Angular services.

OpenAPI generation requires the installation of Java version 11 on your system.

To use the generator with the template, simply run the command `zpm "angular-template generate"` in your iris terminal locally. This will generate services and function inside of a ./generated folder in your angular application root.

Authentication
==============

The template comes with IRIS authentication, meaning that your credentials for the IRIS instance would be used to log into the angular application. If this is the desired funnctionality, nothing needs to be changed. If you  want to use a different authentication method, you can enable delegated authentication for the web application.

Delegated Authentication
------------------------

To activate delegated authentication, change the authentication of the angular-template/api web application in the management portal to delegated. After that, you should create a [ZAUTHENTICATE.MAC](https://docs.intersystems.com/iris20232/csp/docbook/Doc.View.cls?KEY=TSQS_DelAuthExPartOne) routine in a 'rtn' subfolder of the project, inside of which you will put your custom authentication code. Finally, you should update the module.xml file by adding the ZAUTHENTICATE routine as a resource, and then run `zpm "angular-template activate`" in your IRIS terminal.

Useful Resources
================

Below are some resources that could be useful for your development.

*   [IRIS Documentation](https://docs.intersystems.com/)
*   [InterSystems Community](https://community.intersystems.com/)


# Useful Commands
## clean up docker 
```
docker system prune -f
```

## build container with no cache
```
docker-compose build --no-cache
```

## start container
```
docker-compose up -d
```

## open terminal to docker
```
docker-compose exec iris iris session iris -U angular-template
```
## debug CSP
```
kill ^%ISCLOG

kill ^ISCLOG

set ^%ISCLOG=3
```

## select IPM test registry
```
repo -n registry -r -url https://test.pm.community.intersystems.com/registry/ -user test -pass PassWord42
```



