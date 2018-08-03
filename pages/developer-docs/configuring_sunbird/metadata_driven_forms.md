---
type: landing
directory: developer-docs/configuring_sunbird
title: Configuration for Meta Forms
page_title: Configuration for Meta Forms
description: Different configurations for forms
published: true
allowsearch: true
keywords: Meta Data, Meta, form, API, Form API,
---
## Scenario

An organization works in the domain of water conservation and works in multiple Indian states, with NGOs, village panchayats and other authorities. The organization would like to tailor different forms on Sunbird to match their requirements. They want to configure various available forms based on their terminology and needs. They intend to change the display labels, the fields, the types of fields etc. on the forms.   

## Prerequisites
As the organization administrator ensure the following:
1. Install  the server instance of Sunbird. For details, refer to[ Server Installation ](http://www.sunbird.org/developer-docs/installation/server_installation/)

2. Create a channel for your organization (XYZ corporation). For details, refer to[ Channel APIs](http://www.sunbird.org/apis/framework/#tag/Channel-APIs)

3. Register  your channel/ organization i.e, (XYZ corporation) with Ekstep. On registration, a unique **Channel ID** is assigned to your organization (XYZ corporation) channel ID is: 12300786

4. Create users for your organization (XYZ corporation) either by: 
   -  onboarding XYZ corporation users in bulk, refer to [Bulk upload service APIs](http://www.sunbird.org/apis/bulkupload/), or
   -  creating the XYZ corporation  users individually, refer to [User APIs](http://www.sunbird.org/apis/userapi/)   

**Note:**

An Organizational administrator requires to:

* Use an API client (for example Postman) to make Form API calls and perform various operations as mentioned in the Task-flow section

* Have the API Key for access and basic authentication

* Have a User Token that authenticates the organization administrator for read-write access

* Have access to [Form APIs](http://www.sunbird.org/apis/form/)

## Overview

The architecture of the Sunbird platform is logically divided into following main components.

* Sunbird Editor(s)

* Sunbird Portal

* Sunbird Mobile etc.

Each of the component uses a metadata-driven development model to help the adopters to be more productive by allowing the flexibility to tailor these components based on their needs.The platform provides a mechanism where each of the forms in the components are configurable as they are metadata driven. This implies that the basic functionality of elements, such as, the forms, labels, fields, number of fields, types of fields etc. are defined as metadata in a database,instead of hard-coding them in a programming language. When any end user accesses a form on the portal or on mobile, it renders the metadata into the interface of user interface.

To alter the configuration of each of the available metadata driven forms, Sunbird provides a set of [Form API](http://www.sunbird.org/apis/form/) endpoints. The administrator uses these APIs to programmatically manage, configure and customize each form.These APIs provide straightforward, powerful, and open ways to programmatically access the form data and provide the capabilities of configuring all the metadata available for forms. 

## List of Metadata driven Forms  

The following table provides a detailed list of all the available metadata driven forms on the Sunbird platform:

## Forms in Editor

| Form | Description | Type | Subtype| Action| Component | 
| --- | ------ |------| ------| ------| ------| 
| **Book Save** | This form is displayed on clicking `edit details` in book editor | content | textbook | save | editor | |
| **Book Review** | This form is displayed on clicking `send for review` in book editor | content | textbook | review | editor |
| **Resource Save** | This form is displayed on clicking `edit details` in content/generic editors | content | resource | save | editor |  
| **Resource Review** | This form is displayed on clicking `send for review` in content/generic editors | content | resource | review | editor |
| **Course Save** | This form is displayed on clicking `edit details` in course editor | content | course | save | editor |
| **Course Review** | This form is displayed on clicking `send for review` in course editor | content | course | review | editor 
| **Lesson Plan Save** | This form is displayed on clicking `edit details` in lesson plan editor | content | Lessonplan | save | editor |    
| **Lesson Plan Review** |This form is displayed on clicking `send for review` in lesson plan editor | content | Lessonplan | review | editor |      
| **Collection Save** | This form is displayed on clicking `edit details` in collection editor | content | collection | save | editor | 
| **Collection Review** | This form is displayed on clicking `send for review` in collection editor | content | collection | review | editor |  
| **Question Save** | This form is displayed on clicking `create question` in content editor | content | questions | question-meta-save | editor |
| **Question Search** | This form is displayed on clicking `search questions` in content editor | content | questions | question-filter-view | editor |

### Supported Input & Data Types 

The following table lists down the supported input types with corresponding data types in the Sunbird Editor component:

| Data Type | Input Type |
| --- | --- |
| Text | text, select, number |
| List | multiselect, conceptselector, keywordsuggestion, dialcode, topicselector |
| Url | file |

### JSON Structure definitions

The following table lists down the sample JSON structure with descriptions for each form in the Sunbird Editor component:

| Property Name | Type | Description | Default Value | Example |
| --- | --- | --- | --- | --- |
| code | `string` | Unique identifier of the field on your form| NA | name, description etc. |
| dataType | `string`| Format of data of the field on your form| NA | `list`,`text`|
| description | `string` | Description specific to a field on your form| NA |  Title of the content|
| depends | `array` | Describes the dependency in case if a field-A is dependent on field-B on your form | NA | `depends: ["subject", "science"]` |
| editable | `boolean` | Defines the mode of the field i.e whether it can be read only or editable | true | true, false |
| index | `integer` | Represents the location/ position of the field on your form | NA | `1` |
| inputType | `string`| Defines the type of your form field | NA |`text`,`number`, `select`,`multiselect`,`conceptselector`, `topicselector`, `keywordsuggestion`,`dialcode`|
| label | `string` | It is the display name of your field | NA | Title |
| name | `string` | Name of the field | None | fieldSelect |
| placeholder | `string` |Represents the placeholder for the field | NA | Enter Title For Book |
| range | `array` |  Represents the range of all the values specific to a particular field in a form| None | `range: ['story','game','worksheet']`|
| renderingHints | `object` | "renderingHints": {"width": "xx%", maxlength: 00} | None | Ex: { maxlength : 100 } |
| required | `boolean` |To make a field as mandatory | None | Ex: false |
| visible | `boolean` | To make the field visible or hidden | None | Ex: true |
| validation | `array` | Allows validation on any particular field of your form | None | Ex: [{ "type": "regex", "value": "[A-Z]","message": "Invalid Input" }] |

## Forms in Portal 

**The following table lists down the available forms in  Sunbird Portal component:**

| Form | Description | Type | Subtype| Action| Component | 
| --- | --- |------| ------| ------| ------| 
| **Book Create** | This form is displayed on clicking `Book` from your workspace | content | textbook | create | portal |
| **Course Create** | This form is displayed on clicking `Course` from your workspace | content | course | create | portal |
| **Collection Create** | This form is displayed on clicking `Collection` from your workspace | content | collection | create | portal |
| **Lesson Plan Create** | This form is displayed on clicking `Lesson Plan` from your workspace | content | lesson | review | editor |
| **Resource create** | This form is displayed on clicking `Resource` from your workspace | content | course | save | editor |
| **Library Filters** | This form is displayed on clicking `filters` from your library | content | library | search | portal | 
| **Course Filters** | This form is displayed on clicking `filters` from your course | content | course | search | portal |   
| **All My Contents Filters** |This form is displayed on clicking `filters` option from any of the content types in your workspace| content | allmycontent | search | portal |      
| **Up For Review Filters** | This form is displayed on clicking `Up For Review` in the UP FOR REVIEW section in your workspace | content | upforreview | search | portal | 
| **Explore Filters** | This form is displayed on clicking `filters` in the explore page | content | explore | search | portal | 
| **Resource Bundle Filters** |This form is displayed on clicking `language drop down` in the explore Page | content | resourcebundle | search | portal |


### Supported Input & Data Types 

**The following table lists down the supported input types with corresponding data types in the Sunbird Portal component:**

| Data Type | Input Type |
| --- | --- |
| Text | text, select, number |
| List | multiselect, conceptselector |

### JSON Structure definitions 

**The following table lists down the example JSON structure with descriptions for each form in the Sunbird Portal component:**

| Property Name | Type | Description | Default Value | Example |
| --- | --- | --- | --- | --- |
| code | `string` | Unique identifier of the field on your form | None | name, description etc. |
| dataType | `string`| Format of data of the field on your form | None | `list`,`text`|
| description | `string` | Description specific to a field on your form | None | Title of the content|
| editable | `boolean` | Defines the mode of the field i.e either you can keep your field as read only or make it editable | true | true, false |
| index | `integer` | Location/ position of the field on your form | None | `1` |
| inputType | `string` | Defines the type of your form field | None |`text`,`number`, `select`,`multiselect`,`conceptselector`|
| label | `string` | Display name of your field | None | Title |
| name | `string` | Name of the field | None | Title |
| placeholder | `string` | Placeholder for the field | None | Enter Title For Book |
| range | `array` | Used to populate dropdown values| None | `range: ['story','game','worksheet']`|
| renderingHints | `object` | "renderingHints": {"width": "xx%", maxlength: 00} | None | { semanticColumnWidth : three } |
| required | `boolean` | To make a field a mandatory or optional | None | false |
| visible | `boolean` | To make the field visible or hidden | None | true |
| validation | `array` | Allows validation on a particular field of your form | None | [{ "type": "regex", "value": "[A-Z]","message": "Invalid Input" }] |

## Forms in Mobile App

**The following table lists down the available forms in Mobile app component:**

| Form | Description | Type | Subtype| Action| Component
| --- | --- |------| ------| ------| ------|
| **Onboarding Details** | This form is used to save/update/read onboarding question details | user | instructor | onboarding | app
| **Force/Optional Upgrade** | This form is used to save/update/read or force/optional app upgrade | app | install | upgrade | app

### Input & Data Types 

**The following table lists down the supported input types with corresponding data types in Mobile app component:**

| Data Type | Input Type |
| --- | --- |
| String | text, number |
| List | fields, range |
| type | force, optional |

### JSON Structure definitions

**The following table lists down the example JSON structure with descriptions for each form in the Mobile app component:**

| Property Name | Type | Description | Default Value | Example |
| --- | --- | --- | --- | --- |
| templateName | `string` | The default template used for the form | NA |defaultTemplate, defaultApp UpgradeTemplate|
| code | `string` | Unique identifier of the field on the form | NA | upgrade, syllabus|
| name | `string` | Name of the field on the form | NA |Upgrade of the  app, What syllabus do you follow?|
| selectLabel | `string` | Represents the display label for a field on the form | NA |Select Syllabus|
| loadingLabel | `string` |Represents the display label for a field on the form|NA |Loading Syllabus|
| language | `string` | Represents the display language of the field on a form | NA |en,hi,ta|
| range | `list` |  Represents the range of all the values specific to a particular field in a form | NA |  "templateName":"defaultTemplate", "action":"onboarding", "fields":[]|
| frameworkId | `string` | Represents a framework uniquely | NA |ap_k-12,mh_k-12_15|
| name | `string` | Represents a range values within a field on a form | NA |State (Andhra Pradesh),State (Maharashtra)|
| minVersionCode | `string`| Represents the minimum version of the app | NA |0,9|
| maxVersionCode | `string` | Represents the maximum version of the app | NA |10,15|
| versionName | `string` | Represents the name of version | NA | v1.0.1|
| type | `string` | Represents the type of the upgrade that is required | NA | optional, force|

All the available forms exist as a part of creation workflows, updation workflows, review workflows etc within the Sunbird.  The primary usage of these forms is not just limited to adding meta information to the content, but metadata driven forms enable extensive searching capabilities, helps in onboarding in mobile app at the end user level and much more.  Each form supports certain input data types to build on the metadata.

**Note:** Each of the form has a specific action associated to it, for example: create, update, save etc.

## Task Flow

The form configuration is a post installation task. Being a Sunbird adopter, you can configure an existing form as well as create a new form.

**Configure an Existing Form**

Follow the steps to configure the forms available:

1. Ensure that all the prerequisites are met
2. Get access to [Form API](http://www.sunbird.org/apis/form/)Resources
3. Use an API client to perform the update form operation
4. Use[Update Form API](http://www.sunbird.org/apis/form/#operation/FormUpdate) to configure the metadata fields on a form, ensure that you provide valid inputs to the configuration parameters in the header, request payload while calling the API.

**Configuration Parameters** 

The following are the header parameters for Update Form API endpoint:

1. Authorization
2. Content-Type

For more information about the usage of header parameters refer to the [Update Form API](http://www.sunbird.org/apis/form/#operation/FormUpdate) reference document.  

## Sample payload for  Update Form API
<pre>
{
  "request": {
            
            "type": "content",
            "subType": "resource",
            "action": "save",
            "rootOrgId": "*",
            "framework": "NCF",
            "data": {
                "templateName": "defaultTemplate",
                "action": "save",
                "fields": [
                    {
                        "code": "appicon",
                        "dataType": "url",
                        "description": "App Icon",
                        "editable": true,
                        "index": 1,
                        "inputType": "file",
                        "label": "App Icon",
                        "name": "App Icon",
                        "placeholder": "App Icon",
                        "renderingHints": {},
                        "required": false,
                        "visible": true
                    },
                    {
                        "code": "name",
                        "dataType": "text",
                        "description": "Title of the content",
                        "editable": true,
                        "index": 2,
                        "inputType": "text",
                        "label": "Title",
                        "name": "Title",
                        "placeholder": "Enter Title For Book",
                        "renderingHints": {},
                        "required": true,
                        "visible": true
                    },
                    {
                        "code": "description",
                        "dataType": "text",
                        "description": "Brief description",
                        "editable": true,
                        "index": 3,
                        "inputType": "textarea",
                        "label": "Description",
                        "name": "Description",
                        "placeholder": "Brief description about the Book",
                        "renderingHints": {},
                        "required": false,
                        "visible": true
                    },
                    {
                        "code": "keywords",
                        "dataType": "list",
                        "description": "Keywords for the content",
                        "editable": true,
                        "index": 4,
                        "inputType": "keywordsuggestion",
                        "label": "keywords",
                        "name": "Keywords",
                        "placeholder": "Enter Keywords",
                        "required": false,
                        "visible": true
                    },
                    {
                        "code": "board",
                        "dataType": "text",
                        "description": "Curriculum",
                        "editable": true,
                        "index": 5,
                        "inputType": "select",
                        "label": "Curriculum",
                        "name": "Curriculum",
                        "placeholder": "Select Curriculum",
                        "renderingHints": {},
                        "required": false,
                        "visible": true
                    },
                    {
                        "code": "gradeLevel",
                        "dataType": "list",
                        "description": "Class",
                        "editable": true,
                        "index": 6,
                        "inputType": "multiselect",
                        "label": "Class",
                        "name": "Class",
                        "placeholder": "Select Class",
                        "renderingHints": {},
                        "required": false,
                        "visible": true
                    },
                    {
                        "code": "subject",
                        "dataType": "text",
                        "description": "",
                        "editable": true,
                        "index": 7,
                        "inputType": "select",
                        "label": "Subject",
                        "name": "Subject",
                        "placeholder": "Select Subject",
                        "renderingHints": {},
                        "required": false,
                        "visible": true
                    },
                    {
                        "code": "medium",
                        "dataType": "text",
                        "description": "",
                        "editable": true,
                        "index": 8,
                        "inputType": "select",
                        "label": "Medium",
                        "name": "medium",
                        "placeholder": "Select Medium",
                        "renderingHints": {},
                        "required": false,
                        "visible": true
                    },
                    {
                        "code": "concepts",
                        "dataType": "list",
                        "description": "Choose a concept",
                        "editable": true,
                        "index": 9,
                        "inputType": "conceptselector",
                        "label": "Concepts",
                        "name": "Concepts",
                        "placeholder": "Choose Concepts",
                        "renderingHints": {},
                        "required": false,
                        "visible": true
                    },
                    {
                        "code": "topic",
                        "dataType": "list",
                        "description": "Choose a Topics",
                        "editable": true,
                        "index": 10,
                        "inputType": "topicselector",
                        "label": "Topics",
                        "name": "Topic",
                        "placeholder": "Choose Topics",
                        "renderingHints": {},
                        "required": false,
                        "visible": true
                    },
                    {
                        "code": "resourceType",
                        "dataType": "text",
                        "description": "Resource Type",
                        "editable": true,
                        "index": 11,
                        "inputType": "select",
                        "label": "Resource Type",
                        "name": "resourceType",
                        "placeholder": "",
                        "range": [
                            "Teach",
                            "Practice",
                            "Learn",
                            "Test",
                            "Play",
                            "Read",
                            "Experiment"
                        ],
                        "renderingHints": {},
                        "required": false,
                        "visible": true
                    },
                    {
                        "code": "attributions",
                        "dataType": "list",
                        "description": "Attributions",
                        "editable": true,
                        "index": 12,
                        "inputType": "text",
                        "label": "Attributions",
                        "name": "attribution",
                        "placeholder": "",
                        "renderingHints": {},
                        "required": false,
                        "visible": true
                    },
                    {
                        "code": "audience",
                        "dataType": "list",
                        "description": "",
                        "editable": true,
                        "index": 13,
                        "inputType": "select",
                        "label": "Audience",
                        "name": "Audience",
                        "placeholder": "Select Audience",
                        "renderingHints": {},
                        "range": [
                            "Learner",
                            "Instructor"
                        ],
                        "required": false,
                        "visible": true
                    }
                ]
            }
        }
}
</pre>

## Sample Payload for Read Form API 
<pre>
 {
  "request": {
    "type": "content",
    "subType": "resource",
    "action": "save",
    "rootOrgId": "*",
    "framework": "NCF"
  }
}
</pre>

## Sample Payload for Create form API  
<pre>
{

  "request": {
    "type": "content",
    "subType": "questions",
    "action": "question-filter-view",
    "rootOrgId": "*",
    "framework": "NCF",
    "data": {
                "action": "question-filter-view",
                "templateName": "filterMetaDataTemplate",
                "fields": [
                    {
                        "code": "searchText",
                        "dataType": "text",
                        "description": " by question title",
                        "editable": true,
                        "inputType": "text",
                        "label": "Search",
                        "name": "Search",
                        "index": 0,
                        "placeholder": "Search by question title",
                        "renderingHints": {},
                        "required": false,
                        "visible": true
                    },
                    {
                        "code": "medium",
                        "dataType": "text",
                        "description": "",
                        "editable": true,
                        "index": 1,
                        "inputType": "select",
                        "label": "Language",
                        "name": "medium",
                        "placeholder": "Select Language",
                        "renderingHints": {},
                        "required": false,
                        "visible": true
                    },
                    {
                        "code": "level",
                        "dataType": "text",
                        "description": "Add Notes",
                        "editable": true,
                        "index": 2,
                        "inputType": "select",
                        "label": "Difficulty",
                        "name": "level",
                        "placeholder": "Select Level",
                        "range": [
                            "EASY",
                            "MEDIUM",
                            "DIFFICULT"
                        ],
                        "renderingHints": {},
                        "required": false,
                        "visible": true
                    },
                    {
                        "code": "questionType",
                        "dataType": "list",
                        "description": "Class",
                        "editable": true,
                        "index": 3,
                        "inputType": "multiselect",
                        "label": "Question Type",
                        "name": "Question Type",
                        "placeholder": "Question Type",
                        "range": [
                            "Multiple Choice Questions",
                            "Fill in the Blanks",
                            "Match the Following"
                        ],
                        "renderingHints": {},
                        "required": false,
                        "visible": true
                    },
                    {
                        "code": "gradeLevel",
                        "dataType": "list",
                        "description": "Class",
                        "editable": true,
                        "index": 4,
                        "inputType": "multiselect",
                        "label": "Grade Level",
                        "name": "Class",
                        "placeholder": "Select Class",
                        "renderingHints": {},
                        "required": false,
                        "visible": true
                    },
                    {
                        "code": "concepts",
                        "dataType": "list",
                        "description": "Choose a concept",
                        "editable": true,
                        "inputType": "conceptselector",
                        "label": "Concepts",
                        "name": "Concepts",
                        "placeholder": "Choose Concepts",
                        "renderingHints": {},
                        "required": false,
                        "visible": true,
                        "index": 5
                    },
                    {
                        "code": "myQuestions",
                        "dataType": "toggle",
                        "description": "My Questions",
                        "editable": true,
                        "inputType": "checkbox",
                        "label": "My Questions",
                        "name": "My Questions",
                        "placeholder": "My Questions",
                        "renderingHints": {},
                        "required": false,
                        "visible": true,
                        "index": 6
                    }
                ]
            }
  }
}
</pre>

## Concepts Covered

* Metadata driven forms
* List of available metadata driven forms
* Request payload for update metadata form
