---
type: landing
directory: developer-docs
title: Announcements Onboarding
page_title: Announcement onboarding
description: Enable Announcement feature in Sunbird using Onboarding Announcements document
published: true
allowSearch: true
---
## Overview

This section helps you to enable onboarding announcements feature on Sunbird.

Ensure you have access and authorization to the following APIs before technical integration:

1. User APIs 
2. Organization APIs 
3. Locations APIs
4. Create Object API 
5. Admin access to Sunbird portal.

## Prerequisites

1. The users  is part of an organization
2. The user has administration rights on DIKSHA
3. The user is familiar with requesting APIs using Postman or similar tools
4. Locations as an individual identity is created. Refer Geo Location APIs 

**Note:** Announcement  feature does not support location hierarchy. While targeting an announcement, all locations are available in a flat structure irrespective of location type in database.

5. Organisations are associated with their respective locations.
To establish co-relation between the organization and their respective location: 

    i) Create Location on DIKSHA. To create location, refer Geo Location APIs
    
    ii) Once location is created, the locationId is generated
    
    iii) Use the same locationId while creating or updating the  organization. For details on Organization Management APIs, refer [Organization Management APIs](http://www.sunbird.org/apis/orgapi/)

### Creating Announcements type

Announcements are categorised into different types viz, order, circular, holidays. At any given time, there must be at least one announcement type available in the system so as to send announcements. The announcement types can be configured as per organizational requirements.

To create announcement types, refer [Object APIs](http://www.sunbird.org/apis/objectapi/)

Example of a typical request object to create announcement type is as follows:

<pre>
"request":{

        "entityName":"announcementtype",

        "indexed":true,

        "payload" : {

        	"id": "{UUID}",

        	"rootorgid": "{Tenant ID}",

            "name": "{String}",

            "status": "active",

            "createddate": "{timestamp}"

        }

}
</pre>

**Explanation:**

**id**: Generate a standard UUID using any reliable tool. For better understanding refer, [https://en.wikipedia.org/wiki/Universally_unique_identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier)

**rootorgid**: The unique ID of the tenant organization for which the particular announcement type is to be created.

**name**: Name of the announcement type.

**status**: This must be "active" for the announcement type to be available for use.

**createddate**: This must follow the format "yyyy-MM-dd HH:mm:ss:SSSZZZZ" eg: 2017-12-08 10:54:40:573+0000

### Assigning Roles to User(s)

To send announcements, the user must be assigned the role of an announcement sender.To assign this role:

<table>
  <tr>
    <th style="width:35%;">Step</th>
    <th style="width:65%;">Screen</th>
  </tr>
  <tr>
      <td>1. You are logged in with registered Admin credential in the portal <br>2. You are currently on <b>Home</b> page. You have clicked the <b>Profile</b> tab </td>
      <td><img src="pages/features-documentation/images/announcement/assignuserrole1.png"></td>
  </tr>
  <tr>
    <td>1. Search for users, to whom you want to assign the role <br>2. Click <b>Edit</b> to assign the role</td>
    <td><img src="pages/features-documentation/images/announcement/assignuserrole2.png"></td>
  </tr>
  <tr>
    <td>1. Select <b>Announcement Sender</b> <br>2. Click <b>Update</b> to assign the role</td>
    <td><img src="pages/features-documentation/images/announcement/assignuserrole3.png"></td>
  </tr>
</table>

To known more about the steps to use the functional features of announcements, refer [Announcement](http://www.sunbird.org/features-documentation/announcement/) section on the Sunbird website.
     
         
