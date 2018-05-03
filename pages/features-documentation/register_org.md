---
type: landing
directory: features-documentation
title: Register Organizations
page_title: Register Organizations
description: Register and Enrollment
keywords: Registration, Enrollment'
published: true
allowSearch: true
---

Organization administrators can use their registered credentials and add other organizations onto Sunbird. To add organizations on Sunbird, the administrator must upload required details of the organizations which have to be uploaded. 

## Prerequisites

<table>
  <tr>
    <th style="width:35%;">Step</th>
    <th style="width:65%;">Screen</th>
  </tr>
  <tr>
    <td>1. You are logged in <br>2. You are currently on <strong>Profile</strong> page. You want to upload organizations <br>3. You have clicked on <b>Upload Organizations</b> <br><b>Note</b>: Ensure that the system administrator of your organization has created the required organization types on the portal. For details on how to create organization types, refer <a href="features-documentation/create_orgtype" target="_blank">Organization Type Creation</a>    
      </td>
      <td><img src="pages/features-documentation/images/upldorg_prereqsite.png"></td>
  </tr>
    </table>


## Uploading Organizations

 1.The upload organizations page is displayed<br/>
 2.Download the csv file for reference<br/>
 3.You can add or upload details of up to 199 organizations at a time in one csv file<br/>
 4.Enter each organization's name in a separate row<br/>
 5.Descriptions and valid values for each columns are as listed below:<br/>
 
 Sl.No |Column Name  |Description  |Valid Value  |Column Type
	------|-------------|-------------|-------------|-------------
	1 |Org Name  |Organization name  |Alphanumeric |Mandatory
	2 |isRootOrg  |Whether the  organization has the authority to upload other organizations |TRUE, FALSE	|Optional
	3 |channel  | Unique ID provided by the administrator organization by Sunbird. <br>**Note**: Enter a value in the **channel** column, if the value for the **isRootorg** column is TRUE	|Alphanumeric	|Conditional
	4 |externalId |Unique ID associated with each organization in the administrating  organization’s repository. <br>**Note**: Enter values in the **externalid** column and the **provider** column or keep both columns blank |Alphanumeric |Co-mandatory|
	5 |provider |Unique ID provided to the administrator organization by Sunbird. <br>**Note**: Enter values in the **externalid** column and the **provider** column or keep both columns blank	|Alphanumeric	|Co-mandatory 
	6 |description  |Details describing the organization |Alphanumeric |Optional 
	7 |homeUrl  |Organization’s homepage url  | |Optional 
	8 |orgCode  |Organization's unique code, if any	|Alphanumeric |Optional 
	9 |orgType  |Organization Type  |Org types predefined by the system administrator |Optional
	10  |preferredLanguage  |Language preferences for the organization, if any  |English, Gujarati, Hindi, Kannada, Marathi, Punjabi, Tamil, Telugu	|Optional
	11  |contactDetail  |Organization’s contact detail  |Enter details within curly brackets in double quotes. Separate each detail with a comma, and detail name and corresponding value with a colon (:). <br>For example [{"address":"Vizianagaram","phone":"8088407418","fax":"abc@gmail.com"}]	|Optional

6.**Save** the csv file to your computer<br/>
7.Click **UPLOAD ORGANIZATIONS CSV**. The explorer window is displayed<br/>
8.Select the saved csv file and click **Open**<br/>
9.On successful file upload, a process ID will be generated, else an error message is displayed<br/>
























   

