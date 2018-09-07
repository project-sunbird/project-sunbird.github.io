---
type: landing
directory: developer-docs/server-installation/
title: Installation
page_title: Installation
description: Prerequisites for setting up Sunbird on a server
allowSearch: true
---

## Installation
This section details the procedures for installing auxilliary services and validating the installation.


### Installing Auxilliary Services

Run the installation script 

    ./sunbird_install.sh

The installtion script runs through the following steps

|Stage no |Stage name|Description| 
|:-----      |:-------|:--------|
|1 |config |Generates configuration file and hosts file |
|2|dbs|Installs all databases and creates schema  |
|3|apis|Sets up API manager kong and Onboard API's and consumer's  |
|4|proxy|Deploys and configures Nginx|
|5|keycloak| Deploys and configures Keycloak |
|6|badger|Deploys the badger service|
|7|core|Deploys all core services|
   
> Note: The badger service does not work without an Azure storage account name and key which you have setup earlier

### Getting Authentication Certificate

Get the public key from keycloak <b>http://<dns_name or IP>/auth -> Administration console -> realm settings -> keys -> public keys</b>  (click on public keys) and set it for `sunbird_sso_publickey` parameter in `config` file.

### Installing Core Services

To deploy the core services with the authentication certificate, execute:

    ./sunbird_install.sh -s core
     
> Note:
>  - Running the installer script with `-s <stage name>` runs only that stage of the installation.
> 
>  - To know more about the script `sunbird_install.sh` [refer](developer-docs/installation/server_installation/#sunbird-install-script) to the section [below](developer-docs/installation/server_installation/#sunbird-install-script">below)


## Post Installation Configuration

### Setup

<br>1. **Create user access token** - To create a user access token you should execute the following cURL: 

    curl -X POST {dns_name}    /auth/realms/sunbird/protocol/openid-connect/token \
    -H 'cache-control: no-cache' \
    -H 'content-type: application/x-www-form-urlencoded' \
    -d 'client_id=admin-cli&username={user-manager}&password={password}&grant_type=password'

<br>The values in the { } braces should be replaced with your environment values
   
   - {dns_name} - Domain or the IP address of your application server_installation
   - {password} - Password of the `user-manager` user. The one you have provided for `sso_password` parameter in the `config` file above

<br>2. **Create root organization** - To create a root organization you should execute the following cURL: 

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

> Note: Channel should be a unique name across Sunbird instances using the EkStep content repository
>  - If ~/jwt_token_player.txt file missing then rerun `./sunbird_install.sh -s apis` to recreate it


<br>3. Update `sunbird_default_channel` in the `config` file with **Your Channel Name}** (that was created in previous step)

    ./sunbird_install.sh -s core


### Validation

To validate all the services for a successful installation run 
    
    ./sunbird_install.sh -s posttest

On executing the script, a file `logs/postInstallationLogs.log` will be created 

1. Open `https://[domain-name]/` and sign up  

2. You may choose your own user name and password. The format for the username while login is: username@channelName 


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
