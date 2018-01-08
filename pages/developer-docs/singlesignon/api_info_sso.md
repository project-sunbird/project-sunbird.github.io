---
type: landing
directory: developer-docs/singlesignon
title: API Information
page_title: API Information
description: Details of API required for user onboarding and sinlge sign on
published: true
allowSearch: true
---

## Organization APIs
Tenants can import their organizations and users on Sunbird using the organization and user APIs. The API has the following resources:

- Create Organization
- Update Organization
- Create User
- Update User
- Add Member to Organization
- Remove Member from Organization
- Single-Sign-On API

### Create Organization
POST - <BASE_URL>/api/org/v1/create

Creates a new organization

**Request**

Request Body - organization details
<pre>
{
  "request":{  
      "orgName": "name of the organization", //required
      
      "description": "description", //optional
      
      "externalId": "identifier of the organization in the partner system", // required
      
      "provider": "channel of the tenant to which the organization belongs to, e.g.: ap",   //required
      
      “homeUrl”: Organization’s homepage url, //optional
      
“orgCode”: Unique code for the organization that is being uploaded, //optional

“orgType”: Type of organization, such as, NGO, primary school, secondary school etc., //optional

“preferredLanguage”: Language preferences for the organization, if any, //optional

"contactDetail": [{ "email": "user@sunbird.com",  “Phone”: “1234567890” }] //optional

   }
}
</pre>

District, Block and Cluster fields will be introduced shortly.

**Response**

orgId - Identifier of the created organization
<pre>
{  
   "id":"api.org.create",
   
   "ver":"1.0",
   
   "ts":"YYYY-MM-DDThh:mm:ssZ+/-nn.nn",
   
   "params":{ 
   
      "resmsgid":"",
      
      "msgid":"",
      
      "err":"0",
      
      "status":"SUCCESS",
      
      "errmsg":"Operation successful"
   },
   "result":{  
        "response": "SUCCESS",
	
        "orgId": "0122852840502968322"
   },
   "responseCode":"OK"
}
</pre>

### Update Organization

PATCH - <BASE_URL>/api/org/v1/update

Updates an existing organization.

**Request**

Request Body - organization details
<pre>
{
  "request":{  
  
      "externalId": "identifier of the organization in the partner system", // required
      
      "provider": "channel of the tenant to which the organization belongs to, e.g.: ap", //required
      
      "orgName": "name of the organization", //optional
      
      "description": "description", //optional
   }
}
</pre>

**Response**
<pre>
{  
   "id":"api.org.update",
   
   "ver":"1.0",
   
   "ts":"YYYY-MM-DDThh:mm:ssZ+/-nn.nn",
   
   "params":{  
   
      "resmsgid":"",
      
      "msgid":"",
      
      "err":"0",
      
      "status":"SUCCESS",
      
      "errmsg":"Operation successful"
   },
   "result":{  
   
        "response": "SUCCESS"
   },
   "responseCode":"OK"
}
</pre>

### User APIs

**Create User**

POST - <BASE_URL>/api/user/v1/create

Creates a new user

**Request**

Request Body - user details

<pre>
{
  "request":{  
  
      "firstName": "first name of the user", //required
      
      "lastName": "last name of the user", //optional
      
      "provider": "channel of the tenant to which the user belongs to, e.g.: ap", //required
      
      "email": "user.email@test.com", //required
      
      "emailVerified": true, //required
      
      "userName": "unique username for the user", //required
      
      "phone": "9900032121",
      
      "phoneVerified": true,
      
      "password": "password for the user to login into sunbird" //optional
      
      “roles”: “roles to be associated with user. E.g.: CONTENT_CREATOR, CONTENT_REVIEWER, COURSE_MENTOR, FLAG_REVIEWER” //optional
      
 	“position”: //optional
	
	“grade”: Classes taught by the user //optional. Values - Class 1 to Class10, Kindergarten, Other
	
	“location”: User’s place of location //optional
	
	“dob”: User’s date of birth //optional. Format - YYYY-MM-DD
	
	“aadhaarNo”: //optional
	
	“gender”: //optional. Values - Male, Female, Transgender
	
	“language”: User’s language preferences. //optional 
	
	“profileSummary”: User’s profile summary //optional
	
	“subject”: Taught by the user //optional. Values - Assamese, Bengali, English, Hindi, Kannada, Malayalam, Oriya, Punjabi, Tamil, Telugu, Urdu, Biology, Chemistry, Physics, Mathematics, Environmental Studies, Geography, History, Political Science, Economics, Sanskrit, Gujarati, Marathi, Nepali   
}
}
</pre>

**Response**

userId - Identifier of the created user

<pre>
{  
   "id":"api.user.create",
   
   "ver":"1.0",
   
   "ts":"YYYY-MM-DDThh:mm:ssZ+/-nn.nn",
   
   "params":{  
   
      "resmsgid":"",
      
      "msgid":"",
      
      "err":"0",
      
      "status":"SUCCESS",
      
      "errmsg":"Operation successful"
   },
   "result":{  
   
        "response": "SUCCESS",
	
        "userId": "0122852840502968322"
   },
   "responseCode":"OK"
}
</pre>

** Update User**

POST - <BASE_URL>/api/user/v1/update

Updates an existing user. All optional fields mentioned in Create User can be added in the Update User request.

**Request**

Request Body - user details

<pre>
{
  "request":{
  
      "userName": "unique userName for the user", //required
      
      "provider": "channel of the tenant organization to which the user belongs to, e.g.: ap", //required
      
      "firstName": "first name of the user", //optional
      
      "lastName": "last name of the user", //optional
      
      "email": "user.email@test.com", //required
      
      "emailVerified": true, //required
      
      "phone": "9900032121",
      
      "phoneVerified": true
   }
}
</pre>

**Response**

<pre>
{  
   "id":"api.user.update",
   
   "ver":"1.0",
   
   "ts":"YYYY-MM-DDThh:mm:ssZ+/-nn.nn",
   
   "params":{  
   
      "resmsgid":"",
      
      "msgid":"",
      
      "err":"0",
      
      "status":"SUCCESS",
      
      "errmsg":"Operation successful"
   },
   "result":{  
   
        "response": "SUCCESS"
   },
   
   "responseCode":"OK"
}
</pre>

**Add Member**

POST - <BASE_URL>/api/org/v1/member/add

Adds a member to the organization

Request

Request Body - membership details

<pre>
{
  "request":{  
  
      "externalId": "identifier of the organization in the partner system", //required
      
      "provider": "channel of the tenant organization to which the organization belongs to, e.g.: ap", //required
      
      "userName": "username with which the user is created", // required
      
      "role": "member/content-creator/admin", //optional, default to member if not provided
      
      "position": "position of the person in the organization, e.g.: Principal, Teacher, Student" // optional
   }
}
</pre>

**Response**

<pre>
{  
   "id":"api.org.member.add",
   
   "ver":"1.0",
   
   "ts":"YYYY-MM-DDThh:mm:ssZ+/-nn.nn",
   
   "params":{  
   
      "resmsgid":"",
      
      "msgid":"",
      
      "err":"0",
      
      "status":"SUCCESS",
      
      "errmsg":"Operation successful"
   },
   "result":{  
   
        "response": "SUCCESS"
   },
   "responseCode":"OK"
}
</pre>

**Remove Member**

POST - <BASE_URL>/api/org/v1/member/remove

Removes a member from an organization

Request

Request Body - membership details

<pre>
{
  "request":{  
      "externalId": "identifier of the organization in the partner system", //required
      
     
      "provider": "channel of the tenant to which the organization belongs to, e.g.: ap", //required
      
      "userName": "username with which the user is created", // required
   }
}
</pre>

**Response**

<pre>
{  
   "id":"api.org.member.remove",
   
   "ver":"1.0",
   
   "ts":"YYYY-MM-DDThh:mm:ssZ+/-nn.nn",
   
   "params":{  
   
      "resmsgid":"",
      
      "msgid":"",
      
      "err":"0",
      
      "status":"SUCCESS",
      
      "errmsg":"Operation successful"
   },
   "result":{ 
   
        "response": "SUCCESS"
   },
   "responseCode":"OK"
}
</pre>

### Single-Sign-On API
To login a user, the client must provide a link (which makes a GET request) to the auto-login endpoint /v1/user/session/create?token=<jwt_token> with the JWT token in the query parameter of the request. Here’s an example:

<base_url>/v1/user/session/create?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ


