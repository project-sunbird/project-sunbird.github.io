---
type: landing
directory: developer-docs/installation/
title: Prerequisites
page_title: Prerequisites
description: Prerequisites for setting up Sunbird on a server
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


