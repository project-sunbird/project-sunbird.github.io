---
type: landing
directory: developer-docs/server-installation/
title: Prerequisites
page_title: Server Installation Prerequisites
description: Setting up Sunbird on a server
allowSearch: true

---

## Overview

To install Sunbird you require system admninisrtation rights and must have hands on experience with Linux systems administration and Docker for running containerized services.

Sunbird has been tested on cloud hosted Linux servers (Azure & AWS). Sunbird will not function correctly if deployed on virtual machines or in-premise infrastructure, like rack mounted servers or blades. Sunbird has not been tested on any Microsoft® operating systems

This section explains the minimum prerequisites that must be ensured before installing Sunbird on your server

## API Key

* Sunbird requires EkStep API keys to access the EkStep content repository. For details on how to get access the keys, refer <a href="http://www.sunbird.org/developer-docs/server_installation/ekstep_keys" target="_blank">Ekstep API Keys</a> to get the keys. If you are creating a test environment, get the QA API keys
* Use the key and secret to generate JWT.  Use the web based tool - http://jwtbuilder.jamiekurtz.com/. Note that when using this tool, the key in the EkStep Developer credentials should be set as the Issuer field and the secret in the Key field

## Domain Name

* It is recommended that you have a registered domain name 
* If you do not have a domain name, you can configure Sunbird such that it can be accessed over an IP address

## SSL Certificate

* In order to run Sunbird over HTTPS, you will require an SSL certificate. You can obtain one for free from <a href="https://letsencrypt.org/" target="_blank">Let's Encrypt</a> 

### Hosting Requirements

#### Cloud Servers

* Supported Providers: AWS and Azure

* A general purpose server with 7 GB RAM on Azure, running Ubuntu server 16.04 LTS
* A general purpose server with 8 GB RAM on AWS, running Ubuntu server 16.04 LTS
* You can scale the infrastructure by adding servers. Sunbird is designed to scale horizontally
* The scripts do not work on virtual machines created locally (using VMware/VirtualBox) and have been tested on Azure and AWS VMs

#### Cloud Blob Storage
* Sunbird requires an Azure BLOB storage account, for details on creating an account, refer <a href="https://docs.microsoft.com/en-us/azure/storage/common/storage-create-storage-account" target="_blank">Azure storage account</a> 
* This account is used to store QR code images and achievement badges

#### Operating System
Ubuntu 16.04 LTS (64 bit)

### System Setup

#### User Accounts
* Create a common linux regular user account (e.g. deployer) (non-root) on all the servers
* Configure this user to be able to do passwordless ssh login into all the servers
* Use an empty passphrase while generating the ssh key to avoid password prompts during installation
* Configure that user to have full sudo rights across all servers.

### Ports
The servers communicate with each other using TCP on the following [ports](developer-docs/installation/server_installation/#mapping-ports) 

#### Disk Space
* Minimum 20 GB of free disk space

#### Utilities
The following package(s) must be available on the machine from which Sunbird installation is to be preformed:
* git
* curl or any application that can invoke REST API 

##### Metadata
* orgName : A unique name to identify the logical top level structure of your Sunbird delpoyment, for more details refer <a href="https://http://www.sunbird.org/developer-docs/singlesignon/org_user_creation_sso/" target="_blank">Org Creation</a> 
* channel