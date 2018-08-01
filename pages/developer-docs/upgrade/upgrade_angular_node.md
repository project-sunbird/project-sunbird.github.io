---
type: landing
directory: developer-docs/upgrade
title: Upgrade to Angular Version 6
page_title: Upgrade to Angular Version 6
description:  How to upgrade to Angular versions 6
published: true
allowSearch: true
---

## Overview

Sunbird is an open source, configurable, extendable, modular learning management platform. Sunbird makes it possible to leverage technology for education by providing building blocks for the creation of learning solutions. Sunbird uses a wide spectrum of technologies that support the development, delivery, deployment, and consumption of its resources. 
  
In the latest release 1.9, Sunbird has upgraded to the latest Angular version 6, for details about new features of Angular 6, refer to the Angularjs [official website](https://blog.angular.io/version-6-of-angular-now-available-cc56b0efa7a4/) 

## Prerequisites 

To update, Angular 5 to Angular 6, ensure that the following prerequisites are met:  

- Checkout the [Angular update checklist](https://update.angular.io/)
- Install the latest version of Nodejs, preferably Nodejs v8.9 and above  

**Note:** To update your Nodejs version to the latest Nodejs version, refer to the [official website](https://nodejs.org/en/)

## Upgrade
To upgrade your version of Angularjs to the latest version of Angularjs:

1.	Get the latest Sunbird-Portal codebase for release v1.9 from [sunbird-portal](https://github.com/project-sunbird/sunbird-portal) repository
2.	Execute the following command in the console
    `npm install @angular/cli@latest -g`
3.	Using console, navigate to the following location 
    **src/app/client** 
4. Execute the following commands:
   
   `run npm install @angular/cli@latest`

   `run npm install`

Executing the command upgrades your current version of Angularjs to the latest version. 
