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
* No of servers for sunbird setup can be scaled from 2 to n servers as per requirement.  
* Refer the below table for choosing list of servers.
* Root access should be able to `sudo`

    |Server Name |Suggested Servers per environment|Basic Requirement| Max Servers |
    |:-----      |:--------|:--------------------------------|:---------  |
    |Docker swarm manager<sup>1</sup> | Staging - 1 <br> Prod - 3 | CPU: 1core & RAM: 2GB |Any  |
    |Docker swarm  agent nodes<sup>1</sup>   | Any |Staging - 1 <br> Prod - 3 |CPU: 2core & RAM: 6GB|
    |Elasticsearch<sup>2</sup>        |Staging - 1 <br> Prod- 3 |CPU: 1core & RAM: 3GB| Any |
    |Postgres master<sup>2</sup>      | Staging&Prod - 1 |CPU: 1core & RAM: 3GB|1 |
    |Postgres slave<sup>2</sup>       | Staging&Prod - 1 |CPU: 1core & RAM: 3GB|1 |
    |Cassandra<sup>2</sup>            |Staging&Prod - 1 |CPU: 1core & RAM: 3GB| 1 |
    |Keycloak<sup>1</sup> | Staging&Prod - 1|CPU: 1core & RAM: 4GB|Any |
    |log-es<sup>1</sup> |  Staging&Prod - 1|CPU: 1core & RAM: 3.5GB|1 |

* You can always choose to run the servers with same power (for ex: servername<sup>2</sup> in above table) on same instance.
 

**NOTE:** For Quick setup of sunbird or staging setup, we suggest you to go with 2 servers(not mandatory). Ensure that they can communicate with either other over the network. One serves as application server (services with all the server names with power `1`) and other server serves as database server (services with all the server names with power `2`)

* Ensure that all the ports mentioned [here]() are open 

**If  number of `Docker swarm agent nodes > 2` we need to configure Load balancer.**

 **Loadbalancer setup:**
 
- Create a load balancer and attach all the Docker swarm agent nodes to it.
 
- Update the health check URL's.

- Open the inbound security group ports 80,443.

- Enable logs for Load balanacer for troubleshooting(not mandatory).

**Choose any one of the docker swarm manager vm for the administration server. Run the following steps from a that machine:**

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
  