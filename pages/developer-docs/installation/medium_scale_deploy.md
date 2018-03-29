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

- Review and check whether the system requirements are met. 
- Check whether or not you  have the API keys.
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
* Servers should be provisioned manually. Currently all our scripts will support only Ubuntu 16.04 LTS servers.
* Access to a Fully Qualified Domain Name (FQDN) For example: test.example.org).
* A valid SSL certificate for your domain. To generate free SSL,  you can use Let's Encrypt for most common cases. But using Let's Encrypt is not mandatory.
* Get the Ekstep API keys. Follow the steps [here](http://www.sunbird.org/developer-docs/telemetry/authtokengenerator_jslibrary/#how-to-generate-authorization-credentials) to get the keys. 
* No of servers for sunbird setup can be scaled from 2 to n servers as per requirement.  
* Root access should be able to `sudo` in all the servers.
* A common user (ex: testuser) should be created across all the servers to make the deployment process simple. Assosiate an public key for that `user` and use the private key for ansible deployment.  
* To know more about sunbird deployment architecture look [here](http://sunbird-docs-qa.s3-website.ap-south-1.amazonaws.com/pr/326/developer-docs/installation/medium_scale_deploy/#sunbird-deployment-architecture) 
* Refer the below table for choosing list of servers.

    |Server Name |Suggested Servers per environment|Basic Requirement| Max Servers |
    |:-----      |:--------|:--------------------------------|:---------  |
    |Docker swarm manager<sup>1</sup> | Staging - 1 <br> Prod - 3 | CPU: 1core & RAM: 2GB |Any  |
    |Docker swarm  agent nodes<sup>1</sup>   | Staging - 1 <br> Prod - 3 |CPU: 2core & RAM: 6GB| Any |
    |Elasticsearch<sup>2</sup>        |Staging - 1 <br> Prod- 3 |CPU: 1core & RAM: 3GB| Any |
    |Postgres master<sup>2</sup>      | Staging&Prod - 1 |CPU: 1core & RAM: 3GB|1 |
    |Postgres slave<sup>2</sup>       | Staging&Prod - 1 |CPU: 1core & RAM: 3GB|1 |
    |Cassandra<sup>2</sup>            |Staging&Prod - 1 |CPU: 1core & RAM: 3GB| 1 |
    |Keycloak<sup>1</sup> | Staging&Prod - 1|CPU: 1core & RAM: 4GB|Any |
    |log-es<sup>1</sup> |  Staging&Prod - 1|CPU: 1core & RAM: 3.5GB|1 |

* Suffix given to all the server names is called groupnumber.
 
* You can always choose to run the servers with same groupnumber (for ex: servername<sup>2</sup> in above table) on same instance.
 
**NOTE:** For Quick setup of sunbird or staging setup, we suggest you to go with 2 servers(not mandatory). Ensure that they can communicate with either other over the network. One serves as application server (servers with groupname as `1`) and other server serves as database server (servers with groupname `2`)

* Ensure that all the ports mentioned [here](http://sunbird-docs-qa.s3-website.ap-south-1.amazonaws.com/pr/326/developer-docs/installation/medium_scale_deploy/#ports-mapping) are open 

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

**4.** Update the `config` and `advanced` configuration files. For more details how to update those files please click [here](http://sunbird-docs-qa.s3-website.ap-south-1.amazonaws.com/pr/326/developer-docs/installation/medium_scale_deploy/#config-details).

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

To know more about the script `sunbird_install.sh` please click [here](http://sunbird-docs-qa.s3-website.ap-south-1.amazonaws.com/pr/326/developer-docs/installation/medium_scale_deploy/#sunbird-install-script).

**6.** Open https://[domain-name] and verify the installation. 
  
## Ports mapping
* List of ports which is to be open listed below

|From server |To server|port| protocal|
|:-----      |:-------|:--------|:------|
|Administration server|All servers|22|TCP|
|ELB|0.0.0.0|80,433|TCP|
|swarm managers subnet|swarm nodes subnet|All|TCP & UDP|
|swarm nodes|cassandra servers|9042|TCP|
|swarm nodes|cassandra servers|9042|TCP|
|swarm nodes|elasticsearch servers| 9200 |TCP|
|swarm nodes|postgres servers| 5432|TCP|
|swarm nodes|keycloak| 8080|TCP|



## Sunbird install script 

Sunbird installation script `./sunbird_install.sh` is wrapper which invokes other shell scripts internally like: 

`install-deps.sh` - Installs ansible v2.4.1.0 on adminstration server                       to provision/deploy on other servers. Setup up the                      docker swarm.

`generate_config.sh` - Create the required configuration structure from the default template. 

`generate_hosts.sh` - Creates the hosts file dynamically to run the ansible scripts.   

`install-dbs.sh` - It will install cassandra, elasticsearch and postgres databases

`init-dbs.sh` - It creates schema required schema for cassandra, elasticsearch and postgres databases

`deploy-apis.sh` - API manager kong and Admin utils are deployed as docker service using ansible. 

`onboard-apis.sh`  - Onboard API's and Consumer's are deployed using ansible. 

`deploy-proxy.sh` - Nginx docker service is deployed using ansible.

`provision-keycloak.sh` - Setup keycloak on ansible.

`deploy-keycloak-vm.sh` - Deploy the keycloak using ansible.

`bootstrap-keycloak.sh` - Import releam and does the required keycloak configuration.

`deploy-core.sh` - Deploy core services player, content, actor & learner service as docker services.

`deploy-logger.sh` -  Deploy ELK stack for logs.

`deploy-monitor.sh` - Deploy the monitor stack to send mail alerts when some service/API's/health/system checks etc.. are not stable 
 


## Config details
To run sunbird services, you need to set the following environment variables in config and advanced files in `sunbird-devops/deploy` folder. 


| variable | description   | mandatory|                                                                             
|:----------------------|:-----------------|:---------|
| `env`                |  Name of the environment you are deploying. Typically, it is one of development, test, staging, production, etc..                |yes|
| `implementation_name` | Name of your sunbird implementation.|yes|                |
| `ssh_ansible_user`  |Ssh user for accessing all servers, who must be a sudo user                  |yes|
| `sudo_passwd`       |If user have sudo password, else please skip it                 |no|
| `ansible_private_key_path` | Path to the private key file to allow ansible to deploy        |yes|
| `proxy_prometheus` | But default it will be false .Please set this variable to true if you want to use monitoring              |no|
| `cert_path`        | Path to .cert file for nginx              |yes|
|`key_path`           | Path to .key file for nginx           |yes|
|`dns_name`           | Public DNS url of the app the server             |yes|
|`ekstep_base_url`           | https://qa.ekstep.in/api & prod: https://api.ekstep.in             |yes|
|`sunbird_auth_token`           | JWT token generated by ansible, you can get it from ~/jwt.txt.             |yes|
|`ekstep_api_key`           |Jwt token generated by the key,secret produced from the ekstep               |yes|
|`sso_username`           | Get the username from keycloak realm import doc eg. user-manager             |yes|
|`sso_password`           |  Password for keycloak sso_username            |yes|
|`keycloak_admin_password`           |Keycloak admin console password               |yes|
|`app_address_space`           | Application server address space (e.g. 10.3.0.0/24)              |yes|
|`database_host`           | Db server private ip              |no|
|`database_password`           |  Common password for all the databases |no|
|`ekstep_api_base_url`           | Ekstep api base url              |yes|
|`ekstep_proxy_base_url`           |  https://qa.ekstep.in  & prod: https://community.ekstep.in               |yes|
|`sunbird_sso_publickey`           | SSO public key for sunbird realm               |yes|
|`trampoline_secret`           |Trampoline secret from the keycloak realm import doc.              |yes|
|`sunbird_env`           |  Ekstep env which we connecting             |yes|
|`elasticsearch_host`           |List of elasticsearch database IP's with "," seperated.               |no|
|`cassandra_host`           |Cassandra database IP              |no|
|`postgres_master_host`           | Postgres master database IP             |no|
|`postgres_slave_host`           | Postgres slave database IP or if you want need slave node just keep the same IP of master.            |no|
|`swarm_manager_host`           |List of swarm managers IP's with "," seperated.              |no|
|`swarm_node_host`           | List of swarm node IP's with "," seperated.             |no|
|`keycloak_host`           | List of keycloak IP's with ","             |no|
|`log_es_host`           |  Logger elasticsearch IP            |no|
|`backup_storage_name`           | Elasticsearch snapchat upload strorage name.              |no|
|`backup_storage_key`           |  Elasticsearch snapchat upload strorage key.             |no|




## Sunbird deployment architecture
* Docker swarm is the orchestration engine chosen for running containers. Docker swarm is simpler and easier to learn. 

* All the stateless services are run as docker containers inside swarm

* All stateful services like databases are run on VMs directly.

* Keycloak is an exception, even it doesn't have state to store still we are running on VM.




Sunbird deployment architecture diagram: 
![alt text](pages/developer-docs/installation/images/Sunbird_Deployment_Architectur.png "Logo Missing")






To know more about the script `sunbird_install.sh` please click [here]().
**6.** Open https://[domain-name] and verify the installation. 

