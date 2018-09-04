---
type: landing
directory: developer-docs/how-to-guide
title: Associating Organization and User
page_title: Associating Organization and User
description: Create a new user in Sunbird instance
keywords: create user, new user, create, user
published: true
allowSearch: true
---
## Scenario

A company, XYZ Corp, is a global conglomerate with over ten thousand employees, spread across 5 locations. Employee training and enablement is one of the core values of the organization. To ensure that employees are regularly trained and upskilled, XYZ Corp has decided to use Sunbird for its learning and training solution. To give employees access to the learning platform, the organization's administrator needs to create and add user details with the organization. 

Every user must belong to an organization and is identified within the organization through a unique user ID. To enable users, the user ID has to be associated with an organization and channel and subsequently assigned a role. For example, John is a manager in XYZ corporation, who can create, review and take courses. He is also an administrator in the system, in which capacity he can add users and assign permissions to them and associate them with the organization.

### Prerequisites

1. An intialized Sunbird instance, an [organization](http://www.sunbird.org/developer-docs/how-to-guide/how_to_create_organization/) and a [user](http://www.sunbird.org/developer-docs/how-to-guide/how_to_create_user).

2. The [API Key for access](http://www.sunbird.org) and basic [authentication](http://www.sunbird.org/developer-docs/installation/server_installation/installation/#post_installation_configuration). As a response, the access_token is generated which is used for `x-authenticated-user-token` header 
  
3. An API client to make API calls. For example use Postman #refer [Using Postman](http://www.sunbird.org/apis/framework/#tag/usingpostman)#

4. Access to the [Mapping User to Organization API](http://www.sunbird.org//apis/orgapi/#operation/Organisation%20Add%20User)

### Taskflow

The sequence of tasks the organization administrator follows to create users include:

1. Specify values for the following parameters in the request body of the API 

An organization can be created in a Sunbird instance using [ORG API](http://www.sunbird.org/apis/userapi/#tag/Orgs-APIs), it can be further associated with a [user](http://www.sunbird.org/apis/orgapi/#operation/Organisation%20Add%20User). Following is an example of request body for associating a user to an organization, the sample values provided in the request body are indicative:

#### Request Body for Mapping User to Organization

    {
        "request": {
        "organisationId": "0125231248111779848",
        "provider": "string",
        "roles": ["PUBLIC"],
        "userId": "4eec2f70-b821-42b9-9694-8a08587715af",
        "userName": "john1"
        }    
    }

#### Response Body

    {
        "responseCode": "OK",
        "result": {
            "response": "SUCCESS"
        }
    }

2. The user (John) is added to the organization (XYZ Corp)

### Concepts Covered

**Users**: The individual who can sign in and access the Sunbird portal to perform a set of action that is assigned by the system administrator.

**Organization**: Organizations can be an institute or a body of individuals. 

**Channel**: Unique identification number associated with the user or an organization

**Root Organization**: All users and sub-organization in an organisation are associated through the rootOrg

**System Administrator**: A user who manages end-to-end system from creating an organization, administrators for the organizations, members within the organization, and assign roles to the members


### Additional Topics

[Creating first organization](http://www.sunbird.org/developer-docs/initialization)

[Creating user](http://www.sunbird.org/developer-docs/how-to-guide/how_to_create_user)

[Create organization](http://www.sunbird.org/developer-docs/how-to-guide/how_to_create_organization)

