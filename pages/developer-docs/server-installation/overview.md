---
type: landing
directory: developer-docs/server-installation/
title: Overview
page_title: Overview
description: Prerequisites for setting up Sunbird on a server
allowSearch: true
---
## Overview

This section details the procedure of installing Sunbird on your server. Sunbird software is containerized. The installation script uses the Docker swarm orchestration engine to run the Sunbird docker images. The Docker swarm consists of manager and agent nodes. The containers are run on the agent nodes and the manager nodes manage the container lifecycle.

All the stateless services in Sunbird - Portal, LMS Backend, API Gateway and Proxies - are run as docker containers inside the swarm. All stateful services consisting of Cassandra, PostgreSql, Elasticsearch and the OAuth service(Keycloak) are run on Virtual Machines (VMs) directly. The installation is automated using shell scripts and Ansible.

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
    
On installing Sunbird on 2 servers:
* All services with a common superscript (e.g. servername<sup>2</sup>) are run on the same server
* The App server runs services with superscript <sup>1</sup> and the DB server runs services with superscript <sup>2</sup> 

## Supported application versions

  | Application |Version|
  |:-----      |:--------|
  |Docker | 17.06, 18.03|
  |Elasticsearch        | 5.4 |
  |Postgres | 9.5 |
  |Cassandra            | 3.9 |


