---
type: landing
directory: developer-docs/configuring_sunbird
title: Creating Announcements
page_title: Creating Announcements 
description: Enable organizations and users to configure and use the Announcement feature on Sunbird 
published: true
allowSearch: true
---
## Overview

Sunbird enables tenant organizations announce events, courses, news, circulars, etc. to all or select members, in all or some of the organization's operative locations. Only members with required administrative permissions can create, publish and delete announcements. To enable effective use of the announcements feature, it is therefore necessary to set up the appropriate parameters. 

To configure the announcements feature, users must have administrator access to the Sunbird portal and access and authoriztion to use:

* Organization APIs 
* Locations APIs 
* Create Object APIs 

**Note:** To effectively work with APIs, the administrator should be familiar with JSON structures and relevant tools to call APIs, like the Postman tool.

## Pre-requisites

 + Association of **Users** with their respective **Organisations**
 
 + Creation of **Location** as individual entities  
 
The Announcements feature does not support location hierarchy. While targeting an announcement, all locations are available in a flat structure irrespective of location type in the database.
 
 + Associate **Organisations** with their respective **Locations**. 
 
 The process to establish a corelation between the organization and its location is as follows: 
 
  1.Create **Location** in Sunbird
 
**Note:** To create locations, refer to [Geo Location APIs](http://www.sunbird.org/apis/geolocationapi/){:target="_blank"}.

  2.On successful creation of a location, you will get a **locationId**
  3.Use the **locationId** to create or update an organization
 
**Note** To create organizations, refer to [Organization Management APIs](http://www.sunbird.org/apis/orgapi/){:target="_blank"}
 
## Creating Announcement Types

Announcements are categorised into different types, for example; orders, circulars, holidays, news etc. There must be atleast one announcement type created for the organization to enable the administrator to send an announcement. Announcement types are created as per the requirements of the tenant organization.

**Note** To create announcement types, refer to [Manage Announcement Type APIs](http://www.sunbird.org/apis/announcements/#tag/Manage-Announcement-Type-APIs){:target="_blank"}

## Assigning Roles to User(s)

To send announcements, it is essential that a user is assigned the role of an announcement sender.

<table>
    <tr>
    <th style="width:35%;">Step</th>
    <th style="width:65%;">Screen</th>
    </tr>
    <tr>
      <td>1. Log in with registered Administrator credentials <br />2. On the <b>Home</b> page, click <b>Profile</b> </td>
      <td><img src="pages/features-documentation/images/announcement/assignuserrole1.png" /></td>
    </tr>
    <tr>
    <td>1. Search for users, to whom you want to assign the role <br />2. Click <b>Edit</b> 
    </td>
    <td><img src="pages/features-documentation/images/announcement/assignuserrole2.png" />
    </td>
    </tr>
    <tr>
    <td>1. In the <b>Select Role<b> screen, select <b>Announcement Sender</b> <br />2. Click <b>Update</b> to assign the role&lt;/td&gt;
    </b></b></td><td><img src="pages/features-documentation/images/announcement/assignuserrole3.png" />
    </td>
</tr>
</table>

**Note**: For details on other announcement features and their use, refer to the [Announcement](http://www.sunbird.org/features-documentation/announcement/){:target="_blank"} section.
