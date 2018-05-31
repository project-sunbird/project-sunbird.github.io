---
type: landing
directory: features-documentation/badging_framework
title: Creating Badges
page_title: Creating Badges 
description: Details on the procedure of creating badges using APIs on Sunbird
keywords: 'badges, assign badges, create badges, issue badges, mark as recommneded, mark as popular, mark as official'
published: true
allowSearch: true
---

## Overview

Organization administrators can create and customize badges to suit their organization needs. This page provides you information on the procedures to:

- Create badges
- Create badge Issuers
- Define created badges in the platform

### Prerequisites

To create badges on Sunbird, ensure you have: <br>1. Sunbird API keys <br>2. Access to Badging Framework APIs <br>3. Any standard rest API client, for instance, Postman <br>4. Subtypes configured in your local system. The existing subtypes are: <br>&emsp;a) Awards <br>&emsp;b) Certificates <br>&emsp;c) Authorizations <br>&emsp;d) Endorsements

### Defining Badge Issuers

Every badge must be issued by a designated badge issuer. Organizations can have individual issuers for each created badge or one issuer for all the badges created. To create a badge issuer: <br>1. Open your rest API client <br>2. Load the badging framework APIs in the client <br>3. Set the Sunbird API authorization token to execute the badging framework APIs for creating a badge issuer

**Note:** For API details, refer [Badging Framework](http://www.sunbird.org/apis/badgingframeworkapi/){:target="_blank"}

### Badge Issuer Details

Enter the following details in the request body of the Create Issuer Endpoint:

|  Field Name                 | Description | Field Type | 
|--------------------------------|---------------------|--------------|
| **Name**       |         The name of the issuer         |      Mandatory     |     
| **Description** |        A short description about the Issuer         |      Mandatory     |  
| **URL** |  A fully-qualified URL of the Issuer's website or homepage  Mandatory |
| **Email** | A contact email of the Issuer | Mandatory |
| **Image** | An image file that represents the Issuer, such as a logo of the issuing organization, or image of the person | Optional |

On successful execution of the creation API, you will get the Issuer ID.

### Defining Badge Class

To create a badge class:<br>
1. Execute the [Badging Framework API](http://www.sunbird.org/apis/badgingframeworkapi/#operation/BadgeCreatePost){:target="_blank"}<br> 
2. Enter the following details in the request body of Create Badge Class Endpoint:<br>

|  Field Name                 | Description | Field Type | 
|--------------------------------|---------------------|--------------|
| IssuerID   | Id of Issuer who issues the badge      |      Mandatory     |     
| Root OrgID |      Root organisation ID (on Sunbird) to which the badge belongs         |      Mandatory     |  
| Title |  Title of the badge |  Mandatory |
| Description | A short description about the badge | Mandatory |
| Image| An image file that represents the badge | Optional |
| Type | Specify if the badge is for a user or content. Valid values are User/Content | Mandatory |
| Subtype | Specify what the badge is related to. It is predefined list of values such as Official,Certificate, Award etc. | Mandatory |
| Criteria | A text string or a URL that describes criteria in achieving the badge | Mandatory|
| Roles | List of user roles on Sunbird who can issue the badge | Mandatory |

After successfully creating the badge issuer and the badge class on the API client, execute the [Badge Assertion API](http://www.sunbird.org/apis/badgingframeworkapi/#operation/BadgeAssertionSearchPost){:target="_blank"} to update the created badge issuer and badge class on the portal.

