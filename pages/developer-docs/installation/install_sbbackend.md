---
type: landing
directory: developer-docs/installation
title: Installing Sunbird Backend
page_title: Installing Sunbird Backend
description: Installing Sunbird Backend requires the backend API interface.
published: true
allowSearch: true
---
## Overview

The purpose of this section is to assist you:

  - With installing the Sunbird backend on your local machine 

Also, if you are interested in Testing:

  - Sunbird backend services
  - API workflows

## Sunbird Backend Services

To set up the Sunbird Back-end services, follow the steps chronologically:

1.	Setup
2.	Configure back-end service stack

### Setup

Before configuring the services, ensure the installation of following dependencies:
     
  - Apache Cassandra ver-3.10
  - Elasticsearch ver-5.4.0
  - Keycloak ver-3.2.1. Final
  - PostgreSQL (required only when you wish to run quartz scheduler in distributed environment, not recommended on local machines)

Let us set up the environment and then proceed with deploying the services.

**Setup Cassandra** 
 
1. For step by step installation guide, refer to the official [website](http://cassandra.apache.org/doc/latest/getting_started/installing.html){:target="_blank"}
2. The official website guides you through the installation, and if you have done a successful install of Cassandra, now you need to        start the server and open Cassandra CLI (Command Line Interface) 
3. Run [cassandra.cql](https://github.com/project-sunbird/sunbird-lms-mw/blob/master/actors/src/main/resources/cassandra.cql){:target="_blank"} file to      create the required keyspace, tables and indices
4. Copy the following files to a temp folder in a Cassandra installed machine 
    
    - [pageMgmt.csv](https://github.com/project-sunbird/sunbird-lms-mw/blob/master/actors/src/main/resources/pageMgmt.csv){:target="_blank"} 
    - [pageSection.csv](https://github.com/project-sunbird/sunbird-lms-mw/blob/master/actors/src/main/resources/pageSection.csv) {:target="_blank"}
    - [pageSection.csv](https://github.com/project-sunbird/sunbird-lms-mw/blob/master/actors/src/main/resources/pageSection.csv){:target="_blank"} 
              
 Example:  ```/tmp/cql/pageMgmt.csv and /tmp/cql/pageSection.csv ```

5. Execute the following commands 

<pre>
cqlsh -e "COPY sunbird.page_management(id, appmap,createdby, createddate, name, 
organisationid, portalmap, updatedby, updateddate) FROM '/tmp/cql/pageMgmt.csv'"
 cqlsh -e "COPY sunbird.page_section(id, alt, createdby, createddate, description,
 display, imgurl, name, searchquery, sectiondatatype, status, updatedby, updateddate) 
 FROM '/tmp/cql/pageSection.csv'"
</pre>
Next section details about setting up the Elasticsearch on your local machine.

**Setup Elasticsearch**

  1. For step by step installation guide of Elasticsearch refer to the official [website](https://www.elastic.co/guide/en/elasticsearch/reference/current/_installation.html){:target="_blank"}

  2. The official website guides you through the installation, and if you have done a successful install of Elasticsearch, you need to  
     start the server and open Elasticsearch CLI (Command Line Interface)

  3. Run the following curl command

<pre>
              curl -X PUT \
              http://localhost:9200/searchindex/org/ORG_001 \
              -H 'cache-control: no-cache' \
              -H 'content-type: application/json' \
              -H 'postman-token: caa7eaa7-2a08-d1f3-1eb2-bf7c73bef663' \
              -d '{}'
</pre>     

Next section details about setting up the Keycloak on your local machine.

**Setup Keycloak**

1. For step by step installation guide of Keycloak refer to the official [website](http://www.keycloak.org/docs/3.3/server_installation/topics/installation/distribution-files-community.html){:target="_blank"} 

2. The official website guides you through the installation, and if you have done a successful install of Keycloak, now you need to start the server 

3. To start the Keycloak server, navigate to “Bin” Directory and run the standalone file. Performing this action will start the Keycloak server 

4. You can access the Keycloak admin console on ```http://localhost:8080``` 

5. For Public key, navigate to Realm settings tab -> Keys -> Public Keys 

6. For sending welcome email when a user registers, you need to configure email server by navigating to: Realm Settings tab -> Emails (optional)

### Configuration setup for Application

To run Sunbird services, you need to set different environment variables listed as follows:


| variable                              | description                                                                                                 |
|---------------------------------------|-------------------------------------------------------------------------------------------------------------|
| sunbird_cassandra_host                | host running the Cassandra server                                                                           |
| sunbird_cassandra_port                | port on which Cassandra server is running                                                                   |
| sunbird_cassandra_username (optional) | username for Cassandra database, if authentication is enabled                                               |
| sunbird_cassandra_password (optional) | password for Cassandra database, if authentication is enabled                                               |
| sunbird_es_host                       | host running the Elasticsearch server                                                                       |
| sunbird_es_port                       | port on which Elasticsearch server is running                                                               |
| sunbird_es_cluster (optional)         | name of the Elasticsearch cluster                                                                           |
| sunbird_learner_actor_host            | host running for learner actor                                                                              |
| sunbird_learner_actor_port            | port on which learner actor is running                                                                      |
| sunbird_sso_url                       | url for keycloak server (Example : **http://localhost:8080/auth** )                                                                                    |
| sunbird_sso_realm                     | keycloak realm name   (use default realm as master or you can create new realm)                                                                                      |
| sunbird_sso_username                  | keycloak user name                                                                                          |
| sunbird_sso_password                  | keycloak password                                                                                           |
| sunbird_sso_client_id                 | key cloak client id  (use default as admin-cli or you can create new client in key cloak)                                                                                        |
| sunbird_sso_client_secret             | keycloak client secret (not mandatory)                                                                      |
| ekstep_content_search_base_url        | provide base url for EkStep content search                                                                  |
| ekstep_authorization                  | provide Authorization value for content search                                                          |
| sunbird_pg_host                       | Postgres host name or ip                                                                                   |
| sunbird_pg_port                       | Postgres port number                                                                                        |
| sunbird_pg_db                         | Postgres db name                                                                                            |
| sunbird_pg_user                       | Postgres db user name                                                                                       |
| sunbird_pg_password                   | Postgress db password                                                                                       |
| sunbird_installation                  |                                                                                                             |
| ekstep_api_base_url                   |                                                                                                             |
| sunbird_mail_server_host              |                                                                                                             |
| sunbird_mail_server_port              |                                                                                                             |
| sunbird_mail_server_username          |                                                                                                             |
| sunbird_mail_server_password          |                                                                                                             |
| sunbird_mail_server_from_email        |                                                                                                             |
| sunbird_account_name                  | account name of azure blob storage                                                                          |
| sunbird_account_key                   | azure blob storage account key                                                                              |
| sunbird_quartz_mode                   | put this value {"embedded" to run quartz without any data base, "any other value" to run with postgres db } |
| sunbird_encryption_key                |                                                                                                             |
| sunbird_encryption_mode               | mode value is either local or remote                                                                        |
| sunbird_sso_publickey                 | SSO public key                                                                                              |
| sunbird_env_logo_url                  | logo url for sending email.(http://www.paramountias.com/media/images/current-affairs/diksha-portal.jpg)     |
| sunird_web_url                        | web page url                                                                                                |
| sunbird_app_url                       | Play store url to download the app                                                                          |
| sunbird_msg_91_auth                   | msg 91 auth  
  sunbird_msg_sender                     | message sender name        

The table mentions all the environment variables with description. You need to add/edit the environment variables in appropriate locations.Next section details about the environmental variables that are mandatory to run the backend services.

### Setting Environment Variables

To run sunbird backend services, at least you need to set the following environment variables. Set the environment variables at appropriate locations.

<pre>
          1. sunbird_cassandra_host
          2. sunbird_cassandra_port
          3. sunbird_cassandra_username 
          4. sunbird_cassandra_password 
          5. sunbird_es_host
          6. sunbird_es_port
          7. sunbird_learner_actor_host
          8. sunbird_learner_actor_port
          9. sunbird_sso_url
          10. sunbird_sso_realm
          11. sunbird_sso_username
          12. sunbird_sso_password
          13. sunbird_sso_client_id
          14. ekstep_content_search_base_url
          15. ekstep_authorization
          16. sunbird_installation : name of in which environment you running this application or instance name
          17. sunbird_quartz_mode : set value as "embedded" as you are not running scheduler in distributed environment.
          18. sunbird_sso_publickey
</pre>
   
Here, you can find the remaining [Environment Variable Values](https://github.com/project-sunbird/sunbird-utils/blob/master/common-util/src/main/resources/externalresource.properties){:target="_blank"}

## Configuring and running Back-End Services Stack

You can configure the Backend service by following these instructions:

- Cloning the repositories
- Making the Build 
     
Clone following repositories:
          
   - [sunbird-utils](https://github.com/project-sunbird/sunbird-utils){:target="_blank"}
   - [sunbird-lms-service](https://github.com/project-sunbird/sunbird-lms-service){:target="_blank"}
   - [sunbird-lms-mw](https://github.com/project-sunbird/sunbird-lms-mw){:target="_blank"}

     
  Make the builds in following order:
   
   - sunbird-utils
   - sunbird-lms-mw
   - sunbird-lms-service

## Configuring the (Akka) Actors 

Sunbird architecture supports two Akka actor systems: 
     	
  1. Normal ActorSystem 
  2. Background ActorSystem 

And by default, both run on two different machines.
But to run these actor systems on single machine, you need to modify the [resource.properties file]
For details [refer](https://github.com/project-sunbird/sunbird-utils/blob/master/common-util/src/main/resources/externalresource.properties){:target="_blank"} to repository.

In order to run both the actor systems on single machine follow these steps:

  1.	Open **externalresource.properties** file 
  2.	Modify the following properties:
          - background_actor_provider
          - api_actor_provider
  3.	Set value of both properties as “local”
  4.	Run ```mvn clean install``` command to make build of each module


And to run Application sunbird-lms-service execute the following command 
    
      run mvn play2:run 

## Testing the services 
  
Run any API, e.g. create a user API and perform different actions on user using this [Postman collection](https://www.getpostman.com/collections/d314ef7df8fb02c9fa0f){:target="_blank"}


