---
type: landing
directory: developer-docs/how-to-guide
title: Create User
page_title: Create User
description: Create a new user in Sunbird instance
keywords: create user, new user, create, user
published: true
allowSearch: true
---
## Scenario

As a part of employee development and training program, the Acme Corp., needs to creates and administers a course. On successful completion of the course, the administrator of the course would like to certify these trainees so that it is easy to know who are the employees who have completed this course. 

To help with this, Sunbird provides the ability to create and award badges. The admin can create specific badges for each course and then award it to the employees who completes the course. The admin can also create an entity called a Badge Issuer on behalf of whom the badges are awarded. Once the badge is awarded to an employee, the badge is displayed on that employees profile page.
This document explains the procedure of creating and awarding badges.

Sunbird also provides the ability to badge content. While this example shows how you award a badge to a user, the same procedure can be followed to award a badge to content.
 

### Prerequisites

1.The API Key for access and basic authentication

2.An API client to make API calls. For example use Postman refer [Using Postman](http://www.sunbird.org/apis/framework/#tag/usingpostman)

3.Access to the [Badging API](http://www.sunbird.org/apis/badgingframeworkapi/)


An initialized server instance of Sunbird. Initialization includes creating an organization administrator (through Keycloak), creating a channel and associating a first organization with the channel.

For details, refer to:


* [Channel APIs](http://www.sunbird.org/apis/framework/#tag/Channel-APIs)

* [First organization](http://www.sunbird.org/developer-docs/initialization) associated with channel ID


### Taskflow
 
The sequence of tasks the organization administrator follows to create users include:

1.Specify values for the parameters in the request body of the API. Following is an example of request body for creating a user, the sample values provided in the request body are indicative:

**Request Body**

<pre>
"request": {
    "email": "john@xyzcorp.com",
    "firstName": "John", 
    "lastName": "Pal",
    "password": "password123",
    "avatar": "john.png",
    "language":  ["English"],
"phone": "987654321", 
"phoneVerified": true,
"subject": [ "string" ],
"channel": "a1234567b890c",
"userName": "john1"
"education": 
[{
    "degree": "BA",
    "yearOfPassing": 1934,
    "courseName": "Bachelor of Arts",
    "boardOrUniversity": "ABC University",
    "address": 
    {
      "addType": "Permanent",
      "addressLine1": "#34, ASDF Apartments",
      "addressLine2": "ERTY Lane",
      "city": "Bangalore",
      "state": "Karnataka",
      "zipCode": "560089"
    },
}
],
"jobProfile": 
    [
        {
    "jobName": "Manager",
    "role": "L3",
    "joiningDate": "2013-12-01",
    "orgName": "XYZ Corp",
    "address": 
    {
        "addType": "Organization",
        "addressLine1": "#34, QWETY Bldg",
        "addressLine2": "ERTY Lane",
        "city": "Bangalore",
        "state": "Karnataka",
        "zipCode": "560089"
    }
}
],
</pre>

**Response Body**

<pre>
 "responseCode": "OK",
   "result": {
       "response": "SUCCESS",
       "accessToken": null,
       "userId": "4eec2f70-b821-42b9-9694-8a08587715af"
   }
</pre>

2.Save the created user ID

3.The user is created under the organization

### Concepts covered

**Users**: Individuals who can sign in and access the Sunbird portal.

**Organization**: An Organization is an institute or a body of individuals. 

**Channel**: A unique identifier associated with the tenant organization

### Additional Topics

[Creating first organization](http://www.sunbird.org/developer-docs/initialization)

[Creating Organization](http://www.sunbird.org/developer-docs/how-to-guide/how_to_create_organization)

[Map users to different business units within the organisation](http://www.sunbird.org/developer-docs/how-to-guide/how_to_create_org_add_user)