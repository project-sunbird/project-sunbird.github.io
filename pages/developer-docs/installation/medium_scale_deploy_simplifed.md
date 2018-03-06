
---
type: landing
directory: developer-docs/installation
title: Simplified Medium Scale Deployment - Sunbird Version 1.4  
page_title: Simplified Medium Scale Deployment - Sunbird Version 1.4
description: Instructions for simplified medium scale deployment for Sunbird version 1.4 
keywords: Installation, deployment, version 1.4
published: true
allowSearch: true
---

## Overview 

Installing Sunbird on medium scale infrastructure is simplified from version 1.4 as all fine-tuned configurations are automatically deployed. The entire installlation process should take you approximately 45 minutes. 

You could also choose to follow the detailed installation procedures provided at[Medium Scale Deployment](http://www.sunbird.org/developer-docs/installation/medium_scale_deploy/){:target="_blank"}.

### Prerequisites

- Availability of 2 Virtual Machines (VMs) - one for the application and the other for the database with the following minimum system requirements

    - **Operating System:** Ubuntu 16.04 LTS   
    - ***RAM:** 7GB   
    - **CPU:** 2 cores, > 2 GHz  
    - **root access** Should be able to sudo

- Access to a Fully Qualified Domain Name (FQDN) For example: test.sunbird.org). 

**Note:** If you're testing Sunbird, you don't have to buy an FQDN. All cloud providers give free domain names for their instances.  
For example, Azure: sunbird-test.centralindia.cloudapp.azure.com. Check with the cloud provider for details.

- A valid [SSL certificate](https://en.wikipedia.org/wiki/Public_key_certificate#TLS/SSL_server_certificate){:target="_blank"} for your domain. 

**Note:** To generate free SSL, use [Let's Encrypt](https://letsencrypt.org/){:target="_blank"} for most common cases. The script does not support some free domain names, provided by cloud providers. For example, the AWS provided free domain names ec2-13-127-177-29.ap-south-1.compute.amazonaws.com, is not supported because of spammers. If the script is not compatible with your cloud provider, purchase a certificate or get a [free one](http://dot.tk){:target="_blank"}.

- Ability to run the installation script in the application server

- An instance of Git for debian/ubuntu. Install Git using the command: 
  `sudo apt install git` 

- Ensure that the two servers - application and DB - are able to ping each other

**Note** If you are in AWS, you have to open few ports between security groups. To test, we opened all ports between these private security groups.

- Ensure that port 443 is accessible from the internet for app_server

### sunbird installation simplified steps:

- git clone https://github.com/project-sunbird/sunbird-devops

- cd sunbird-devops/deploy

- ./certbot.sh (if you don't have a valid ssl certificate, and have a valid domain name)

- edit all the mandatory fields in  deploy/config file

- ./sunbird_install.sh

**90% is done.** 

  just go over to https://domain-name/auth

  and plese complete the [keycloak configs](http://www.sunbird.org/developer-docs/installation/keycloak_realm_configuration).

- - copy the **jwt token for player** from your home directory (~/jwt_token.txt) and fill it for `ekstep_auth_token`

for example:

`JWT token for player is : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3TRlZmNlYzc0NY0NjBhYzQzNCJ9.VCf69`

- - **key, which you got from ekstep**, [genereate a jwt token](https://community.ekstep.in/developer-knowledgebase/45-getting-started-with-apis) using that, and update for `ekstep_api_key`

  > how to get [ekstep api
  > keys](https://github.com/project-sunbird/sunbird-commons/wiki/Obtaining-API-token-for-accessing-ekstep-APIs)

- ./sunbird_installation.sh -s core

now please go to 

https://domain-name

