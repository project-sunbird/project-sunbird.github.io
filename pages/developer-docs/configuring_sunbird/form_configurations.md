---
type: landing
directory: developer-docs/configuring_sunbird
title: Configuration for Meta Forms
page_title: Configuration for Meta Forms 
description: Different configurations for forms
published: true
allowSearch: true
keywords: Meta Data, Meta, form, API, Form API, 
---
## Overview

In Sunbird we have different types of components(Portal, Editor's and Mobile). Each components has their own forms to create, update, search etc. To acheive dynamic form generation specific to adaptors, Sunbird is providing a FormAPI. Using this API, adaptors can configure and customize (number of fields and types of fields) forms as per need.  


## Editor's forms

Currently, Editor form supports the following input types

* Text 
* Select
* Multiselect
* Number
* Conceptselector
* Keywordsuggestion
* Dialcode
* Topicselector
* file

### Sample 

Below is the sample for Text type

 ```json
     {
            "code": "name",
            "dataType": "text",
            "description": "Title of the content",
            "depends": [],
            "editable": true,
            "index": 5,
            "inputType": "text",
            "label": "Title",
            "name": "Title",
            "placeholder": "Enter the Title ",
            "range":[], // only when inputType is Select/ Multiselect
            "renderingHints": {},
            "required": true,
            "visible": true,
            "validation": [{
                "type": "max",
                "value": "14",
                "message": "validation message"
            }]
        }
```

| Property Name | Type | Description | DefaultValue | Example |
| --- | --- | --- | --- | --- |
| code | `string` | Unique identifier of the field| None |NA|
| dataType | `string` | Format of data| None |`list`,`text`|
| description | `string` | Description about the field| None | NA|
| depends | `array` | Which defines if any of the field is dependent on other field | None | `depends:["gradeLevel", "medium" ]`|
| editable | `boolean` | Which defines the mode of the field either read only or editable  | true | NA |
| index | `integer` | position of the field  | None | `1` |
| inputType | `string` | Which defines the type of field| None |`text`,`number`, `select`,`multiselect`,`conceptselector`, `topicselector`, `keywordsuggestion`,`dialcode`|
| label | `string` |Label of the field| None |NA|
| name | `string` |Name of the field| None |NA|
| placeholder | `string` |Placeholder for the field| None |NA|
| range | `array` |It supports for dropdown values| None | `range:['story','game','worksheet']`|
| renderingHints | `object` | `Pending` | None |NA|
| required | `boolean` | Which defines if a field is mandatory | None | NA |
| visible | `boolean` | Which defines if a field should be visible or not | None |NA|
| validation | `array` | Which defines validation of the particular field | None | NA|

### Mapping between dataType and inputType

| dataType | inputType |
| --- | --- |
| Text | text, select, number | 
| List | multiselect, conceptselector, keywordsuggestion, dialcode, topicselector | 
| Url | file | 

### List of forms in Editor

| Form | Description |
| --- | --- |
| **Book Save** | This form shows up when a user clicks on `editdetails` in Book Editor |
| **Book Review** | on click `sendforreview` in Book Editor  | 
| **Resource Save** | on click `editdetails` in Content/ Generic Editor's |
| **Resource Review** | on click `sendforreview` in Content/ Generic Editor's |
| **Course Save** | on click `editdetails` in Course Editor |
| **Course Review** | on click `sendforreview` in Course Editor |  
| **Lesson Plan Save** | on click `editdetails` in LessonPlan Editor |
| **Lesson Plan Review** | on click `sendforreview` in LessonPlan Editor |  
| **Collection Sav**e | on click `editdetails` in Collection Editor |
| **Collection Review** | on click `sendforreview` in Collection Editor | 
| **Question Save** | on click `create question` in Content Editor |
| **Question Search** | on click `search questions` in Content Editor |

A sample data for `Resource save` form.

```Json
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
```

To learn to create a form using above configuration, refer http://www.sunbird.org/apis/form/

