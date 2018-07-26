---
type: landing
directory: developer-docs/upgrade
title: Upgrade to Angular Version 6
page_title: Upgrade to Angular Version 6
description:  How to upgrading to Angular versions 6
published: true
allowSearch: true
---

## Overview

Sunbird release-1.9 updated angular Version to 6 from vesrion 5. This allow Sunbird portal to utilize angular 6 feature such as 

1. **ng update:** is a new CLI command that analyzes your package.json and uses its knowledge of Angular to recommend updates to your application
2. **Library Support:** Angular CLI v6 comes with library support via ng-packagr plugged into the build system we use in Angular CLI, together with schematics for generating a library.
3. **RxJS v6:** RxJS v6 brings with it several major changes, along with a backwards compatibility package rxjs-compat that will keep your applications working.
4. **Angular Elements:** The first release of Angular Elements is focused on allowing you to bootstrap Angular components within an existing Angular application by registering them as Custom Elements.

Please refer below links for more details on new features 

* [Angular 6](https://blog.angular.io/version-6-of-angular-now-available-cc56b0efa7a4)  
* [RxJS 6](https://github.com/ReactiveX/rxjs/blob/master/docs_app/content/guide/v6/migration.md)

## Dependencies 

<Any dependencies should be listed here>
Please update Node.js to v8.9 and above. Node.js download [link](https://nodejs.org/en/download/)

## Steps to update Angular v5 to v6:

*  take latest sunbird-portal release v1.9 or above
*  run npm install @angular/cli@latest -g
*  move to src/app/client
*  run npm install @angular/cli@latest
*  run npm install
