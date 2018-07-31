---
type: landing
directory: developer-docs
title: Getting Started with Sunbird
page_title: Getting Started with Sunbird
description: For adopters and users to get started on Sunbird. It provides an overview and links to Sunbird's tech stack, components and installation procedures.
published: false
allowSearch: false
keywords: install, installation, server, try sunbird, developer installation, tech stack, 
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

  - For details on AngularJS, refer to the [AngularJS site](https://angularjs.org/){:target="_blank"}
  
- **Java Play** - optimizes resource consumption (CPU, memory, threads) for high scalability

  - For details on Java Play, refer to the [Play framework site](https://playframework.com){:target="_blank"}
  
- **Apache Cassandra** - proven database with large active data sets, fault tolerant, de-centralized, highly scalable and consistent without compromising on performance

  - For details on Apache Cassandra, refer to the [Apache Cassandra site](http://cassandra.apache.org){:target="_blank"}

- **ElasticSearch** - performs and combines many types of searches — structured, unstructured, geo, metric and lets you zoom out to explore trends and patterns in your data

  - For details on ElasticSearch, refer to the [ElasticSearch site](http://www.elastic.co/products/elasticsearch){:target="_blank"}

- **Docker** - enables containerization of Sunbird components, making each component independent facilitating innovation, collaboration and co-creation
  - For details on Docker, refer to the [Docker site](https://www.docker.com/what-docker){:target="_blank"}

While the installation is automated, it is recommended that you have exposure to the following areas for managing a production grade setup:

- IaaS - Provisioning servers and resources on cloud
- DevOps - Docker, Ansible
- Database administration - Cassandra, ElasticSearch
- Web tools - Webserver,SSL Certificates, OAuth, REST API


## Sunbird Components

The following are the core components of Sunbird:

- **Sunbird Portal**  -  The Sunbird portal is the browser-based interface for the Sunbird application stack. It provides a web interface through which all functionality of Sunbird can be accessed. The Sunbird code is available on GitHub.

  - For details of the open source code of Sunbird, refer to the [Sunbird portal](https://github.com/project-sunbird/sunbird-portal){:target="_blank"} repository on GitHub

- **Content Editor** - Content Editor is an inbuilt authoring tool on Sunbird. You can customize the content editor using Sunbird's content APIs. APIs are available for creation, updation or customization.

  - For details, refer to the [Content APIs](http://www.sunbird.org/apis/content){:target="_blank"}

  - For details of the content editor, its features and instructions to use it, refer to [Content Editor](http://www.sunbird.org/features-documentation/contenteditor){:target="_blank"}


- **Content Editor Plugins**  - Sunbird has the capability to extend the content editor by creating and using plugins. Plugins are available for rendering, capturing telemetry, creating and registering a new repository instance, previewing created content, etc. 


- **Sunbird Services** - Sunbird uses core and proxy services.

- **Others** - Few other key services are:

  - API manager (Kong)
  - Proxy (Nginx)
  - Oauth 2 (Keycloak)
 
## Trying Sunbird

If you are looking to explore Sunbird and test its feature set, we recommend you use the [Sunbird sandbox](https://staging.open-sunbird.org/){:target="_blank"} which is hosted by us. You can also try the developer installation if you want to setup Sunbird on your workstation for testing, understanding or contributing back.

**Note: Data created in the sandbox is erased after 24 hours**

## Developer Installation

For a comprehensive walk through to install Sunbird on your workstation, refer to [Developer Installation](http://www.sunbird.org/developer-docs/installation/developer_installation/){:target="_blank"}


## Server Installation

Please refer to the [Server Installation Steps](http://www.sunbird.org/developer-docs/installation/server_installation/){:target="_blank"} if you want to host sunbird on your servers. Sunbird supports various deployment topologies and it can scale for thousands of users. 

## Mobile App Installation

To create a customized Sunbird mobile application for your hosted Sunbird, refer to [Mobile App Setup](http://www.sunbird.org/developer-docs/installation/install_mobile_setup/){:target="_blank"}
