---
type: landing
directory: developer-docs/installation/
title: Medium Scale Deployment
page_title: Medium Scale Deployment
description: About how developer can deploy
allowSearch: true
---


##  Sunbird Installation Guide

### Prerequisites:
* Servers should be provisioned manually. Currently all our scripts will support only Ubuntu 16.04 LTS servers.
* Access to a Fully Qualified Domain Name (FQDN) For example: test.example.org).
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
	Operating System: Ubuntu 16.04 LTS

	RAM: 7GB

	CPU: 2 cores, > 2 GHz

	Root access should be able to `sudo`

If  number of `Docker swarm agent nodes > 2` we need to configure Load balancer.

 **Loadbalancer setup:**
 
- Create a load balancer and attach all the Docker swarm agent nodes to it.
 
- Update the health check URL's.

- Open the inbound security group ports 80,443.

- Enable logs for Load balanacer for troubleshooting(not mandatory).

Choose any one of the docker swarm manager vm for the administration server. Run the following steps from a that machine:

**1.** Install git `apt-get update -y && apt-get install git -y `

**2.** Run `git clone https://github.com/project-sunbird/sunbird-devops.git`

**3.** `cd sunbird-devops/deploy`

**4.** Update the `config` and `advanced` configuration files. For more details how to update those files please click here.

**5.** Run `./sunbird_install.sh`. This script will do infra setup from  stage1 to stage5 in a sequence shown in below table. Verify all the mandatory varaibles( ex:  sunbird_auth_token, ekstep_api_key) of sunbird core services are updated, then run the  `./sunbird_install.sh -s core` for deploying core services.


|stage no |stage name|Description| 
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
* If we what to re-run any particular stage, just run `./sunbird_install.sh -s <stagename>`
* If we are planning to setup logger or monitoring . Please run the `./sunbird_install.sh -s <stagename>` command with  `stagename` as logger/monitor.

To know more about the script `sunbird_install.sh` please click here.

**6.** Open https://[domain-name] and verify the installation. 
  











