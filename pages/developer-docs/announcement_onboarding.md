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

This document helps you to enable onboarding announcements feature on Sunbird. For setting up announcement feature, prerequisites must be fullfilled.

**Who can use:**

To be able to follow the process of onboarding announcements feature, a user must have:

* Access to Organization APIs and authorization to use it.
* Access to Locations APIs and authorization to use it.
* Access to Create Object API and authorization to use it.
* Admin access to Sunbird portal.

**Note:** User should be comfortable requesting for required APIs using Postman or similar tool.

## Pre-requisites

 + **Users** are associated with **Organisations**, to be able to receive announcements.
 
 + **Locations** as an individual entity must be created. Refer [Geo Location APIs](http://www.sunbird.org/apis/geolocationapi/)
 
 **Note:** Anouncements feature do not support location hierarchy. While targeting an announcement, all locations are available in a flat structure irrespective of location type in database.
 
 + **Organisations** must be associated to their respective **Locations**. To establish corelation between the organization with their respective location follow the steps below, to use location inside an organization: 
 
 1. Create **Location** in Sunbird. To create location, refer [Geo Location APIs](http://www.sunbird.org/apis/geolocationapi/)
 2. Once location is created, it will provide **locationId**
 3. Use same locationId while creating or updating organization. Refer [Organization Management APIs](http://www.sunbird.org/apis/orgapi/)

## Creating Announcement types

Announcements are categorised into different types example, orders, circular, holidays, news etc. As a prerequisite, there must be atleast one announcement type available in the system so that you can send an announcement. The announcement types can be configured as per the requirement of the root organization.

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

**id**: Generate a standard UUID using any reliable tool. For better understanding on UUID refer, [https://en.wikipedia.org/wiki/Universally_unique_identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier)

**rootorgid**: The unique ID of the tenant (root organization) for which the particular announcement type is to be created.

**name**: Name of the announcement type.

**status**: Status must be ```active``` for the announcement type to be available for use.

**createddate**: Created Date must follow the format ```yyyy-MM-dd HH:mm:ss:SSSZZZZ``` eg: ```2017-12-08 10:54:40:573+0000```

## Assigning Roles to User(s)

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
     
         
