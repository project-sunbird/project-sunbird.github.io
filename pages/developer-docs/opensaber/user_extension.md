---
type: landing
directory: developer-docs/opensaber
title:  Open Saber Integration
page_title: Open Saber Integration
description: Procedure document on how to integrate open saber with to Sunbird 
published: true
allowSearch: true
---
## Overview
The main purpose of [Open Saber](https://github.com/project-sunbird/open-saber/wiki) is to serve as an electronic registry for entities such as  teacher registry, doctor registry etc. Open saber can be used by Sunbird adopters to store custom information about their organization users, user profile data extensions, organisation data extensions etc.

### Customization
Open Saber maintains information in [RDF](https://www.w3.org/RDF/) graph data format. [SHEX](https://shex.io/) is used to define the schema of data stored in Open Saber. The SHEX schema definition can consist of one or more entities e.g. user, organisation etc. whose information can be stored within Open Saber. 

Currently all interactions with Open Saber is in [JSON-LD](https://json-ld.org/) format while Sunbird LMS APIs are in JSON format. A java library (Open Saber Client) is available for transforming between JSON-LD and JSON formats. Additionally, Sunbird provides a java library for bridging between Open Saber equivalent JSON and Sunbird API specified JSON format.

To support customization of an entity within Sunbird, the following definitions are required:

1. Definition of the entity using SHEX (Open Saber). For more details refer [Open Saber](https://github.com/project-sunbird/open-saber/wiki)

2. Define mapping to transform between JSON-LD and JSON format (Open Saber Client). For more details refer [Open Saber](https://github.com/project-sunbird/open-saber/wiki)

3. Define mapping to transform between Open Saber Client JSON and Sunbird JSON format (Sunbird Open Saber Bridge). This includes updation of following files within [Sunbird Open Saber Bridge](https://github.com/project-sunbird/sunbird-open-saber-bridge)

a) **registry-user-write-mapping.conf**: Configuration to map Sunbird User Create and Update API request JSON format for required extensions (i.e. custom fields) into Open Saber Client JSON format

Currently Sunbird only supports customisation of users

Add configuration for every custom field in below format. This configuration definition is as per typesafe format

~~~

<customType> {
    <customFieldName> {
        <propertyName>: <propertyValue>
        ...
    }
}

~~~



Property Name  | Field Type  | Description
-------------- | ----------- | -----------
fromFieldName  | Optional    | Field name which identifies input of transformation. If not specified, _<customFieldName>_ is used
toFieldName    | Mandatory   | Field name which identifies output of transformation  
fromType       | Mandatory   | Type of from field name
toType         | Mandatory   | Type of to field name
fromDateFormat | Optional    | Date format of input if from field type is DateString
toDateFormat   | Optional    | Date format of output if to field type is DateString
filters        | Optional    | Filter for selecting an element to transform from an input of type _List<T>_
filterField    | Optional    | Field to use from selected element in transformation



**Note**:
- Supported types are _Integer_, _Double_, _Long_, _Boolean_, _String_, _DateString_ and _List<T>_
- In _List<T>_ type, _T_ can be a simple type (e.g. _String_) or a custom type. A custom type can be defined in the configuration
- _filters_ is applicable only if _fromType_ is _List<T>_ and _toType_ is other than list type
- _filterField_ is applicable only if _fromType_ is _List<T> and _filters_ is specified
- _filters_ has the following format. This filter can be used to select an element having specified field name with specified value

<pre>
[{field = <fieldName>, values = [<valueName>]}]
</pre>

**registry-user-read-mapping.conf**: Configuration to map Open Saber Client response JSON format for required extensions into Sunbird User Read API JSON format 
The configuration format for read mapping is similar to write mapping. The difference between read and write mapping is due to the input. In case of read, the input is Open Saber Client response JSON whereas in case of write, the input is Sunbird API request JSON format
**registry-user-enums-mapping.conf**: Configuration which defines enumerations required for mapping between Sunbird User API JSON format and Open Saber Client JSON format
The configuration format for enums is as given below:
<pre>
enums {
	<customEnumName1> {
		"<sunbirdEnumValue1.1>" = "<openSaberEnumValue1.1>"
		"<sunbirdEnumValue1.2>" = "<openSaberEnumValue1.2>"
		...
	}
	<customEnumName2> {
		"<sunbirdEnumValue2.1>" = "<openSaberEnumValue2.1>"
		"<sunbirdEnumValue2.2>" = "<openSaberEnumValue2.2>"
		...
	}
}
</pre>

Listed are some examples to illustrate configuration of user customisation.
__Example 1__: Define configuration for a user with a custom field _schoolCode_ of simple type

registry-user-write-mapping.conf
<pre>
user {
	schoolCode {
		toFieldName	= "teacher.schoolCode"
		fromType	= "String"
		toType		= "String"
	}
}
</pre>

registry-user-read-mapping.conf
<pre>
teacher {
	schoolCode {
		toFieldName	= "schoolCode"
		fromType	= "String"
		toType		= "String"
	}
}
</pre>

Sunbird API JSON format
<pre>
{
	"schoolCode": "KV101"
}
</pre>

Open Saber Client JSON format:
<pre>
{
    "teacher": {
    	"schoolCode": "KV101"
    }
}
</pre>

__Example 2__: Define configuration for a user with a custom field _highestAcademicQualification_ of _List<T>_ type, where _T_ is a simple type
registry-user-write-mapping.conf
	
<pre>
user {
	highestAcademicQualification {
		toFieldName	= "teacher.highestAcademicQualification"
		fromType	= "List<String>"
		toType		= "List<String>"
		enum		= "academicQualificationEnum"
	}
}
</pre>

registry-user-read-mapping.conf
<pre>
teacher {
	highestAcademicQualification {
		toFieldName	= "highestAcademicQualification"
		fromType	= "List<String>"
		toType		= "List<String>"
		enum		= "academicQualificationEnum"
	}
}
</pre>

registry-user-enums-mapping.conf
<pre>
enums {
    academicQualificationEnum {
	    "Below Secondary"	= "BelowSecondary"
	    "Secondary"			= "Secondary"
	    "Higher Secondary"	= "HigherSecondary"
	    "Graduate"			= "Graduate"
	    "PostGraduate"		= "PostGraduate"
	    "MPhil"				= "MPhil"
	    "Doctoral"			= "Doctoral"
	    "Post-Doctoral"		= "PostDoctoral"
	}
}
</pre>

Sunbird API JSON format
<pre>
{
	"highestAcademicQualification": ["PostGraduate", "Higher Secondary"]
}
</pre>

Open Saber Client JSON format
<pre>
{
    "teacher": {
    	"highestAcademicQualification": ["PostGraduate", "HigherSecondary"]
    }
}
</pre>

__Example 3__: Define configuration for a user with custom field _classSubjectTaught_ of _List<T>_ type, where _T_ is a custom type.

registry-user-write-mapping.conf
<pre>
user {
	classSubjectTaught {
		toFieldName	= "teacher.teachingExperience"
		fromType	= "List<classSubjectType>"
		toType		= "List<T>"
	}
}
classSubjectType {
	classes {
		toFieldName	= "classesTaught"
		fromType	= "String"
		toType		= "String"
		enum		= "classEnum"
	}
	subjects {
		toFieldName	= "subjectsTaught"
		fromType	= "List<String>"
		toType		= "List<String>"
		enum		= "subjectsEnum"
	}
}
</pre>

registry-user-read-mapping.conf
<pre>
teacher {
	teachingExperience {
		toFieldName	= "classSubjectTaught"
		fromType	= "List<classSubjectTaughtType>"
		toType		= "List<T>"
	}
}
classSubjectTaughtType {
	classesTaught {
		toFieldName	= "classes"
		fromType	= "String"
		toType		= "String"
		enum		= "classEnum"
	}
	subjectsTaught {
		toFieldName	= "subjects"
		fromType	= "List<String>"
		toType		= "List<String>"
		enum		= "subjectEnum"
	}
}
</pre>

registry-user-enums-mapping.conf
<pre>
enums {
	classEnum {
		"Class 1"	= "Class1"
		"Class 2"	= "Class2"
		"Class 3"	= "Class3"
	}
    subjectEnum {
		"Accountancy"		= "Accountancy"
		"Biology"			= "Biology"
		"Chemistry"			= "Chemistry"
		"Computer Science"	= "ComputerScience"
	}	
}
</pre>

Sunbird API JSON format
<pre>
{
	"classSubjectTaught": [{
                "classes": "Class 1",
                "subjects": ["English", "Foreign Language"]
            }, {
                "classes": "Class 8",
                "subjects": ["Fine Arts", "Foreign Language"]
            }
        ]
}
</pre>

Open Saber Client JSON format
<pre>
{
    "teacher": {
    	"classSubjectTaught": [{
                "classes": "Class 1",
                "subjects": ["English", "ForeignLanguage"]
            }, {
                "classes": "Class 8",
                "subjects": ["Fine Arts", "ForeignLanguage"]
            }
        ]
    }
}
</pre>

__Example 4__: Define configuration for a user with custom field _serviceJoiningDate_ of _DateString_ type.

registry-user-write-mapping.conf
<pre>
user {
	serviceJoiningDate {
		toFieldName	    = "teacher.serviceJoiningDate"
		fromType	    = "DateString",
		toType		    = "DateString"
		fromDateFormat  = "yyyy-MM-dd"
		toDateFormat    = "yyyy-MM-dd"
	}
}
</pre>

registry-user-read-mapping.conf
<pre>
teacher {
	serviceJoiningDate {
		toFieldName	    = "serviceJoiningDate"
		fromType	    = "DateString",
		toType		    = "DateString"
		fromDateFormat  = "yyyy-MM-dd"
		toDateFormat    = "yyyy-MM-dd"
	}
}
</pre>

Sunbird API JSON format
<pre>
{
	"serviceJoiningDate": "2015-04-07"
}
</pre>

Open Saber Client JSON format
<pre>
{
    "teacher": {
    	"serviceJoiningDate": "2015-04-07"
    }
}
</pre>

__Example 5__: Define configuration for a user with custom field _teacherId_ of _String_ type which is set based on a filter applied on an input _List<T>_ type.

registry-user-write-mapping.conf
<pre>
user {
	externalIds {
		toFieldName = "teacher.teacherId"
		fromType	= "List<T>"
		toType		= "String"
		filters		= [{field = "provider", values = ["SK"]}]
		filterField = "id"
	}
}
</pre>

Sunbird API JSON format:
<pre>
{
	"externalIds": [{
	    "id": "12345",
	    "idType": "UID",
	    "provider": "SK",
	}]
}
</pre>

Open Saber Client JSON format:
<pre>
{
    "teacher": {
    	"teacherId": "12345"
    }
}
</pre>
