---
type: landing
directory: faqs
title: Database Questions
page_title: Database Questions
description: FAQ
keywords: Frequently asked questions, 'FAQ, questions'
published: true
---
### Database

**Q:** Are there any data initialization scripts?

**A:** Cassandra.cql is available for initial data setup. Follow the link and run the file to create initial data base: 

For Cassandra initial setup , visit this link [Create database](https://github.com/project-sunbird/sunbird-lms-mw/tree/master/actors/src/main/resources){:target="_blank"}

**Q:** Are there any initial entries for?:

- ORG
- ROLE
- USERS

**A:**  There are no initial entries for a user. But default entry for ORG and Roles are available. Refer Cassandra.cql file and the links for two CSV files provided below:

- For Page Section Details: [pageMgnt.csv](https://github.com/project-sunbird/sunbird-lms-mw/blob/master/actors/src/main/resources/pageMgmt.csv){:target="_blank"}
- For details for particular section: [pageSection.csv](https://github.com/project-sunbird/sunbird-lms-mw/blob/master/actors/src/main/resources/pageSection.csv){:target="_blank"}
     
Run the two Csv under Cassandra. It will have some quey to generate the page data. This works based on BFF(Backend for frontend design pattern).

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
