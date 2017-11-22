---
type: landing
directory: developer-docs/installation/
title: Set up Application and Core services
page_title: Set up Application and Core services
description: Set up Application and Core services
allowSearch: true
---

For Setting up the Application and the core services :

 Follow the process 

1. SSH into `admin-server`. 

**Note :** If you have used automated scripts used here, then this server would be `vm-1`.

2. Clone the sunbird-devops repo using `git clone [https://github.com/project-sunbird/sunbird-devops.git`](https://github.com/project-sunbird/sunbird-devops.git`).
3. Copy over the configuration directory from the database server(`<implementation-name>-devops`) to this machine.
4. Modify all the configurations under `# APPLICATION CONFIGURATION` block.
5. The automated setup also creates a proxy server, it requires a SSL certificate. 
6. Details of the certificates must be added in the configuration. 

**Note:** If you don't have SSL certificates, to get started you can generate and use Self signed certificates .The walkthrough for generating one can be found here:

 [self-signed certificates]([https://en.wikipedia.org/wiki/Self-signed_certificate){:target="_blank"}](https://en.wikipedia.org/wiki/Self-signed_certificate){:target=\"_blank\"}).
7. Run `cd sunbird-devops/deploy` in console 

Executing the following command will install the dependencies.
8. Run `sudo ./install-deps.sh`. 

Executing the following command will onboard various APIs and consumer groups.
9. Run `sudo ./deploy-apis.sh <implementation-name>-devops/ansible/inventories/<environment-name>`. 

**Note:** The following steps are necessary only when the application is being deployed for the first time and could be skipped for subsequent deploys.

10. deploy-apis.sh script will print a JWT token that needs to be updated in the application configuration. 
11. To find the token search the script output , and look for the string. "JWT token for player is :", 
12. Copy the corresponding token,
Example output of token is below:
<pre>

  changed: [localhost] => {"changed": true, "cmd": "python /tmp/kong-api-scripts/kong_consumers.py

  /tmp/kong_consumers.json ....... "

  JWT token for player is :

      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJlMzU3YWZlOTRmMjA0YjQxODZjNzNmYzQyMTZmZDExZSJ9.L1nIxwur1a6xVmoJZT7Yc0Ywzlo4v-pBVmrdWhJaZro", 

  "Updating rate_limit for consumer player for API cr......"]}
 </pre>

Now as token has been copied , Proceed with the following steps:
1.  Update `sunbird_api_auth_token` in your configuration with the above copied token.
2. Update `sunbird_ekstep_api_key` in your configuration with the API token obtained from ekstep portal

The following script creates the keycloak username,groupname and keycloak service on virtual machine. Keycloak is deployed on vm. 
3. RUN `./provision-keycloak.sh <implementation-name> devops/ansible/inventories/<environment-name>`.
4. Update variables in the config  ` <implementation-name>-devops/ansible/inventories/<environment-name>/group_vars/<environment-name>`.

<pre>
    keycloak_password: (which admin initial password)
    keycloak_theme_path: ex- path/to/the/nile/themes. 
</pre>

#### Update the following configuration files 

<pre>
Login to the keycloak admin console, goto the clients->admin-cli->Installation->Select json format
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
