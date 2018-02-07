## Sunbird installation simplified

This page is the most simple way to install sunbird to a medium scale infra. we'll manage all the fine tuned configurations and you can just sitback and relax for 45 mins.

Else, you can have all the fine grained controls, but have to skip this page and follow the detailed installation steps.

Okay, let's get started.

Prerequisites

**We assume you read the sunbird [infrastructure](medium_scale_deploy.md)**

**We assume you've 2 VMs for application and db with minimum system requirements**
>   Operating System: Ubuntu 16.04 LTS  
    RAM: 7GB  
    CPU: 2 cores, >2 GHz  
    root access (should be able to sudo)


- this script **should run in the application server**

- sudo password less admin user

- You should have git installed
  `sudo apt install git` - for debian/ubuntu

- you should have python on both machines
  `sudo apt install python`

- single ssh key for both application server and db server; If you don't have that please run these commands below
  ```
  ssh-keygen -f sunbird
  scp-copy-id -i sunbird.pub username@localhost
  scp-copy-id -i sunbird.pub username@db_server_ip
  ```
  > this key(sunbird) will be your ssh_key for entire installation setup

- 2 servers [ app <=> db ] should able to ping each other
> If you're in aws, you have to open some ports b/w the security groups,  
for testing we opened all ports b/w these private sec groups

- port 80, 443 accessible from internet for app_server


sunbird installation simplified steps:

- git clone https://github.com/project-sunbird/sunbird-devops

- cd sunbird-devops/deploy

- ./certbot.sh (if you don't have a valid ssl certificate, and have a valid dns name)

- edit all the mandatory fields in  deploy/config file

- ./sunbird_install.sh

**90% is done.** 

just go over to https://dns-name/auth

and plese complete the [keycloak configs](keycloak_realm_configuration.md).

- copy the **jwt token for player** from your home directory (~/jwt_token.txt) and fill it for `ekstep_auth_token`

for example:

`JWT token for player is : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3TRlZmNlYzc0NY0NjBhYzQzNCJ9.VCf69`

- **key, which you got from ekstep**, [genereate a jwt token](https://community.ekstep.in/developer-knowledgebase/45-getting-started-with-apis) using that, and update for `ekstep_api_key`

> how to get [ekstep api keys](https://github.com/project-sunbird/sunbird-commons/wiki/Obtaining-API-token-for-accessing-ekstep-APIs)
- ./sunbird_installation.sh -s core

now please go to 

https://dns-name

Enjoy!!!
