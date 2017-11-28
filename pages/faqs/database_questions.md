---
type: landing
directory: faqs
title: Database Questions
page_title: Database Questions
description: FAQ
keywords: 'FAQ, questions'
published: true
---
Q: Are there any data initialization scripts?

A: For initial data setup we have a file cassandra.cql under below location .
 https://github.com/project-sunbird/sunbird-lms-mw/tree/master/actors/src/main/resources 
 User need to run that file. this will create the initial Data base.

Q: Are the any initial entries for ORG, ROLE, USERS etc?

A:  There is no initial entries for User, but default entry for ORG and Roles are there , in side Cassandra.cql file.
     Under resources folder we have following two CSV.
     a. pageMgmt.CSV ->  this will have page section details inside it. 
     b. pageSection.csv ->  this will have details for a particular section.
     This two csv need to be run under cassandra, it will have some quey to generate the page data.
     this will work based on BFF(Backend for frontend design pattern)


Q:  Which application is using MongoDB? And for what purpose is it being used ?

A: Application is using following DB : 
   Cassandra - Main Data base storage. used by learner-service
   Elasticsearch -  80% of the data of Cassandra is stored under ES and it's used for Searching purpose.
   Postgres : this DB is used for cron scheduler job , to run in cluster mode. 
   MongoDB : this was used for player service to store user session but in last release they are also using Cassandra 

Q: Is there any seed data which gets initiated on launch of any application? If so, can you please point to it?

A: At application launch time following table data are cached.
    a. page_management 
    b. page_section
   These data are refreshed daily. 
