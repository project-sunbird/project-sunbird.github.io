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

The global knowledge model that is devoid of curricular leanings is Taxonomy and the curricular knowledge model as an extension of the taxonomy called as the Framework. It is important to understand that the taxonomy and framework both describe the same domain, and framework extends the knowledge model of a taxonomy. An intent of creating a framework is to enable organizations to organize their content in a structure which is easily discoverable and browsed by its users. Its main objective is to ensure that content creators have an easy interface to tag content (generate metadata) appropriately such that when a user search for content, they get relevant results. The separation of the taxonomy from its extension in the form of framework(s) provides experts and pedagogues the power and flexibility to model and tag the content. The framework consists of categories and terms within a specific domain.

Sunbird enables seamless access and discoverability of content through a taxonomy of the framework. An organization can use existing framework categories (concepts) and terms (specifications) and further link them to their own framework.

Let us consider an example of an organization, Neerdhara, which works in the domain of water conservation and works with multiple NGOs, village panchayats, and district administration authorities in multiple states of India. They now need to create the framework for water management.  Framework will have relevant terms associated with the categories specific to the domain. The following example depicts the categories and terms specifically used for water management framework:

Framework Name | Categories | Terms
---------------|------------|-------
Neerdhara      |Resources   |Ground Water, Spring, Surface Water
               |Governance  |Ground water, Spring, Surface water
               |Measurement & Mapping| Ground Water, Spring, Surface Water
               |Funds       |
               |Management  | Ground water, Spring, Surface water

Neerdhara, may choose a predefined category and associate it to their own framework. The categories in the framework has terms associated with it. These terms are relevant to the created framework and can be created by the organization. 

While creating a new framework, the framework creator needs to set up a new framework and align it to the categories and terms. A category can have terms either in sequential list or in hierarchical structure. Terms can be associated with other terms across categories. As a result, it is possible to select a term in the first category and hence restrict the set of available terms for the next category and so on. The organizations that are adopting Sunbird can link the categories and also change the labels but cannot override or add a new categories on their own. However, the Sunbird instance will have the following categories in its predefined frameworks:

    - Subject: classification of stream specific values
    - Board: certifying body/stream government or private organization
    - Grade Level: maturity level for knowledge  
    - Medium: language of the course 
    - Topic: detail of the concepts 
    
A user can select one or more category amongst the defined category. 
 
For example, for the organization Neerdhara the framework name is Neerdhara and code as ndf1; the category selected is subject and change the label as Resource type which defines the various water resources and contains the terms as Rain water, lake, ponds and so on. 

### Prerequisites

1. An intialized Sunbird instance with channel

1. The [API Key for access](http://www.sunbird.org) and basic authentication
  
1. ​Software that can make API calls like curl or [POSTMAN](https://www.getpostman.com/docs/v6/postman/api_documentation/intro_to_api_documentation)

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

2. Path for creating the Framework: <pre>{{host}}/framework/v1/create</pre>

##### Request Body for Creating Framework

To retrieve the channels for the request parameter, use [List Channel API](http://www.sunbird.org/apis/framework/#operation/ChannelV1ListPost)  
    
    {
    "request": {
        "framework": {
            "name": "Neerdhara",
            "code": "ndf",
            "description": "Framework for Neerdhara Management",
            "translations": {"hi":"एनडीएफ-अनुवाद","ta":"NDF மொழிபெயர்ப்பு"},
            "type": "TPD",
            }
        }
    } 

**Description of Parameters**

Name: depicts the name of the framework for the organization
Code: is user defined value that is used as framework identifier 
Description: is related to the framework
Translations: enables framework in different languages 
Type: defines the type of content

##### Response Body for Creating Framework

    {
    "responseCode": "OK",
    "result": {
        "framework": {
            "identifier": "ndf1",
            "code": "ndf",
            "translations": "{\"hi\":\"एनसीएफ-अनुवाद\",\"ta\":\"NCF மொழிபெயர்ப்பு\"}",
            "name": "Neerdhara",
            "description": "Framework for Neerdhara Management",
            "type": "",
            "objectType": "Framework"
            }
        }
    }

#### Rename a Category

1. Use the [Add Category API](http://www.sunbird.org/apis/framework/#operation/FrameworkV1CreatePost), to create a new category in the framework. 

> Note: They must send a request to [Sunbird Team](info@sunbird.org) for creating new category. 

The sample values provided in the request body are indicative. The API describes the procedure to change the label(resources) of an existing category(subject):

2. Path for creating category: `{{host}}/framework/v1/category/create?framework=ndf1`

##### Request Body for Renaming Categories

    {
    "request": {
        "category":{
            "name":"resources",
            "description":"Subject is changed to Resources",
            "code":"subject"
            }
        }
    }

##### Response Body for Renaming Categories

    {
        "responseCode": "OK",
        "result": {
            "node_id": "ndf_subject",
            "versionKey": "1535716551605"
            }
    }


#### Create a Term

1. Use the [Add Term API](http://www.sunbird.org/apis/framework/#operation/FrameworkV1TermCreatePost), to create a new term in the category.
The categories can be retrieved and listed using [Fetch API](http://www.sunbird.org/apis/framework/#operation/FrameworkV1CategoryReadClassGet). The sample values provided in the request body are indicative.

2. Path for creating category: `{{host}}/framework/v1/term/create?framework=ndf1&category=subject`

##### Request Body for Adding Terms 

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

### Concepts Covered

**Framework**- A structure designed to define the scope of something. On Sunbird, the framework is defined through a string of vocabularies

### Additional Topics

[How do I extend or customize a framework in Sunbird](http://www.sunbird.org/developer-docs)

[How do I seed a framework in Sunbird](http://www.sunbird.org/developer-docs)

[How do I associate framework to categories and categories to a terms in Sunbird](http://www.sunbird.org/developer-docs)

[How to use Postman](http://www.sunbird.org/developer-docs)