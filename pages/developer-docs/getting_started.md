---
type: landing
directory: developer-docs
title: Getting Started with Sunbird
page_title: Getting Started with Sunbird
description: For adopters and users to get started on Sunbird. It provides an overview and links to Sunbird's tech stack, components and installation procedures.
published: true
allowSearch: true
---

Sunbird is an open source, configurable, extendable, modular learning management platform architected for scale. Designed to support multiple teaching and learning solutions supporting multiple languages and available for online and offline use.

Sunbird covers the following broad feature areas:

- Courses, training, lesson plans and assessments
- Resources for use by practitioners and professionals
- Dashboards for progress and assessment
- Student and practitioner profile and registry services
- Communities of practice for collaboration and discussions
- Announcements, notifications, and, circulars 

## Tech stack of Sunbird

The tech stack used to develop the Sunbird is as follows:

- **AngularJS** - simplifies and structures the Sunbird portal

  - For details on AngularJS, refer to the [AngularJS site](https://angularjs.org/)
  
- **Java Play** - optimizes resource consumption (CPU, memory, threads) for high scalability

  - For details on Java Play, refer to the [Play framework site](https://playframework.com)
  
- **Apache Cassandra** - proven database with large active data sets, fault tolerant, de-centralized, highly scalable and consistent without compromising on performance

  - For details on Apache Cassandra, refer to the [Apache Cassandra site](http://cassandra.apache.org)

  - For details on installing the Apache Cassandra database for Sunbird, refer to [Setup Database](http://www.sunbird.org/developer-docs/installation/setup_db)

- **ElasticSearch** - performs and combines many types of searches — structured, unstructured, geo, metric and lets you zoom out to explore trends and patterns in your data

  - For details on ElasticSearch, refer to the [ElasticSearch site](http://www.elastic.co/products/elasticsearch)
  - For details on installing ElasticSearch for Sunbird, refer to the [Setup Database](http://www.sunbird.org/developer-docs/installation/setup_db) 

- **Docker** - enables containerization of Sunbird components, making each component independent facilitating innovation, collaboration and co-creation
  - For details on Docker, refer to the [Docker site](https://www.docker.com/what-docker)*

To effectively install, implement, adopt or extend Sunbird, it is recommended that you know at least one or more of the following areas:

- IaaS - Provisioning servers and resources
- DevOps - Docker, Ansible
- Database administration - Cassandra, ElasticSearch

- Web tools - Webserver,SSL Certificates, OAuth, REST API


## Sunbird Components

The following are the core components of Sunbird:

- **Sunbird Portal**  -  The Sunbird portal is the browser-based interface for the Sunbird application stack. It provides a web interface through which all functionality of Sunbird can be accessed. The Sunbird code is available on GitHub.

  - For details of the open source code of Sunbird, refer to the [Sunbird portal](https://github.com/project-sunbird/sunbird-portal) repository on GitHub

- **Content Editor** - Content Editor is an inbuilt authoring tool on Sunbird. You can customize the content editor using Sunbird's content APIs. APIs are available for creation, updation or customization.

  - For details, refer to the [Content APIs](http://www.sunbird.org/apis/content)

  - For details of the content editor, its features and instructions to use it, refer to [Content Editor](http://www.sunbird.org/features-documentation/contenteditor)


- **Content Editor Plugins**  - Sunbird has the capability to extend the content editor by creating and using plugins. Plugins are available for rendering, capturing telemetry, creating and registering a new repository instance, previewing created content, etc. 


- **Sunbird Services** - Sunbird uses core and proxy services.

- **Others** - Few other key services are:

  - API manager
  - Proxy
 
  For details, refer to [Deploying Sunbird Services](http://www.sunbird.org/developer-docs/installation/deploy_sb_services/)
## Installation Overview


Sunbird can be installed on different devices and can be deployed for a single or multiple users. 

  - For details on the installation process, refer to [Installation Overview](http://www.sunbird.org/developer-docs/installation/)

### Pre-requisites

To install Sunbird in any environment using any method of installation, the basic minimum prerequisites are:


  - Use of a Linux OS flavor 

**Note:** *Developer installation is possible on MacOS*


  - Comfort using a terminal, as Sunbird installation is triggered from a command-line terminal

**Note:**

  - Developer installation is possible on MacOS
  - The prerequisites are not necessary to try the sandbox option


### Install Sunbird on your Machine

  - *For a comprehensive walk through to install Sunbird on your laptop, refer to [Installing Sunbird on your Machine](http://www.sunbird.org/developer-docs/installation/installing_sunbirdon_machine/)*


### Medium-scale deployment

To deploy Sunbird for a user base of 10-10000, refer to [Medium Scale Deployment](http://www.sunbird.org/developer-docs/installation/medium_scale_deploy/)

## Mobile App Installation

To create a customized mobile application of Sunbird, refer to [Mobile App Installation](http://www.sunbird.org/developer-docs/installation/install_mobile_setup)