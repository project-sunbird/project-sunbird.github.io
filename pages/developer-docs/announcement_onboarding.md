---
type: landing
directory: developer-docs
title: Announcement Onboarding
page_title: Announcement onboarding
description: Use this document to enable Announcement feature in Sunbird
published: true
allowSearch: true
---

**Announcements onboarding**

**Overview:**

This document helps enable a Sunbird instance with announcements feature. Apart from ensuring the prerequisites are fulfilled, there are 2 more steps to get going with the announcements feature.

**Who can use:**

To be able to follow the process of onboarding announcements feature to a Sunbird instance, a user must have:

1. Access to User APIs and right authorization to use it.

2. Access to Organization APIs and right authorization to use it.

3. Access to Locations APIs and right authorization to use them.

4. Access to Create Object API and right authorization to use it.

5. Admin access to Sunbird portal instance.

Also, a user should be comfortable calling required APIs using Postman or similar tool.

**Pre-requisites:**

1. **Users** are associated with **Organisations**

2. **Locations** are created - Currently using APIs (Detailed document at <link to locations API doc>)

    1. Currently announcements feature do not support location hierarchy. When targeting an announcement, all locations will be available in a flat structure irrespective of location type in database.

3. **Organisations** are associated with respective **Locations** - Currently using APIs (Detailed document at <link to organisation-location linking API doc>)

**Create Announcement types:**

Announcements are  categorised into following  types. As a prerequisite, there must be at least one announcement type available in the system so that you can send an announcement. The announcement types can be configured as per r tenant requirements. 

To create announcement types, please use the object APIs - <Link to object APIs>

A typical request object to create announcement type is shown in the following example:

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

**id**: Please generate a standard UUID using any reliable tool. Ref: [https://en.wikipedia.org/wiki/Universally_unique_identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier)

**rootorgid** - The unique ID of the tenant for which the particular announcement type is to be created.

**name** - Name of the announcement type.

**status** - This must be "active" for the announcement type to be available for use.

**createddate** - This must follow the format "yyyy-MM-dd HH:mm:ss:SSSZZZZ" 

eg: 2017-12-08 10:54:40:573+0000

**Assign Role to User(s)**

To send announcement a user must have Announcement sender role. This role can be assigned by an admin using below steps:

1. Login as a user having admin rights / enough rights to manage users.

2. Visit profile page.

3. Search for the user whom to assign announcement sender role.

4. Edit user and assign "Announcement sender" role.
