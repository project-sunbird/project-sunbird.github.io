## Introduction
> This wiki contains following information.
  1. Requirement
  2. Steps to be followed for installing sunbird backend service on local machine
  3. Testing Sunbird backend service

## Requirement
> Setup sunbird back-end service on developer machine to test api's work flow.

## installation steps
> To setup the Sunbird back-end service successfully, follow these steps sequentially:
   1. Check for the Prerequisites installation under Prerequisites section.
   2. Setup
   3. Configure back-end Service Stack

## Prerequisites
   > Software dependencies

       . Apache Cassandra ver-3.10
       . Elasticsearch ver-5.4.0
       . Keycloak ver-3.2.1.Final
       . Postgresql (required only when you want to run quartz scheduler in distributed environment, on local machine its not required)

## Setup
   
  * **Setup Cassandra**
     
     1. [Install](http://cassandra.apache.org/doc/latest/getting_started/installing.html) Cassandra database and start the server
     2. Run [cassandra.cql](https://github.com/project-sunbird/sunbird-lms-mw/blob/master/actors/src/main/resources/cassandra.cql) file to create the required keyspace, tables and indices
     3. Copy [pageMgmt.csv](https://github.com/project-sunbird/sunbird-lms-mw/blob/master/actors/src/main/resources/pageMgmt.csv) and [pageSection.csv](https://github.com/project-sunbird/sunbird-lms-mw/blob/master/actors/src/main/resources/pageSection.csv) to a temp folder on cassandra machine.
        *  e.g.: /tmp/cql/pageMgmt.csv and /tmp/cql/pageSection.csv.
     4. Execute the below commands.
        *  cqlsh -e "COPY sunbird.page_management(id, appmap,createdby ,createddate ,name ,organisationid ,portalmap ,updatedby ,updateddate ) FROM '/tmp/cql/pageMgmt.csv'"
        
        *  cqlsh -e "COPY sunbird.page_section(id, alt,createdby ,createddate ,description ,display ,imgurl ,name,searchquery , sectiondatatype ,status , updatedby ,updateddate) FROM '/tmp/cql/pageSection.csv'"


  * **Setup Elasticsearch**
      
      1. [Install](https://www.elastic.co/guide/en/elasticsearch/reference/current/_installation.html) ElasticSearch and start the server
      2. Run the below curl command.
          
           ```sh
              curl -X PUT \
              http://localhost:9200/searchindex/org/ORG_001 \
              -H 'cache-control: no-cache' \
              -H 'content-type: application/json' \
              -H 'postman-token: caa7eaa7-2a08-d1f3-1eb2-bf7c73bef663' \
              -d '{}'
           ```     
        
  * **Setup Keycloak**

     1. [Install](http://www.keycloak.org/docs/3.3/server_installation/topics/installation/distribution-files-community.html) keycloak and start the server.
     2. To start the keycloak server go to bin directory and run the standalone file.It will start the keycloak server 
     3. Now you can access keycloak admin console on "**http://localhost:8080**" 
     4. get public key from Realm settings tab -> keys -> public keys (for sunbird_sso_publickey in environment variable)
     5. for sending welcome email at user registration you need to configure email server related details on Realm settings tab -> emails (Optional)

  * **Configuration setup for Application**
      
     To run Sunbird service you need to set following environment variables.


     Below are the list of environment variables to setup.

| variable                              | description                                                                                                 |
|---------------------------------------|-------------------------------------------------------------------------------------------------------------|
| sunbird_cassandra_host                | host running the Cassandra server                                                                           |
| sunbird_cassandra_port                | port on which cassandra server is running                                                                   |
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
| ekstep_authorization                  | provide Authorization for value for content search                                                          |
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


**NOTE:**
   * To Run sunbird backend service locally, you just need to set this much environment variable
       ```
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
          16. sunbird_installation : name of in which env you running this application or instance name
          17. sunbird_quartz_mode : set value as "embedded" as we are not running scheduler in distributed env
          18. sunbird_sso_publickey
       ```
   * Remaining environment variable values will be pick from [externalresource.properties](https://github.com/project-sunbird/sunbird-utils/blob/master/common-util/src/main/resources/externalresource.properties) file.


 ## Configure back-end Service Stack
     
   * **Build** 
      
       * Clone following repositories.
          1. [sunbird-utils](https://github.com/project-sunbird/sunbird-utils)
          2. [sunbird-lms-service](https://github.com/project-sunbird/sunbird-lms-service)
          3. [sunbird-lms-mw](https://github.com/project-sunbird/sunbird-lms-mw)

     **NOTE:** Sunbird has two actor system 1)Normal ActorSystem and 2) Background ActorSystem And by default both are running on two different machine, for running both actor system on same single machine, we need to modify [externalresource.properties](https://github.com/project-sunbird/sunbird-utils/blob/master/common-util/src/main/resources/externalresource.properties) file.
     
     open **externalresource.properties** file and modify following two properties.

       1. **background_actor_provider**

       2. **api_actor_provider**

      set value of both properties as **local**

     * Run "mvn clean install" to make build of each module 
      
       (first make build of "**sunbird-utils**",then  "**sunbird-lms-mw**" and lastly "**sunbird-lms-service**")

     * And to run Application **sunbird-lms-service** : run **mvn play2:run** command
       

## Test
  Run any api for example create a user and then get the details of user through POSTMAN.Use below postman collection.
    https://www.getpostman.com/collections/d314ef7df8fb02c9fa0f
