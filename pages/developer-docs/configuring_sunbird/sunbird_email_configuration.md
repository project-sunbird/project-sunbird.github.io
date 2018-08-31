---
type: landing
directory: developer-docs/configuring_sunbird
title: Configuring Sunbird Email Notification for Review workflow
page_title: Configuring Sunbird Email Notification for Review workflow
description: Technical document on configuring Sunbird Email Notification for Review workflow
published: true
allowSearch: true
---

## Overview
To ensure that email templates can be configured on channel level for the review workflow.

## Default Templates
Sunbird comes with default templates for actions in content review workflow. Below are the default templates present in Sunbird.
<br>&emsp;a) Send for review - sendForReview
<br>&emsp;b) Request for changes - requestForChanges
<br>&emsp;b) Publish - publish

Default templates will be stored in sunbird middleware(learner service) and configuration for the template will be stored as form config. Default template can also be configured at the installation time using Form API's.

**Adding an e-mail template to Cassandra DB**
Sunbird LMS stores email templates in the table 'email_template' within 'sunbird' keyspace. 

Given below is the command to view email templates currently available in Cassandra DB.

<pre>SELECT * from sunbird.email_template;</pre>

Given below is the command to add an email template to Cassandra DB using CQL shell. Ensure that the template name should be unique so that it will not override the existing template information in Cassandra DB.

<pre>INSERT INTO sunbird.email_template(name, template) VALUES('myEmailTemplate', '<!doctype html><html> <head> <meta> <meta> <title></title> </head> <body> <table> <tr> <td>&nbsp;</td><td> <div class="content"> <span class="preheader"></span> <table class="main"> <tr> <td class="wrapper"> <table> <tr> <tr> <td> #if ($orgImageUrl) <p> <img src="$orgImageUrl" alt="logo" align="right" width="180" height="100"> </p>#end </td></tr><td> #if ($name) <p >Hi $name,</p>#end <p >$body</p></body></html>')</pre>

**Configuration using Form API**
Below is the sample template configuration for different content review workflows stored in form API's.

**Send for review:**
<pre>
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
				"subject": "Content has been submitted for review! Content Type: {{Content type}}, Title: {{Content title}}",
				"logo": "https://dev.open-sunbird.org/assets/images/sunbird_logo.png"
			}]
		}
	}
}
</pre>

**Request for changes**
<pre>
{
	"request": {
		"type": "notification",
		"action": "requestForChanges",
		"subType": "email",
		"data": {
			"templateName": "requestForChangesTemplate",
			"action": "requestForChanges",
			"fields": [{
				"body": "We acknowledge your contribution and effort in creating content for us. However, we are unable to accept the content that you submitted.<br> We look forward to a more meaningful relationship with you, the next time around.<br><br><b>Content Type: </b>{{Content type}}<br><b>Title: </b>{{Content title}}<br><b>Link: </b>{{Content link}}<br><b>Reviewer name: </b>{{Reviewer name}}<br>",
				"subject": "Our sincere apologies! Content Type: {{Content type}}, Title: {{Content title}}",
				"logo": "https://dev.open-sunbird.org/assets/images/sunbird_logo.png"
			}]
		}
	}
}
</pre>

**Publish**
<pre>
{
	"request": {
		"type": "notification",
		"action": "publish",
		"subType": "email",
		"data": {
			"templateName": "publishedTemplate",
			"action": "publish",
			"fields": [{
				"body": "Congratulations! The content that you had submitted has been accepted for publication. It will be available for usage shortly.<br><br><b>Content Type: </b>{{Content type}}<br><b>Title: </b>{{Content title}}<br><b>Link: </b>{{Content link}}<br>",
				"subject": "Congratulations, your content is live! Content Type: {{Content type}}, Title: {{Content title}}",
				"logo": "https://dev.open-sunbird.org/assets/images/sunbird_logo.png"
			}]
		}
	}
}
</pre>

In the above request, 
<br>&emsp;a)type: It is the type of form.
<br>&emsp;b)action: It is the workFlow action.
<br>&emsp;c)subType: It is the type of notification.
<br>&emsp;d)templateName: It is the template name used to store in Cassandra DB.
<br>&emsp;e)body: It is the body of the email.
<br>&emsp;f)subject: It is the subject of email.
<br>&emsp;g)logo: It is the logo attached in the email. If not sent default will be used.

Below placeholders are used to dynamically change the content information. So, it is recommended to keep this respective fields:

<br>&emsp;a) {{Content type}}
<br>&emsp;b) {{Content title}}
<br>&emsp;c) {{Content link}}
<br>&emsp;d) {{Creator name}}
<br>&emsp;e) {{Reviewer name}}

## Custom Templates
We can also create custom email template channel/tenant specific. If customized templates are not present, the default template will be used to send email for different actions in review workflows.

If any tenants want to configure their own email template, they can do so by adding new email template configurations in Form API and manually inserting the new template in Casandra DB of Sunbird middleware service.

**Instruction to create custom templates**
<br>&emsp;a) Templates name configured in Form API should be in "slug_workflowAction" format.
<br>&emsp;b) Templates name used to store in Cassandra DB should be same as configured in Form API.
<br>&emsp;c) rootOrgId should be added in form API request along with other fields which is the channel.
<br>&emsp;d) Placeholders should be there in their respective fields.
<br>&emsp;e) If the custom template is configured in form service, then custom template with the same name should also be added in Learner service(sunbird middleware). If not added Learner service will throw an error.

For example, If slug is "sunbird" and action is send for review, template name should be "sunbird_sendforReviewTemplate". Sample custom template configuration.

<pre>
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
				"logo": "https://dev.open-sunbird.org/assets/images/sunbird_logo.png"
			}]
		}
	}
}
</pre>

In email templates only predefined placeHolder can be dynamically replaced with content data while sending mail.