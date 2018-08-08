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

XYZ Corp, is a global conglomerate with over ten thousand employees, spread across 5 locations. Employee training and enablement is one of the core values of the organization. To ensure that employees are regularly trained and upskilled, XYZ Corp has decided to use Sunbird for its learning and training solution. To give employees access to the learning platform, the organization's administrator needs to create and add user details. 

### Prerequisites

1.An initialized server instance of Sunbird. Initialization includes creating an org admin user (through Keycloak), creating a channel and associating a first organization with the channel.

For details, refer to:
* [Server Installation](http://www.sunbird.org/developer-docs/installation/server_installation/)
* [Channel APIs](http://www.sunbird.org/apis/framework/#tag/Channel-APIs)
* [First organization](http://www.sunbird.org/developer-docs/initialization) associated with channel ID

2.The API Key for access and basic authentication

3.An API client to make API calls. For example use Postman refer [Using Postman] (http://www.sunbird.org/apis/framework/#tag/usingpostman)

4.Access to the [Create User API](http://www.sunbird.org/apis/userapi/#tag/User-APIs)

## Overview

Every user belongs to an organization and is identified within the organization through a unique user ID. Sunbird, uniquely identifies every tenant organization through a channel. Hence, when creating a user, its not enough to only add user details and assign a user ID. To enable users, the user ID has to be associated with an organization and channel. Since a user also plays a role within an organization, the user gets fully enabled only after the user ID is associated to a role. For example, John is a manager in XYZ corporation, who can create, review and take courses. He is also an administrator in the system, in which capacity he can add users and assign permissions to them.  

### Taskflow
 
Only an org administrator can create users. Follow the sequence of steps provided to create a general user: 

1. Ensure that all prerequisites are met 
2. Use postman or curl command to execute Sunbird's Create User API
3. Specify values in the Create User API header   

Field | Sample Value 
--- | ---|
content-Type | appilcation/json
Authorization| JWT token with keyword "Bearer" example: {Bearer JWT Token}

4.Specify values for the following parameters in the request body of the API 

**Note:** 
i)While you may provide values for other parameters in the request body, it is essential to provide values in those mentioned in the following table. For more information, refer [User Create API](http://www.sunbird.org/apis/userapi/#operation/Create%20User)

ii)The sample values provided in the table are indicative

|Parameter | Sample Value |Description | Is Mandatory|
|--- | --- |--- |---|
email | john@xyzcorp.com|The email ID of the user| Yes
firstName |John| The first name of the user|Yes
lastName |Pal|The last name of the user |No
password |password123| The user's password|Yes
avatar|john.png |The user's photograph. It is recommended that images are in .png format. |No
language|English|A comma separated list of languages that are known to the user |No
phone  |987654321|The user's phone number |Yes
phoneVerified| true| Indicates if the phone number is verified | No
channel  |a1234567b890c|Represents the channel value. The channel value is got while creating a rootOrg - if you provide channel value, then you will get associated with that particular root organization - if channel is not provided in request body then system will pick channel set inside Environment variable and uses that to associate you with that root organization - Incase, channel is not provided neither in request nor the Envronment variables, then user creation will fail
userName| john1| The name assigned to the user in Sunbird|Yes 
education|**Contains the following fields**
degree  |B.A.|Represents the academic qualifications obtained by the user| Yes
yearOfPassing | 1934| The year in which the user obtained the degreee |No
courseName  |Bachelor of Arts| The name of the course that the user attended|No
boardOrUniversity  |ABC University| The name of the board or university that awarded the degree|Yes
address| **Contains the following fields** 
addType  |Permanent|The type of address. For example, permanent, communication, home, office, etc| Yes
addressLine1  |#34, ASDF Apartments| The first line in the user's address| Yes 
addressLine2  |ERTY Lane| The second line in the user's address|No
city  |Bangalore| The name of the city in the user's address|Yes
state  |Karnataka| The name of the state in the user's address|Yes
zipCode  |560089| The zip code in the user's address|Yes
jobProfile|**Contains the following fields** |
jobName  |Manager| The name of the job the user does in the organization|Yes
role  |L3| The hierarchical position of the user in the organization| Yes
joiningDate|2013-12-01| The date on which the user joined the organization. The date should be in YYYY-MM-DD|Yes
orgName  |XYZ Corp| The name of the user's organization| Yes
address |**Contains the following fields** | 
addType  |Organization|The type of address. For example, permanent, communication, home, office, etc| Yes
addressLine1  |#34, QWETY Bldg| The first line in the organization's address| Yes 
addressLine2  |ERTY Lane| The second line in the organization's address|No
city  |Bangalore| The name of the city in the organization's address|Yes
state  |Karnataka| The name of the state in the organization's address|Yes
zipCode  |560089| The zip code in the organization's address|Yes

Following is an example of request body for creating a user:

```{
"id": "string",
"ver": "string",
"ets": 0,
"params": {
    "msgid": "string",
    "did": "string"
    },
"request": {
    "email": "john@xyzcorp.com",
    "firstName": "John", 
    "lastName": "Pal",
    "password": "password123",
    "avatar": "john.png",
    "language": 
    [
     "English|"
    ],
"phone": "987654321", 
"phoneVerified": true,
"subject": 
[
    "string"
],
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
[ {
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
}
}
```
5.Save the created user ID
6.The user is created under the organization

### Concepts covered
**Users**: Individuals who can sign in and access the Sunbird portal.
**Organization**: An Organization is an institute or a body of individuals. 
**Channel**: A unique identifier associated with the tenant organization

### Additional Topics

[Creating Organization](http://www.sunbird.org)

[Map users to different business units within the organisation](http://www.sunbird.org)
