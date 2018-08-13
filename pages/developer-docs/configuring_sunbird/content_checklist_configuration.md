## Overview

In Sunbird, content reviewer is able to see two buttons. 
* Request changes
* Publish

When reviewer clicks any of the button a checklist is displayed. The checklist can be configurable.

**Following are the different levels of configuration to be supported:**
* Instance level.
* Channel level.

In case if there is a configuration at Channel level, it overrides Instance level configuration. Configuration is not mandatory.

**Different configuration can be defined differently for the following content types:**
* Course
* Textbook
* Resource and Collection

**Following is the behavior for front-end:**
**Request Changes:**
* If there is no configuration present, default config should be displayed with a message "Please detail the required changes in the comments:" and the comment box. Request changes button should be disabled. It will get enabled once the comment is filled.
* If API fails, an error message(default) should be displayed on the toaster.
* If configuration present, everything should be displayed from the configuration and the comment box. Request changes button should be disabled. It will get enabled once the comment is not empty and a reason is checked.

**Publish:**
* If there is no configuration present, default config should be displayed with a message "Are you sure you want to publish?". Publish button should be enabled.
* If API fails, an error message(default) should be displayed on the toaster.
* If configuration present, everything should be displayed from the configuration. Publish button should be disabled. It should get enabled once all the reason is checked.

**Steps to Configure**
* Use the create/update form API with below API request.

**Mock API request for Request Changes with configuration:**

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

**Mock API request for Publish with configuration:**

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