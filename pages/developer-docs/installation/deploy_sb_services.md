---
type: landing
directory: developer-docs/installation/
title: Deploying Sunbird Services
page_title: Deploying Sunbird Services
description: Deploy Sunbird services
allowSearch: true
---

The Sunbird application consists of multiple services, each service serves a specific purpose. All services except keycloak are set up using Docker. 

The following steps will install docker, pull the required images and create services based on those images.

## Preparation to Setup Application

- SSH into the application server. If you have used automated scripts as described in the previous steps, then this server would be vm-1
- Clone the Sunbird-devops repo using `git clone https://github.com/project-sunbird/sunbird-devops.git`
- Copy over the generated configuration directory from the DB server`{implementation-name}-devops` to your machine
- Modify all the configurations under **#APPLICATION CONFIGURATION** block.
- The automated setup also creates a proxy server and like all proxy servers, it requires a SSL certificate. Ensure that you have a certificate and the key for the domain that you wish to use.
- Run `cd sunbird-devops/deploy && sudo ./install-deps.sh` to install the dependencies.

## API Manager services

- Run `sudo ./deploy-apis.sh {implementation-name}-devops/ansible/inventories/{environment-name}`.This will set up the API Manager services.

**Note:** The following steps are necessary only when the application is being deployed for the first time and should be skipped for subsequent deploys.

- `deploy-apis.sh` script will print a JWT token that needs to be updated in the application configuration. 
- To find the token search the script output to look for "JWT token for player is :"
- Copy the corresponding token. 
- For reference check the example output as follows

<pre>
changed: [localhost] => {"changed": true, "cmd": "python /tmp/kong-api-scripts/kong_consumers.py /tmp/kong_consumers.json....
"JWT token for player is :                            
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJlMzU3YWZlOTRmMjA0YjQxODZjNzNmYzQyMTZmZDExZSJ9.
L1nIxwur1a6xVmoJZT7Yc0Ywzlo4vpBVmrdWhJaZro", "Updating rate_limit for consumer player for API cr......"]}
</pre>

- Update `sunbird_api_auth_token` in your configuration with the copied token.

- Update `sunbird_ekstep_api_key` in your configuration with the API token obtained from ekstep portal. 

For API keys you can refer [here](developer-docs/installation/medium_scale_deploy#api-keys){:target="_blank"}

## Proxy services

- To deploy the Sunbird proxy services, execute the following command:

  Run `sudo ./deploy-proxy.sh {implementation-name}-devops/ansible/inventories/{environment-name}`

## Provisioning Keycloak 

**Note:** Sunbird uses Keycloak as the identity and authentication provider. 

The Keycloak is deployed on a virtual machine (VM). You can deploy the Keycloak by following steps:

- Run the following script to create the keycloak username, groupname and also to servicify keycloak services on VM

  <pre>
  ./provision-keycloak.sh {implementation-name}-devops/ansible/inventories/{environment-name}
  </pre>

- Update the following variables in the config path `{implementation-name}-devops/ansible/inventories/{environment-name}/group_vars/{environment-name}`  

  <pre>
  keycloak_password: (with admin initial password)
  keycloak_theme_path: ex- path/to/the/nile/themes. 
  Sample themes directory of sunbird is [here](https://github.com/project-sunbird/sunbird-devops/tree/master/ansible/artifacts){:target="_blank"}
  </pre>

`sudo ./deploy-keycloak-vm.sh {implementation-name}-devops/ansible/inventories/{environment-name}`

- Follow the [instructions](developer-docs/installation/keycloak_realm_configuration) to setup auth realm in keycloak.

 **Update following configs** 

<pre>
Login to the keycloak admin console, goto the clients->admin-cli->Installation->Select json format
sunbird_sso_client_id: # Eg: admin-cli
sunbird_sso_username: # keycloak user name
sunbird_sso_password: # keycloak user password

Login to the keycloak admin console, goto the clients->portal->Installation->Select json format
keycloak_realm:  # Eg: sunbird
sunbird_keycloak_client_id: # Eg: portal

Login to the keycloak admin console, goto the clients->trampoline->Installation->Select json format
sunbird_trampoline_client_id:  # Eg: trampoline
sunbird_trampoline_secret:     # Eg: HJKDHJEHbdggh23737
</pre>

  **Ensure the following configurations are updated** 

- Environment Configuration
- Application Server Configuration
- Advanced Configuration

## Core services

- To deploy the Sunbird core services, execute the following command:

  Run `sudo ./deploy-core.sh {implementation-name}-devops/ansible/inventories/{environment-name}`
  
