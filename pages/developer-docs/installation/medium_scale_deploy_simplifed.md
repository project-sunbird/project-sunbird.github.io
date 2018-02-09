## Sunbird installation simplified

This page is the most simple way to install sunbird to a medium scale infra. we'll manage all the fine tuned configurations and you can just sitback and relax for 45 mins.

Else, you can have all the fine grained controls, but have to skip this page and follow the detailed installation steps.

Okay, let's get started.

---
### Prerequisites

- We assume you've 2 VMs. one for application and other for db with minimum system requirements

  > Operating System: Ubuntu 16.04 LTS   
    RAM: 7GB   
    CPU: 2 cores, >2 GHz  
    root access (should be able to sudo)

- A FQDN(Fully qualified domain name eg: test.sunbird.org). 
If you're testing sunbird, you don't have to buy FQDN, as all cloud providers give free domain names for their instances.
for example, Azure: sunbird-test.centralindia.cloudapp.azure.com. Please check with the cloud provider for more details.

- [SSL certificate](https://en.wikipedia.org/wiki/Public_key_certificate#TLS/SSL_server_certificate) for your domain. We're providing a script to generate free ssl using [Let's Enceypt](https://letsencrypt.org/) for most common cases. But some free domain names, provided by cloud providers are not supported (eg: aws provided free domain names ec2-13-127-177-29.ap-south-1.compute.amazonaws.com, becuse of spammers ). If our script is not compatible with your cloud provider, please purchase or get a [free one](http://dot.tk).

- this installation script **should run in the application server**

- You should have git installed. 
  `sudo apt install git` - for debian/ubuntu

- 2 servers [ app <=> db ] should able to ping each other
  > If you're in aws, you have to open some ports b/w the security groups,  
    for testing we opened all ports b/w these private sec groups

- port 443 accessible from internet for app_server

---

### sunbird installation simplified steps:

- git clone https://github.com/project-sunbird/sunbird-devops

- cd sunbird-devops/deploy

- ./certbot.sh (if you don't have a valid ssl certificate, and have a valid domain name)

- edit all the mandatory fields in  deploy/config file

- ./sunbird_install.sh

**90% is done.** 

  just go over to https://domain-name/auth

  and plese complete the [keycloak configs](http://www.sunbird.org/developer-docs/installation/keycloak_realm_configuration).

- - copy the **jwt token for player** from your home directory (~/jwt_token.txt) and fill it for `ekstep_auth_token`

for example:

`JWT token for player is : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3TRlZmNlYzc0NY0NjBhYzQzNCJ9.VCf69`

- - **key, which you got from ekstep**, [genereate a jwt token](https://community.ekstep.in/developer-knowledgebase/45-getting-started-with-apis) using that, and update for `ekstep_api_key`

  > how to get [ekstep api
  > keys](https://github.com/project-sunbird/sunbird-commons/wiki/Obtaining-API-token-for-accessing-ekstep-APIs)

- ./sunbird_installation.sh -s core

now please go to 

https://domain-name

Enjoy!!!
