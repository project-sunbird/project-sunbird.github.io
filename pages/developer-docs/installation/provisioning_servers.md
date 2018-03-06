---
type: landing
directory: developer-docs/installation/
title: Provisioning Servers
page_title: Server Automation
description: Provisioning server
allowSearch: true
---

Servers can be provisioned either manually or via automation if you are deploying Sunbird to Azure.

## Manual Process

To provision servers manually, commission two servers and ensure that they can communicate with either other over the network. 

- The first server serves as the DB (Database) server, and 
- The second serves as the application server & administration server

## Automation for Azure

The Azure automation script creates the network and the servers required.The default configuration procedure provisions for three servers, with the minimum specifications mentioned in System requirements section.Knowledge of Azure (VNet, Resource Group, etc.) is beneficial but not mandatory.  

* Create Azure Virtual Network (aka VPC in AWS) 
* Create multiple subnets (one for swarm master, one for swarm slave machines and DB servers) 
* Create master servers, a replication set of slaves (so that you can add or subtract slave nodes easily), load balancers for master and slaves
* Open up ports for communication between servers, creates a DB server, sets up FQDNs and runs the Docker Swarm

**Prerequisites**  
- docker-ce installed  
add your user account to docker group  
`sudo usermod -aG docker $(whoami)`
- Internet availability
 
Run the following steps from a machine which is connected to the internet:

1. Clone the sunbird-devops repo using `git clone https://github.com/project-sunbird/sunbird-devops.git`
2. Run `./sunbird-devops/deploy/generate-config.sh mysb production cloud` This will create config files for you in `./mysb-devops/test/azure`. 
3. Here, `mysb` is the **implementation-name** and `production` is the **environment-name**.
4. Edit both the new config files `azuredeploy.parameters.json` and `env.sh` as per your requirements for the app.
5. Edit the new config files `azuredeploy.parameters.json` and `env.sh` as per your requirements for the 
6. Run `export APP_DEPLOYMENT_JSON_PATH=<absolute path of azuredeploy.parameters.json>`. For instance, on my laptop it is `export DEPLOYMENT_JSON_PATH=/Users/shashankt/code2/sunbird/mysb-devops/production/azure/app`
7. Run `export DB_DEPLOYMENT_JSON_PATH=<absolute path of azuredeploy.parameters.json>`. For instance, on my laptop it is `export DEPLOYMENT_JSON_PATH=/Users/shashankt/code2/sunbird/mysb-devops/production/azure/db`
8. Run `cd sunbird-devops/deploy`
9. Run `./provision-servers.sh`

**Note**: If you want to troubleshoot and need a debug message, you can give `--debug flag` as `./provision-servers.sh --debug`

10. Login to Azure when Command Line Interface (CLI) instructs to
11. Wait for deployment process to complete
12.	Check on Azure portal by navigating to: Resource Group -> Deployments -> Click on deployment to see deployment details
13. Try to SSH. If your `masterFQDN` from deployment details was `production-1a.centralindia.cloudapp.azure.com` you can ssh using `ssh -A ops@production-1a.centralindia.cloudapp.azure.com`
14. If SSH was successful, you have successfully created the server platform.

Estimated elapsed time is 30 mins for a fresh install. 

You can re-try scripts to create a new set of servers every time in case you need to. Some of the configurations are unconfigurable at this point e.g. the server type. However, it’s possible to add or reduce the number of servers and re-run the automation process, if you plan o scaling up or down.

### Automation walkthrough

- [Part 1](https://sunbirdpublic.blob.core.windows.net/installation/demo/demo-1.gif){:target="_blank"}

- [Part 2](https://sunbirdpublic.blob.core.windows.net/installation/demo/demo-2.gif){:target="_blank"}

**Note:** The default automation process creates three servers because it separates the application and the administration server.

