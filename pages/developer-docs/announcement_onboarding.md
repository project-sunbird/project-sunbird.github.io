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

This document helps you to enable onboarding announcements feature on Sunbird. For setting up announcement feature, prerequisites need to be fullfilled. Before, ensuring the prerequisites, there are two more steps which gives better clarity to get going with the announcements feature.

**Who can use:**

To be able to follow the process of onboarding announcements feature, a user must have:

1. Access to User APIs and authorization to use it.

2. Access to Organization APIs and authorization to use it.

3. Access to Locations APIs and authorization to use it.

4. Access to Create Object API and authorization to use it.

5. Admin access to Sunbird portal.

Also, a user should be comfortable requesting for required APIs using Postman or similar tool.

## Pre-requisites

1. **Users** are associated with **Organisations**

2. **Locations** as an individual identity is created. 

**Note:** Refer [Geo Location APIs](http://www.sunbird.org/apis/geolocationapi/)

**Note:** Anouncements feature do not support location hierarchy. While targeting an announcement, all locations are available in a flat structure irrespective of location type in database.

3. **Organisations** are associated with respective **Locations**. To establish corelation between the organization with their respective location follow the steps below, to use location inside an organization: 
    
        i) Create **Location** in Sunbird. To create location, refer [Geo Location APIs](http://www.sunbird.org/apis/geolocationapi/)
        ii) Once location is created, it will provide **locationId**
        iii) Use same locationId while creating or updation organization. Refer [Organization Management APIs] (http://www.sunbird.org/apis/orgapi/)

### Creating Announcements type

Announcements are categorised into following types. As a prerequisite, there must be atleast one announcement type available in the system so that you can send an announcement. The announcement types can be configured as per the requirement of the organization.

To create announcement types, refer [Object APIs](http://www.sunbird.org/apis/objectapi/)

Example of a typical request object to create announcement type is as follows:

<pre>
"request":{

        "entityName":"announcementtype",

        "indexed":true,

        "payload" : {

        	"id": "<UUID>",

        	"rootorgid": "<Tenant ID>",

            "name": "<String>",

            "status": "active",

            "createddate": "<timestamp>"

        }

}
</pre>

**Explanation:**

**id**: Generate a standard UUID using any reliable tool. For better understanding refer, [https://en.wikipedia.org/wiki/Universally_unique_identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier)

**rootorgid**: The unique ID of the tenant for which the particular announcement type is to be created.

**name**: Name of the announcement type.

**status**: This must be "active" for the announcement type to be available for use.

**createddate**: This must follow the format "yyyy-MM-dd HH:mm:ss:SSSZZZZ" eg: 2017-12-08 10:54:40:573+0000

### Assigning Roles to User(s)

To send announcement users must have Announcement sender role. This role can be assigned by an admin using below steps:

<table>
  <tr>
    <th style="width:35%;">Step</th>
    <th style="width:65%;">Screen</th>
  </tr>
  <tr>
      <td>1. You are logged in with registered Admin credential in the portal <br>2. You are currently on <b>Home</b> page. You have clicked the <b>Profile</b></td>
      <td><td><img src="pages/features-documentation/images/announcement/assignuserrole1.png"></td>
  </tr>
    <td>1. You search for users, to whom you want to assign sender role <br>2. Click <b>Edit</b> to assign sender role</td>
    <td><img src="pages/features-documentation/images/announcement/assignuserrole2.png"></td>
  </tr>
    <td>1. Select <b>Announcement Sender</b> role <br>2. Click <b>Update</b> to assign the sender role</td>
    <td><img src="pages/features-documentation/images/announcement/assignuserrole3.png"></td>
  </tr>
</table>

To known more about the steps to use the functional features of announcements, refer [Announcement](http://www.sunbird.org/features-documentation/announcement/)
     
         
