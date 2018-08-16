---
type: landing
directory: developer-docs/configuring_sunbird
title: Configure Reviewer Checklist
page_title: Configure Reviewer Checklist
description: Technical document on configuring checklist for reviewer
published: true
allowSearch: true
---

## Overview
To ensure that content uploaded and available on Sunbird are quality driven and adheres to standard guidelines, content can be published only after it undergoes a review. 

A content reviewer on Sunbird can perform the following activites on SUnbird: 
* Request changes
* Publish

This page details the procedure on how to configure the review checklist. Configurations are supported are at the following two levels:
* Instance level
* Channel level

When configuration is done at a channel level, it overrides instance level configuration. 

<b>Note</b>: Configurations are set internally, users can override default configuration to customize checklists for organiational requirements.

Different configuration can be defined differently for the following content types:
* Course
* Textbook
* Resource and Collection

### Default UI Behaviour:
When there sre no configuration set for the checklist, the UI displays the following messages:

<br>1. When requesting changes to content:
<br>&emsp;a) An information message "Please detail the required changes in the comments" is displayed over the comment box. On entering commnets here, the Request Changes button is enabled
<br>&emsp;b) In case of default API failure, an error message stating the same is displayed
<br>2. When publishing reviewed content:
<br>&emsp;a) A confirmation message ""Are you sure you want to publish?"" is displayed. The Publish button is enabled and reviewer clicks the button to publish content
<br>&emsp;b) In case of default API failure, an error message stating the same is displayed

### Configuring Review Checklist
* Use the create/update form API with the following API request

**Sample API request for Request Changes with configuration:**

<pre>
{
    "id": "api.form.read",
    "ver": "1.0",
    "ts": "2018-08-08T11:34:43.978Z",
    "params": {
        "resmsgid": "0bc7c6a0-9aff-11e8-87e3-293bba91ef55",
        "msgid": "0bbe9ee0-9aff-11e8-ad28-a55b08e25716",
        "status": "successful",
        "err": null,
        "errmsg": null
    },
    "responseCode": "OK",
    "result": {
        "form": {
            "type": "content",
            "action": "requestChangesChecklist",
            "subType": "Resource",
            "data": {
                "templateName": "defaultTemplate",
                "action": "requestChangesChecklist",
                "fields": [{
                    "title": "Please tick the reasons for requesting changes and provide detailed comments:",
                    "otherReason": "Other Issue(s) (if there are any other issues, tick this and provide details in the comments box)",
                    "contents": [{
                            "name": "Appropriateness",
                            "checkList": [
                                "Has Hate speech, Abuse, Violence, Profanity",
                                "Has Sexual content, Nudity or Vulgarity",
                                "Has Discriminatory or Defamatory content",
                                "Is not suitable for children"
                            ]
                        },
                        {
                            "name": "Content details",
                            "checkList": [
                                "Inappropriate Title or Description",
                                "Incorrect Board, Grade, Subject or Medium",
                                "Inappropriate tags such as Resource Type or Concepts",
                                "Irrelevant Keywords"
                            ]
                        },
                        {
                            "name": "Usability",
                            "checkList": [
                                "Content is NOT playing correctly",
                                "CANNOT see the content clearly on Desktop and App",
                                "Audio is NOT clear or NOT easy to understand",
                                "Spelling mistakes found in text used",
                                "Language is NOT simple to understand"
                            ]
                        }
                    ]
                }]
            }
        }
    }
}
</pre>

**Sample API request for Publish option with configuration:**

<pre>
{
    "id": "api.form.read",
    "ver": "1.0",
    "ts": "2018-08-08T11:34:43.978Z",
    "params": {
        "resmsgid": "0bc7c6a0-9aff-11e8-87e3-293bba91ef55",
        "msgid": "0bbe9ee0-9aff-11e8-ad28-a55b08e25716",
        "status": "successful",
        "err": null,
        "errmsg": null
    },
    "responseCode": "OK",
    "result": {
        "form": {
            "type": "content",
            "action": "publishChecklist",
            "subType": "Resource",
            "data": {
                "templateName": "defaultTemplate",
                "action": "publishChecklist",
                "fields": [{
                    "title": "Please confirm that ALL the following items are verified (by ticking the check-boxes) before you can publish:",
                    "contents": [{
                            "name": "Appropriateness",
                            "checkList": [
                                "No Hate speech, Abuse, Violence, Profanity",
                                "No Sexual content, Nudity or Vulgarity",
                                "No Discrimination or Defamation",
                                "Is suitable for children"
                            ]
                        },
                        {
                            "name": "Content details",
                            "checkList": [
                                "Appropriate Title, Description",
                                "Correct Board, Grade, Subject, Medium",
                                "Appropriate tags such as Resource Type, Concepts",
                                "Relevant Keywords"
                            ]
                        },
                        {
                            "name": "Usability",
                            "checkList": [
                                "Content plays correctly",
                                "Can see the content clearly on Desktop and App",
                                "Audio (if any) is clear and easy to understand",
                                "No Spelling mistakes in the text",
                                "Language is simple to understand"
                            ]
                        }
                    ]
                }]
            }
        }
    }
}
</pre>
