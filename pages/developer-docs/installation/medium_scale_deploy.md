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

- System requirements
- System variables
- API keys
- Installation checklist
- Server Setup

### System Requirements

To install Sunbird, the servers should have the following minimum system requirements:

   - Operating System: Ubuntu 16.04 LTS
   - RAM: 7GB
   - CPU: 2 cores, >2 GHz
   - root access (should be able to sudo)

### Relevant Variables

To make the deployment scenario simple and clear, use the following variables:

  - **implementation-name** : This variable refers to the name of sunbird implementation. For example; Sunbird-Demo

  - **environment-name** : This variable refers to the name of the environment where you deploy Sunbird. For example; Development, Test , Staging, Production, etc. 

### API Keys

API keys are supposed to approve a user or a device with authorization for access.For getting the API keys , you need to send an Email to :[info@sunbird.org](mailto:info@sunbird.org). 

### Installation Checklist

Before you start the installation process make sure you have successfully 

- Review and check whether the system requirements are met. 
- Check whether or not you  have the API keys.
- Decide the installation owner and the installation directory  
- Gather information about the database, if you are installing the database server while installing Sunbird
- Set up or verify the product licensing requirements for the live environment
- Verify the required network requirements and that ports are available for Sunbird components to communicate

### Provisioning servers

Follow either an automated or manual process to provision the servers. For setup in a non-production environment, use only the manual process. Use the automated process if you are setting up Sunbird and are not sure of setting up the infrastructure correctly, or if you plan to roll out your implementation to serious users.

#### Automation

The set of scripts on the [Automation for Azure](developer-docs/installation/server_azure_auto){:target="_blank"} page creates the network and servers needed to run Sunbird. The default configuration procedure provisions for three servers, with the minimum specifications mentioned in the System requirements section.
Known-how of  Azure: VNet, Resource Group, etc. is beneficial but not mandatory. 

**Note:** The automation walk-throughs provided (PART 1) , (PART2), shows you the automated process. You can use them to understand the commands to be used and assist you in the process for provisioning the servers.

#### Others

Not automated as of now but you are free to contribute. Follow our contribution guidelines to contribute.

**Automation walkthrough**

[Part 1](https://sunbirdpublic.blob.core.windows.net/installation/demo/demo-1.gif){:target="_blank"}

[Part 2](https://sunbirdpublic.blob.core.windows.net/installation/demo/demo-2.gif){:target="_blank"}

**Note:** The default automation process creates three servers because it separates the application and the administration server.

#### Manual

The manual procedure commissions two servers. The first server serves as the DB(Database) server and the second serves as the application server & administration server.

The automated provisioning setup sets up:

* Azure Virtual Network (aka VPC in AWS) 
* Creates multiple subnets (one for swarm master, one for swarm slave machines and DB servers) 
* Creates master servers, a replication set of slaves (so that you can add or subtract slave nodes easily),load balancers for master and slaves
* Opens up ports for communication between servers, creates a DB server, sets up FQDNs and runs the Docker Swarm

The manual setup is cumbersome and exhaustive and thus not recommended. Also, it is not supported currently. It is recommended to use the automation scripts instead. However, you are always welcome to contribute code for making the deployment process simple and easy.

For some reasons if  you wish to set up manually, the main requirement is to have Docker Swarm installed and working (multi node cluster), servers available to install the DB and ports open for communication.

### Set up Databases

You can either use existing databases, create them manually or run the automation scripts provided to create them. Sunbird uses  the following databases:

   - Cassandra
   - Postgres
   - Mongo
   - Elasticsearch
   
#### Preparation to Set Up Databases

Run the following steps from your local machine:

**Configuring the database servers**

SSH into the `db-server`. If you have not edited the default configuration, then the name of the DB VM should be `db-1`. Automated setup does not expose the DB to the Internet, so for SSH to access the DB, it’s important to set SSH to `vm-1` (check out `master FQDN` above) with `ssh -A` (key forwarding) and then SSH to `db-1`.

  **Cloning the repository**

Clone the sunbird-devops repo using `git clone [https://github.com/project-sunbird/sunbird-devops.git`](https://github.com/project-sunbird/sunbird-devops.git){:target="_blank"} in the console.

 **Configuring environment**

Run `./sunbird-devops/deploy/generate-config.sh <implementation-name> <environment-name>`. 

  E.g. `./sunbird-devops/deploy/generate-config.sh mysb production deploy`. 

This creates `mysb-devops` directory with *incomplete* configurations. 
The missing configuration needs to be done afterwards.
    
  **Modifying configurations**

Modify all the configurations under `# DB CONFIGURATION` block in `<implementation-name>-devops/ansible/inventories/<environment-name>/group_vars/<environment-name>`

The estimated  run time for  preparation to Set up Databases is 15-30mins and another 30 mins to complete complete the process.

#### Creating Databases using automation

Estimated elapsed time is 10-15 mins (in an environment with fast internet).

Following is a set of scripts which installs the Databases into the `db-server` and copies over the `master` data.

- Run `cd sunbird-devops/deploy`

- Run `sudo ./install-dbs.sh <implementation-name>-devops/ansible/inventories/<environment-name>`. 

**Automation Walkthrough**

[Part 4](https://sunbirdpublic.blob.core.windows.net/installation/demo/demo-4.gif){:target="_blank"}

#### Create Databases Manually 

To create the databases manually, refer to the corresponding database user guides from their respective websites.

#### Initialize Databases

Initialize the databases after they are installed using the following the procedure:

Run `sudo ./init-dbs.sh <implementation-name>-devops/ansible/inventories/<environment-name>`

**Note:** The automation walk-through provided (PART 4), shows you the creation of databases and the initialization process.

### Deploying Sunbird services

The Sunbird services are  categorized into :

* Sunbird Core Services
* Sunbird proxy services

You can visit [Deploying Sunbird services](developer-docs/installation/deploy_sb_services){:target="_blank"} for more detais.

### Customize Assets

This section will explain how to customize look and feel of Sunbird. You can visit [Customizing Assets](developer-docs/installation/cust_sunbird){:target="_blank"}

### Check the Installation

To check if Sunbird is properly installed:

Browse Sunbird Portal  by accessing https://{proxy_server_name}/ (publicly accessible URL, it could be the load balancer URL or the actual domain name for production).

### For making your own Mobile app

If you plan to release your own mobile app using the Sunbird mobile app codebase visit [Generate key and install mobile app](developer-docs/installation/install_mobile_setup){:target="_blank"}
