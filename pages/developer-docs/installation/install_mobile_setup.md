---
type: landing
directory: developer-docs/installation/
title: Setting Up Mobile App
page_title: Setting Up Mobile App
description: Setting Up Mobile App
keywords: Setup, Subird Mobile App, Install, Cofigure, Build APK
published: true
allowSearch: true
---
## Introduction

The Sunbird Mobile app provides mobility to the feature-rich learning platform. It provides flexibility to learners to learn anywhere, anytime and even without an internet connection.

## Prerequisites

Ensure you have installed the following to set up Sunbird mobile app:

* NPM Version - 3.5.2
* Node JS Version - above 6
* Cordova Version - 8.0.0
* Ionic Version - 3.20.0

## Build APK from Git Repository
Sunbird mobile app can be built from the main source code which lies at [project-sunbird](https://github.com/project-sunbird)/[sunbird-mobile](https://github.com/project-sunbird/sunbird-mobile).

Sample properties file is kept inside the buildConfig folder. You must renamed the <b>buildConfig folder</b> to <b>sunbird.properties</b> and provide appropriate values for the following parameter:

**app_id**

Unique identifier for the app
	
**app_name**

Name of the application

## Changing API Configuration

**app_version_code**
	
Version code for the app release

To customize the end points in the app:

Replace redirect base url <b>REDIRECT_BASE_URL</b> and all other base urls with your respective domain name in <b>sunbird.properties</b>

**API Key:**

   Replace <b>release_fabric_api_key</b> in <b>sunbird.properties</b> with your fabric API Key. Please create an account in [fabric.io](https://get.fabric.io/) and register the app to get the API key

**Secret:**

Generate <b>Key</b> and <b>Secret</b> for mobile_app user using the JWT token of the mobile_admin user. The JWT token for mobile_admin user must be printed on the application

**Server folder:**

<<<<<<< HEAD
Cloned-sunbird-devops-repo in /sunbird-devops/deploy/logs/apis.log.

Use the below API to generate the key and secret for the mobile app:
=======
>>>>>>> 558454d80b192104cdc6610c49594e56f054778d

Execute the listed API to generate the key and secret for the mobile app:

  curl -X POST \   <your-sunbird-base-url>/api/api-manager/v1/consumer/mobile_app/credential/register \
       -H 'authorization: Bearer <mobile_admin_jwt_token_from_apis_log_file>' \
       -H 'content-type: application/json' \
       -d '{
       "request": {
         "key": "<implementation-name>-mobile-app-<version-number>"
       }
     }'

Response body: 

<<<<<<< HEAD
{"result":{"key":"<implementation-name>-mobile-app-<version-number>","secret":"<secret>"}} Use the value of "key" and "secret" from the response above for MOBILE_APP_KEY and MOBILE_APP_SECRET configuration in respective environments in gradle.properties file.

The following are examples:
=======
{"result":{"key":"<implementation-name>-mobile-app-<version-number>","secret":"<secret>"}} 

Use the value of "key" and "secret" from the response above for MOBILE_APP_KEY and MOBILE_APP_SECRET configuration in respective environments in gradle.properties file. Example:
>>>>>>> 558454d80b192104cdc6610c49594e56f054778d

**dev_mobile_app_key = "<implementation-name>-mobile-app-<version-number>"
dev_mobile_app_secret = "<secret>"**

**Producer Key**

Replace the <b>PRODUCER_ID</b> for respective environments in sunbird.properties with "dev.sunbird.app"

**Fabric credentials:**

Replace `release_fabric_api_key` in `sunbird.properties` with your fabric API Key. Please create an account in [fabric.io](https://get.fabric.io/) and register the app to get the API key.

### Changing Deep link schema

This plugin handles deeplinks on iOS and Android for custom URL scheme links and Universal App Links. We can change the Deep link schema from sunbird.properties.

Change the "dev_deeplink_base_url = dev.open-sunbird.org" as required.

    App properties (app_id, app_name and app_version_code) 
    Dev properties(dev_base_url= [https://dev.open-sunbird.org](https://dev.open-sunbird.org)
    Febric Keys, Secret code are sunbird properties used for  building the sunbird app.

### Customising App Configuration

Instance admin of Sunbird adopters can configure various aspects of the Sunbird mobile app based on requirement of organization.They can configure the aspects such as:

* App name
* App logo
* Login/Guest page to new users
* Sign in footer card on the app
* Onboarding cards
* Categories in the profile page 


| S No. | Variable Name | Description | Purpose | Default Value
|-------|---------------|--------------|--------|--------------
| 1 | appId | the app id in sunbird-mobile/config.xml with implementation specific application ID | To change the app ID | appId: "org.sunbird.app"
| 2 | app name | navigate to sunbird-mobile/config.xml and enter the required app name | To change the app name | 
| 3 | app logo | navigate to sunbird-mobile/resources/android/icon and sunbird-mobile/resources/android/splash. In all the mipmap and drawable folders, replace ic_launcher.png image with your desired logo. The logo name should exactly match the text **drawable-ldpi-icon.png** | To change the app logo |
| 4 | app | set the configuration variable inside the <b>sunbird-mobile repo</b> inside <b>buildConfig</b> folder | | 
| 5 | display_onboarding_page | set the configuration variable inside the <b>sunbird-mobile repo</b> inside <b>buildConfig</b> folder | to display the onboarding page | false
| 6 | display_signin_footer_card_in_course_tab_for_teacher | set the <b>display_signin_footer_card_in_course_tab_for_teacher</b>variable as <b>true</b> in sunbird.properties file | to show the sign-in footer in the course tab for teachers | false
| 7 | display_signin_footer_card_in_library_tab_for_teacher | Set the <b>display_signin_footer_card_in_library_tab_for_teacher</b> variable <b>true</b> in sunbird.properties file | to show the sign-in footer in the library tab for teachers | false
| 8 | display_signin_footer_card_in_profile_tab_for_teacher | Set the <b>display_signin_footer_card_in_profile_tab_for_teacher</b>as <b>true</b> in sunbird.properties file | to show the sign-in footer in the profile tab for teachers | false
| 9 | display_signin_footer_card_in_profile_tab_for_student | Set the <b>display_signin_footer_card_in_profile_tab_for_student</b>as <b>true</b> in sunbird.properties file | to show the sign-in footer in the profile tab for students | false
| 10 | display_signin_footer_card_in_library_tab_for_student | Set the <b>display_signin_footer_card_in_library_tab_for_student</b>as <b>true</b> in sunbird.properties file | to show the sign-in footer in the profile tab for students | false
| 11 | display_onboarding_card | set the display__onboarding_cards as true in sunbird.properties file | to display the guest/login page | false
| 12 | display_framework_categories_in_profile | set the display_framework_categories_in_profile variable as true in sunbird.properties file | to display categories in the guest/login page | false

<b>Packaging Framework and Form Data</b>

Sunbird mobile app supports configuration of the app framework to enable offline usage of the app. To configure the app framework, Adopter needs to package the channel for the respective framework. 
Details of the file naming convention and folder location is given below:


| S No. | Folder | File Name |  Purpose 
|-------|--------|-----------|-------------
| 1 | buildConfig/data/framework | framework-<FRAMEWORK_IDENTIFIER>.json | To package the channel for the respective framework. Same framework must be listed in the onboarding form API
| 2 | buildConfig/data/channel | channel-<CHANNEL_IDENTIFIER>.json | To package the channel. Default framework must be same as the packaged framework for respective channel
| 3 | buildConfig/data/form | syllabus.json | To onboard form API
| 4 | buildConfig/data/form | pageassemble_course_filter.json | Page assemble filter for course
| 5 | buildConfig/data/form | pageassemble_library_filter.json | Page assemble filter for library


## Detail Adoption

### Sunbird-mobile

Sunbird is an open source, configurable, extendable, modular learning management platform architected for scale and designed to support multiple teaching and learning solutions supporting multiple languages and available for both online and offline usage.

Clone the sunbird-mobile repo using the following command: 

$ git clone [https://github.com/project-sunbird/sunbird-mobile.git](https://github.com/project-sunbird/sunbird-mobile.git).

-go to project folder and run `npm i`

Run `ionic cordova platform add android`

### Genie-sdk-wrapper

This repository contains common services, and global UI pages, required in an app. The services internally calls to the cordova plugins. Mainly all the http and database related API goes through this npm module. 

Steps to generate local node module-

Clone the sunbird-mobile repo using the following command:

$ `git clone`[https://github.com/project-sunbird/genie-sdk-wrapper.gi*t](https://github.com/project-sunbird/genie-sdk-wrapper.git)

$ `npm i`

$ `npm run build`

$ `npm pack` path to this folder

### Cordova-plugin-genie-sdk

This is a cordova plugin for android. Basically it exposed some APIs that internally calls to the genie services.

Install this plugin in Sunbird-mobile with following command:

$ ionic cordova plugin add *[https://github.com/project-sunbird/cordova-plugin-genie-sdk.gi*t](https://github.com/project-sunbird/cordova-plugin-genie-sdk.git)

### Cordova-plugin-sunbirdsplash

This plugin displays and hides a splash screen during application launch. 

You can change the splash screen and splash image, by going to <b>sunbird-mobile/resources/android/splash update</b> the **drawable-ldpi-splash.png** to your required splash.png file and sunbird-mobile/resources/android/icon

Update <b>drawable-ldpi-icon.png</b> to your required  <b>icon.png file </b> in resource folder and run `ionic cordova run android`, it generates the resouce files for this platform and splash image and splash screen automatically get changed it will added in the <b>config.xml file</b>.

Install this plugin in Sunbird-mobile with following command:

$ ionic Cordova plugin add [https://github.com/project-sunbird/cordova-plugin-sunbirdsplash.git](https://github.com/project-sunbird/cordova-plugin-sunbirdsplash.git)

It will be installed along with other npm packages.

### Cordova-plugin-geniecanvas

On clicking on the course material links, the course content is displayed in the inbuilt content player.

Install this plugin in Sunbird-mobile with following command:

$ ionic cordova plugin add [https://github.com/project-sunbird/cordova-plugin-geniecanvas.git](https://github.com/project-sunbird/cordova-plugin-geniecanvas.git)

### Cordova-plugin-qr-scanner

This is a custom cordova plugin for the QR scanner.

Install this plugin in Sunbird-mobile with following command:

$ ionic cordova plugin add [https://github.com/project-sunbird/cordova-plugin-qr-scanner.git](https://github.com/project-sunbird/cordova-plugin-qr-scanner.git)

It will be installed along with other npm packages.

## Consolidated flow

  1. Create one workspace (i.e Folder Hierarchy) and Clone the above mentioned Git Repositories into that. 

  2. Then perform all the abobve-mentioned steps for each cloned repository.

  3. Open terminal and change the directory to "sunbird-mobile" 

  4. Add one device to the system.

  5. Lastly, run the command- `$ ionic cordova run android`

Application is installed on your device.

