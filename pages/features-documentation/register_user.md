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
## Signing In

1. Sign in the Sunbird portal using your registered credentials

## Accessing your Workspace

1. Click **Profile** tab on the header
   
    OR
    
    Click the **Profile Icon** and select Profile

## Uploading Users

1. Click **Upload Users**. The upload users page is displayed 
2. Enter Provider details. **Channel ID** of the organization administrator must be entered here
3. Enter **External ID**. Unique ID of the user that has to be uploaded must be entered here
    
      OR
    
      Enter **OrgID**. Unique ID of the admin organization must be entered here
    
     - For example, in the case of a state, state repository is the system administrator repository and the ID given to each school, or education body in the state is the External ID. 

      OR

      - Enter OrgID. Unique ID of the administration organization that is generated on Sunbird. This ID is generated when the organization is successfully uploaded on Sunbird.

4. Download the csv file for reference
5. You can add or upload details of up to 200 users at a time in one csv file
6. Descriptions and valid values for each columns are as listed below:

Sl.No |Column Name  |Description  |Column Type  |Field Type |Valid Values
------|-------------|-------------|-------------|-----------|-------------
1 |FirstName  |User’s first name  |Alphabetic |Mandatory  |
2 |LastName |User’s last name |Alphabetic |Optional |
3 |phone  |User’s phone number  |Numeric  |Optional |
4 |email  |User’s email ID  |Alphanumeric |Mandatory  |Standard email ID format
5 |userName |Unique name assigned to the user by the organization |Alphanumeric |Mandatory  |
6 |password |Unique password given by the organization  |Alphanumeric |Mandatory  |
7 |provider |Name/Code of administrative organization |Alphanumeric |Conditional  |
8 |phoneVerified  |Whether user’s phone number is verified  |Alphabetic |Mandatory  |TRUE
9 |emailVerified  |Whether user’s email ID is verified  |Alphabetic |Mandatory  |TRUE
10  |roles  |User’s role on Sunbird |Alphabetic |Optional |CONTENT_CREATOR, CONTENT_REVIEWER, FLAG_REVIEWER, COURSE_MENTOR, ORG_ADMIN, SYSTEM_ADMINISTRATION
11  |position*  |User’s place in the organization hierarchy |Alphanumeric |Optional |THIS FIELD IS NO LONGER IN USE
12  |grade  |Classes taught by the user |Alphanumeric |Optional |Class 1, Class 2, Class 3, Class 4, Class 5, Class 6, Class 7, Class 8, Class 9, Class 10, Kindergarten, Other
13  |location |User’s place of location |Alphanumeric |Optional |
14  |DOB  |User’s date of birth |Numeric  |Optional |YYYY-MM-DD
15  |gender |User’s gender  |Alphabetic |Optional |Male, Female, Transgender
16  |language |User’s language preferences  |Alphabetic |Optional |English, Gujarati, Hindi, Kannada, Marathi, Punjabi, Tamil, Telugu
17  |profileSummary |User’s profile summary |Alphanumeric |Optional |
18  |subject  |Taught by the user |Alphanumeric |Optional |Assamese, Bengali, English, Hindi, Kannada, Malayalam, Oriya, Punjabi, Tamil, Telugu, Urdu, Biology, Chemistry, Physics, Mathematics, Environmental Studies, Geography, History, Political Science, Economics, Sanskrit, Gujarati, Marathi, Nepali

7. All other columns are optional. These columns include information about the user such as:

   ***Note***: 

   **UserName** and **FirstName** should not be the same.

8. Click **UPLOAD USERS CSV**. The explorer window is displayed
9. Select the csv file and click **Open**
10. The csv file is successfully uploaded
11. On successful file upload, a process ID will be generated, else an error message is displayed
