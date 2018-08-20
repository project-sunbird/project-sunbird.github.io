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

Adopters cannot override or add categories on their own and need to send a request to [implementation team](). For details on adding categories, refer [Adding Categories]().

However,The Sunbird instance will have predefined frameworks:

 - NCF

        - Subject 

        - Board

        - Grade Level

        - Medium

        - Topic

A category can have either flat or hierarchical terms. Terms can be associated across categories. As a result, it is possible to select a term in the first category and hence restrict the set of available terms for the next category and so on. For example, if you select Board as <>, the Grade list displayed as <1 - 12>. On selecting grade as < >, and the Medium as English, the Subject list appears containing predefined values as <English, Mathematics and more>. Whereas, if you select Grade as <8>, the Subject list displayed is <English, Algebra, Geometry, History, Geography>  
When creating a new framework, the framework creator can borrow concepts from the EkStep concept map and link them into their framework. The objective of the framework is to ensure that content creators have an easy interface to tag content appropriately such that when a user search for content, they get relevant results.

Vocabulary is the layer below the framework which allows linking of terms across categories into synonym sets. 

You can extend the core taxonomy via the framework. The separation of the taxonomy from its extension in the form of framework(s) provides experts and pedagogues the power and flexibility to model and tag the content. 

### Prerequisites

1.An initialized server instance of Sunbird. Initialization includes creating an organization administrator (through Keycloak), registering a channel and creating a unique Channel ID and associating a first organization with the channel.

For details, refer to:

* [Server Installation](http://www.sunbird.org/developer-docs/installation/server_installation/)

* [Channel APIs](http://www.sunbird.org/apis/framework/#tag/Channel-APIs)

* [First organization](http://www.sunbird.org/developer-docs/initialization) associated with channel ID

2.The API Key for access and basic authentication
  
3.An API client to make API calls. For example use Postman refer [Using Postman] (http://www.sunbird.org/apis/framework/#tag/usingpostman)

4.Onboarding the following with access to the API
    - Admin user 
    - Other [individual users](http://www.sunbird.org/apis/userapi/#operation/Create%20User) and [Bulk upload user](http://www.sunbird.org/apis/bulkupload/#operation/bulk%20upload%20user%20req1)
    - [Individual Organization](http://www.sunbird.org/apis/orgapi/#operation/Organisation%20Create) and [Bulk upload organization](http://www.sunbird.org/apis/bulkupload/#operation/bulk%20org%20upload%20req)
    - [Associated Users to organization](http://www.sunbird.org/apis/)


5.Access to [Framework API](http://www.sunbird.org/apis/framework/)

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
name": "NCF",
"code": "ncf",
"description": "NCF framework",
"type": "K-12",
"channels": [
{ }
],
"categories": [{ }]
</pre>

**Response Body**

<pre>
"responseCode": "OK",
"result": {
"node_id": "ncf",
"versionKey": "1534745974986"
}

</pre>

2.Save the created version ID

3.The framework category is created

### Concepts covered

**Framework**- A structure designed to define the scope of something. On Sunbird, the framework is defined through a string of vocabularies

**Taxonomy**

**Authentication** 

### Additional Topics

[How do I extend or customize a framework in Sunbird](http://www.sunbird.org/developer-docs)

[How do I seed a framework in Sunbird](http://www.sunbird.org/developer-docs)

[How do I associate framework to categories and categories to a terms in Sunbird](http://www.sunbird.org/developer-docs)

[How to use Postman](http://www.sunbird.org/developer-docs)