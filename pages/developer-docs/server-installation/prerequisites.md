---
type: landing
directory: developer-docs/server-installation/
title: Prerequisites
page_title: Server Installation Prerequisites
description: Setting up Sunbird on a server
allowSearch: true

---

To install Sunbird on your server ensure that you have system admninisrtation rights and a proficieny in working on Linux system and a familiarity with docker for running containerized services.

## Prerequisites
This section explains the minimum prerequisites that must be ensured before installing Sunbird on your server

### API Key

* Sunbird requires EkStep API keys to access the EkStep content repository. For details on how to get access the keys, refer <a href="http://www.sunbird.org/developer-docs/server_installation/ekstep_keys" target="_blank">Ekstep API Keys</a> to get the keys. If you are creating a test environment, get the QA API keys.

### Domain Name

* Recommended that you have a domain name and a valid SSL certificate for the domain
* If you do not have a domain name, you can configure Sunbird such that it can be accessed over an IP address
* If you have a domain name, and you want to get an SSL certificate, refer <a href="https://letsencrypt.org/" target="_blank">Let's Encrypt</a> to generate a free certificate which is valid for 90 days

### SSL Certificate

* Recommended that you have a domain name and a valid SSL certificate for the domain
* If you do not have a domain name, you can configure Sunbird such that it can be accessed over an IP address
* If you have a domain name, and you want to get an SSL certificate, refer <a href="https://letsencrypt.org/" target="_blank">Let's Encrypt</a> to generate a free certificate which is valid for 90 days.

### Hosting Requirements

#### Cloud Servers

* Supported: AWS and Azure

* Minimum 2 servers with 7 GB RAM, running Ubuntu server 16.04 LTS
* You can scale the infrastructure by adding servers. Sunbird is designed to scale horizontally
* The scripts do not work on virtual machines created locally (using VMware/VirtualBox) and have been tested on Azure and AWS VMs

#### Cloud Blob Storage
* Create an <a href="https://docs.microsoft.com/en-us/azure/storage/common/storage-create-storage-account" target="_blank">Azure storage account</a> to complete the Sunbird installation
* This account is used to store QR code images and achievement badges.

#### Operating System
Ubuntu 16.04 LTS (64 bits)

### System Setup

#### User Accounts
* Create a common linux user (e.g. deployer) on all the servers
* Configure this user to use <a href="https://www.digitalocean.com/community/tutorials/how-to-configure-ssh-key-based-authentication-on-a-linux-server" target="_blank">key based ssh</a>
* Use an empty passphrase while generating the ssh key to avoid password prompts during installation 
* The installation script uses this key (user) to deploy Sunbird, thus, this user must have **sudo** access on the servers

#### Ports
The servers should connect to each other over TCP on the following [ports](developer-docs/installation/server_installation/#mapping-ports) 

#### Disk Space
* Minimum 20 GB disk space

#### Utilities
* git
* install git executing the following commands
    sudo apt-get update -y 
    sudo apt-get install git -y 

 * Description of commands:
 sudo apt-get update -y: To install latest updates
 sudo apt-get install git -y: To install git