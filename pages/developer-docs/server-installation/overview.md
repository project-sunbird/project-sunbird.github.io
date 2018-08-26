---
type: landing
directory: developer-docs/server-installation/
title: Overview
page_title: Overview
description: Prerequisites for setting up Sunbird on a server
allowSearch: true
---
## Overview

Sunbird software is containerized. The installation script uses the Docker swarm orchestration engine to run the Sunbird docker images. The Docker swarm consists of manager and agent nodes. The containers are run on the agent nodes and the manager nodes manage the container lifecycle.

All the stateless services in Sunbird - Portal, LMS Backend, API Gateway and Proxies - are run as docker containers inside the swarm. All stateful services consisting of Cassandra, PostgreSql, Elasticsearch and the OAuth service(Keycloak) are run on Virtual Machines (VMs) directly. The installation is automated using shell scripts and Ansible.

This page provides you with information on the prerequisites and the sequence of steps to install Sunbird.




## Supported application versions

  | Application |Version|
  |:-----      |:--------|
  |Docker | 17.06, 18.03|
  |Elasticsearch        | 5.4 |
  |Postgres | 9.5 |
  |Cassandra            | 3.9 |