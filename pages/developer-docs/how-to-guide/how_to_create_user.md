---
type: landing
directory: developer-docs/how-to-guide
title: How to Create User
page_title: How to Create User
description: creating a new user in sunbird instance
keywords: create user, new user in sunbird
published: true
allowSearch: true
---
## Scenario

Consider an organization Nurture Institutions, recognized education and learning body, that exists in multiple cities across the country wants to use Sunbird and Ekstep content service for their organizational needs. They must register their organization with Ekstep and get a unique channel ID. The registered organisations must have their virtual replica over Sunbird. Further, they need to create organization administrator (org admin)   and other individual user with different privileges to perform tasks. This document elaborates the process of creating and uploading users in the organization for the Sunbird instance using the appropriate APIs.

### Prerequisites

To add users to the Sunbird instance, ensure that the following prerequisites are met:

1. Register your channel (organization) with Ekstep. On registration, a unique Channel ID is assigned to your organization. 
2. Install a server instance of Sunbird. For details, refer to [Server Installation](http://www.sunbird.org/developer-docs/installation/server_installation/)
3. Create a channel for your organization. For details, refer to [Channel APIs](http://www.sunbird.org/apis/framework/#tag/Channel-APIs)
4. Have a [first organization](http://www.sunbird.org/developer-docs/initialization) associated with channel ID
4. Have the API Key for access and basic authentication
5. Use an API client to make API calls. For example use Postman refer [Using Postman] (http://www.sunbird.org/apis/framework/#tag/usingpostman)
6. Access to [Create User API](http://www.sunbird.org/apis/userapi/#tag/User-APIs)
7. Have a valid [Admin user](http://www.sunbird.org/) 

## Overview

A user in an organization performs different task or roles. The created user should be authenticated and assigned to a organization and a channel. For example, a system administrator is the root user of the organisation who manages end-to-end system. 

### Taskflow
A organization admin can create a user and associate it with an organization. Let us assume that a new user needs to be created in  Nurture Institutions. 

**Create a New User** 
A user can be created using Create User API and associated with an organization using channel ID. It is must to provide values to the parameters in the request body of the Create User API. 

Enter the following data for creating the sample request body in the 

Field | Sample Value |Description 
--- | --- |---
Information about API| |Refer [User Create API](http://www.sunbird.org/apis/userapi/#operation/Create%20User) documentation |
id | |
ver| | 
ets |0|


Field | Sample Value |Description 
--- | --- |--- 
params |    |
msgid|   |  
did| | 
request | |
email | xyz@nurtureeducorp.com|Email ID of the new user
firstName |Sam| First name of the user
lastName |Pal|Last name of the user 
password |password123| Password
avatar|sam.png |Image of the user 
language|English|Language of the user


Following is an example of request body for creating a user:

```{
"id": "string",
"ver": "string",
"ets": 0,
"params": {
"msgid": "string",
"did": "string"
},
"request": {
"email": "string",
"firstName": "string",
"lastName": "string",
"password": "string",
"avatar": "string",
"language": [
"string"
],
"gender": "string",
"phone": "string",
"phoneVerified": true,
"subject": [
"string"
],
"channel": "string",
"externalIds": [
{
"id": "string",
"provider": "string",
"idType": "string"
}
],
"profileSummary": "string",
"userName": "string",
"dob": "string",
"grade": "string",
"location": "string",
"education": [
{
"degree": "string",
"yearOfPassing": 0,
"courseName": "string",
"boardOrUniversity": "string",
"address": {
"addType": "string",
"addressLine1": "string",
"addressLine2": "string",
"city": "string",
"state": "string",
"zipCode": "string"
},
"percentage": 0,
"grade": "string"
}
],
"profileVisibility": { },
"address": [
{
"addType": "string",
"addressLine1": "string",
"addressLine2": "string",
"city": "string",
"state": "string",
"zipCode": "string"
}
],
"jobProfile": [
{
"jobName": "string",
"role": "string",
"joiningDate": "string",
"endDate": "string",
"orgId": "string",
"orgName": "string",
"subject": [
"string"
],
"address": {
"addType": "string",
"addressLine1": "string",
"addressLine2": "string",
"city": "string",
"state": "string",
"zipCode": "string"
}
}
],
"webPages": {
"type": "string",
"url": "string"
}
}
}
```
| Step  | Action         | Description                                                   |
|-------|----------------|---------------------------------------------------------------|
|Step 2 | Create user    | Create user from postman or curl command using sunbird create user API documentation  | 
|Step 3 | Save           | Save the created user ID |

The user is created under the organisation. 

### Concepts covered
**Users**: The individual who can sign in and access the Sunbird portal to perform a set of action that is assigned by the system administrator.
**Organization**: Organizations can be an institute or a body of individuals. 
**Channel**: Unique identification number associated with the user or an organization

### Additional Topics

[Creating Organization](http://github.com)

[Map users to different business units within the organisation](http://github.com)
