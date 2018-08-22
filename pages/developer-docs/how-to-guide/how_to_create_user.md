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

A company, XYZ Corp, is a global conglomerate with over ten thousand employees, spread across 5 locations. Employee training and enablement is one of the core values of the organization. To ensure that employees are regularly trained and upskilled, XYZ Corp has decided to use Sunbird for its learning and training solution. To give employees access to the learning platform, the organization's administrator needs to create and add user details. 

Every user belongs to an organization and is identified within the organization through a unique user ID. Sunbird, uniquely identifies every tenant organization through a channel. Hence, when creating a user, its not enough to only add user details and assign a user ID. To enable users, the user ID has to be associated with an organization and channel. Since a user also plays a role within an organization, the user gets fully enabled only after the user ID is associated to a role. For example, John is a manager in XYZ corporation, who can create, review and take courses. He is also an administrator in the system, in which capacity he can add users and assign permissions to them.  

### Prerequisites

1.An initialized server instance of Sunbird. Initialization includes creating an organization administrator (through Keycloak), creating a channel and associating a first organization with the channel.

For details, refer to:

* [Server Installation](http://www.sunbird.org/developer-docs/installation/server_installation/)

* [Channel APIs](http://www.sunbird.org/apis/framework/#tag/Channel-APIs)

* [First organization](http://www.sunbird.org/developer-docs/initialization) associated with channel ID

2.The API Key for access and basic authentication
  
3.An API client to make API calls. For example use Postman refer [Using Postman] (http://www.sunbird.org/apis/framework/#tag/usingpostman)

4.Access to the [Create User API](http://www.sunbird.org/apis/userapi/#operation/Create%20User)

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
}],
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