---
type: landing
directory: developer-docs/singlesignon
title: Create Organization and Users
page_title: Creating Organizations and Users
description: Details of master data exchange during single sign on
published: true
allowSearch: true
---


## Master Data Interchange

Sunbird requires some data that currently resides in external SSO systems to provide required functionality to the users who sign in to the platform. For example; in the case of DIKSHA, Sunbird requires data are about organization type (teacher education/training Institutes) and the members of the organizations. Within Sunbird, users are not granted permissions system-wide. User permissions are defined at the level of the organization to which they belong. This allows a user to be a part of many organizations and have different permissions for each organization.

### Data Requirements

To make this feasible, Sunbird requires the following information from the integrating party:

- List of organisations - their names and any unique identifier for them in external system

- List of members for each organisation - the username, full name and verified email address

- List of roles of each member in the organisation - Available roles are member, content creator and admin

## Organization APIs

Tenants can import their organizations on Sunbird using the organization APIs. 

The API has the following resources:

- Create Organization
- Update Organization
- Create User
- Update User
- Add Member to Organization
- Remove Member from Organization
- Single Sign-On API

*For information on Organization Management APIs, refer [Organization Management APIs](http://www.sunbird.org/apis/orgapi/)*

## User APIs

Tenants can import their users on Sunbird using the user APIs. 

The API has the following resources:

- Create User
- Search User
- Fetch User by Login ID
- Get User by Login ID
- Updates User
- Logs in User
- Logs out User
- Resets Forgotten Password
- Add badges to user
- Changes User Password
- Adds Users Current Login Time

*For information on User APIs, refer [User APIs](http://www.sunbird.org/apis/userapi/)*

