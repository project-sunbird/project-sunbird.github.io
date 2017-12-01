---
type: landing
directory: developer-docs/installation/
title: Provisioning Servers
page_title: Server Automation via Azure and Manually
description: Provisioning server
allowSearch: true
---
Follow either an automated or manual process to provision the servers. For setup in a non-production environment, use only the manual process. Use the automated process if you are setting up Sunbird and are not sure of setting up the infrastructure correctly, or if you plan to roll out your implementation to serious users.

## Automation for Azure

The set of scripts on the Automation for Azure page creates the network and servers needed to run Sunbird. The default configuration procedure provisions for three servers, with the minimum specifications mentioned in the System requirements section.
Known-how of  Azure: VNet, Resource Group, etc. is beneficial but not mandatory. 

The automated provisioning of servers is done via Automation for Azure. The automated provisioning setup:

* Azure Virtual Network (aka VPC in AWS) 
* Creates multiple subnets (one for swarm master, one for swarm slave machines and DB servers) 
* Creates master servers, a replication set of slaves (so that you can add or subtract slave nodes easily),load balancers for master and slaves
* Opens up ports for communication between servers, creates a DB server, sets up FQDNs and runs the Docker Swarm

Estimated run time: 30 mins for the fresh  time. 

Scripts can be re-tried and to create a new set of servers every time. Some configurations cannot be changed, for instance, the server type. However, it’s possible to add or reduce the number of servers and re-run the automation process, if you plan for scaling up or down.

Run the following steps from a machine which is connected to the internet:

1. Clone the sunbird-devops repo using `git clone https://github.com/project-sunbird/sunbird-devops.git`
2. Run `./sunbird-devops/deploy/generate-config.sh mysb production cloud` This will create config files for you in `./mysb-devops/test/azure`. 
3. Here, `mysb` is the **implementation-name** and `production` is the **environment-name**.
4. Edit both the new config files `azuredeploy.parameters.json` and `env.sh` as per your requirements for the app.
5. Edit the new config files `azuredeploy.parameters.json` and `env.sh` as per your requirements for the db.
6. Run `export APP_DEPLOYMENT_JSON_PATH=<absolute path of azuredeploy.parameters.json>`. For instance, on my laptop it is `export DEPLOYMENT_JSON_PATH=/Users/shashankt/code2/sunbird/mysb-devops/production/azure/app`
7. Run `export DB_DEPLOYMENT_JSON_PATH=<absolute path of azuredeploy.parameters.json>`. For instance, on my laptop it is `export DEPLOYMENT_JSON_PATH=/Users/shashankt/code2/sunbird/mysb-devops/production/azure/db`
8. Run `cd sunbird-devops/deploy`
9. Run `./provision-servers.sh`
10. Login to Azure when CLI instructs to
11. Wait for deployment to complete
12.	Check on Azure portal: Resource Group -> Deployments -> Click on deployment to see deployment details
13. Try to SSH. If your `masterFQDN` from deployment details was `production-1a.centralindia.cloudapp.azure.com` you can ssh using `ssh -A ops@production-1a.centralindia.cloudapp.azure.com`
14. If you could SSH, you have successfully created the server platform.

**Note:** The automation walk-throughs provided (PART 1) , (PART2), shows you the automated process. You can use them to understand the commands to be used and assist you in the process for provisioning the servers.

### Automation walkthrough

[Part 1](https://sunbirdpublic.blob.core.windows.net/installation/demo/demo-1.gif){:target="_blank"}

[Part 2](https://sunbirdpublic.blob.core.windows.net/installation/demo/demo-2.gif){:target="_blank"}

**Note:** The default automation process creates three servers because it separates the application and the administration server.

## Manual Process

The manual procedure commissions two servers. The first server, serves as the DB(Database) server and the second serves as the application server & administration server.

If you wish to set up manually, the main requirement is to have Docker Swarm installed and working (multi node cluster), servers available to install the DB and ports open for communication. 








