---
type: landing
directory: developer-docs/installation
title: Simplified Server Installation 
page_title: Simplified Server Installation 
description: Instructions for Simplified Server Installation for Sunbird version 1.4 
keywords: Installation, deployment, version 1.4
published: true
allowSearch: true
---

## Overview 

Sunbird version 1.4 onwards has a simplified installation procedure wherein all the fine-tuned configurations that were earlier manually configured, are automatically deployed. The entire installlation process takes approximately 45 minutes. 

You could also choose to follow the detailed installation procedures provided at[Server Installation](http://www.sunbird.org/developer-docs/installation/server_installation/){:target="_blank"}.

### Prerequisites

- Availability of 2 Virtual Machines (VMs) - one for the application server and the other for the database server. Both servers must have the following minimum system requirements:

    - **Operating System:** Ubuntu 16.04 LTS   
    - **RAM:** 7GB   
    - **CPU:** 2 cores, > 2 GHz  
    - **root access** Should be able to sudo

- Access to a Fully Qualified Domain Name (FQDN) For example: test.sunbird.org). 

**Note:** If you're testing Sunbird, you don't have to buy an FQDN. All cloud providers give free domain names for their instances.  
For example, Azure: sunbird-test.centralindia.cloudapp.azure.com. Check with the cloud provider for details.

- A valid [SSL certificate](https://en.wikipedia.org/wiki/Public_key_certificate#TLS/SSL_server_certificate){:target="_blank"} for your domain. 

**Note:** To generate free SSL, use [Let's Encrypt](https://letsencrypt.org/){:target="_blank"} for most common cases. The script does not support some free domain names, provided by cloud providers. For example, the AWS provided free domain names ec2-13-127-177-29.ap-south-1.compute.amazonaws.com, is not supported because of spammers. If the script is not compatible with your cloud provider, purchase a certificate or get a [free one](http://dot.tk){:target="_blank"}.

- A git installation for Debian/Ubuntu

  `apt install git -y`

- Ensure that the two servers - application and DB - are able to ping each other

**Note** If you are in AWS, you have to open a few ports between security groups. To test, we opened all ports between these private security groups.

- Ensure the application server can access port 443 from the internet

- Get the [Ekstep API keys](http://www.sunbird.org/developer-docs/telemetry/authtokengenerator_jslibrary/#how-to-generate-authorization-credentials){:target="_blank"}

### Simplified Sunbird Installation Procedure

1. Log in to your application server using ssh 

2. Clone the sunbird repository using the command:

    `git clone https://github.com/project-sunbird/sunbird-devops`

3. Go to the deploy directory using the command:

  `cd sunbird-devops/deploy`

4. If you do not have a valid ssl certificate and have a valid domain name, get the valid ssl certificate from [Let's Encrypt](https://letsencrypt.org/){:target="_blank"} using the command:
    execute `./certbot.sh`

5. Edit all the mandatory fields in the deploy/config file

6. Install sunbird using the command:

    `./sunbird_install.sh`

7. Open https://[ domain-name ]/auth and complete the [keycloak configuration](http://www.sunbird.org/developer-docs/installation/keycloak_realm_configuration).

8. Copy the value of the `jwt token for player` from **~/jwt_token.txt** file present in your home directory.

9. Paste the same value in the deploy/config file for the **ekstep_auth_token** parameter.

  **For example:**

`JWT token for player is : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3TRlZmNlYzc0NY0NjBhYzQzNCJ9.VCf69`

10. [Genereate a jwt token](https://community.ekstep.in/developer-knowledgebase/45-getting-started-with-apis) using the key provided by the Ekstep infrastructure and update the **ekstep_api_key** parameter in deploy/config file

11. Install the core Sunbird services using the command:

    `./sunbird_installation.sh -s core`

12. Open https://[domain-name] and verify the installation

