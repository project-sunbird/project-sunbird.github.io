---
type: landing
directory: developer-docs/installation/
title: Server Installation
page_title: Server Installationn
description: Setting up Sunbird on a server
allowSearch: true
---
 
## Overview

Sunbird software is containerized. The installation script uses the Docker swarm orchestration engine to run the Sunbird docker images. The Docker swarm consists of manager and agent nodes. The containers are run on the agent nodes and the manager nodes manage the container lifecycle.

All the stateless services in Sunbird - Portal, LMS Backend, API Gateway and Proxies - are run as docker containers inside the swarm. All stateful services consisting of Cassandra, PostgreSql, Elasticsearch and the OAuth service(Keycloak) are run on Virtual Machines (VMs) directly. The installation is automated using shell scripts and Ansible.

## Prerequisites

* Minimum 2 servers with 7 GB RAM, running Ubuntu server 16.04 LTS. You can scale the infrastructure by adding servers. Sunbird is designed to scale horizontally. The servers should connect to each other over TCP on the following [ports](#mapping-ports). The scripts do not work on virtual machines created locally (using VMware/VirtualBox) and have been tested on Azure and AWS VMs.

* Recommended that you have a domain name and a valid SSL certificate for the domain. If you do not have a domain name, you can configure Sunbird to be accessible over an IP address. If you have a domain name, and want to get an SSL certificate, use [Let's Encrypt](https://letsencrypt.org/) to generate a free certificate that is valid for 90 days.

* Sunbird requires Ekstep API keys to access the Ekstep content repository. Follow the steps [here](http://www.sunbird.org/developer-docs/telemetry/authtokengenerator_jslibrary/#how-to-generate-authorization-credentials) to get the keys. If you are creating a test environment, get the QA API keys.

* Create a common linux user (e.g. deployer) on all the servers. Configure this user to use [key based ssh](https://www.digitalocean.com/community/tutorials/how-to-configure-ssh-key-based-authentication-on-a-linux-server). Use an empty passphrase while generating the ssh key to avoid password prompts during installation. Since the installation script uses this key (user) to deploy Sunbird, this user must have sudo access on the servers.

* The following table lists the services that are set up and run as part of installation. The table also lists the optimal server count for a typical staging or production environment with thousands of users.

    |Server Name |Suggested Servers per environment|Basic Requirement| Max Servers |
    |:-----      |:--------|:--------------------------------|:---------  |
    |Docker swarm manager<sup>1</sup> | Staging - 1 <br> Prod - 3 | CPU: 1core & RAM: 2GB |Any  |
    |Docker swarm  agent nodes<sup>1</sup>   | Staging - 1 <br> Prod - 3 |CPU: 2core & RAM: 6GB| Any |
    |Elasticsearch<sup>2</sup>        |Staging - 1 <br> Prod- 3 |CPU: 1core & RAM: 3GB| Any |
    |Postgres master<sup>2</sup>      | Staging&Prod - 1 |CPU: 1core & RAM: 3GB|1 |
    |Postgres slave<sup>2</sup>       | Staging&Prod - 1 |CPU: 1core & RAM: 3GB|1 |
    |Cassandra<sup>2</sup>            |Staging&Prod - 1 |CPU: 1core & RAM: 3GB| 1 |
    |Keycloak<sup>1</sup> | Staging&Prod - 1|CPU: 1core & RAM: 4GB|Any |

* When you install Sunbird on 2 servers, all the services with the common superscript (e.g. servername<sup>2</sup>) in the Server Name are run on the same server. The App server runs services with superscript <sup>1</sup> and the DB server runs services with superscript <sup>2</sup>. 
 
**Note:** If you setup more than one swarm agent node, you will need to configure a load balancer to spray the incoming requests to all the agent nodes. All agent nodes in a swarm route the request to the right service.

## Installation Procedure

**Note:** Choose one docker swarm manager VM as the installation server and execute the following steps from that server. If you are installing Sunbird on two servers, execute the steps from the app server. 

1.Install git using `apt-get update -y && apt-get install git -y `

2.Run `git clone https://github.com/project-sunbird/sunbird-devops.git`

3.`cd sunbird-devops/deploy`

4.Update the configuration parameters in the `config` file. The configuration parameters are explained in the following table: 

| variable | description   | mandatory|                                                                             
|:----------------------|:-----------------|:---------|
| `env`                |  Name of the environment you are deploying. Typically, it is one of development, test, staging, production, etc..                |yes|
| `implementation_name` | Name of your sunbird implementation.|yes|                |
| `ssh_ansible_user`  |SSH user with sudo access for accessing all servers.                  |yes|
| `ansible_private_key_path` | Path to the private SSH key file for the ssh_ansible_user. Ansible uses this file to SSH to the servers.        |yes|
| `dns_name`           | Domain name for your installation. Use the IP address if want to access Sunbird over an IP address              |yes|
| `proto`           | http/https. Use http if your dns_name is an IP address or if you have a domain but do not want ssl for trials.              |yes|
| `cert_path`        | Path to .cert file (SSL certificate) for nginx. This variable need not be set if the proto is set to http.              |no|
|`key_path`           | Path to .key file (SSL certificate) for nginx. This variable need not be set if the proto is set to http           |no|
|`ekstep_base_url`           | https://qa.ekstep.in/api & prod: https://api.ekstep.in        |yes|
|`sunbird_auth_token`           | JWT token generated by Ansible, you can get it from ~/jwt_token_player.txt after you have executed the ./sunbird_install.sh script.|yes|
|`ekstep_api_key`           |Jwt token generated by the key,secret produced from Ekstep |yes|
|`sso_password`           |  Password for keycloak sso user (default user is user-manager, can change it it keycloak gui)            |yes|
|`keycloak_admin_password`           |Keycloak admin console password (default admin username is admin, can change it in keycloak gui)              |yes|
|`trampoline_secret`           |Trampoline secret for keycloak, atleast 8 chars   |yes|
|`app_address_space`           | Application server address space (e.g. 10.3.0.0/24)   |yes|
|`ekstep_api_base_url`           | https://qa.ekstep.in/api & prod: https://api.ekstep.in              |yes|
|`ekstep_proxy_base_url`           |  https://qa.ekstep.in  & prod: https://community.ekstep.in |yes|
| `sudo_passwd`       |The sudo password, if the user has it else skip the parameter                 |no|
|`database_host`           | The private IP address of the DB server               |no|
|`database_password`           |  The common password for all the databases |no|
|`elasticsearch_host`           |A comma-separated (,) list of Elasticsearch database IP addresses. |no|
|`cassandra_host`           |The IP address of the Cassandra database.              |no|
|`postgres_master_host`           | The IP address of the Postgres master database             |no|
|`postgres_slave_host`           | The IP address of the Postgres slave database. If you do not need a slave node enter the same IP address as that of the master.            |no|
|`swarm_manager_host`           |A comma-separated (,) list of IP addresses of the swarm managers.                |no|
|`swarm_node_host`           | A comma-separated (,) list of swarm node IP addresses .             |no|
|`keycloak_host`           | A comma-separated (,) list of keycloak IP addresses.              |no|
|`sunbird_dataservice_url` |The API url of sunbird, for example; https://demo.opensunbird.o    |no|
|`sunbird_azure_storage_account`  | The Azure storage account for the badger service     |no|
|`sunbird_azure_storage_key`  | The Azure storage key for the badger service    |no|
|`sunbird_image_storage_url`| The Azure image url for the badger service |no|
|`sunbird_installation_email`| The Sunbird installation email ID |no|
|`sunbird_telemetry_pdata_id`| The Sunbird telemetry pdata ID, for example <br> {env}.{implimentation_name}.learning.service |no|
|`backup_storage_name`| elasticsearch backupstorage name |yes|
|`backup_storage_key`| elasticsearch backupstorage key |yes|
|`es_etc_cluster_name`| elasticsearch backupstorage cluster name |yes|
|`sunbird_environment`| The Sunbird installation environment |yes|
|`sunbird_instance`| The Sunbird installation name |yes|



5.Run the script `./sunbird_install.sh`. This script sets up the infra setup from  stage 1 to stage 6 in a sequence shown in following table.

|stage no |stage name|Description| 
|:-----      |:-------|:--------|
|1 |config |Generates configuration file and hosts file |
|2|dbs|Installs all databases and creates schema  |
|3 |apis|Sets up API manager kong and Onboard API's and consumer's  |
|4|proxy|Deploys and configures Nginx|
|5|keycloak| Deploys and configures Keycloak |
|6|badger|Deploys the badger service|
|7|core|Deploys all core services|

6.The badger service is set up manually. To do so, follow the steps given [here](#badger-setup).

**Note**: The badger service does not work without an Azure storage account name and key. 

7.Verify that all the mandatory variables, for example; sunbird_auth_token, ekstep_api_key, of the Sunbird core services are updated, and run the script `./sunbird_install.sh -s core` to deploying the core services.

**Note**: If you want to re-run any particular stage in the installation, just run `./sunbird_install.sh -s <stagename>`

To know more about the script `sunbird_install.sh`, click [here](#sunbird-install-script).

8.Open https://[domain-name] and verify the installation. 
  
## Sunbird Install Script 

The Sunbird installation script `./sunbird_install.sh` is a wrapper shell script that invokes other scripts or Ansible playbooks. It fetches all the docker images from the Sunbird DockerHub repository. 

* `install-deps.sh` - Installs Ansible v2.4.1.0 on the installation server to provision and deploy Sunbird. This script also sets up the docker swarm.

* `generate_config.sh` - Creates a workspace for the installation and sets up necessary config files. 

* `generate_hosts.sh` - Creates a hosts file (Ansible file format) dynamically to run the Ansible scripts.   

* `install-dbs.sh` - Installs Cassandra, Elasticsearch and Postgres databases

* `init-dbs.sh` - Sets up the required schema for Cassandra, Elasticsearch and Postgres databases

* `deploy-apis.sh` - Deploys the api gateway (Kong) as a docker service using Ansible. 

* `onboard-apis.sh`  - Onboards the Sunbird APIs and consumers to the API gateway using Ansible. 

* `deploy-proxy.sh` - Deploys the proxy (Nginx) as a docker service.

* `provision-keycloak.sh` - Installs Keycloak.

* `deploy-keycloak-vm.sh` - Deploys the OAuth service (Keycloak) on the VM. The Keycloak service runs outside the swarm.

* `bootstrap-keycloak.sh` - Imports the auth realm and configures Keycloak.

* `deploy-badger.sh` - Deploys the badger service as docker service.

* `deploy-core.sh` - Deploys the core services player, content, actor and learner service as docker services. The content, actor and learner service together form the LMS backend. 


## Mapping Ports 
The following is a list of ports that must be open:

|From server |To server|port| protocal|
|:-----      |:-------|:--------|:------|
|Administration server|All servers|22|TCP|
|ELB|0.0.0.0|80,433|TCP|
|swarm managers subnet|swarm nodes subnet|All|TCP & UDP|
|swarm nodes|Cassandra servers|9042|TCP|
|swarm nodes|Cassandra servers|9042|TCP|
|swarm nodes|Elasticsearch servers| 9200 |TCP|
|swarm nodes|Postgres servers| 5432|TCP|
|swarm nodes|Keycloak| 8080|TCP|

## Badger Setup

1. Run `ssh -i <key path (which you gave in config file)> $(whoami)@$(docker service ps badger-service | grep Runn | awk '{print $4}')` to login to node where badger container is running.  
 Example: `ssh -i ~/ssh_key.pem $(whoami)@$(docker service ps badger-service | grep Runn | awk '{print $4}')`

2. Run `docker exec -it -u root $(docker ps | grep badger | head -n1 | awk '{print $1}') /bin/sh` to login  to the badger container.

3. Move to the directory `cd /badger/code`

4. Run `./manage.py createsuperuser`. Provide a valid username, email ID and password.

5. Install curl.
     `apt-get install curl -y`
     
6. Run the following curl command to get the sunbird badger authorization variable.
     
     `curl -X POST 'http://localhost:8004/api-auth/token' -d "username=<emailid>&password=<password>"`

7. Set the output token of above command as the value for the `vault_sunbird_badger_authorization` in config file. 

## Keycloak Setup

Keycloak is the auth server for sunbird.

In order to make keycloak work with android application, please follow the below steps

1. Open keycloak web ui `https://dns-name/auth`
2. Log in to the admin console using credentials (default uesername : admin and passwod: <keycloak_admin_password given in config>)
3. Navigate to Clients -> Android and delete both redirection urls and update with `https://<dns-name>/oauth2callback`
<img src="pages/developer-docs/installation/images/keycloak-android-redirect.png">
