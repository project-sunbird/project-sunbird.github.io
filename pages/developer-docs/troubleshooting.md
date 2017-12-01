---
type: landing
directory: developer-docs
title: Troubleshooting
page_title: Troubleshooting
description: Troubleshooting
keywords: Troubleshoot, answers, Database, application, Frequently asked questions, 'FAQ, questions'
allowSearch: true
---
## Database

**Q:** Are data initialization scripts available?

**A:** Use the Cassandra.cql file to do the initial data setup. 
Click [Casandra.cql](https://github.com/project-sunbird/sunbird-lms-mw/blob/master/actors/src/main/resources/cassandra.cql){:target="_blank"} and run the file to create the initial Cassandra data base.

**Q:** Does the database have initial/ default entries for 'Org', 'Role' and 'Users'?

**A:**  'Users' do not have initial/default entries. There are default entries for 'Org' and 'Roles'. 
For details, refer the files:

+ [Casandra.cql](https://github.com/project-sunbird/sunbird-lms-mw/blob/master/actors/src/main/resources/cassandra.cql){:target="_blank"} file, for data setup
+ [pageMgnt.csv](https://github.com/project-sunbird/sunbird-lms-mw/blob/master/actors/src/main/resources/pageMgmt.csv){:target="_blank"}, for page section details
+ [pageSection.csv](https://github.com/project-sunbird/sunbird-lms-mw/blob/master/actors/src/main/resources/pageSection.csv){:target="_blank"}, for details of a particular section
     
Run the two .csv files under Cassandra. It has queries to generate page data and works based on BFF(Backend for frontend) design pattern.

**Q:**  Which databases are used in the application and for what purpose?

**A:** The following databases are used: 

Name | Used As     | Used By
---- |-------------|--------
Cassandra |Main database storage  |The learner service
Elasticsearch  |  80% of the data storage for Cassandra     | The Search engine 
Postgres  |A cron scheduler job, to run in cluster mode     |
MongoDB   |A store for session data     |The player service
 
**Q:** Does the launch of any application initaiate seed data?

**A:** When an application is launched, the following table data are cached. This data needs to be refreshed daily. 

- page_management 
- page_section

## Application 

**Q**: How do I test if the APIs are working ? 

**A**:  Once you complete Sunbird installation, use the GET API https://hostname/health .
    For details of more API check routes, refer to the [Routes](https://github.com/project-sunbird/sunbird-lms-service/blob/master/service/conf/routes){:target="_blank"}
     This file has a list of URLs.
 
 **Q**: What Authorization header should be used to access these API ?

**A**:  Api requests have following headers:
   
   + Authorization : This has the service access key. For example; Bearer {{key}}
   + x-authenticated-user-token : The user authentication token, if a particular API requires it
   + X-msgid : The unique message id for each request.
    
 **Q**: How do I register my own application with keycloak for development?
 **Q**: I want to create new APIs as extensions of the existing Sunbird API. Can I register to keycloak and allow communication between them securely?   
 
 **A**:  You need to install the keycloak. After it is successfully installed, set following details under System Env or sso.properites file to communicate with keycloak.
 
 + sso.url 
 + sso.realm
 + sso.username
 + sso.password 
 + sso.client.id
 + sso.client.secret // optional
 + sunbird_sso_publickey // it will always read from System ENV

## Telemetry

**Q**: Is there any controller for telemetry events in Sunbird? How can telemetry data be accessed from Sunbird?

**A**: Sunbird provides dashboards for admins that provide summary views of the telemetry. For raw telemetry data, you need to pull out the data from the ekstep platform. To do so, use the [On Demand Data Exhaust API](https://community.ekstep.in/developer-apis/on-demand-data-exhaust-api){:target="_blank"} 

**Note**: Sign in to the Ekstep Community portal to access the API (https://community.ekstep.in)
