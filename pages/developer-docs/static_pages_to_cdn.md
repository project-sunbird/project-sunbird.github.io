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
   Please refer to the <i><a href="https://nodejs.org/en/download/">official Node.js</a></i> for downloading node
 
 * Install Node Package Manager (NPM)

 * Install Git 

 * Gulp Installed Globally 

      <pre>npm install gulp -g </pre> 
 
 * Folder with name as tenant within which all the tenant folders with their respective folder names present.

 * Source Folder Structure Expected for optimized minification.
     <pre>
       tenant
        - &#x3C;tenantname&#x3E; (tenant name)
            - images
            - fonts
            - css (custom css)
            - js (custom js)
            - vendor (all the script files of css and js)
            - index.html
      </pre> 

* In all the tenants html files css and js references should be enclosed within the tags names as shown below Example.
    
    <pre>

      CSS References in html page

      &#x3C;head&#x3E;
        &#x3C;meta name="twitter:site" content="@MITRA"&#x3E;
        &#x3C;meta name="twitter:creator" content="@MITRA"&#x3E;
          &#x3C;!-- build:css --&#x3E;
          &#x3C;link href="vendor/bootstrap.min.css" rel="stylesheet"&#x3E;
          &#x3C;link href="vendor/font-awesome.min.css" rel="stylesheet"&#x3E;
          &#x3C;link href="vendor/magnific-popup.css" rel="stylesheet"&#x3E;
          &#x3C;link href="vendor/owl.carousel.min.css" rel="stylesheet"&#x3E;
          &#x3C;link href="css/custom.css" rel="stylesheet"&#x3E;
          &#x3C;!-- endbuild --&#x3E;
          &#x3C;link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet"&#x3E;
      &#x3C;/head&#x3E;

      JS references in html page

      &#x3C;!-- build:js --&#x3E;
      &#x3C;script src="vendor/jquery.min.js">&#x3C;/script&#x3E;
      &#x3C;script src="vendor/bootstrap.min.js"&#x3E;&#x3C;/script&#x3E;
      &#x3C;script src="vendor/owl.carousel.min.js"&#x3E;&#x3C;/script&#x3E;
      &#x3C;script src="vendor/scrollreveal.min.js"&#x3E;&#x3C;/script&#x3E;
      &#x3C;script src="vendor/jquery.magnific-popup.min.js"&#x3E;&#x3C;/script&#x3E;
      &#x3C;script src="js/custom.js"&#x3E;&#x3C;/script&#x3E;
      &#x3C;!-- endbuild --&#x3E;

     &#x3C;/body&#x3E;
    </pre>   

    Note : If there are any other cloud Urls referenced those should be outside the css and js custom tags and all the dependency js and css files has to be referenced in html pages within the tags so that none of the dependency files will be skipped. 

   
* CDN Service Provider account credentials i,e account name and access key. This account is used to store all tenant pages in single blob container.


## Steps to migrate the Static pages to CDN


* Clone the sunbird portal source code by executing the below command in console.


<pre> git clone https://github.com/project-sunbird/sunbird-portal.git </pre>


* cd to the sunbird-portal source code cloned and switch to branch `release-1.9` by executing the below command in console.


<pre> git checkout release-1.9 </pre>



* cd `src/app` and run the following command in console to install the dependencies
      
<pre> npm install </pre>

* After Ensuring that tenant folder exists inside `src/app` (for which files to be moved to cdn) run the following gulp script at the level `gulp-tenant.js` file exists i,e inside `(src/app/)` from the console.


<pre>
gulp production --gulpfile gulp-tenant.js --accountName="" --accessKey="" --provider="" --cdnurl="" --tenant="" --tenantpath="" --containerName=""
</pre>

  * `accountName` (mandatory) -  account name of service provider (Azure)
  * `accessKey` (mandatory)  accesskey of azure
  * `provider` (optional, defaults to azure) cdn service provider (only "azure" supported for now)
  * `cdnurl` (mandatory) cdn service provider link
  * `tenant` (optional) for executing only specific tenant sub folder inside source folder (tenant), sepearted by comma, by default all the tenants present in source folder will be minified and pushed to CDN (source)
  * `tenantpath` (optional,defaults to absolute path i,e to "source foldername name tenant") this is path of the tenant folder where the tenant files are expected to be present.
  * `containerName` (optional, defaults to 'tenants') this is the blob container name in CDN service provider


* After completing the script then following message will be shown `Success! - All files processing done and pushed to CDN Provider`

* If the tenant folder is already present in CDN service provider container then the script replaces the existing folder with the latest one.

## To Enable CDN in Player Service

* Set the following environment variable in player service

<pre> sunbird_tenant_cdn_url="&#x3C;baseurl&#x3E;/&#x3C;containerName&#x3E;" </pre>

* contianerName for the above env variable should be same as the one which is provided during the script execution

* If the env variable is not set in player service then by default all the tenant pages will be serverd from player service tenant folder.

* If any of the mandatory args missing on the script execution command then respective errors will be shown in the console.


### Cache Busting : 

* When script is runned for pushing tenant pages to CDN, all the files excluding index.html will be minified and versioned and this version number changes during the next build if there is change in the file so that always latest file is pulled and avoids browser caching issues.

* If there is no change in the files and running the script on unchanged files will not change the versioning of the file and version number remains same as previous.
