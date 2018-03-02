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

1. The **Upload Users** page is displayed 
2. Enter Provider details. **Channel ID** of the organization administrator must be entered here
3. Enter **External ID**. Unique ID of the user that has to be uploaded must be entered here <br /> **OR**
4. Enter **OrgID**. Unique ID of the admin organization must be entered here
    
     - For example, in the case of a state, state repository is the system administrator repository and the ID given to each school, or education body in the state is the External ID. <br /> **OR**
      - Enter OrgID. Unique ID of the administration organization that is generated on Sunbird. This ID is generated when the organization is successfully uploaded on Sunbird.

5. Download the csv file for reference
6. You can add or upload details of up to 199 users at a time in one csv file
7. You can upload users of only a single organization in one csv file
8. Descriptions and valid values for each columns are as listed below:

   Sl.No |Column Name  |Description  |Valid Value  |Field Type 
   ------|-------------|-------------|-------------|-----------
   1 |FirstName  |User’s first name  |Alphabetic Value |Mandatory  
   2 |LastName |User’s last name |Alphabetic Value  |Optional 
   3 |phone  |User’s phone number  |Ten digit mobile number   |Optional 
   4 |email  |User’s email ID  |Alphanumeric, standard email ID format |Mandatory
   5 |userName |Unique name assigned to the user by the organization |Alphanumeric |Mandatory
   6 |password |Unique/common password given by the organization  |Alphanumeric |Optional
   7 |provider |Channel ID shared to the system administrator by Sunbird. <br>**Note:** Enter values in the **provider** column and the **phoneVerified** column or keep both columns blank  |Alphanumeric  |Conditional
   8 |phoneVerified  |Whether user’s phone number is verified. <br>**Note:** Enter values in the **provider** column and the **phoneVerified** column or keep both columns blank  |TRUE, if phone number is provided  |Conditional
   9 |emailVerified  |Whether user’s email ID is verified  |TRUE, if email ID is provided |Optional
   10  |roles  |User’s role on Sunbird |Select one or more of the following roles: <br>CONTENT_CREATOR, CONTENT_REVIEWER, FLAG_REVIEWER, COURSE_MENTOR, ORG_ADMIN, SYSTEM_ADMINISTRATION, PUBLIC  |Optional
   11  |position  |User’s designation in the organization hierarchy |Alphanumeric |Optional 
   12  |grade  |Classes taught by the user |Select one or more of the following grades: <br>Class 1, Class 2, Class 3, Class 4, Class 5, Class 6, Class 7, Class 8, Class 9, Class 10, Kindergarten, Other  |Optional
   13  |location |User’s geographical location |Alphanumeric |Optional |
   14  |DOB  |User’s date of birth |YYYY-MM-DD  |Optional
   15  |gender |User’s gender  |Male, Female, Transgender |Optional
   16  |language |User’s language preferences  |English, Gujarati, Hindi, Kannada, Marathi, Punjabi, Tamil, Telugu  |Optional
   17  |profileSummary |User’s professional profile summary, skills, certifications etc. |Alphanumeric |Optional 
   18  |subject  |Subjects taught by the user |Assamese, Bengali, English, Hindi, Kannada, Malayalam, Oriya, Punjabi, Tamil, Telugu, Urdu, Biology, Chemistry, Physics, Mathematics, Environmental Studies, Geography, History, Political Science, Economics, Sanskrit, Gujarati, Marathi, Nepali |Optional

***Note***: 
   You can select more than one value for the columns grade, language and subject. Ensure that you separate the values with a comma when you select more than one value for any column

7. Click **UPLOAD USERS CSV**. The explorer window is displayed
8. Select the csv file and click **Open**
9. The csv file is uploaded
10. On successful file upload, a process ID will be generated, else an error message is displayed
