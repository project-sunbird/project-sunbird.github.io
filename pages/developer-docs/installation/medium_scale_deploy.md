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
| `ansible_private_key_path` | Path to the private key file to allow ansible to deploy        |yes|
| `cert_path`        | Path to .cert file for nginx              |yes|
|`key_path`           | Path to .key file for nginx           |yes|
|`dns_name`           | Public DNS url of the app the server             |yes|
|`ekstep_base_url`           | https://qa.ekstep.in/api & prod: https://api.ekstep.in        |yes|
|`sunbird_auth_token`           | JWT token generated by ansible, you can get it from ~/jwt.txt.|yes|
|`ekstep_api_key`           |Jwt token generated by the key,secret produced from the ekstep |yes|
|`sso_username`           | Get the username from keycloak realm import doc eg.user-manager  |yes|
|`sso_password`           |  Password for keycloak sso_username            |yes|
|`keycloak_admin_password`           |Keycloak admin console password               |yes|
|`app_address_space`           | Application server address space (e.g. 10.3.0.0/24)   |yes|
|`ekstep_api_base_url`           | Ekstep api base url              |yes|
|`ekstep_proxy_base_url`           |  https://qa.ekstep.in  & prod: https://community.ekstep.in |yes|
|`sunbird_sso_publickey`           | SSO public key for sunbird realm               |yes|
|`trampoline_secret`           |Trampoline secret from the keycloak realm import doc.   |yes|
|`sunbird_env`           |  Ekstep env which we connecting             |yes|
| `sudo_passwd`       |If user have sudo password, else please skip it                 |no|
|`database_host`           | Db server private ip              |no|
|`database_password`           |  Common password for all the databases |no|
|`elasticsearch_host`           |List of elasticsearch database IP's with "," seperated. |no|
|`cassandra_host`           |Cassandra database IP              |no|
|`postgres_master_host`           | Postgres master database IP             |no|
|`postgres_slave_host`           | Postgres slave database IP or if you want need slave node just keep the same IP of master.            |no|
|`swarm_manager_host`           |List of swarm managers IP's with "," seperated.              |no|
|`swarm_node_host`           | List of swarm node IP's with "," seperated.             |no|
|`keycloak_host`           | List of keycloak IP's with ","             |no|
|`log_es_host`           |  Logger elasticsearch IP            |no|
| `proxy_prometheus` | But default it will be false .Please set this variable to true if you want to use monitoring  |no|


## Sunbird deployment architecture
* Docker swarm is the orchestration engine chosen for running containers. Docker swarm is simpler and easier to learn. 

* All the stateless services are run as docker containers inside swarm

* All stateful services like databases are run on VMs directly.

* Keycloak is an exception, even it doesn't have state to store still we are running on VM.




Sunbird deployment architecture diagram: 
![alt text](pages/developer-docs/installation/images/Sunbird_Deployment_Architectur.png "Logo Missing")



## Keycloak Manual configuration

Update Client & Secrets

- Navigate to Clients and make the following changes to each of the clients

**Note:** Modify only the clients listed below. You do not need to modify the settings for other clients.

Account, broker, realm-management

- Go to the Credentials tab and regenerate the Secret and Registration Access Token. Make a note of both as you will require these at a later stage.

**Configurations**

The following steps will guide you through the configuration settings:

**Android**

1. Change the Root URL `https://sunbird.example.com`
2. Add a Valid Redirect URL `https://sunbird.example.com/oauth2callback`

**Portal**

1. Change the Root URL to `https://sunbird.example.com`
2. Add Valid Redirect URIs `https://sunbird.example.com/private/*` and `https://sunbird.example.com/`

**Trampoline**

1. Change the Root URL to **https://sunbird.example.com**
2. Go to the Credentials tab and regenerate the Secret and Registration Access Token
3. Use the secret as the value for the **sunbird_trampoline_secret** configuration





To know more about the script `sunbird_install.sh` please click [here]().
**6.** Open https://[domain-name] and verify the installation. 

