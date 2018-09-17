---
type: landing
directory: developer-docs/how-to-guide
title: Uploading Existing Content Using Sunbird Portal
page_title: Uploading Existing Content
description: Uploading Existing Content
keywords: uploading content, existing contegn, training meterial
published: true
allowSearch: true
---

### Scenario

A company, XYZ Corp, is a global conglomerate with over ten thousand employees, spread across 7 locations. Employee training and enablement is one of the core values of the organization. To make their training material exhaustive and effective many content or course  creator are creating content using various source To ensure that employees are trained and upskilled. Before they opt for Sunbird platform, they already had many existing content with them. They can still upload the existing content to Sunbird platform to make it accessible to their current employers.

### Prerequisite

* Content creation access

* You must have the content object with unique object Id, using this, available content file can be uploaded.

### Intended Audience

Identify the users who can manage the content and assign them <b>Content Creator</b> role.
They can create content and upload using the content creator right as well.

Identify the users who will review the content and assign them <b>content reviewer</b> role. 

>Note:

A reviewer can not do any change in content. He reviews the content and send  the review comments to the content creatot for further changes or publish the content starighaway.

### Overview

Sunbird enables its adopter (users) to create, store and consume  a wide variety of content. Users with content creation right can create content on Sunbird or upload existing content.

Currently, the platform supports the following content formats:

* Text (.pdf)

* Video (.mp4, .webm, YouTube URLs)

* HTML

* ECML (created using the inbuilt content editor)

* EPUB

* H5P

It also supports the following formats for its resource library:

* Audio (.mp3)

* Images (.jpeg, .png)

* URLs for YouTube videos and other files

* Videos (.mp4) Later, there will be support for other file formats.

Maximum file size supported on the platform:

<table>
  <tr>
    <td>Content/ File Type</td>
    <td>Maximum File Size</td>
  </tr>
  <tr>
    <td>Book,Course,Collection,Lesson Plan</td>
    <td>250 MB</td>
  </tr>
  <tr>
    <td>HTML (as zip files)</td>
    <td>50 MB</td>
  </tr>
  <tr>
    <td>EPUB</td>
    <td>50 MB</td>
  </tr>
  <tr>
    <td>H5P</td>
    <td>50 MB</td>
  </tr>
  <tr>
    <td>Video (.mp4, webm)</td>
    <td>50 MB</td>
  </tr>
  <tr>
    <td>.pdf</td>
    <td>50 MB</td>
  </tr>
</table>


A content object with below mandatory metadata fields should be created: before uploading the content:

- ContentType

- Mime Type

The uploaded content will be validated through these metadata.

You can even upload video content created by other users, provided you have the required permissions from the content creator or copyright holder. The videos should adhere to prescribed guidelines about file formats and size.

### Taskflow

To complete this scenario, you need to create the content with appropriate metadata & ownership information, upload the existing content artifact, and publish the content for public usage.

You can upload existing content into the Sunbird platform using User Interface or Upload Content API.

#### Uploading Content Using API

This API is associated with uploading content on the Sunbird Platform .

* The <b>_/upload/{content_ID}</b> endpoint executes "Upload Content" request based on the content metadata validation with the uploaded file.

* {...}refers to a section of upload endpoint URL path that needs to be replaced by appropriate ID.

* You need to provide a valid content ID value in {Content Id} field of API URL. 

* It is a must to provide values for the required parameters

**Path  Parameter:**

<table>
  <tr>
    <td>Path  Parameter</td>
    <td>Parameter Type</td>
    <td>Description</td>
    <td>Is Mandatory</td>
  </tr>
  <tr>
    <td>Content ID
</td>
    <td>String</td>
    <td>Content ID of the Request URL</td>
    <td>Yes</td>
  </tr>
</table>


**Form data Parameter:**

<table>
  <tr>
    <td>Form data Parameter</td>
    <td>Parameter Type</td>
    <td>Description</td>
    <td>Is Mandatory</td>
  </tr>
  <tr>
    <td>file</td>
    <td>String</td>
    <td>Content file path that you want to upload</td>
    <td>Yes</td>
  </tr>
</table>


**Header Parameter**

<table>
  <tr>
    <td>Header Parameter</td>
    <td>Parameter Type</td>
    <td>Description</td>
    <td>Is Mandatory</td>
  </tr>
  <tr>
    <td>Content-Type</td>
    <td>String</td>
    <td>The Content Type entity is the media type of the resource.Possible media types can be: Multipart/form-data</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>X-Authenticated-Userid</td>
    <td>String</td>
    <td>Represents the registered User ID to execute the API.</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td> Authorization</td>
    <td>String</td>
    <td>To make use of the API, you require authorization. Raise a request to the administrator for the use of the API. You will receive the authorization key. Specify the key received. </td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>ts</td>
    <td>String</td>
    <td>Time Stamp at which upload request was sent.</td>
    <td>Yes</td>
  </tr>
</table>


Following is an example of  <b>response body<b/> for <b>uploading content API</b>:

{

    "id": "ekstep.learning.content.upload",

    "ver": "3.0",

    "ts": "2018-09-05T10:55:22ZZ",

    "params": {

        "resmsgid": "d6dui5d1-60u8-4a79-23f9-78796195c2h7",

        "msgid": null,

        "err": null,

        "status": "successful",

        "errmsg": null

    },

    "responseCode": "OK",

    "result": {

        "content_url": "https://ekstep-public-prod.s3-ap-south-1.amazonaws.com/content/do_112534095400542340156583/artifact/highq_153614492126723.pdf",

        "node_id": "do_112534095400542340156583",

        "versionKey": "153614492126723"

    }

}

For the youtube content or file url, pass it as fileUrl in <b>Upload API</b> or set the artifact Url of the content using  [Update Content API**](http://www.sunbird.org/apis/content/#operation/Update%20Content)

After you uploading the content, publish the content using **[Publish Content API**](http://www.sunbird.org/apis/content/#operation/Publish%20Content). 

Request Body for Publish Content API

{

  "request": {

    "content": {

      "lastPublishedBy": "string",

      "publishChecklist": [

        "string"

      ]

    }

  }

}

Response Body for Publish Content API

{

  "result": {

    "node_id": "string",

    "versionKey": "string"

  },

  "id": "string",

  "ver": "string",

  "ts": "string",

  "params": {

    "resmsgid": "string",

    "msgid": "string",

    "err": "string",

    "status": "string",

    "errmsg": "string"

  },

  "responseCode": {}

}

>Note: Reviewer has the right to publish content. Use id of one of the selected reviewers as publisher user id.



