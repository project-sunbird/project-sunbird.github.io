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

  - with the installation of Sunbird backend on your local machine 

  - in testing Sunbird backend services and API workflows

## Sunbird Backend Services

To set up the Sunbird Back-end services, follow the steps chronologically:

1.	Setup 

    - Cassandra
    - Elastic Search
    - Keycloak

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
3. Run [cassandra.cql](https://github.com/project-sunbird/sunbird-lms-mw/blob/master/actors/src/main/resources/cassandra.cql){:target="_blank"} file to create the required keyspace, tables and indices
4. Copy the following files to a temp folder in a Cassandra installed machine 
    
    - [PageMgmt.csv](https://github.com/project-sunbird/sunbird-lms-mw/blob/master/actors/src/main/resources/pageMgmt.csv){:target="_blank"} 
    - [PageSection.csv](https://github.com/project-sunbird/sunbird-lms-mw/blob/master/actors/src/main/resources/pageSection.csv){:target="_blank"} 
              
 Example:  ```/tmp/cql/pageMgmt.csv and /tmp/cql/pageSection.csv ```

5. Execute the following commands 

<pre>
 cqlsh -e "COPY sunbird.page_management(id, appmap,createdby, createddate, name, 
organisationid, portalmap, updatedby, updateddate) FROM '/tmp/cql/pageMgmt.csv'"
 cqlsh -e "COPY sunbird.page_section(id, alt, createdby, createddate, description,
 display, imgurl, name, searchquery, sectiondatatype, status, updatedby, updateddate) 
 FROM '/tmp/cql/pageSection.csv'"
</pre>

Next section details about setting up the Elastic search on your local machine.

**Setup Elastic search**

  1. For step by step installation guide of Elastic search refer to the official [website](https://www.elastic.co/guide/en/elasticsearch/reference/current/_installation.html){:target="_blank"}

  2. The official website guides you through the installation, and if you have done a successful installation of Elastic search, you need to start the server and open Elastic search CLI (Command Line Interface)

  3. Run the following curl command

<pre>

curl -X PUT 
http://localhost:9200/searchindex/org/ORG_001 
-H 'cache-control: no-cache' 
-H 'content-type: application/json' 
-H 'postman-token: caa7eaa7-2a08-d1f3-1eb2-bf7c73bef663' 
-d '{}'

</pre>     

Next section details about setting up the Keycloak on your local machine.

**Setup Keycloak**

1. For step by step installation guide of Keycloak refer to the official [website](http://www.keycloak.org/docs/3.3/server_installation/topics/installation/distribution-files-community.html){:target="_blank"} 

2. The official website guides you through the installation, and if you have done a successful installation of Keycloak, you need to start the server 

3. To start the Keycloak server, navigate to `Bin` Directory and run the standalone file. Performing this action will start the Keycloak server 

4. You can access the Keycloak admin console on ```http://localhost:8080``` 

5. For Public key, navigate to **Realm settings tab** -> **Keys** -> **Public Keys** 

6. For sending welcome email when a user registers, you need to configure email server by navigating to: **Realm Settings tab** -> **Emails** (optional)

### Configuring the Application

To run Sunbird services, it is recommended that the following configuration variables must be set:

| variable                              | description                                                         |
|---------------------------------------|---------------------------------------------------------------------|
| sunbird_cassandra_host                | host running the Cassandra server                                   |
| sunbird_cassandra_port                | port on which Cassandra server is running                           |
| sunbird_cassandra_username (optional) | username for Cassandra database, if authentication is enabled       |
| sunbird_cassandra_password (optional) | password for Cassandra database, if authentication is enabled       |
| sunbird_es_host                       | host running the Elastic search server                              |
| sunbird_es_port                       | port on which Elastic search server is running                      |
| sunbird_es_cluster (optional)         | name of the Elastic search cluster                                  |
| sunbird_learner_actor_host            | host running for learner actor                                      |
| sunbird_learner_actor_port            | port on which learner actor is running                              |
| sunbird_sso_url                       | URL for keycloak server (Example : **http://localhost:8080/auth** ) |
| sunbird_sso_realm                     | keycloak realm name   (use default realm as master or you can create new realm)                                                                                      |
| sunbird_sso_username                  | keycloak user name                                                                                          |
| sunbird_sso_password                  | keycloak password                                                                                           |
| sunbird_sso_client_id                 | keycloak client id  (use default as admin-cli or you can create new client in keycloak)                                                                                        |
| sunbird_sso_client_secret             | keycloak client secret (not mandatory)                                                                      |
| ekstep_content_search_base_url        | provide base URL for EkStep content search                                                                  |
| ekstep_authorization                  | provide Authorization value for content search                                                          |
| sunbird_pg_host                       | Postgres host name or ip                                                                                   |
| sunbird_pg_port                       | Postgres port number                                                                                        |
| sunbird_pg_db                         | Postgres db name                                                                                            |
| sunbird_pg_user                       | Postgres db user name                                                                                       |
| sunbird_pg_password                   | Postgress db password                                                                                       |
| sunbird_installation                  | sunbird                                                                                                            |
| ekstep_api_base_url                   | https://dev.ekstep.in/api                                                                                                             |
| sunbird_mail_server_host              |                                                                                                             |
| sunbird_mail_server_port              |                                                                                                             |
| sunbird_mail_server_username          |                                                                                                             |
| sunbird_mail_server_password          |                                                                                                             |
| sunbird_mail_server_from_email        | support@open-sunbird.org                                                                                                            |
| sunbird_account_name                  | account name of azure blob storage                                                                          |
| sunbird_account_key                   | Azure blob storage account key                                                                              |
| sunbird_quartz_mode                   | put this value {"embedded" to run quartz without any database, "any other value" to run with postgres db } |
| sunbird_encryption_key                |                                                                                                             |
| sunbird_encryption_mode               | mode value is either local or remote                                                                        |
| sunbird_sso_publickey                 | SSO public key                                                                                             |
| sunbird_env_logo_url                  | logo URL for sending email.(http://www.paramountias.com/media/images/current-affairs/sunbird-portal.jpg)     |
| sunird_web_url                        | web page URL                                                                                              |
| sunbird_app_url                       | Play store URL to download the app                                                                        |
| sunbird_msg_91_auth                   | msg 91 auth  
  sunbird_msg_sender                     | message sender name  
      

The table mentions all the environment variables with description. Add or edit the environment variables in their appropriate locations.

### Minimal Required Configuration

The following variables are mandatory as apart of minimalistic required configuration to get services up and running.

**Note**: Ensure that you need to set the environment variables at appropriate location.

| variable                              | description                                                         |
|---------------------------------------|---------------------------------------------------------------------|
| sunbird_cassandra_host                | host running the Cassandra server                                   |
| sunbird_cassandra_port                | port on which Cassandra server is running                           |
| sunbird_cassandra_username (optional) | username for Cassandra database, if authentication is enabled       |
| sunbird_cassandra_password (optional) | password for Cassandra database, if authentication is enabled       |
| sunbird_es_host                       | host running the Elastic search server                              |
| sunbird_es_port                       | port on which Elastic search server is running                      |
| sunbird_es_cluster (optional)         | name of the Elastic search cluster                                  |
| sunbird_learner_actor_host            | host running for learner actor                                      |
| sunbird_learner_actor_port            | port on which learner actor is running                              |
| sunbird_sso_url                       | URL for keycloak server (Example : **http://localhost:8080/auth** ) |
| sunbird_sso_realm                     | keycloak realm name   (use default realm as master or you can create new realm)                                                                                      |
| sunbird_sso_username                  | keycloak user name                                                                                          |
| sunbird_sso_password                  | keycloak password                                                                                           |
| sunbird_sso_client_id                 | keycloak client id  (use default as admin-cli or you can create new client in keycloak)                                                                                        |
| sunbird_sso_client_secret             | keycloak client secret (not mandatory)                                                                      |
| ekstep_content_search_base_url        | provide base URL for EkStep content search                                                                  |
| ekstep_authorization                  | provide Authorization value for content search                                                          |
|sunbird_installation | name of environment in which you are running the application or instance name
| sunbird_quartz_mode | set value as "embedded" as you are not running scheduler in distributed environment|
|sunbird_sso_publickey|

   
For remaining environment variable values [refer](https://github.com/project-sunbird/sunbird-utils/blob/master/common-util/src/main/resources/externalresource.properties){:target="_blank"}


## Configuring and running Back-End Services Stack

You can configure the Backend service by following these instructions:

- Cloning the repositories
- Making the Build
     
### Clone the Repositories
          
   - [sunbird-utils](https://github.com/project-sunbird/sunbird-utils){:target="_blank"}
   - [sunbird-lms-service](https://github.com/project-sunbird/sunbird-lms-service){:target="_blank"}
   - [sunbird-lms-mw](https://github.com/project-sunbird/sunbird-lms-mw){:target="_blank"}

     
### Making the build

Make the builds in following order:

   - sunbird-utils
   - sunbird-lms-mw
   - sunbird-lms-service

## Configuring the (Akka) Actors

Sunbird architecture supports two Akka actor systems: 
     	
  1. Normal ActorSystem 
  2. Background ActorSystem 


By default, both run on different machines. In order to run these actor systems on a single machine, you need to modify the [resource.properties file]

For more details [refer](https://github.com/project-sunbird/sunbird-utils/blob/master/common-util/src/main/resources/externalresource.properties){:target="_blank"} to this repository.


To run both the actor systems on a single machine follow these steps:

  1.	Open **externalresource.properties** file
  2.	Modify the following properties:
         
        - background_actor_provider
        - api_actor_provider
  
  3.	Set value of both properties as “local”
  4.	Run ```mvn clean install``` command to make build of each module

To run the **sunbird-lms-service** execute the following command
    
      ```mvn play2:run```

## Testing the services 
  
Test any API using postman, e.g. download **user API** and perform different actions on user using this [Postman collection](https://www.getpostman.com/collections/d314ef7df8fb02c9fa0f){:target="_blank"}

From release-1.7, user creation requires channel attribute. You need to follow these instructions:

1.Create a user inside Keycloak 
2.Generate JWT token using the following curl command
<pre>

curl -X POST 
  {{base-url}}/auth/realms/{realm-name}/protocol/openid-connect/token 
  -H 'cache-control: no-cache' 
  -H 'content-type: application/x-www-form-urlencoded' 
  -H 'postman-token: de8e2bb4-3669-b86a-8d06-d5c0c66dae14' 
  -d 'client_id={client-name}&username={username}&password={password}&grant_type=password'

</pre>

3.Use this token to create the RootOrg. 
 
**Note:** [Refer](http://www.sunbird.org/apis/orgapi/#operation/Organisation%20Create){:target="_blank"} to the create orgnization API to can create an organisation. 

4.You need to set the RootOrg channel value inside environment variable with key `sunbird_default_channel`

Once you are done with above step then you can start creating other users and sub organisations.  
  
