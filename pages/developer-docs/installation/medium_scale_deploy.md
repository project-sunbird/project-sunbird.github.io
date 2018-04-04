---
type: landing
directory: developer-docs/installation/
title: Server Installation
page_title: Server Installationn
description: About how Sunbird can be setup on a server
allowSearch: true
---

##  Sunbird Installation Guide

### Introduction
* Sunbird software is containerized and Docker swarm is the orchestration engine chosen to run Sunbird docker images. Docker swarm consists of manager and agent nodes. The containers are run on the agent nodes and the manager will manage the container lifecycle.

* All the stateless services (Portal, LMS Backend, API Gateway, Proxies) in Sunbird are run as docker containers inside the swarm

* All stateful services like databases (Cassandra, PostgreSql & Elastic search) and the Oauth service (KeyCloak) are run on VMs directly.

* The installation is automated using shell scripts and ansible.

### Prerequisites:
* The sunbird installation requires a minimum of 2 servers with 7 GB of RAM running Ubuntu server 16.04 LTS. You can scale the infra by adding more servers and Sunbird is designed to scale well horizontally. The servers should be able to connect with each other over tcp on the following [ports](http://sunbird-docs-qa.s3-website.ap-south-1.amazonaws.com/pr/326/developer-docs/installation/medium_scale_deploy/#ports-mapping). 
* A domain name and valid SSL certificate for your domain are desired. If you do not have a domain name, you can configure Sunbird to be accessible over an IP address. If you have a domain name and want to get an SSL certificate, you can use [Let's Encrypt](https://letsencrypt.org/) for generating a free certificate with 90 day validity.
* Sunbird requires Ekstep API keys to access the Ekstep content repo. Please follow the steps [here](http://www.sunbird.org/developer-docs/telemetry/authtokengenerator_jslibrary/#how-to-generate-authorization-credentials) to get the keys. Please get the QA API keys if you are creating a test environment.
* A common user (e.g. deployer) should be created on all the servers and this user should be configured to use [key based ssh](https://www.digitalocean.com/community/tutorials/how-to-configure-ssh-key-based-authentication-on-a-linux-server). Please use an empty passphrase while generating the ssh key to avoid password prompts during installation. The installation script uses this key (user) for deploying Sunbird and so this user should have sudo access on the servers.
* The below table lists out the services that we setup and run as part of the installation. The below table also lists the optimal server count for a typical staging/production with thousands of users.

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

* All the services with the common superscript (e.g. servername<sup>2</sup>) in the Server Name are run on the same server when you install Sunbird on 2 servers. The server running services with superscript <sup>1</sup> is referred as the app server and the server running services with superscript <sup>2</sup> is referred as the db server.
 
**If you setup more than one swarm agent node, you will need to configure a Load balancer to spray the incoming requests to all the agent nodes. All agent nodes in a swarm will be able to route the request to the right service. **

### Installation:

**Choose any one of the docker swarm manager vm as the installation server and run the following steps from that server. In the case of a 2 server install, these can be run from the app server. **

**1.** Install git `apt-get update -y && apt-get install git -y `

**2.** Run `git clone https://github.com/project-sunbird/sunbird-devops.git`

**3.** `cd sunbird-devops/deploy`

**4.** Update the `config` and `advanced` configuration files. The configuration parameters are explained in the following table. 

| variable | description   | mandatory|                                                                             
|:----------------------|:-----------------|:---------|
| `env`                |  Name of the environment you are deploying. Typically, it is one of development, test, staging, production, etc..                |yes|
| `implementation_name` | Name of your sunbird implementation.|yes|                |
| `ssh_ansible_user`  |SSH user with sudo access for accessing all servers.                  |yes|
| `ansible_private_key_path` | Path to the private SSH key file for the ssh_ansible_user. Ansible uses this file to SSH to the servers.        |yes|
| `ip_only`        |  True, if you do not want to use a domain name. Leave it blank/False if you are using a domain name.             |no|
| `cert_path`        | Path to .cert file (SSL certificate) for nginx. This variable need not be set if ip_only is True.              |no|
|`key_path`           | Path to .key file (SSL certificate) for nginx. This variable need not be set if ip_only is True           |no|
|`dns_name`           | Domain name for your installation. Use the IP address if ip_only is True              |yes|
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

* If we what to re-run any particular stage in the installation, just run `./sunbird_install.sh -s <stagename>`

To know more about the script `sunbird_install.sh` please click [here](http://sunbird-docs-qa.s3-website.ap-south-1.amazonaws.com/pr/326/developer-docs/installation/medium_scale_deploy/#sunbird-install-script).

**6.** Open https://[domain-name] and verify the installation. 
  
## Sunbird install script 

The Sunbird installation script `./sunbird_install.sh` is a wrapper shell script which invokes other scripts/ansible playbooks. All the docker images are fetched from the Sunbird DockerHub repo. 

`install-deps.sh` - Installs ansible v2.4.1.0 on the installation server to provision & deploy Sunbird. This script also sets up the docker swarm.

`generate_config.sh` - Creates a workspace for the installation and sets up necessary config files. 

`generate_hosts.sh` - Creates a hosts file (ansible file format) dynamically to run the ansible scripts.   

`install-dbs.sh` - Installs cassandra, elasticsearch and postgres databases

`init-dbs.sh` - Sets up the required schema for cassandra, elasticsearch and postgres databases

`deploy-apis.sh` - Deploy the api gateway (Kong) as a docker service using ansible. 

`onboard-apis.sh`  - Onboard the Sunbird APIs and Consumers to the API gateway using ansible. 

`deploy-proxy.sh` - Deploy the proxy (Nginx) as a docker service.

`provision-keycloak.sh` - Install Keycloak.

`deploy-keycloak-vm.sh` - Deploy the oauth service (Keycloak) on the VM. The Keycloak service runs outside the Swarm.

`bootstrap-keycloak.sh` - Import the auth realm and configures Keycloak.

`deploy-core.sh` - Deploy the core services player, content, actor & learner service as docker services. The content, actor & learner service together form the LMS backend.

`deploy-logger.sh` -  Deploy ELK stack for logs. **This is an optional step**

`deploy-monitor.sh` - Deploy the monitoring stack (Prometheus) to send mail alerts when the infrastructure or services are not stable. **This is an optional step**
 

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
