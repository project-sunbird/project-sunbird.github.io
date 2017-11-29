---
type: landing
directory: faqs
title: Database Questions
page_title: Database Questions
description: FAQ
keywords: Frequently asked questions, 'FAQ, questions'
published: true
---
Q: Are there any data initialization scripts?

A: Cassandra.cql is available for initial data setup. Follow the link and run the file to create initial data base: 

[Create database](https://github.com/project-sunbird/sunbird-lms-mw/tree/master/actors/src/main/resources)
Q: Are there any initial entries for?:

- ORG
- ROLE
- USERS

A:  There are no initial entries for a user. But default entry for ORG and Roles are available. Refer Cassandra.cql file.
     Under resources folder we have following two CSV.
     
     - pageMgmt.CSV ->  this will have page section details inside it. 
     - pageSection.csv ->  this will have details for a particular section.
     
     This two csv need to be run under cassandra, it will have some quey to generate the page data.
     this will work based on BFF(Backend for frontend design pattern)


Q:  Which application is using MongoDB? And for what purpose is it being used ?

A: Application is using following DB : 

   - Cassandra : Main Data base storage. used by learner-service
   - Elasticsearch :  80% of the data of Cassandra is stored under ES and it's used for Searching purpose
   - Postgres : this DB is used for cron scheduler job , to run in cluster mode
   - MongoDB : this was used for player service to store user session but in last release they are also using Cassandra 

Q: Is there any seed data which gets initiated on launch of any application? If so, can you please point to it?

A: At application launch time following table data are cached.

    a. page_management 
    b. page_section
   
   This data is to be refreshed daily. 
