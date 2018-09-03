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

Sunbird enables seamless access and discoverability of content through a taxonomy framework. The objective and intent of the framework is to ensure that content creators have an easy interface to tag content appropriately such that when a user search for content, they get relevant results. The framework consists of Categories and Terms within a specific domain. Terms are values for categories. You can extend the core taxonomy via framework. The separation of the taxonomy from its extension in the form of framework(s) provides experts and pedagogues the power and flexibility to model and tag the content.

When creating a new framework, the framework creator can use existing framework term and concepts and link them to their own framework. A category can have terms either in sequential list or in hierarchical structure. Terms can be associated with other terms across categories. As a result, it is possible to select a term in the first category and hence restrict the set of available terms for the next category and so on. However, the Sunbird instance will have the following categories in its predefined frameworks:

    - Subject: classification of stream specific values
    - Board: certifying body/stream government or private organization
    - Grade Level: maturity level for knowledge  
    - Medium: language of the course 
    - Topic: detail of the concepts 
    
A user can select one or more category amongst the defined category. Let us consider an example of an organization, Neerdhara, which works in the domain of water conservation and works with multiple NGOs, village panchayats, and district administration authorities in multiple states of India. They now need to create the framework for water management.  The organization may choose a predefined category and associate it to their own framework. The categories in the framework has terms associated with it. These terms are relevant to the created framework and can be created by the organization.  
 
For example, for the organization Neerdhara the framework name is Neerdhara and code as ndf1; the category selected is subject and change the label as Resource type which defines the various water resources and contains the terms as Rain water, lake, ponds and so on. 

### Prerequisites

1. An intialized Sunbird instance with channel

1. The [API Key for access](http://www.sunbird.org) and basic authentication
  
1. An API client to make API calls. For example use Postman refer [Using Postman](http://www.sunbird.org/apis/framework/#tag/usingpostman)

1. Onboarding the following with access to the API
    - Admin user     
    - [Individual user](http://www.sunbird.org/apis/userapi/#operation/Create%20User)
    - [Individual Organization](http://www.sunbird.org/apis/orgapi/#operation/Organisation%20Create) access 
    - [Associated Users to organization](http://www.sunbird.org/apis/)

1. Access to [Framework API](http://www.sunbird.org/apis/framework/)

### Taskflow
 
The sequence of tasks the organization administrator follows to create a framework includes:

#### Create a Framework

1. Use the [Create Framework API](http://www.sunbird.org/apis/framework/#operation/FrameworkV1CreatePost), to create a new framework. Specify values for the parameters in the request body of the API. 
Following is an example of request body for creating a framework, the sample values provided in the request body are indicative:

Path for crating the Framework: <pre>{{host}}/framework/v3/create</pre>
##### Request Body for Creating Framework

To retrieve the channels for the request parameter, use [List Channel API](http://www.sunbird.org/apis/framework/#operation/ChannelV1ListPost)  
    {
    "request": {
        "framework": {
            "name": "Neerdhara",
            "code": "ndf1",
            "description": "Framework for Neerdhara Management",
            "translations": {"hi":"एनसीएफ-अनुवाद","ta":"NCF மொழிபெயர்ப்பு"},
            "type": "TPD",
            }
        }
    }

**Name** depicts the name of the framework for the organization
**Code** is user defined value that is used as framework identifier 
**Description** is related to the framework
**Translations** enables framework in different languages 
**Type** defines the type of content

##### Response Body for Creating Framework

    {
    "responseCode": "OK",
    "result": {
        "framework": {
            "identifier": "ndf1",
            "code": "ndf1",
            "translations": "{\"hi\":\"एनसीएफ-अनुवाद\",\"ta\":\"NCF மொழிபெயர்ப்பு\"}",
            "name": "Neerdhara",
            "description": "Framework for Neerdhara Management",
            "type": "TPD",
            "objectType": "Framework"
            }
        }
    }

2. Use the [Add Category API](http://www.sunbird.org/apis/framework/#operation/FrameworkV1CreatePost), to create a new category in the framework. The organizations that are adopting Sunbird can link the categories and also change the labels but cannot override or add a new categories on their own. They must send a request to [Sunbird Team](info@sunbird.org) for creating new category. The sample values provided in the request body are indicative:

Path for creating category: <pre>{{host}}/framework/v3/category/create?framework=ndf1 </pre>
##### Request Body for Creating Categories

    {
   "request": {
      "category":{
            "name":"Resources",
            "description":"Subject is changed to Resources",
            "code":"subject"
            }
        }
    }

##### Response Body for Creating Categories

    {
        "responseCode": "OK",
        "result": {
            "node_id": "ndf1_subject",
            "versionKey": "1535716551605"
        }
    }
        
3. Use the [Add Term API](http://www.sunbird.org/apis/framework/#operation/FrameworkV1TermCreatePost), to create a new term in the category.
The categories can be retrieved and listed using [Fetch API](http://www.sunbird.org/apis/framework/#operation/FrameworkV1CategoryReadClassGet)

##### Request Body for Adding Terms 

Path for creating category: <pre>{{host}}/framework/v3/term/create?framework=ndf1&category=subject</pre>
    {
    "request": {
        "term": [
            {
            "code": "river",
            "name": "River",
            "description":"Describes River"
            },
            {
            "code": "sea",
            "name": "Sea",
            "description":"Describes Sea"
            }
            ]
        }
    }

##### Response Body for Adding Terms

    {
    "responseCode": "OK",
        "result": {
            "node_id": [
                "ndf1_subject_river",
                "ndf1_subject_sea"
                ]
            }
    }   
### Concepts covered

**Framework**- A structure designed to define the scope of something. On Sunbird, the framework is defined through a string of vocabularies

### Additional Topics

[How do I extend or customize a framework in Sunbird](http://www.sunbird.org/developer-docs)

[How do I seed a framework in Sunbird](http://www.sunbird.org/developer-docs)

[How do I associate framework to categories and categories to a terms in Sunbird](http://www.sunbird.org/developer-docs)

[How to use Postman](http://www.sunbird.org/developer-docs)