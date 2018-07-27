---
type: landing
directory: developer-docs
title: Migrate Tenant System Static Pages to CDN 
page_title: Migrate Tenant System Static Pages to CDN 
description: How and Why's about migrating the static pages to CDN
Keywords: 'migrate, CDN, static pages, tenant system, pages'
published: false
allowSearch: false
---
## Overview

Serving tenant pages from CDN increases the performance of loading tenant page and also decreases the load on the Player service. Script provided here will minify and uglifies the tenant files and push it to CDN Store within the specified container. And these files will be served from CDN (if cdn is enabled in player service) when client request comes for tenant pages.

## Pre requisites
 
 * Install Node Version 8.11.2
   For details on downloading node refer <i><a href="https://nodejs.org/en/download/">official Node.js</a></i>
 
 * Install Node Package Manager (NPM)

 * Install Git 

 * Install Gulp globally

      <pre>npm install gulp -g </pre> 
 
 * Ensure that the tenant folder with all the required sub-folders are present in the application folder

 * Ensure you have a CDN service provider account credentials i.e., account name and access key. This account is used to store all the tenant pages in single blob container.


## Steps to migrate the Static pages to CDN


<br> 1. Clone the sunbird portal source code by executing the command given in console:

<pre> git clone https://github.com/project-sunbird/sunbird-portal.git </pre>

<br>2. Run the command `cd` to the cloned sunbird-portal source code and switch to branch `release-1.9` by executing the command given in console:

<pre> git checkout release-1.9 </pre>

<br>3. Run the command `cd src/app` followed by the following command in console to install the dependencies

<pre> npm install </pre>

<br>4. After ensuring that tenant folder exists inside `src/app` (for those files that have to be moved to cdn) run the following gulp script at the level `gulp-tenant.js` file exists i,e inside `(src/app/)` from the console.

<pre>
gulp pushTenantsToCDN --gulpfile gulp-tenant.js --accountName="" --accessKey="" --provider="" --cdnurl="" --tenant="" --tenantpath="" --containerName=""
</pre>

  * `accountName` (mandatory) -  account name of service provider (Azure)
  * `accessKey` (mandatory)  accesskey of azure
  * `provider` (optional, defaults to azure) cdn service provider (only "azure" supported for now)
  * `cdnurl` (mandatory) cdn service provider link
  * `tenant` (optional) for executing only specific tenant sub folder inside source folder (tenant), sepearted by comma, by default all the tenants present in source folder will be minified and pushed to CDN (source)
  * `tenantpath` (optional) this is path of the tenant folder where the tenant files are expected to be present, defaults to absolute path i,e tenant folder is expected at the same level where `tenant-gulp.js` file present, and if tenant folder path is different and not at the level of `tenant-gulp.js` then the repective path has to be given.
  * `containerName` (optional, defaults to 'tenants') this is the blob container name in CDN service provider


* The above command will version the files and push to CDN

* After completing the script then following message will be shown `Success! - All files processing done and pushed to CDN Provider`

* If the tenant folder is already present in CDN service provider container then the script replaces the existing folder with the latest one.

## To Enable CDN in Player Service

* Set the following environment variable in player service

<pre> sunbird_tenant_cdn_url="&#x3C;baseurl&#x3E;/&#x3C;containerName&#x3E;" </pre>

* contianerName for the above env variable should be same as the one which is provided during the script execution

* If the env variable is not set in player service then by default all the tenant pages will be serverd from player service tenant folder.

* If any of the mandatory args missing on the script execution command then the script will be terminated and respective error will be shown in the console.

### Note

* This Script will not do any minifications or optimizations , and for optimized loading of tenant files it is required to remove all the assets and files not been used. And further it can be minified to imporve the performance.

### Cache Busting : 

* When script is runned for pushing tenant pages to CDN, all the files excluding index.html will be minified and versioned and this version number changes during the next build if there is change in the file so that always latest file is pulled and avoids browser caching issues.

* If there is no change in the files and running the script on unchanged files will not change the versioning of the file and version number remains same as previous.
