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
| **Description** |          A short description about the Issuer         |      Mandatory     |      
