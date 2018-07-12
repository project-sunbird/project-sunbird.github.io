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

**Q:** Does Sunbird use any data initialization scripts?

**A:** Use the Cassandra.cql file to do the initial data setup. 
Click [Casandra.cql](https://github.com/project-sunbird/sunbird-lms-mw/blob/master/service/src/main/resources/cassandra.cql){:target="_blank"} and run the file to create the initial Cassandra data base.

**Q:**  Does the database have initial/ default entries for 'Org', 'Role' and 'Users'?

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
 
**Q:  Does the launch of any application initaiate seed data?**

**A:** When an application is launched, the following table data are cached. This data needs to be refreshed daily. 

- page_management 
- page_section

## Application 

**Q:** How do I test if the APIs are working correctly?

**A:**  Once you complete Sunbird installation, use the GET API (https://hostname/health) to test if the APIs are working correctly.

**Note:** For details of more API check routes, refer to the [Routes](https://github.com/project-sunbird/sunbird-lms-service/blob/master/service/conf/routes){:target="_blank"} file. This file has a list of URLs for all related APIs.
 
 **Q:** What authorization header should be used to access the Sunbird APIs ?

**A**:  Api requests have following headers:
   
   + Authorization : This has the service access key. For example; Bearer {{key}}
   + x-authenticated-user-token : The user authentication token, if a particular API requires it
   + X-msgid : The unique message id for each request.
    
 **Q:** To develop my application, how do I register it with Keycloak?
 
 **Q:** I want to create new APIs as extensions of the existing Sunbird API. Can I register to Keycloak and allow secure communication between them? 
 
 **A:**  You need to install the keycloak. After it is successfully installed, set following details under the System Env or sso.properites file to communicate with keycloak.
 
 + sso.url 
 + sso.realm
 + sso.username
 + sso.password 
 + sso.client.id
 + sso.client.secret // optional
 + sunbird_sso_publickey // it will always read from System ENV

## Telemetry

**Q:** Do telemetry events in Sunbird have a controller? How is telemetry data accessed from Sunbird?

**A:** Sunbird provides administrator dashboards that provide summary views of the telemetry data. You can pull out raw telemetry data from the EkStep platform using the [On Demand Data Exhaust API](https://community.ekstep.in/developer-apis/on-demand-data-exhaust-api){:target="_blank"} 

**Note:** Sign in to the [EkStep Community portal](https://community.ekstep.in){:target="_blank"}, to access the API 

## Other Common Errors 

<table>
  <tr>
    <th>Error</th>
    <th>Cause</th>
    <th>Solution</th>
  </tr>
  <tr>
    <td>Issue while generating JWT Token</td>
    <td>Private Key was generated with des3 algorithm</td>
    <td>Private Key should be generated without mentioning any algorithm</td>
  </tr>
  <tr>
    <td>Issue while creating bulk organizations - ‘API rate limit exceeded’
</td>
    <td>There is a limit on the number of calls that can be made within an hour by using a single API key. The current limit is 1000</td>
    <td> The development team can increase the limit, if necessary</td>
  </tr>
</table>
 

