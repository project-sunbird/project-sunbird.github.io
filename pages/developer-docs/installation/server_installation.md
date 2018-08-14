---
type: landing
directory: developer-docs/installation/
title: Server Installation
page_title: Server Installation
description: Setting up Sunbird on a server
allowSearch: true
---
 
## Overview

Sunbird software is containerized. The installation script uses the Docker swarm orchestration engine to run the Sunbird docker images. The Docker swarm consists of manager and agent nodes. The containers are run on the agent nodes and the manager nodes manage the container lifecycle.

All the stateless services in Sunbird - Portal, LMS Backend, API Gateway and Proxies - are run as docker containers inside the swarm. All stateful services consisting of Cassandra, PostgreSql, Elasticsearch and the OAuth service(Keycloak) are run on Virtual Machines (VMs) directly. The installation is automated using shell scripts and Ansible.

This page provides you with information on the prerequisites and the sequence of steps to install Sunbird.

## Prerequisites

* Minimum 2 servers with 7 GB RAM, running Ubuntu server 16.04 LTS. You can scale the infrastructure by adding servers. Sunbird is designed to scale horizontally. The servers should connect to each other over TCP on the following [ports](developer-docs/installation/server_installation/#mapping-ports) The scripts do not work on virtual machines created locally (using VMware/VirtualBox) and have been tested on Azure and AWS VMs.

* Recommended that you have a domain name and a valid SSL certificate for the domain. If you do not have a domain name, you can configure Sunbird such that it can be accessed over an IP address. If you have a domain name, and you want to get an SSL certificate, refer <a href="https://letsencrypt.org/" target="_blank">Let's Encrypt</a> to generate a free certificate which is valid for 90 days.

* Sunbird requires EkStep API keys to access the EkStep content repository. Follow the steps <a href="http://www.sunbird.org/developer-docs/telemetry/authtokengenerator_jslibrary/#how-to-generate-authorization-credentials" target="_blank">here</a> to get the keys. If you are creating a test environment, get the QA API keys.

* Create a common linux user (e.g. deployer) on all the servers. Configure this user to use <a href="https://www.digitalocean.com/community/tutorials/how-to-configure-ssh-key-based-authentication-on-a-linux-server" target="_blank">key based ssh</a>. Use an empty passphrase while generating the ssh key to avoid password prompts during installation. Since the installation script uses this key (user) to deploy Sunbird, this user must have **sudo** access on the servers.

* Create an <a href="https://docs.microsoft.com/en-us/azure/storage/common/storage-create-storage-account" target="_blank">Azure storage account</a> to complete the Sunbird installation. This account is used to store QR code images and achievement badges.

* The following table lists the services that are set up and run as part of installation. The table also lists the optimal server count for a typical staging or production environment with thousands of users.

    |Server Name |Suggested Servers per Environment|Basic Requirement| Maximum Servers |
    |:-----      |:--------|:--------------------------------|:---------  |
    |Docker swarm manager<sup>1</sup> | Staging - 1 <br> Prod - 3 | CPU: 1core & RAM: 2GB |Any  |
    |Docker swarm  agent nodes<sup>1</sup>   | Staging - 1 <br> Prod - 3 |CPU: 2core & RAM: 6GB| Any |
    |Elasticsearch<sup>2</sup>        |Staging - 1 <br> Prod- 3 |CPU: 1core & RAM: 3GB| Any |
    |Postgres master<sup>2</sup>      | Staging&Prod - 1 |CPU: 1core & RAM: 3GB|1 |
    |Postgres slave<sup>2</sup>       | Staging&Prod - 1 |CPU: 1core & RAM: 3GB|1 |
    |Cassandra<sup>2</sup>            |Staging&Prod - 1 |CPU: 1core & RAM: 3GB| 1 |
    |Keycloak<sup>1</sup> | Staging&Prod - 1|CPU: 1core & RAM: 4GB|Any |

* When you install Sunbird on 2 servers, all services with a common superscript (e.g. servername<sup>2</sup>) for the Server Name are run on the same server. The App server runs services with superscript <sup>1</sup> and the DB server runs services with superscript <sup>2</sup>. 

#### Mapping Ports 

The following is a list of ports that must be open:

|From server |To server|port| protocol|
|:-----      |:-------|:--------|:------|
|Administration server|All servers|22|TCP|
|ELB/Internet|0.0.0.0|80,443|TCP|
|swarm managers subnet|swarm nodes subnet|All|TCP & UDP|
|swarm nodes|Cassandra servers|9042|TCP|
|swarm nodes|Elasticsearch servers| 9200 |TCP|
|swarm nodes|Postgres servers| 5432|TCP|
|swarm nodes|Keycloak| 8080|TCP|

**Note:** If you setup more than one swarm agent node, you will need to configure a load balancer to spray the incoming requests to all the agent nodes. All agent nodes in a swarm route the request to the right service.

## Supported application versions

  | Application |Version|
  |:-----      |:--------|
  |Docker | 17.06, 18.03|
  |Elasticsearch        | 5.4 |
  |Postgres | 9.5 |
  |Cassandra            | 3.9 |


## Installation Procedure

**Note:** Choose one docker swarm manager VM as the installation server and execute the following steps from that server. If you are installing Sunbird on two servers, execute the steps from the app server. 

1. Install git using `sudo apt-get update -y && sudo apt-get install git -y ` 

2. Run `git clone https://github.com/project-sunbird/sunbird-devops.git`

3. `cd sunbird-devops`

4. Checkout the latest release branch `git checkout tags/release-1.8.2 -b release-1.8.2`

5. `cd deploy`

6. Update the configuration parameters in the `config` file. 
  
   The configuration parameters are explained in the following table: 

   | Variable Name | Description   | Mandatory|                                                                         
   |-------------- |---------------|----------|
   | **env**    | The environment name being deployed. For example; development, test, staging, production, etc. |yes|
   | **implementation_name** | Name of your sunbird implementation.|yes|  
   | **ssh_ansible_user**  | The SSH user name that has sudo access to all servers.      |yes|
   | **ansible_private_key_path** | The path of the private SSH key file for the ssh_ansible_user. Ansible uses this file to SSH to the servers.        |yes|
   | **dns_name**    | The domain name or IP address of your installation. Provide the IP address, if want to access Sunbird over a network or if you do not have a domain name.     |yes|
   | **proto**        | The protocol to be used. This is either http or https. Use http if the value of the **dns_name** variable is an IP address or if you have a domain but do not want SSL for trials.              |yes|
   | **cert_path**        | Path to the .cert file in the SSL certificate for nginx. This variable is not mandatory, if the value of the **proto** variable is set to http.              |no|
   |**key_path**           | Path to .key file  in the SSL certificate for nginx. This variable is not mandatory, if the value of the **proto** variable is set to http.           |no|
   |**ekstep_api_key**           |The JWT token generated by the key,secret produced from Ekstep |yes|
   |<a href="developer-docs/configuring_sunbird/sso_publickey" target="_blank">sso_password</a>          |  The password for the keycloak SSO user. The default user is **user-manager**. You can change it from the Keycloak GUI            |yes|
   |**keycloak_admin_password**           |The Keycloak admin console password. The default admin username is **admin**. You can change it from the Keycloak GUI              |yes|
   |**trampoline_secret**           |The trampoline secret for Keycloak. The secret must be a minimum of 8 characters   |no|
   |**app_address_space**         | The application server address space. For example, 10.3.0.0/24)   |yes|
   |**ekstep_api_base_url**           | The base URL for all EkStep APIs. The URL for staging is: https://qa.ekstep.in/api and production is: https://api.ekstep.in              |yes|
   |**ekstep_proxy_base_url**        |  The proxy URL for EkStep. The URL for staging is: https://qa.ekstep.in  and production: https://community.ekstep.in |yes|
   | **sudo_passwd**       |The sudo password. If the ansible user has one, the value should be specified here. The sudo password should be the same for all servers. Else, the parameter can be blank.                  |no|
   |**database_host**           | The private IP address of the DB server               |no|
   |**database_password**       |  The common password for all the databases |no|
   |**elasticsearch_host**       |A comma-separated (,) list of Elasticsearch database IP addresses. |no|
   |**cassandra_host**           |The IP address of the Cassandra database.              |no|
   |**postgres_master_host**         | The IP address of the Postgres master database             |no|
   |**postgres_slave_host**           | The IP address of the Postgres slave database. If you do not need a slave node, specify the IP address of the master.            |no|
   |**swarm_manager_host**           |A comma-separated (,) list of the IP addresses of swarm managers.                |no|
   |**swarm_node_host**           | A comma-separated (,) list of swarm node IP addresses .             |no|
   |**keycloak_host**           | A comma-separated (,) list of Keycloak IP addresses.              |no|
   |**sunbird_azure_storage_account**  | The Azure storage account for the badger service     |yes|
   |**sunbird_azure_storage_key**  | The Azure storage key for the badger service    |yes|
   |**sunbird_image_storage_url**| The Azure image url for the badger service |yes|
   |**sunbird_installation_email**| The Sunbird installation email ID |no|
   |**sunbird_telemetry_pdata_id**| The Sunbird telemetry pdata ID, for example <br> {env}.{implimentation_name}.learning.service |no|
   |**backup_storage_key**| The storage key for the Elasticsearch backup |yes|
   |**badger_admin_password**| The password for the badger administrator |yes|
   |**badger_admin_email**| The email ID of the badger administrator |yes|   
   |**mail_server_host**| The ID of the mail server host used to send alerts |no|   
   |**mail_server_port**| mail server port used by mail server for alerting  |no|   
   |**mail_server_username**| username of mail |no|   
   |**mail_server_password**| password of mail |no|   
   |**vault_postgres_exporter_password**| postgres vault exporter password |no|   
   |**grafana_admin_password**| password for grafana dashboard |no|   
   |**monitor_alerts_slack_url**| slack app webhook url  |no|   
   |**monitor_alerts_slack_channel**| list of emails to send alerts |no|   
   |**vault_proxy_prometheus_admin_creds**| prometheus admin password |no|   
   |**proxy_prometheus**| Setting up Prometheus Proxy |no| 
   |**sunbird_sso_publickey**| For creation of User, http://<dns_name>/auth -> realm settings -> keys -> public keys (click on public keys) and paste the value |yes| 
   |**sunbird_default_channel**| channel name with which you are creating the organization |yes| 

7. Run the script `./sunbird_install.sh`. This script sets up the infra setup from  stage 1 to stage 6 in a sequence as mentioned in the following table: 

   |Stage no |Stage name|Description| 
   |:-----      |:-------|:--------|
   |1 |config |Generates configuration file and hosts file |
   |2|dbs|Installs all databases and creates schema  |
   |3|apis|Sets up API manager kong and Onboard API's and consumer's  |
   |4|proxy|Deploys and configures Nginx|
   |5|keycloak| Deploys and configures Keycloak |
   |6|badger|Deploys the badger service|
   |7|core|Deploys all core services|
   
     **Note:** The badger service does not work without an Azure storage account name and key.

8. Get the public key from keycloak <b>http://<dns_name or IP>/auth -> Administration console -> realm settings -> keys -> public keys</b>  (click on public keys) and set it for `sunbird_sso_publickey` parameter in `config` file. Now, execute the command `./sunbird_install.sh -s core` to redeploy the core services 

      
      **Note:**
     
      - If you want to re-run particular stage in the installation, execute `./sunbird_install.sh -s <stage name>` 
       
      - To know more about the script `sunbird_install.sh` [refer](developer-docs/installation/server_installation/#sunbird-install-script) to the section [below](developer-docs/installation/server_installation/#sunbird-install-script">below)
 
## Post Installation Configuration

1. **Create user access token** - To create a user access token you should execute the following cURL: 

   <pre>
   curl -X POST {dns_name}    /auth/realms/sunbird/protocol/openid-connect/token \
   -H 'cache-control: no-cache' \
   -H 'content-type: application/x-www-form-urlencoded' \
   -d 'client_id=admin-cli&username=user-manager&password={password}&grant_type=password'
   </pre>

   <br>The values in the { } braces should be replaced with your environment values
   
   - {dns_name} - Domain or the IP address of your application server_installation
   - {password} - Password of the `user-manager` user. The one you have provided for `sso_password` parameter in the `config` file above

2. **Create root organization** - To create a root organization you should the following cURL: 

   <pre>
   curl -X POST  \
   {dns_name}/api/org/v1/create \
   -H 'Cache-Control: no-cache' \
   -H 'Content-Type: application/json' \
   -H 'accept: application/json' \
   -H 'authorization: Bearer {jwt token from ~/jwt_token_player.txt}' \
   -H 'x-authenticated-user-token: {access token created last step}' \
   -d '{
   "request":{
     "orgName": "{Your Organization Name}",
     "description": "{Your organization description}",
     "isRootOrg":true,
     "channel":"{Your Channel Name}"
    }
    }'
    </pre>

      **Note:** Channel should be a unique name across Sunbird instances who are using the EkStep content repository
    
3. Update `sunbird_default_channel` in the `config` file with **Your Channel Name}** (that was created in previous step) and re-run the command `./sunbird_install.sh -s core`

4. Run `./sunbird_install.sh -s posttest`, to validate all the services for a successful installation. On executing the script, a file **postInstallationLogs.log** in the **logs** directory will be created 

5. Open **https://[domain-name]** and sign up  

6. You may choose your own user name and password. The format for the username while login is: username@channelName 

## Sunbird Install Script 

The Sunbird installation script `./sunbird_install.sh` is a wrapper shell script that invokes other scripts or Ansible playbooks. It fetches all the docker images from the Sunbird DockerHub repository. 

* `sanity.sh` - Basic Sunbird prerequisites check. 

* `install-deps.sh` - Installs Ansible v2.4.1.0 on the installation server to provision and deploy Sunbird. This script also sets up the docker swarm.

* `generate_config.sh` - Creates a workspace for the installation and sets up necessary config files. 

* `generate_hosts.sh` - Creates a hosts file (Ansible file format) dynamically to run the Ansible scripts.   

* `install-dbs.sh` - Installs Cassandra, Elasticsearch and Postgres databases.

* `init-dbs.sh` - Sets up the required schema for Cassandra, Elasticsearch and Postgres databases.

* `deploy-apis.sh` - Deploys the api gateway (Kong) as a docker service using Ansible. 

* `deploy-proxy.sh` - Deploys the proxy (Nginx) as a docker service.

* `provision-keycloak.sh` - Installs Keycloak.

* `deploy-keycloak-vm.sh` - Deploys the OAuth service (Keycloak) on the VM. The Keycloak service runs outside the swarm.

* `bootstrap-keycloak.sh` - Imports the auth realm and configures Keycloak.

* `deploy-badger.sh` - Deploys the badger service as docker service.

* `deploy-core.sh` - Deploys the core services player, content, actor and learner service as docker services. The content, actor and learner service together form the LMS backend. 
