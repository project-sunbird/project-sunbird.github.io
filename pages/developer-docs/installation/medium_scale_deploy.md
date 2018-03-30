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

SSL Certificates are used to encrypt communication between a browser and the server. You will need an SSL certificate from a recognised CA.[LetsEncrypt](https://letsencrypt.org/){:target="_blank"}provides free SSL certificates. You can also use a CA of your choice. 

Before you begin the installation, keep the SSL certificate and the key handy.

***Note***: A self-signed certificate will cause authentication to fail with an "Access Denied" error because the certificate will not be verified.

### Relevant Variables

To make the deployment scenario simple and clear, we use the following variables:

  - **implementation-name** : This variable refers to the name of Sunbird implementation. For example; Sunbird-Demo
  - **environment-name** : This variable refers to the name of the environment where you deploy Sunbird. For example; Development, Test, Staging, Production, etc. 

## Installation Checklist

Before you start the installation process make sure you have successfully 

- Review and check whether the system requirements are met
- Check whether or not you  have the API keys
- Decide the installation owner and the installation directory  
- Gather information about the database, if you are installing the database server while installing Sunbird
- Set up or verify the product licensing requirements for the live environment
- Verify the required network requirements and that ports are available for Sunbird components to communicate

## Provisioning servers

Server provisioning is a set of actions to prepare a server with appropriate systems, data, software, and make it ready for network operation. [Provisioning Servers](developer-docs/installation/provisioning_servers){:target="_blank"} section will help you to see tAutomated and Manual process to provision the servers.   

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

##  Sunbird Installation Guide

### Prerequisites:
* Servers should be provisioned manually. Currently all our scripts support only Ubuntu 16.04 LTS servers.
* Access to a Fully Qualified Domain Name (FQDN) (For example: test.example.org).
* A valid SSL certificate for your domain. To generate free SSL,  you can use Let's Encrypt for most common cases. But using Let's Encrypt is not mandatory.
* Get the Ekstep API keys. Follow the steps [here](http://www.sunbird.org/developer-docs/telemetry/authtokengenerator_jslibrary/#how-to-generate-authorization-credentials) to get the keys. 
* Refer the below table for choosing list of servers.

    |Server Name |Max Servers |Suggested Servers per environment|Basic Requirement| 
    |:-----      |:---------  |:--------|:--------------------------------|
    |Docker swarm manager | Any  |Staging - 1 <br> Prod - 3 | CPU: 1core & RAM: 2GB |
    |Docker swarm  agent nodes   | Any |Staging - 1 <br> Prod - 3 |CPU: 2core & RAM: 6GB|
    |Elasticsearch        | Any |Staging - 1 <br> Prod- 3 |CPU: 1core & RAM: 3GB|
    |Postgres master      | 1 |Staging&Prod - 1 |CPU: 1core & RAM: 3GB|
    |Postgres slave       | 1 |Staging&Prod - 1 |CPU: 1core & RAM: 3GB|
    |Cassandra            | 1 |Staging&Prod - 1 |CPU: 1core & RAM: 3GB|
    |Keycloak| Any |Staging&Prod - 1|CPU: 1core & RAM: 4GB|
* Ensure that all the ports are open between all the servers internally.   
    
**NOTE:** For Quick setup of sunbird, commission two servers and ensure that they can communicate with either other over the network.
* The first server serves as the DB (Database) server.
* The second server serves as the application server & administration server.
* Both servers must have the following minimum system requirements:
   - Operating System: Ubuntu 16.04 LTS
   - RAM: 7GB
   - CPU: 2 cores, > 2 GHz
   - Root access should be able to `sudo`

If  number of `Docker swarm agent nodes > 2`, you need to configure Load balancer. 
 
 Loadbalancer setup:

- Create a load balancer and attach all the Docker swarm agent nodes to it
- Update the health check urls
- Open the Inbound security group ports 80,443
- Enable logs for Load balancer troubleshooting(not mandatory)

Choose any one of the docker swarm manager vm for the administration server. 

Run the following steps from a that machine:

1. Install git `apt-get update -y && apt-get install git -y `
2. Run `git clone https://github.com/project-sunbird/sunbird-devops.git`
3. `cd sunbird-devops/deploy`
4. Update the `config` and `advanced` configuration files. For more details how to update those files please click [here]().
5. Run `./sunbird_install.sh`. This script will do infra setup from  stage1 to stage5 in a sequence shown in below table. Verify all the mandatory varaibles( ex:  sunbird_auth_token, ekstep_api_key) of sunbird core services are updated, then run the  `./sunbird_install.sh -s core` for deploying core services.

|stage no. |stage name|Description| 
|:-----      |:-------|:--------|
|1 |config |Generates configuration file and hosts file |
|2|dbs|Install all databases and creates schema  |
|3 |apis|Setup API manager kong &  Onboard API's and consumer's  |
|4|proxy|Deploy nginx and configure|
|5|keycloak|Provision, deploy and bootstrap keycloak |
|6|core|Deploy all core services|
|7|logger|ELK stack will be deployed and logs can be views in kibana|
|8|monitor|Monitor all the services,health checks, API's,system checks etc..|

**NOTE**:  

* If you want to re-run any particular stage, just run `./sunbird_install.sh -s <stagename>`
* If you are planning to setup logger or monitoring . Please run the `./sunbird_install.sh -s <stagename>` command with  `stagename` as logger/monitor

To know more about the script `sunbird_install.sh` please click [here]().

6. Open https://[domain-name] and verify the installation. 

