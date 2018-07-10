---
type: landing
directory: developer-docs/installation
title: Developer Installation
page_title: Developer Installation
description: Installing  the Sunbird portal or web application
published: true
allowSearch: true
---

## Overview

This page provides information for you to install, setup, configure, run and use a Sunbird instance on your laptop or desktop. The objective of such an installation is to demo and test the Sunbird application. It is not advised to use the instance for a production environment. Follow the instructions provided on this page to ensure an optimal installation experience. Before installing Sunbird on your laptop or desktop, ensure that the you have the necessary resources and compliant target systems. 

## System Requirements

To install Sunbird, ensure that your laptop or desktop has the following minimum system requirements:

- Operating System: Windows 7 and above, or 4.2 Mac OS X 10.0 and above/Linux  
- RAM: >1.5GB
- CPU: 2 cores, >2 GHz

## Sunbird Components
Installing Sunbird requires two primary software components:

- Sunbird portal or web application
- Sunbird services stack or the backend API interface

## Sunbird Portal Setup

The following sections provide you with the sequence to set up the Sunbird portal instance successfully 

### Prerequisites

1.**Software dependencies**
	
   * [Node](https://nodejs.org/en/download/){:target="_blank"} - install the latest release of 8.11.2 LTS series
   * [nodemon](https://www.npmjs.com/package/nodemon){:target="_blank"} - install nodemon

2.**API Keys**

   * To get an API key, send an email to: info@sunbird.org

**Note:** These installation instructions use cloud hosted Sunbird APIs, which require an API key.

### Set Up the Sunbird Application 

1.To set up the Sunbird application, get the [code](https://github.com/project-sunbird/sunbird-portal.git){:target="_blank"} from the sunbird-portal Git repository. 

2.Clone the repository to your local system using the command:
    
   **git clone https://github.com/project-sunbird/sunbird-portal.git**

**Note**: Stable versions of the sunbird portal code are available via tags for each release. The master branch contains the latest stable release. To get the latest stable release of Sunbird, [click here](https://github.com/project-sunbird/sunbird-portal/){:target="_blank"}.

3.After executing the **git clone** command, run the following set of commands in the console:

<pre>
   $ cd {PROJECT-FOLDER}/src/app
   $ npm install
   $ cd {PROJECT-FOLDER}/src/app/client
   $ npm install
</pre>

***Note***: Ensure that you use node version 8.11.2 or above. 

4.Set the following environment variables when you are prompted to:

<pre>
sunbird_environment=local 
sunbird_instance=sunbird
sunbird_default_tenant=sunbird
</pre>

## Configure the Service Stack

The Sunbird portal application is powered by a set of service APIs. These API(s) run in a distributed environment when Sunbird is  deployed to production. For the sake of simplicity and ease of debugging, you can run these service API(s) locally on a single server.

Configure your Sunbird portal instance to use a cloud instance of the Sunbird service API(s) hosted by Sunbird, and are used for testing and demonstration purposes. 

***Note***: The cloud instance of the API(s) are not for production use.

To edit the application configuration file:

1.Open the **{PROJECT-FOLDER}/src/app/helpers/environmentVariablesHelper.js**  file in any available text editor. 

2.Set the values for the following parameters:
<pre>
    module.exports = {
        
A) LEARNER_URL   
   LEARNER_URL: env.sunbird_learner_player_url || 'https://staging.open-sunbird.org/api/',                    
      
B) CONTENT_URL
   CONTENT_URL: env.sunbird_content_player_url || 'https://staging.open-sunbird.org/api/',                   
        
C) CONTENT_PROXY  
   CONTENT_PROXY_URL: env.sunbird_content_proxy_url || 'https://staging.open-sunbird.org',                    
   PORTAL_REALM: env.sunbird_portal_realm || 'sunbird',
        
D) PORTAL_AUTH_SERVER_URL
   PORTAL_AUTH_SERVER_URL: env.sunbird_portal_auth_server_url || 'https://staging.open-sunbird.org/auth',     
   PORTAL_AUTH_SERVER_CLIENT: env.sunbird_portal_auth_server_client || "portal",
   ...
   PORTAL_PORT: env.sunbird_port || 3000,
        	
E) PORTAL_API_AUTH_TOKEN     
   PORTAL_API_AUTH_TOKEN: env.sunbird_api_auth_token || 'E-mail to: info@sunbird.org' to get Auth-Token 
   ...
        
F) PORTAL_ECHO_API_URL
   PORTAL_ECHO_API_URL: env.sunbird_echo_api_url || '',                                                       
   ...
	
G) ANDROID_APP_URL
   ANDROID_APP_URL: env.sunbird_android_app_url || 'http://www.sunbird.org'   

H) CONTENT CHANNEL FILTER  TYPE
   CONTENT_CHANNEL_FILTER_TYPE: env.sunbird_content_channel_filter_type || 'all',
   Set the value to 'self', to get content that belongs to the current user's channel, 
   and set the value to 'all' to get content from all channels
   ...
   		}
</pre>   

## Run the Application

1.Before you run the application, install **nodemon**. To do so, use the following command:

`npm install -g nodemon`

2.After verifying the availability of nodemon, run the application by executing the following commands:

<pre>
$ cd {PROJECT-FOLDER}/src/app
$ node server.js
</pre>
    
3.Open a new terminal window
<pre>
$ cd {PROJECT-FOLDER}/src/app/client
$ nodemon
</pre>

4.Open **http://localhost:3000** in the browser
 
## Use the Application  

After successfully installing Sunbird, use demo user IDs to explore and test different workflows.

* For each user role, you require a separate demo user ID and its respective password

* Any user can be assigned one or more user role. The role rules that apply depend on the demo user ID and password that is used to sign in 
 
The following is the list of the demo user IDs per user role:

 User Role |	User ID
 ---------|----------
Org Admin| adopterorgadmin@adopter
Content Creator| adoptercreator@adopter 
Content Reviewer| adopterreviewer@adopter
Book Creator| adopterbookcreator@adopter 
Book Reviewer| adopterbookreviewer@adopter
Flag Reviewer| adopterflagreviewer@adopter
Course Mentor| adoptercoursementor@adopter

**Note:** 

* To get the password for each demo user ID, send an email to info@sunbird.org

* For information on user roles, refer to [Types of Users](pages/features-documentation/userrole){:target="_blank"}
