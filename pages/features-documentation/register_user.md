---
type: landing
directory: features-documentation
title: Register Users
page_title: Register Users
description: Registration and Enrollment
keywords: 'Users, registration, enrollment'
published: true
allowSearch: true
---
## Introduction

Organization administrators can use their registered credentials and add individual users onto Sunbird. To add users on Sunbird, the administrator must upload required details of the users.

## Prerequisites
<table>
  <tr>
    <th style="width:35%;">Step</th>
    <th style="width:65%;">Screen</th>
  </tr>
  <tr>
    <td>1. You are logged in <br>2. You are currently on <strong>Profile</strong> page. You want to upload users <br>3. You have clicked on <b>Upload Users</b> <br><b>Note</b>: Ensure that the administrator of your organization has assigned user roles on the portal. For details on how to assign user roles, refer <a href="http://www.sunbird.org/features-documentation/admin_assigning_users" target="_blank">Assigning User Roles</a>
      </td>
      <td><img src="pages/features-documentation/images/upldusr_prereqsite.png"></td>
  </tr>
    </table>

## Uploading Users

1.The **Upload Users** page is displayed

2.Enter Provider details. **Channel ID** of the organization administrator must be entered here

3.Enter **External ID**. Unique ID of the user that has to be uploaded must be entered here **OR**

4.Enter **OrgID**. Unique ID of the admin organization must be entered here
    
- For example, in the case of a state, state repository is the system administrator repository and the ID given to each school, or education body in the state is the External ID. 

  OR

- Enter OrgID. Unique ID of the administration organization that is generated on Sunbird. This ID is generated when the organization is successfully uploaded on Sunbird.
      
5.Download the csv file for reference

6.You can add or upload details of up to 1000 users at a time in one csv file

7.You can upload users of only a single organization in one csv file

8.Descriptions and valid values for each columns are as listed below:


S No| Column Name | Description | Valid Value | Field Type
----|-------------|-------------|-------------|-------------
1 |firstName  |User’s first name  |Alphabetic Value |Mandatory  
2 |lastName |User’s last name |Alphabetic Value  |Optional 
3 |phone|User’s phone number |Ten digit mobile number |Optional 
4 |email  |User’s verified email ID |Alphanumeric, standard email ID format <br>Note: You can provide (i) only the phone number, (ii) only email or (iii) both email and phone number|Mandatory
5 |userName |Unique name assigned to the user by the organization |Alphanumeric |Mandatory
6 |password |Unique/common password given by the organization  |Alphanumeric |Mandatory
7 |provider |Channel ID shared with the system administrator|Alphanumeric <br>**Note:** Enter values in the **provider** column and the **phoneVerified** column or keep both columns blank |Conditional
8 |phoneVerified  |Whether user’s phone number is verified   |TRUE, if phone number is provided <br>**Note:** Enter values in the **provider** column and the **phoneVerified** column or keep both columns blank |Conditional
9| emailVerified |Whether user’s email ID is verified |TRUE, if email ID is provided | Optional
10|roles| User’s role |Select one or more of the following roles:<br>CONTENT_CREATOR <br>CONTENT_REVIEWER <br>FLAG_REVIEWER <br>COURSE_MENTOR<br>BOOK_CREATOR<br>BOOK_REVIEWER<br>ORG_ADMIN<br>TEACHER_BADGE_ISSUER<br>BADGE_ISSUER<br> ANNOUNCEMENT_SENDER <br>PUBLIC | Optional
11|position | User’s designation in the organization |Alphanumeric |Optional
12| grade |Classes taught by the user | Select one or more of the following grades:<br> Class 1, Class 2, Class 3, Class 4,<br> Class 5, Class 6, Class 7,<br> Class 8, Class 9, Class 10, Kindergarten, Other | Optional
13| location |User’s geographical location |Alphanumeric |Optional
14| DOB |User’s date of birth |DD-MM-YYYY |Optional
15| gender | User’s gender |Male, Female, Transgender | Optional
16| language| User’s language preferences |Select one or more of the following language: <br>English, Gujarati, Hindi, <br>Kannada, Marathi, Punjabi, <br> Tamil, Telugu |Optional
17|profileSummary |User’s professional profile summary, skills, certifications |Alphanumeric |Optional
18|subject |Subjects taught by the user|Select one or more of the following subject:<br>Assamese, Bengali, English, <br>Hindi, Kannada, Malayalam,<br> Oriya, Punjabi, Tamil, <br>Telugu, Urdu, Biology, <br>Chemistry, Physics, Mathematics, <br>Environmental Studies, Geography, <br>History, Political Science, <br> Economics, Sanskrit, Gujarati,<br> Marathi, Nepali |Optional
19|externalId |User’s identity in an external system <br>**Note **:Enter values in the externalid column and the externalIdType & externalIdprovider column or keep all three columns blank |Alphanumeric |Optional
20| externalIds | An array of externalId represented as JSON string| Enter details within curly brackets in double quotes. Separate each detail with a comma, and, detail name and corresponding value with a colon (:). For example; [{"id":"someId","idType":"someIdType","provider":"someProvider",”operation":"ADD,EDIT,REMOVE”}] |Optional
21|externalIdType |External ID types |<br>**Note**: Enter values in the externalId column and the externalIdType column or keep both column blank | Alphanumeric <br>Note: Ignore externalIdType, if userName is already provided|Conditional
22| externalIdProvider |External ID provided by system administrator to users<br>**Note**: Enter values in the externalId column and the externalIdProvider column or keep both column blank |Alphanumeric<br>**Note**: Ignore externalIdProvider, if userName is already provided |Conditional

**Note**: Ensure that you separate the values with a comma when you select more than one value for any column

9.Click **UPLOAD USERS CSV**.The explorer window is displayed

10.Select the csv file and click **Open**

11.The csv file is uploaded

12.On successful file upload, a process ID is generated, else an error message is displayed

13.Possible causes for failure of upload includes:

  a. The csv file is not saved in the right format. Select CSV (Comma delimited) (.csv) as the file type while saving 
  
  b. Using the same email, phonenumber etc. for more than one user. Details must be unique for each user
  
  c. Providing invalid values in the csv file. In such cases, the error message denotes the column name for which incorrect value is provided
