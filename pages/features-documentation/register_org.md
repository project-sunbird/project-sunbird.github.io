---
type: landing
directory: features-documentation
title: Register Organizations
page_title: Register Organizations
description: Register and Enrollment
keywords: 'Org Admin,Registration, Enrollment'
published: true
allowSearch: true
---

Organization administrators can use the credentials received to sign in and upload organization details. Administrators of administrating organizations can add other organization details.

## Signing In

1. Sign in the Sunbird portal using your registered credentials

## Accessing your Workspace

1. Click **Profile** tab on the header <br /> OR
2. Click the **Profile Icon** and select **Profile**

## Uploading Organizations

1. Click **Upload Organizations**. The upload organizations page is displayed
2. Download the csv file for reference
3. You can add or upload details of up to 200 organizations at a time in one csv
4. Descriptions and valid values for each columns are as listed below:

	Sl.No |Column Name  |Description  |Column Type  |Field Type |Valid Values
	------|-------------|-------------|-------------|-----------|-------------
	1 |orgName  |Organization name  |Alphabetic |Mandatory
	2 |isRootOrg  |Whether the  organization has the authority to upload other organization |Alphabetic |Conditional  |TRUE, FALSE
	3 |channel  |Channel ID provided to the administrator organization by Sunbird |Alphanumeric |Conditional  |
	4 |externalId |Unique ID associated with each organization in the administrating  organization’s repository |Alphanumeric |Optional |
	5 |provider |Channel ID provided to the administrator organization by Sunbird |Alphanumeric |Optional |
	6 |description  |Details describing  the organization |Alphanumeric |Optional |
	7 |homeUrl  |Organization’s homepage url  |Alphanumeric |Optional |
	8 |orgCode  |Unique code for the organization that is being uploaded  |Alphabetic |Optional |
	9 |orgType  |Type of organization, such as, NGO, primary school, secondary school etc.  |Alphabetic |Optional
	10  |preferredLanguage  |Language preferences for the organization, if any  |Alphabetic |Optional |English, Gujarati, Hindi, Kannada, Marathi, Punjabi, Tamil, Telugu
	11  |contactDetail  |Organization’s phone number, email ID and address  |Alphanumeric |Optional | 'address':'address','phone':'xxxxxxxx','fax':'xxxxx'

	***Note*** : 
	
	Columns titled **isRootOrg** and **channel** have to be filled only uploading an administrator organization. In all other cases, these columns have to be left blank. 

5. **Save** the csv file to your computer
6. Click **UPLOAD ORGANIZATIONS CSV**. The explorer window is displayed
7. Select the saved csv file and click **Open**
8. On successful file upload, a process ID will be generated, else an error message is displayed
























   

