---
type: landing
directory: developer-docs/server-installation/
title: Installation
page_title: Installation
description: Prerequisites for setting up Sunbird on a server
allowSearch: true
---

## Installation
This section details the procedures for installing auxilliary services and validating the installation

### Installing Auxilliary Services

Run the installation script 

    cd (path to top level folder of folder where the installer is located)
    ./sunbird_install.sh

The installtion script runs through the following steps

|Stage name|Description| 
|:-------|:--------|
|config |Generates configuration file and hosts file |
|dbs|Installs all databases and creates schema  |
|apis|Sets up API manager kong and Onboard API's and consumer's  |
|proxy|Deploys and configures Nginx|
|keycloak| Deploys and configures Keycloak |
|badger|Deploys the badger service|

> Note: The badger service does not work without an Azure storage account name 

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
After completion of Sunbird installation and before it can be used, an API token needs to be created and a top level root organization. The API key is used in REST API commands to authenticate that API calls are being made by an authorized user

### Setup

<br>1. **Create user access token**  (x-authenticated-user-token)

    curl -X POST {host_name}    /auth/realms/sunbird/protocol/openid-connect/token \
    -H 'cache-control: no-cache' \
    -H 'content-type: application/x-www-form-urlencoded' \
    -d 'client_id=admin-cli&username={user-manager}&password={password}&grant_type=password'

The curl command’s response will contain a field called “access token” which will be followed by a long string. That token is called x-authenticated-user token and is required to make API calls

<br>The values in the { } braces should be replaced with values pertinent to your Sunbird environment
   
   - {dns_name} - Domain or the IP address of your application server_installation
   - {password} - Password of the `user-manager` user. The one you have provided for `sso_password` parameter in the `config` file above

<br>2. **Create root organization** - To create a root organization you should execute the following cURL: 

  curl -X POST  
  {dns_name}/api/org/v1/create \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -H 'accept: application/json' \
  -H 'authorization: Bearer {jwt token from ~/jwt_token_player.txt}' \
  -H 'x-authenticated-user-token: {user x-authenticated-user-token}' \
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


<br>3. Update `sunbird_default_channel` in the `config` file with **Your Channel Name}** 

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


Signing up on Sunbird is a seamless process. Once you have successfully installed Sunbird on your server, you can create sing up credentials on the portal. For details on signing up on Sunbird, refer <a href="http://www.sunbird.org/features-documentation/signup/" target="_blank">Sign Up on Sunbird</a>
