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
Any organization, recognized education or learning body or an individual user with privileges  can add other users on Sunbird. To create users on Sunbird, the organization administrator must first upload all the required details of the users. This document elaborates the process of creating and uploading users on the organization Sunbird instance using the appropriate APIs.

### Prerequisites
 - Sunbird instance is installed and configured
 - Postman app is installed, refer How to install and Call an API using Postman
 - Root Organization with channel ID, refer 
   - Access API using
   - Authorization header with Bearer {{api-key}}
 - User authentication key
 - Create User API - To create other users associated with an organisation 
 
## Overview

A user is created in an organization to perform different task or roles. The created user should be authenticated and assigned to a organization and a channel. For example, a system administrator is the root user of the organisation who manages end-to-end system. 

### Taskflow
A user can be created using Create User API and associated with an organization using channel ID. 

| Step  | Action         | Description                                                   |
|-------|----------------|---------------------------------------------------------------|
|Step 1 | Authentication | Enter the Bearer {{api-key}} to pass the Authorization header |
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
