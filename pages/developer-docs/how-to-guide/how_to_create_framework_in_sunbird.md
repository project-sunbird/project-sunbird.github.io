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

When creating a new framework, the framework creator can use existing framework term and concepts and link them. The objective of the framework is to ensure that content creators have an easy interface to tag content appropriately such that when a user search for content, they get relevant results.
You can extend the core taxonomy via the framework. The separation of the taxonomy from its extension in the form of framework(s) provides experts and pedagogues the power and flexibility to model and tag the content. 

The organizations that are adopting Sunbird cannot override or add categories on their own and need to send a request to [Sunbird Team](info@sunbird.org). However, the Sunbird instance will have the following terms in its predefined frameworks:

- NCF

    - Subject 
    
    - Board

    - Grade Level

    - Medium

    - Topic

A category can have terms either sequential list or in hierarchical structure. Terms can be associated across categories. As a result, it is possible to select a term in the first category and hence restrict the set of available terms for the next category and so on. A user can select one or more category amongst the defined category. For example, if you select the Board as State Board, the Grade level appears and they are ranging from 1-12. On selecting grade as 5, and the Medium as English, the Subject list appears containing predefined values as English, Mathematics, Science. Whereas, if you select Grade as 9, the Subject list displayed is English, Mathematics, History, Civics, and Geography.

Let us consider an example of an organization which works in the domain of water conservation and works with multiple NGOs, village panchayats, and district administration authorities in multiple states of India. They now need to create the framework. The objective and intent of the framework is to ensure that content creators have an easy interface to tag content appropriately such that when users search for content, they get relevant results. The organization may choose a predefined framework or create their own framework. 

### Prerequisites

1.An initialized server instance of Sunbird. Initialization includes creating an organization administrator (through Keycloak), registering a channel and creating a unique Channel ID and associating a first organization with the channel.

For details, refer to:

* [Server Installation](http://www.sunbird.org/developer-docs/installation/server_installation/)

* [Channel APIs](http://www.sunbird.org/apis/framework/#tag/Channel-APIs)

* [First organization](http://www.sunbird.org/developer-docs/initialization) associated with channel ID

2.The API Key for access and basic authentication
  
3.An API client to make API calls. For example use Postman refer [Using Postman](http://www.sunbird.org/apis/framework/#tag/usingpostman)

4.Onboarding the following with access to the API
    - Admin user     
    - [Individual user](http://www.sunbird.org/apis/userapi/#operation/Create%20User)
    - [Individual Organization](http://www.sunbird.org/apis/orgapi/#operation/Organisation%20Create)
    - [Associated Users to organization](http://www.sunbird.org/apis/)

5.Access to [Framework API](http://www.sunbird.org/apis/framework/)

### Taskflow
 
The sequence of tasks the organization administrator follows to create users include:
Follow the steps mentioned in How to Use Postman to use the create framework API.  

1.Use the [Create Framework API](http://www.sunbird.org/apis/framework/#operation/FrameworkV1CreatePost), to create a new framework. Specify values for the parameters in the request body of the API. Following is an example of request body for creating a framework, the sample values provided in the request body are indicative:

**Request Body**

<pre>
{
    "id": "string",
    "ver": "string",
    "ets": 0,
    "params": {
        "msgid": "string",
        "did": "string"
        },
    "request": {
        "framework": {
            "name": "string",
            "code": "string",
            "description": "string",
            "type": "string",
            "channels": [
                { }
            ],
            "categories": [
                { }
            ]
        }
    }
}
</pre>

**Response Body**

<pre>
{
    "id": "string",
    "ver": "string",
    "ets": 0,
    "params": {
        "msgid": "string",
        "resmsgid": "string",
        "err": null,
        "err_msg": null,
        "err_detail": null,
        "status": "success"
        },
    "responseCode": "string",
    "result": {
    "node_id": "string",
    "versionKey": "string"
    }
}
</pre>

2.Use the Add Category API, to create a new category in the framework. The sample values provided in the request body are indicative:

**Request Body**

<pre>
{
    "id": "string",
    "ver": "string",
    "ets": 0,
    "params": {
        "msgid": "string",
        "did": "string"
    },
"request": {
    "category": {
        "code": "string",
        "name": "string",
        "description": "string"
        }
    }
}
</pre>

**Response Body**

<pre>

{
    "id": "string",
    "ver": "string",
    "ets": 0,
    "params": {
        "msgid": "string",
        "resmsgid": "string",
        "err": null,
        "err_msg": null,
        "err_detail": null,
        "status": "success"
    },
    "responseCode": "string",
        "result": {
        "node_id": "string",
        "versionKey": "string"
        }
}
</pre>

3.Use the Add Term API, to create a new term in the category.

**Request Body**

<pre>
{
    "id": "string",
    "ver": "string",
    "ets": 0,
    "params": {
        "msgid": "string",
        "did": "string"
    },
    "request": {
        "term": {
            "code": "string",
            "name": "string",
            "description": "string",
            "category": "string",
            "index": 0,
            "categoryinstances": [
                { }
            ],
            "parents": [
                { }
            ],
            "associationswith": [
                { }
            ],
            "children": [
                { }
            ],
            "associations": [
            { }
            ]
        }
    }
}

</pre>

**Response Body**

<pre>


</pre>

### Concepts covered

**Framework**- A structure designed to define the scope of something. On Sunbird, the framework is defined through a string of vocabularies

**Taxonomy**

**Authentication** 

### Additional Topics

[How do I extend or customize a framework in Sunbird](http://www.sunbird.org/developer-docs)

[How do I seed a framework in Sunbird](http://www.sunbird.org/developer-docs)

[How do I associate framework to categories and categories to a terms in Sunbird](http://www.sunbird.org/developer-docs)

[How to use Postman](http://www.sunbird.org/developer-docs)