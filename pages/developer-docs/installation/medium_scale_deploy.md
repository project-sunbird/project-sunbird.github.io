---
type: landing
directory: developer-docs/installation/
title: Medium Scale Deployment
page_title: Medium Scale Deployment
description: About how developer can deploy
allowSearch: true
---

This page provides a summarized listing of the essential steps for planning, installing, and configuring your Sunbird deployment in a live environment. 

## Pre-requisites

Before you install Sunbird into the production environment, examine your  environment and gather data to ensure an optimal installation experience. 

Review the following to determine that the environment has the necessary resources and compliant target systems to successfully install and run Sunbird.

### System Requirements

To install Sunbird, each of the servers should have the following minimum system requirements:

   - Operating System: Ubuntu 16.04 LTS
   - RAM: 7GB
   - CPU: 2 cores, >2 GHz
   - root access (should be able to sudo)

### API Keys
- Sunbird implementors currently need to get an API key for accessing EkStep platform. Since the content is stored here. In the future, Sunbird will support more content stores.
- To initially try Sunbird, request for the keys from the EkStep QA environment. 

*For details to request for the keys, refer to the section [How to generate authorization credentials](http://www.sunbird.org/developer-docs/telemetry/authtokengenerator_jslibrary/#how-to-generate-authorization-credentials) on the Auth Token Generator JS Library page*  

After getting the key and secret, you are ready to deploy Sunbird in the live environment.

To get production credentials, repeat the steps under API Keys section.

### SSL Certificate

SSL Certificates are used to encrypt communication between a browser and the server. You will need an SSL certificate from a recognized CA. [LetsEncrypt](https://letsencrypt.org/){:target="_blank"} provides free SSL certificates. You can also use a CA of your choice. 

Before you begin the installation, keep the SSL certificate and the key handy.

***Note***: A self-signed certification will cause authentication to fail with an "Access Denied" error because the certificate will not be verified.

### Relevant Variables

To make the deployment scenario simple and clear, we use the following variables:

  - **implementation-name** : This variable refers to the name of Sunbird implementation. For example; Sunbird-Demo
  - **environment-name** : This variable refers to the name of the environment where you deploy Sunbird. For example; Development, Test, Staging, Production, etc. 

## Installation Checklist

Before you start the installation process make sure you have successfully 

- Review and check whether the system requirements are met. 
- Check whether or not you  have the API keys.
- Decide the installation owner and the installation directory  
- Gather information about the database, if you are installing the database server while installing Sunbird
- Set up or verify the product licensing requirements for the live environment
- Verify the required network requirements and that ports are available for Sunbird components to communicate

## Provisioning servers

Server provisioning is a set of actions to prepare a server with appropriate systems, data, software, and make it ready for network operation. [Provisioning Servers](developer-docs/installation/provisioning_servers){:target="_blank"} section will help you to see Automated and Manual process to provision the servers.   

## Setup Databases

Sunbird helps you to setup your database. This section [Setup Databases](developer-docs/installation/setup_db){:target="_blank"} contains more detail. 

## Deploying Sunbird Services

This section [Deploying Sunbird Services](developer-docs/installation/deploy_sb_services){:target="_blank"} explains how to deploy Sunbird services.

## Customizing Assets

This section [Customizing Assets](developer-docs/installation/cust_sunbird){:target="_blank"} explains how to customize look and feel of Sunbird.

## Check Installation

To check if Sunbird is properly installed, refer to the link [Check Installation](developer-docs/installation/check_installation){:target="_blank"}

## Making your own Mobile App

If you plan to release your own mobile app using the Sunbird mobile app codebase refer [Generate key and install mobile app](developer-docs/installation/install_mobile_setup){:target="_blank"}
