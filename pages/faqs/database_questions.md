---
type: landing
directory: faqs
title: Troubleshooting
page_title: Troubleshooting
description: Troubleshooting
keywords: Troubleshoot, answers, Database, application, Frequently asked questions, 'FAQ, questions'
published: true
---
### Database

**Q:** Are data initialization scripts available?

**A:** Use the Cassandra.cql file to do the initial data setup. 
For details, refer [Create database](https://github.com/project-sunbird/sunbird-lms-mw/tree/master/actors/src/main/resources){:target="_blank"} and run the file, to create the initial Cassandra data base.

**Q:** Does the database have initial/ default entries for 'Org', 'Role' and 'Users'?

**A:**  'Users' do not have initial/default entries. There are default entries for 'Org' and 'Roles'. 
For details, refer Cassandra.cql file and the links for two CSV files provided below:

- For Page Section Details: [pageMgnt.csv](https://github.com/project-sunbird/sunbird-lms-mw/blob/master/actors/src/main/resources/pageMgmt.csv){:target="_blank"}
- For details for particular section: [pageSection.csv](https://github.com/project-sunbird/sunbird-lms-mw/blob/master/actors/src/main/resources/pageSection.csv){:target="_blank"}
     
Run the two Csv under Cassandra. It will have some query to generate the page data. This works based on BFF(Backend for frontend design pattern).

**Q:**  Which application is using MongoDB? And for what purpose is it being used ?

**A:** The following applications are using Database: 

 - Cassandra : Main Data base storage, used by learner-service
 - Elasticsearch :  80% of the data of Cassandra is stored under ES and it is used for **Search** purpose
 - Postgres : This Database is used for cron scheduler job, to run in cluster mode
 - MongoDB : This is used for player service to store user session
 
**Q:** Is there any seed data which gets initiated on launch of any application?

**A:** During application launch, following table data are cached. These data needs to be refreshed on daily basis. 

- page_management 
- page_section

### Application 
