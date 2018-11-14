---
type: landing
directory: developer-docs/how-to-guide
title: Create Badges
page_title: Create Badges
description: Create a badge for a user in Sunbird instance
keywords: create badge, badge issuer, assign badges 
published: true
allowSearch: true
---
## Scenario

As a part of employee development and training program, the Acme Corp., needs to create and administer a course. On successful completion of the course, the course administrator would like to certify these trainees so that it is easy to know who are the employees who have completed this course. 

To help with this, Sunbird provides the ability to create and award badges. The admin can create specific badges for each course and then award it to the employees who completes the course. The admin can also create an entity called a Badge Issuer who awards the badges. Once the badge is awarded to an employee, the badge is displayed on that employee's profile page.
This document explains the procedure of creating and awarding badges.

Sunbird also provides the ability to badge content. While this example shows how you to award a badge to a user, the same procedure can be followed to award a badge to content.
 
### Prerequisites

1. The [API Key for access](http://www.sunbird.org/apis/) and basic authentication

2. An API client to make API calls. For example use Postman refer [Using Postman](http://www.sunbird.org/apis/framework/#tag/usingpostman)

3. Access to the [Badging API](http://www.sunbird.org/apis/badgingframeworkapi/)

### Taskflow

The sequence of tasks the organization administrator follows to create badges include:
  1. Creating badge issuers using the [Create Badge Issuer API](http://www.sunbird.org/apis/badgingframeworkapi/#operation/CreatePost)
  2. Creating badges using the [Create Badge Class API](http://www.sunbird.org/apis/badgingframeworkapi/#operation/BadgeSearchPost)
  3. Award the badge using the [Badge Assertion API](http://www.sunbird.org/apis/badgingframeworkapi/#operation/BadgeAssertionReadByAssertionIdGet)
    
To issue badges, a badge issuer must be created. It is up to the organization administrator whether to create a single badge issuer to issue all badges or create individual badge issuers for each type of badge to be issued. In this scenario, the organization administrator decides that a single issuer can be used for issuing all badges. 

#### Create Issuer API

The [Create Issuer API](http://www.sunbird.org/apis/badgingframeworkapi/#operation/CreatePost) is used to create this issuer. They decide that Badges will be issued by an entity called Acme Corp Certifications. An email address and a URL are needed for this entity. The Acme Corp Training department URL and email address can be used for the badge issuer

Following is an example of request body for creating a issuer, the sample values provided in the request body are indicative:

##### Request Body

  {
    "request": {
    "name":"Badge Issuer",
    "description":"Issue all badges",			
    "url": "https://abc.org.in/mitra",		  
    "email":"aprtestthree@acmecorp.com"		
    }
  }

**Name** assigned according to the role
**Description** of the assigned role
**URL** URL for the domain for which the badge needs to be created
**Email** contains users email ID 

On successful execution of the issuer creation API, an issuerId is generated and following parameters are returned in the response. 

##### Response Body
  {
    "responseCode": "OK",
    "result": {
      "issuerId": "issuerslug-174",
      "image": null,
      "createdDate": "2018-08-07T08:46:44.193012Z",
      "issuerUrl: "https://abc.org.in/mitra",
      "issuerIdUrl: "http://localhost:8000/public/issuers/issuerslug-174",
      "name": "Badge Issuer",
      "description": "Issue all badges",
      "email": "aprtestthree@acmecorp.com"
    }
  }	

1. Save the created **issuerId**

2. The badge issuer is created, which is required to [Create Badge Class](#create-a-badge-class) and award badge to the user 

#### Create a Badge Class

Once the badge issuer has been created, the organization administrator can create new badge classes using the [Create Badge API](). It is recommended to create multiple badge classes, one for each type of accomplishment which is being recognised.
**Note**: The badge class only needs to be created once for one type of badge. The same badge class can be awarded multiple times to different recipients. 

The organization administrator must:
1. Decide a badge name 
2. Criteria for awarding the badge
2. Use the issuerId received from the [Create Issuer API](http://www.sunbird.org/apis/badgingframeworkapi/#operation/ReadByIssuerIdGet) call to indicate which entity is awarding the badge
3. Choose an image to be associated with the badge. This image will be displayed on the profile page of all the people who receive the badge 

The following is an example of the request body for creating badge class, the sample values provided in the request body are indicative:

###### Request Body

Parameter that are submitted through form application/x-www-form-urlencoded, multipart/formdata or both are usually used as the content type of the request 

	issuerId:issuerslug-66
	name: Padma
	description: Badge Issuer 
	criteria: Should be created by org admin
	rootOrgId: 0124758459210711040
	type: user
	subtype: badge
	roles: BADGE_ISSUER
	images : C:\Users\Pictures\badge_logo.png


##### Response Body**

  {
    "responseCode": "OK"
    "result": {
      "badgeId": "badgeslug-66",
      "criteria": "http://localhost:8000/public/badges/badgeslug-66/criteria",
      "roles": ["BADGE_ISSUER"],
      "description": "Badge Issuer",
      "type": "user",
      "rootOrgId": "0124758459210711040",
      "issuerId": "issuerslug-174",
      "createdDate": "2018-08-07T08:47:32.431314Z",
      "recipientCount": 0,
      "subtype": "certificate",
      "issuerIdUrl": "http://localhost:8000/public/issuers/issuerslug-174",
      "name": "Padma",
      "badgeIdUrl": "http://localhost:8000/public/badges/badgeslug-66”
      }
    }
  }  

1. Save the created <pre> badgeId</pre>

2. The badge ID created is required to [Award the badge](#awarding-the-badge) to a user

#### Awarding the Badge

Once the badge class is created, the org admin issues the badge to employees as they finish the course. The badge Assertion API is associated with fetching and listing the assertions of a badge. 
Note: You would have saved the issuer ID received after creating the issuer and the badge ID received after creating the badge class. These IDs are required for awarding the badge.
You will also need the userId of the person who will receive the badge. You can get the user id from the ...

Following is an example of request body for awarding the badge, the sample values provided in the request body are indicative:

##### Request Body

	{
    "request": {
      "recipientId": "d0e8c059-e038-4baf-834f-c702764a4b58",
      "recipientType": "user",
      "issuerId": "issuerslug-174",
      "badgeId": "badgeslug-66"
      }
  }

##### Response Body

  {
    "responseCode": "OK",
    "result": {
      "assertionDate": "2018-08-17T05:16:00.047850",
      "assertionImageUrl": "https://ntpstaging.blob.core.windows.net/badgr/uploads/badges/ca19a8e0f7c067fe6429f2a91ac5defe.png",
      "badgeId": "badgeslug-66",
      "assertionIdUrl": "http://localhost:8000/public/assertions/9cddb166-eed1-4291-9545-c57a2199f49e",
      "revoked": false,
      "issuerId": "issuerslug-",
      "createdDate": "2018-08-17T05:16:00.071368Z",
      "assertionId": "9cddb166-eed1-4291-9545-c57a2199f49e",
      "issuerIdUrl": "http://localhost:8000/public/issuers/issuerslug-174",
      "recipient": {
		  }
	  }
  }

### Concepts covered

**Badges** 

**User Badges**

**Content Badges**

### Additional Topics

Once the portal is updated successfully, the organization administrator can assign a registered user as the badge issuer through user interface. For details on issuing the badge through the user interface refer 
[Issuing Badges using User Interface](http://www.sunbird.org/features-documentation/badging_framework/content_badges/)