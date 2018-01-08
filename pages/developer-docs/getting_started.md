---
type: landing
directory: developer-docs
title: Getting Started with Sunbird
page_title: Getting Started
description: Brief overview of all the content available for developer documentation
published: true
allowSearch: true
---

Sunbird is an open source, configurable, extendable, modular learning management platform architected for scale and designed to support multiple teaching and learning solutions supporting multiple languages and available for online and offline use.

Sunbird covers the following broad feature areas:

- Courses, trainings, lesson plans and assessments
- Resources for use by practitioners and professionals
- Dashboards for progress and assessment
- Student and practitioner profile and registry services
- Communities of practice for collaboration and discussions
- Announcements, notifications and circulars

## Techstack of Sunbird

The techstack used to develop the Sunbird is as follows:

- **AngularJS** - to simplify and structure the Sunbird portal

  For more details on AngularJS, refer to the [AngularJS site](https://angularjs.org/)
  
- **Java Play** - to optimise resource consumption (CPU, memory, threads) for high scalablilty

  For more details on Java Play, refer to the [Playframework site](https://playframework.com)
  
- **Apache Cassandra** - for scalability and maximum availability without compromising on performance

  For more details on Apache Cassandra, refer to the [Apache Cassandra site](http://cassandra.apache.org)
  
  For details on installing the Apache Cassandra database for Sunbird, refer to the [Setup Database page](http://www.sunbird.org/developer-docs/installation/setup_db)
  
- **ElasticSearch** - to yield advanced search and analytics engine

  For more details on ElasticSearch, refer to the [ElasticSearch site](http://www.elastic.co/products/elasticsearch)
  
  For details on installing ElasticSearch for Sunbird, refer to the [Setup Database page](http://www.sunbird.org/developer-docs/installation/setup_db)
  
- **Docker** - enables containerization of Sunbird components, to make each component independent and hence facilitate collaboration and co-creation

  For more details on Docker, refer to the [Docker site](https://www.docker.com/what-docker)

To effectively install, implement, adopt or extend Sunbird, it is recommended that you know atleast one or more of the following areas:

- IaaS - Provisioning servers and resources
- DevOps - Docker, Ansible
- Database administration - Cassandra, ElasticSearch
- Web tools - Webserver,SSL certs, OAuth, REST API

## Sunbird Components

 - **Sunbird Portal** 
 All details with regard to the open source code of Sunbird is available [here](https://github.com/project-sunbird)

To know about the web portal of Sunbird [visit](https://github.com/project-sunbird/sunbird-portal)

- **Content Editor**

Content Editor is an inbuilt authoring tool on Sunbird. APIs are available for any creation, updation or customization of the tool. To know about the  [http://www.sunbird.org/apis/content/](http://www.sunbird.org/apis/content)

To know about the content tool, its feature and procedures on how to use the tool, [visit](http://www.sunbird.org/features-documentation/contenteditor)

 - **Content Editor Plugins**  

- **Sunbird platform services** 

- **Others**
  - API manager 
  - Proxy
          
## Installation Overview

Sunbird can be installed on different devices and can be deployed for single or multiusers. 

For details on the installation process, refer to [Installation Overview page](http://www.sunbird.org/developer-docs/installation/)

### Pre-requisites
To install Sunbird on any environment or choose any method of installation, the basic minimum prerequisites are:

- Use of a Linux OS flavour (developer installation is possible on MacOS)
- Comfort with use of a terminal as Sunbird installation is triggered from a command-line terminal

*Note:** The prerequisites are not necessary to try the sandbox option

### Trial on laptop

For a comprehensive walk through the steps to install the Sunbird on your machine, refer to [Installing Sunbird on laptop page](http://www.sunbird.org/developer-docs/installation/installing_sunbirdon_laptop/)

### Deployment for 10-10000 users

To deploy the Sunbird for a userbase of 10-10000, refer to [medium scale deployment](http://www.sunbird.org/developer-docs/installation/medium_scale_deploy/)


## Mobile App Installation
To create customized mobile application of Sunbird, refer [http://www.sunbird.org/developer-docs/installation/install_mobile_setup/](http://www.sunbird.org/developer-docs/installation/install_mobile_setup)

