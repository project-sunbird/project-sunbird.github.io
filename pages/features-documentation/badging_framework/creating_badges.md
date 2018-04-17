---
type: landing
directory: features-documentation
title: Creating Badges on Sunbird
page_title: Creating Badges on Sunbird
description: Details on the procedure of creating badges using APIs on Sunbird
keywords: 'badges, assign badges, create badges, issue badges, mark as recommneded, mark as popular, mark as official'
published: true
allowSearch: true
---

## Overview

Organization administrators can create and customize badges to suit their organization needs. This documentation helps technical team of an organization understand the procedures on:
- Creating Badges
- Creating Badge Issuers
- Defining created badges in the platform

### Prerequisites
To create badges on DIKSHA, ensure you have : <br>1. Sunbird API keys <br>2. Badging Framework APIs <br>3. Any standard rest API client, for instance, Postman <br>4. Subtypes configured in your local system. The existing subtypes are: <br>&emsp;a) Awards <br>&emsp;b) Certificates <br>&emsp;c) Authorizations <br>&emsp;d) Endorsements

### Defining Badge Issuers
Every badge created on DIKSHA must have an issuer to issue the badge. Organizations can have individual issuers for each created badge or one issuer for all the badges created. To create a badge issuer: <br>1. Open your rest API client <br>2. Load the badging framework APIs in the client <br>3. Set the Sunbird API authorization token to execute the badging framework APIs for creating a badge issuer

### Badge Issuer Details
Enter the following details in the request body of Create Issuer Endpoint:

|  Field Name                 | Description | Field Type | 
|--------------------------------|---------------------|--------------|
| **Name**       |         The name of the issuer         |      Mandatory     |     
| **Description** |        A short description about the Issuer         |      Mandatory     |  
| **URL** |  A fully-qualified URL of the Issuer's website or homepage  Mandatory |
| **Email** | A contact email of the Issuer | Mandatory |
| **Image** | An image file that represents the Issuer, such as a logo of the issuing organization, or image of the person | Optional |
On successful execution of the creation API, an issuer ID is issued

### Defining Badge Class
To create a badge class:
1. Execute the badging framework API for creating a badge class
2. Enter the following details in the request body of Create Badge Endpoint:
|  Field Name                 | Description | Field Type | 
|--------------------------------|---------------------|--------------|
| IssuerID   | Id of Issuer who issues the badge      |      Mandatory     |     
| Root OrgID |      Root organisation ID (on DIKSHA) to which the badge belongs         |      Mandatory     |  
| Title |  Title of the badge |  Mandatory |
| Description | A short description about the badge | Mandatory |
| Image| An image file that represents the badge | Optional |
| Type | Specify if the badge is for a user or content. Valid values are User/Content | Mandatory
| Subtype | Specify what the badge is related to. It is predefined list of values such as Official,Certificate, Award etc. |Optional |
| Criteria | A text string or a URL that describes criteria in achieving the badge | Mandatory|
| Roles | List of user roles on Sunbird who can issue the badge | Mandatory |

After successfully creating the badge issuer and the badge class on the API client, execute the Badge Assertion API to update the created badge issuer and badge class on the portal

