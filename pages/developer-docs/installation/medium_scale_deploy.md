---
type: landing
directory: developer-docs/installation/
title: Medium Scale Deployment
page_title: Medium Scale Deployment
description: About how developer can deploy
allowSearch: true
---

## Pre-requisites

You will need servers with the following minimum system requirements:

   - Operating System: Ubuntu 16.04 LTS
   - RAM: 7GB
   - CPU: 2 core, >2 GHz
   - root access (should be able to sudo)

## Variables relevant to deployment

   - **implementation-name** - Name of your sunbird implementation. Let's say for the sake of this document, it is `ntp`. As you may know, National Teacher Platform aka Diksha is also a Sunbird implementation.
   - **environment-name** - Name of the environment you are deploying. Typically, it is one of development, test, staging, production, etc. For this document, lets say we are setting up a `production` environment.

**Step 1: Provisioning your servers**

For a non production setup, you could skip the automation and proceed to the manual steps. If however, you are setting up Sunbird and are not sure if you are setting up the infrastructure correctly, or if you plan to roll out your implementation to serious users, automation can help you setup your environment the same way we set it up.

- **Automated**

The following set of scripts create the network and servers needed to run Sunbird. With the default configuration, you will be creating 3 servers, with the above-mentioned min. requirement. A little knowledge about Azure: VNet, Resource Group, etc would help but is not necessary.

- **Automation for Azure**

Run Time: 30 mins first time. Scripts can be re-tried and will not create a new set of servers every time. Some configurations cannot be changed, for instance, the server type. However, you can add/reduce the number of servers and re-run if you want to scale up or down.

Run the following steps from a machine which is connected to the internet:

   - Clone the sunbird-devops repo using `git clone https://github.com/project-sunbird/sunbird-devops.git`
   - Run `./sunbird-devops/deploy/generate-config.sh ntp production cloud` This will create config files for you in `./ntp-devops/test/azure`. Here, `ntp` is the **implementation-name** and `production` is the **environment-name**.
   - Edit BOTH the new config files `azuredeploy.parameters.json` and `env.sh` as per your requirements for the app.
   -  Edit the new config files `azuredeploy.parameters.json` and `env.sh` as per your requirements for the db.
   - Run `export APP_DEPLOYMENT_JSON_PATH=<absolute path of azuredeploy.parameters.json>`. For instance, on my laptop it is `export DEPLOYMENT_JSON_PATH=/Users/shashankt/code2/sunbird/ntp-devops/production/azure/app`
   - Run `export DB_DEPLOYMENT_JSON_PATH=<absolute path of azuredeploy.parameters.json>`. For instance, on my laptop it is `export DEPLOYMENT_JSON_PATH=/Users/shashankt/code2/sunbird/ntp-devops/production/azure/db`
   - Run `cd sunbird-devops/deploy`
   - Run `./provision-servers.sh`
   - Login to Azure when CLI instructs
   - Wait for deployment to complete
   - Check on Azure portal: Resource Group -> Deployments -> Click on deployment to see deployment details.
   - Try to SSH. If your `masterFQDN` from deployment details was `production-1a.centralindia.cloudapp.azure.com` you can ssh using `ssh -A ops@production-1a.centralindia.cloudapp.azure.com`
   - If you could SSH, you have successfully created the server platform.

- **Automation walkthrough**

    - [Part 1](https://sunbirdpublic.blob.core.windows.net/installation/demo/demo-1.gif){:target="_blank"}

    - [Part 2](https://sunbirdpublic.blob.core.windows.net/installation/demo/demo-2.gif){:target="_blank"}

- **Manual**

Need commissioning of two servers.The 1st server would serve as the DB server and the 2nd would serve as the application server & administration server. 

**Note:** the default automation creates three servers because it separates the application and the administration server.

**Step 2:** Setup your DBs

You are free to either use existing DBs, create DBs manually or run the following automation scripts to create them. The DBs Sunbird uses are:

   - Cassandra
   - Postgres
   - Mongo
   - Elasticsearch

- Preparation

Run the following steps starting from your local machine:

- SSH into the `db-server`. If you have not edited the default configuration, then the name of the DB VM would be `db-1`. Automated setup does not expose the DB to the Internet, so to SSH into the DB, you will need to SSH to `vm-1` (check out `masterFQDN` above) with `ssh -A` (key forwarding) and then SSH to `db-1`.
- Clone the sunbird-devops repo using `git clone https://github.com/project-sunbird/sunbird-devops.git`
- Run `./sunbird-devops/deploy/generate-config.sh <implementation-name> <environment-name>`. Example `./sunbird-devops/deploy/generate-config.sh ntp production deploy`. This creates `ntp-devops` directory with *incomplete* configurations. You will need to supply missing configuration.
- Modify all the configurations under `# DB CONFIGURATION` block in `<implementation-name>-devops/ansible/inventories/<environment-name>/group_vars/<environment-name>`

**DB creation**

- Via automation

Run Time: 15-30 mins to prepare and 30 mins to complete.
Following is a set of scripts which install the DBs into the `db-server` and copy over `master` data.

 - Run `cd sunbird-devops/deploy`
 - Run `sudo ./install-dbs.sh <implementation-name>-devops/ansible/inventories/<environment-name>`. 
 
 This script takes 10-15 mins (in an environment with fast internet) and will install the databases.

- Manual creation

Refer to DB user guides.

**Step 3: Initialize DBs**

 - Run `sudo ./init-dbs.sh <implementation-name>-devops/ansible/inventories/<environment-name>` to initialize the DB.

- Automation Walkthrough

   - [Part 4](https://sunbirdpublic.blob.core.windows.net/installation/demo/demo-4.gif){:target="_blank"}

**Step 4: Setup Application and Core services**

- SSH into `admin-server`. If you have used automated scripts used here, then this server would be `vm-1`.
- Clone the sunbird-devops repo using `git clone https://github.com/project-sunbird/sunbird-devops.git`
- Copy over the configuration directory from the DB server(`<implementation-name>-devops`) to this machine
- Modify all the configurations under `# APPLICATION CONFIGURATION` block
- The automated setup also creates a proxy server and like all proxy servers, it will require a SSL certificate. Details of the certificates have to added in the configuration. 

**Note:** If you don't have SSL certificates and want to get started you could generate and use [self-signed certificates](https://en.wikipedia.org/wiki/Self-signed_certificate){:target="_blank"}.

- Run `cd sunbird-devops/deploy`
- Run `sudo ./install-deps.sh`. This will install dependencies.
- Run `sudo ./deploy-apis.sh <implementation-name>-devops/ansible/inventories/<environment-name>`. This will onboard various APIs and consumer groups.

**Note:** Next 2 steps are necessary only when the application is being deployed for the first time and could be skipped for subsequent deploys.

- deploy-apis.sh script will print a JWT token that needs to be updated in the application configuration. To find the token search the script output to look for "JWT token for player is :", copy the corresponding token. Example output of token is below:
<pre>
  changed: [localhost] => {"changed": true, "cmd": "python /tmp/kong-api-scripts/kong_consumers.py
  /tmp/kong_consumers.json ....... "
  JWT token for player is :
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJlMzU3YWZlOTRmMjA0YjQxODZjNzNmYzQyMTZmZDExZSJ9.L1nIxwur1a6xVmoJZT7Yc0Ywzlo4v-pBVmrdWhJaZro", 
  "Updating rate_limit for consumer player for API cr......"]}
 </pre>

- Update `sunbird_api_auth_token` in your configuration with the above copied token.
- Update `sunbird_ekstep_api_key` in your configuration with the API token obtained from ekstep portal
- Keycloak is deployed on vm. RUN `./provision-keycloak.sh <implementation-name>-devops/ansible/inventories/<environment-name>` this script creates the keycloak username,groupname and servicify keycloak service on vm.
- Update below variables in the config 

   ` <implementation-name>-devops/ansible/inventories/<environment-name>/group_vars/<environment-name>`.

   <pre>
    keycloak_password: (which admin initial password)
    keycloak_theme_path: ex- path/to/the/nile/themes. 
   </pre>
   
Sample themes directory of sunbird can be seen [here](https://github.com/project-sunbird/sunbird-devops/tree/master/ansible/artifacts){:target="_blank"}
   

- Run `sudo ./deploy-keycloak-vm.sh <implementation-name>-devops/ansible/inventories/<environment-name>`.

- Update following configs

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

### Additional config to customize Sunbird instance

Sunbird supports customization of home page, logo, and fav icon for the portal. The customizations can be loaded by mounting the volume containing the customizations into the docker container.

- Uncomment and set the value for the variable `player_tenant_dir` in `<implementation-name>-devops/ansible/inventories/<environment-name>/group_vars/<environment-name>`. For example, `player_tenant_dir: /data/extensions/tenant`.
  
 **NOTE**: If the variable `player_tenant_dir` is commented, the volume will not be mounted and customizations will not be loaded.

- Create the above folder (e.g. /data/extensions/tenant) on all the docker swarm nodes. Permissions of the folder should be `mode=0775`,`user=root` and `group=root`.

### Deploying Sunbird services

- Run `sudo ./deploy-core.sh <implementation-name>-devops/ansible/inventories/<environment-name>`. This will setup all the sunbird core services.
- Run `sudo ./deploy-proxy.sh <implementation-name>-devops/ansible/inventories/<environment-name>`. This will setup sunbird proxy services.

- Automation Walkthrough

    - [Part 5](https://sunbirdpublic.blob.core.windows.net/installation/demo/demo-5.gif){:target="_blank"}

    - [Part 6](https://sunbirdpublic.blob.core.windows.net/installation/demo/demo-6.gif){:target="_blank"}

    - [Part 7](https://sunbirdpublic.blob.core.windows.net/installation/demo/demo-8.gif){:target="_blank"}

**Step 5: Check Installation**

- Browse Sunbird Portal by accessing https://{proxy_server_name}/ (publicly accessible URL, it could be the load balancer URL or the actual domain name for production).

**Step 6: Generate key and secrets for mobile app**

This is required only if you are planning to release your own mobile app using sunbird mobile app codebase.

- Execute & run `sudo ./deploy-apis.sh <implementation-name>-devops/ansible/inventories/<environment-name>`
- In console output of above script, copy the JWT token printed for `mobile_admin` user
- Run it.

	<pre>
		curl -X POST \
		  (sunbird-base-url)/api/api-manager/v1/consumer/mobile_app/credential/register \
		  -H 'authorization: Bearer (mobile_admin_jwt_token)' \
		  -H 'content-type: application/json' \
		  -d '{
		  "request": {
			"key": "(implementation-name)-mobile-app-(version-number)"
		  }'
		}
	</pre>

	Result will be

	<pre>
		{"result":{"key":"(implementation-name)-mobile-app-(version-number)","secret":"(secret)"}}
	</pre>

- Use the value of "key" and "secret" from the response above for `MOBILE_APP_KEY` and `MOBILE_APP_SECRET` configuration in mobile app

**Step 7: Upgrade with a new version of Sunbird**

To update/redeploy sunbird please follow these steps:

- Update the Sunbird image versions to latest gold version (e.g. `PLAYER_VERSION`).
- Update the configuration as per Sunbird release notes.
- Run `cd sunbird-devops/deploy`
- Run `sudo ./deploy-apis.sh /ansible/inventories/`. This will onboard various APIs and consumer groups.
- Run `sudo ./deploy-core.sh /ansible/inventories/`. This will setup all the sunbird core services.
- Run `sudo ./deploy-proxy.sh /ansible/inventories/`. This will setup sunbird proxy services.

**Step 8: Customize assets**

This section is under process and will explain how to give a custom look and feel for Sunbird.

