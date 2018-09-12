---
type: landing
directory: developer-docs/installation
title: Migrate Tenant Pages 
page_title: Migrate Tenant Pages
description: How and Why's about migrating the static pages to CDN
Keywords: 'migrate, CDN, static pages, tenant system, pages'
published: true
allowSearch: true
---
## Overview

To increase the performance of loading tenant pages and at the same time decrease the load on the player service, tenant pages must be served from a Content Distribution Network (CDN). This document details the procedure on how to push the tenant pages to CDN Store within the specified container. 

### Prerequisites
 
 * Install Node Version 8.11.2
   For details on downloading node refer <a href="https://nodejs.org/en/download/">official Node.js</a>
 * Install Node Package Manager (NPM)
 * Install Git 
 * Install Gulp globally
  <pre> npm install gulp -g </pre> 
 * Ensure that the tenant folder with all the required sub-folders is present in the application folder
 * Ensure you have a CDN service provider account credential i.e., account name and access key. This account is used to store all the tenant pages in single blob container.

### Migrating Static pages to CDN

<br>1. Clone the sunbird portal source code by executing the command given in console:
<pre> git clone https://github.com/project-sunbird/sunbird-portal.git </pre>

<br>2. Run the command `cd` to the cloned sunbird-portal source code and switch to branch `release-1.9` by executing the command given in console:
<pre> git checkout release-1.9 </pre>

<br>3. Run the command `cd src/app` followed by the following command in console to install the dependencies
<pre> npm install </pre>

<br>4. After ensuring that tenant folder exists inside `src/app` (for those files that have to be moved to cdn) run the following gulp script at the level `gulp-tenant.js` file exists i.e., inside `(src/app/)`folder from the console. This command versions the files and pushes it to CDN
<pre>
gulp pushTenantsToCDN --gulpfile gulp-tenant.js --accountName="" --accessKey="" --provider="" --cdnurl="" --tenant="" --tenantpath="" --containerName=""
</pre>

Parameter | Type | Description | Sample Value
---|---|---
`accountName` | Optional | account name of the service provider | azure
`accessKey`   | Optional | access key of azure |
`provider`   | Optional | cdn service provider | Currently, only Azure is supported
`cdnurl` | Mandatory  | cdn service provider link | 
`tenant` | Optional | names of subfolders that have to be pushed to CDN. The names must be comma separated |   |  
`tenantpath`| Optional | path of the tenant folder where the tenant files are expected to be present | defaults to absolute path 
`containerName` | Optional | blob container name in CDN service provider | defaults to 'tenants'
 
**Note:** <br>1. If accountName or accessKey is not provided in the arguments then the tenant files are not pushed to CDN, however versioning of files is done and the saved in the folder `tenants-build` at the same path where `gulp-tenant.js` is present
<br>2. For the parameter `tenantpath` tenant folder is expected at the same path where `tenant-gulp.js` file present, and if tenant folder path is different and not at the path of `tenant-gulp.js` then the respective path must be given
<br>3. For the parameter `tenant`, by default, all the folders present inside the tenant (source) folder will be processed, and can be overridden by specifying the particular folder names which have to be processed by comma seperated values.Eg: `<tenant1>,<tenant2>,<tenant3>` <br>4. On completing the script the following message is displayed:
`Success! - All files processing done and pushed to CDN Provider`
<br>5. If the tenant folder is already present in CDN service provider container then this script replaces the existing folder with the latest one.

### Enabling CDN in Player Service

To enable the CDN in the player service:

<br>1. Set the following environment variable in player service. The `contianerName` for the variable should be the one which is provided during the script execution
<pre> sunbird_tenant_cdn_url="&#x3C;baseurl&#x3E;/&#x3C;containerName&#x3E;" </pre>

<br>**Note:** <br>1: If the environment variable is not set in the player service then by default all the tenant pages are serverd from the player service tenant folder
<br>2. If any of the mandatory args are missing on the script execution command then the script is terminated and respective error is displyed in the console
<br>3. This script does not perform any minifications or optimizations, so for optimized loading of tenant files it is mandatory to remove all the assets and files that are not in use

### Cache Busting
When the script is executed for pushing tenant pages to CDN, all the files excluding index.html are versioned before pushing the files to cdn inorder to avoid loading of outdated code which will be stored in browser cache. Versioning means random string at the end of your resource will be appended and this keeps updating every time that resource is updated during the script execution.

