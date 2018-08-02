---
type: landing
directory: developer-docs/how-to-guide
title: Create Organization
page_title: Create Organization
description: creating a new organization in sunbird instance
keywords: create organization, new organization in sunbird, organization, create
published: true
allowSearch: true
---
## Scenario


### Prerequisites
  - Postman app is installed, refer [How to install and call an API using Postman]
  - First Organization with channel ID
  - Access API using
     - Authorization header with Bearer {{api-key}}
     - Organization authentication key
  - Create Org API - To create an organisation and sub-organizations
  - A system administrator user is created

## Overview

Organizations, on Sunbird can be an institute or a body of individuals. To utilize Sunbird for organizational needs, an orgnization needs to be created on Sunbird.  

create an organization account replicating the organization containing multiple employees or users and  . To create an organization, the organization administrator user needs to be created under root organization. System Administrator can to generate an authorization token for creating organizations.

### Taskflow

An organization can be created in a Sunbird instance using ORG API, it can be further associated with a user and channel, refer [Mapping User to Organization](www.sunbird.org). For creating an organization follow the steps:

 

 Step  | Action         | Description                           |
-------|----------------|---------------------------------------------------------------|
 1 | Authentication | Enter the Bearer {{api-key}} to pass the Authorization header |
 2 |Create first Organization |To create first organization or a tenant for an installed instance on Sunbird, refer Initialize Sunbird  | 
 3 |Credentials|Use System administrator credentials to create the following instances Root Organization New User Root Org Admin|
 4 |Create root organization |Create an organisation using Org API document **Note**: To create rootOrg, pass the following attribute along with API    isRootOrg : true channel : a unique string value that can be used for filtering the data|
 5| Save   | Save the created organization ID |


### Concepts Covered
**Users**: The individual who can sign in and access the Sunbird portal to perform a set of action that is assigned by the system administrator.
**Organization**: Organizations can be an institute or a body of individuals. 
**Channel**: Unique identification number associated with the user or an organization
**Root Organization**: All users and sub-organization in an organisation are associated through the rootOrg
**System Administrator**: A user who manages end-to-end system from creating an organization, administrators for the organizations, members within the organization, and assign roles to the members


### Additional Topics

[Creating Organization](http://www.sunbird.org)

[Map users to different business units within the organisation](http://www.sunbird.org)

[Creating first organization](http://www.sunbird.org)
