---
type: landing
directory: developer-docs/installation/
title: Provisioning Servers
page_title: Server Automation
description: Provisioning server
allowSearch: true
---

Follow either an automated or manual process to provision the servers. For setup in a non-production environment, use only the manual process. Use the automated process if you are setting up Sunbird and are not sure of setting up the infrastructure correctly, or if you plan to roll out your implementation to serious users.

## Manual Process
Commission two servers. 

1. The first server, serves as the DB(Database) server, and 
1. The second serves as the application server & administration server.

### Installation and configuration of Docker Swarm
WIP

## Automation for Azure

The Azure automation scripts create the network and servers needed to run Sunbird. The default configuration procedure provisions for three servers, with the minimum specifications mentioned in the System requirements section. Know-how of Azure (VNet, Resource Group, etc.) is beneficial but not mandatory.  

The automated provisioning sets up:

* Azure Virtual Network (aka VPC in AWS) 
* Creates multiple subnets (one for swarm master, one for swarm slave machines and DB servers) 
* Creates master servers, a replication set of slaves (so that you can add or subtract slave nodes easily),load balancers for master and slaves
* Opens up ports for communication between servers, creates a DB server, sets up FQDNs and runs the Docker Swarm

Estimated run time: 30 mins for the fresh time. 

Scripts can be re-tried and to create a new set of servers every time. Some configurations cannot be changed, for instance, the server type. However, it’s possible to add or reduce the number of servers and re-run the automation process, if you plan for scaling up or down.

### Instructions
Assuming that you have an **implementation** named `mysb` and are deploying to an **environment** called `production`

#### Clone the sunbird-devops repo and generate a new configuration

    git clone https://github.com/project-sunbird/sunbird-devops.git
    ./sunbird-devops/deploy/generate-config.sh mysb production cloud 

This will create config files for you in

    ./mysb-devops/test/azure
  
#### Edit config & Provision

1. Edit the new config files `azuredeploy.parameters.json` and `env.sh` as per your requirements for the app.
1. Edit the new config files `azuredeploy.parameters.json` and `env.sh` as per your requirements for the db.

Run

    export APP_DEPLOYMENT_JSON_PATH=<absolute path of azuredeploy.parameters.json>
    export DB_DEPLOYMENT_JSON_PATH=<absolute path of azuredeploy.parameters.json>
    cd sunbird-devops/deploy
    ./provision-servers.sh
    
For instance, on my laptop I do

    export DEPLOYMENT_JSON_PATH=/Users/shashankt/code2/sunbird/mysb-devops/production/azure/app
    export DEPLOYMENT_JSON_PATH=/Users/shashankt/code2/sunbird/mysb-devops/production/azure/db
    
#### Wait
1. Login to Azure when CLI instructs
1. Wait for deployment to complete

#### Verify
1. Check on Azure portal: Resource Group -> Deployments -> Click on deployment to see deployment details
1. Try to SSH. If your `masterFQDN` from deployment details was `production-1a.centralindia.cloudapp.azure.com` you can ssh using `ssh -A ops@production-1a.centralindia.cloudapp.azure.com`
1. If you could SSH, you have successfully created the server platform.
