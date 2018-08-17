---
type: landing
directory: developer-docs/how-to-guide
title: Create Framework
page_title: Create Framework
description: Create a new framework in Sunbird instance
keywords: create framework, new framework, create, framework
published: true
allowSearch: true
---
## Scenario

Sunbird enables seamless access and discoverability of content through a taxonomy framework. The framework consists of Categories and Terms within a specific domain. Terms are values for categories. 

Let us consider an example of an organization which works in the domain of water conservation and works with multiple NGOs, village panchayats, and district administration authorities in multiple states of India. They now need to create the framework. The objective and intent of the framework is to ensure that content creators have an easy interface to tag content appropriately such that when users search for content, they get relevant results. The company may choose a predefined framework or create their own framework. 

Adopters cannot override or add categories on their own 
To add a category, adopters need to send a request. For details on adding categories, refer Adding Categories
However,The Sunbird instance will have predefined frameworks:

 - Resource management: Conventional Resources, Unconventional Resources
 - Sanitation
 - Services
 - Funds
 - News and Media

A category can have either flat or hierarchical terms. Terms can be associated across categories. As a result, it is possible to selecting a term in the first category and hence restrict the set of available terms for the next category and so on. For example, if you select Board = CBSE, the Grade list displayed = 1 - 12. Select Grade = 1, Medium = English, the Subject list displayed = English, Mathematics and General Science. Whereas, if you select Grade = 8, the Subject list displayed = English, Algebra, Geometry, History, Geography  

Vocabulary is the layer below the framework which allows linking of terms across categories into synonym sets.   

When creating a new framework, the framework creator can ‘borrow’ concepts from the EkStep concept map and link them into their framework.

XYZ Organization, which is in the business of providing coaching to students appearing for competitive exams has created an instance of Sunbird. They now need to create the framework. The objective and intent of the framework is to ensure that content creators have an easy interface to tag content appropriately such that when students search for content, they get relevant results. For example; the framework should organize the content based on the curriculum, board, subject, medium, etc. 

You can extend the core taxonomy via the framework. The separation of the taxonomy from its extension in the form of framework(s) provides experts and pedagogues the power and flexibility to model and tag the content. 

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


Before you create the framework, ensure that you:
Install a server instance of Sunbird. For details, refer to Server Installation
Create a channel for your organization. For details, refer to Channel APIs
Register your channel (organization) with Ekstep. On registration, a unique Channel ID is assigned to your organization. 
Note: The Channel ID is mandatory for framework related operations
Create users for your organization
To onboard users in bulk , refer to Bulk upload service APIs 
to create the users individually, refer to User APIs  
Have are a valid admin user for your organization
Have access to your Channel ID
Use an API client to make API calls. For example, Postman
Have the API Key for access and basic authentication
Have a User Token that authenticates you for read - write access 
Have access to  Framework APIs

### Taskflow
 
The sequence of tasks the organization administrator follows to create users include:

Use the  Create Framework API, to create a new framework
Follow the steps mentioned in How to Use Postman to use the create framework API
Provide the appropriate values to the request body parameters in the payload.

Note: For details of API parameters, refer to the Framework API  reference document 

1.Specify values for the parameters in the request body of the API. Following is an example of request body for creating a framework, the sample values provided in the request body are indicative:

**Request Body**

<pre>
"request": 
{
"framework": 
{
name": "string",
"code": "string",
"description": "string",
"type": "string",
"channels": [
{ }
],
"categories": [{ }]
</pre>

**Response Body**

<pre>
 
</pre>

2.Save the created user ID

3.The user is created under the organization

### Concepts covered

**Framework**
**Taxonomy**
**Authentication** 

### Additional Topics

[How do I extend or customize a framework in Sunbird](http://www.sunbird.org/developer-docs)

[How do I seed a framework in Sunbird](http://www.sunbird.org/developer-docs)

[How do I associate framework to categories and categories to a terms in Sunbird](http://www.sunbird.org/developer-docs)

[How to use Postman](http://www.sunbird.org/developer-docs)