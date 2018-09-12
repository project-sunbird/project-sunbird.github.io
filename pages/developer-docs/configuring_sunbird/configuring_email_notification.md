---
type: landing
directory: developer-docs/configuring_sunbird
title: Configuring Email Notification
page_title: Configuring Email Notification
description: Technical document on configuring Sunbird Email Notification for Review workflow
published: true
allowSearch: true
---

## Overview
Any content published on Sunbird undergoes a review to ensure that content published adheres to defined guidelines and standards set by the organization. Each organization can set standard guidelines based on their organizational ideologies. Sunbird provides the feature of notifying content creators about the status of their content sent for review. Any adopter can use this feature and configure email templates and notify content creators. 

The default email templates available on Sunbird are:
<br>&emsp;a) Send for review - sendForReview
<br>&emsp;b) Request for changes - requestForChanges
<br>&emsp;b) Publish - publish

Default templates are stored in Sunbird middleware(learner service) and configuration for the template are stored as form config. The default templates can also be configured during installation using Form APIs

## Customizing Email Templates

### Adding Email Template to Cassandra DB**

Sunbird LMS stores email templates in the table 'email_template' within 'sunbird' keyspace 

Command to view email templates currently available in Cassandra DB:

    SELECT * from sunbird.email_template;

Command to add an email template to Cassandra DB using CQL shell. Ensure that the template name is unique so that it doesnot override the existing template information in Cassandra DB:

    INSERT INTO sunbird.email_template(name, template) VALUES('myEmailTemplate', '<!doctype html><html> <head> <meta> <meta> <title></title> </head> <body> <table> <tr> <td>&nbsp;</td><td> <div class="content"> <span class="preheader"></span> <table class="main"> <tr> <td class="wrapper"> <table> <tr> <tr> <td> #if ($orgImageUrl) <p> <img src="$orgImageUrl" alt="logo" align="right" width="180" height="100"> </p>#end </td></tr><td> #if ($name) <p >Hi $name,</p>#end <p >$body</p></body></html>')

### Configuring using Form API**

Sample template configuration for different content review workflows stored in form APIs:

#### Send for review:

	{
		"request": {
			"type": "notification",
			"action": "sendForReview",
			"subType": "email",
			"data": {
				"templateName": "sendForReviewTemplate",
				"action": "sendForReview",
				"fields": [{
					"body": "A content has been submitted for review.<br><br><b>Content Type: </b>{{Content type}}<br><b>Title: </b>{{Content title}}<br><b>Creator: </b>{{Creator name}}<br><b>Link: </b>{{Content link}}<br>",
					"subject": "Content submitted for Review Content Type: {{Content type}}, Title: {{Content title}}",
					"logo": "https://dev.open-sunbird.org/assets/images/sunbird_logo.png",
					"orgName": "Sunbird",	
					"fromEmail": "support-dev@open-sunbird.org"
				}]
			}
		}
	}


#### Request for changes

	{
		"request": {
			"type": "notification",
			"action": "requestForChanges",
			"subType": "email",
			"data": {
				"templateName": "requestForChangesTemplate",
				"action": "requestForChanges",
				"fields": [{
					"body": "Thank you for your contribution. We appreciate your effort in creating content for us. However, before we publish the content request you to make the necessary changes as mentioned in the comments.<br>We look forward to receiving the revised content.<br><br><b>Content Type: </b>{{Content type}}<br><b>Title: </b>{{Content title}}<br><b>Link: </b>{{Content link}}<br><b>Reviewer name: </b>{{Reviewer name}}<br>",
					"subject": "Our Sincere Apologies! Content Type: {{Content type}}, Title: {{Content title}}",
					"logo": "https://dev.open-sunbird.org/assets/images/sunbird_logo.png",
					"orgName": "Sunbird",	
					"fromEmail": "support-dev@open-sunbird.org"
				}]
			}
		}
	}


#### Publish

	{
		"request": {
			"type": "notification",
			"action": "publish",
			"subType": "email",
			"data": {
				"templateName": "publishedTemplate",
				"action": "publish",
				"fields": [{
					"body": "This is to inform you that the content submitted has been accepted for publication and will be available on the portal shortly.<br><br><b>Content Type: </b>{{Content type}}<br><b>Title: </b>{{Content title}}<br><b>Link: </b>{{Content link}}<br>",
					"subject": "Congratulations, Your Content is Live! Content Type: {{Content type}}, Title: {{Content title}}",
					"logo": "https://dev.open-sunbird.org/assets/images/sunbird_logo.png",
					"orgName": "Sunbird",	
					"fromEmail": "support-dev@open-sunbird.org"
				}]
			}
		}
	}

**Description of Paramaters**
<br>&emsp;a)type: Type of form
<br>&emsp;b)action: Workflow action, review, publish etc
<br>&emsp;c)subType: Type of notification
<br>&emsp;d)templateName: Template name used to store in Cassandra DB
<br>&emsp;e)body: Body of the email
<br>&emsp;f)subject: Subject line of email
<br>&emsp;g)logo: Logo attached in the email, when the logo is not defined, the default logo is used

Some parameters are used to dynamically change the content information. It is recommended that these parameters are retained in the request body:
<br>&emsp;a) Content type
<br>&emsp;b) Content title
<br>&emsp;c) Content link
<br>&emsp;d) Creator name
<br>&emsp;e) Reviewer name

## Custom Templates
You can aslo create custom email templates which are channel/tenant specific. When customized templates are not present, the default template is used to send emails for different actions in review workflows.

To configure email template:
* Addnew email template configurations in Form API 
* Manually insert the new template in Casandra DB of Sunbird middleware service

### Creating Custom Templates
<br>&emsp;a) Name the templates in the form API in "slug_workflowAction" format
<br>&emsp;b) Store the template in Cassandra DB same as the configured Form API
<br>&emsp;c) Add rootOrgId in form API request along with other fields which is the channel
<br>&emsp;d) Placeholders should be present in their respective fields
<br>&emsp;e) If the custom template is configured in form service, then custom template with the same name should also be added in learner service(Sunbird middleware). If not added,  Learner service displays an error

For example, if slug is "Sunbird" and action is "send for review", template name should be "sunbird_sendforReviewTemplate"

** Sample Custom Template Configuration**

	{
		"request": {
			"type": "notification",
			"action": "sendForReview",
			"subType": "email",
			"rootOrgId": "0123166367624478721",
			"data": {
				"templateName": "sendForReviewTemplate",
				"action": "sendForReview",
				"fields": [{
					"body": "A content has been submitted for review.<br><br><b>Content Type: </b>{{Content type}}<br><b>Title: </b>{{Content title}}<br><b>Creator: </b>{{Creator name}}<br><b>Link: </b>{{Content link}}<br>",
					"subject": "Content has been submitted for review! Content Type: {{Content type}}, Title: {{Content title}}",
					"logo": "https://dev.open-sunbird.org/assets/images/sunbird_logo.png",
					"orgName": "Sunbird",	
					"fromEmail": "support-dev@open-sunbird.org"
				}]
			}
		}
	}

> Note: In the email templates, only predefined parameters can be dynamically replaced with content data while sending the email.
