Organization administrators can use the credentials received to sign in and upload organization details. Administrators of administrating organizations can add other organization details.
  
**Uploading Organizations**

1. Click **Upload Organizations**. The upload organizations page is displayed
2. Download the csv file for reference
3. You can add or upload details of up to 200 organizations at a time in one csv
4. The **OrgName** column is mandatory. Enter organization name in this column
5. Enter each organization’s name in a separate row
6. Entering details in all other columns is optional

	Column Title	| Description
    ----------------|--------------
    isRootOrg	| Valid value for this column is True
    channel	| Unique ID provided during master organization creation
    externalId	| Unique ID associated with each organization in the administrating organization’s repository
    provider	| Channel ID of the administrator organization
    description	| Details describing the organization
    homeUrl	| Organization's homepage url
    orgCode	| Organization’s unique code, if any,
    orgType	| Type of organization, such as, NGO, primary school, secondary school etc
    preferredLanguage	| Language preferences for the organization, if any
    contactDetail	| Organization’s phone number and email ID. Details should be entered within single quotes. For 	example: ‘Phonenumber’

7. Save the csv file to your computer
8. Click UPLOAD ORGANIZATIONS CSV. The explorer window is displayed
9. Select the saved csv file and click open
10. On successful file upload, a process ID will be generated, else an error message is displayed
