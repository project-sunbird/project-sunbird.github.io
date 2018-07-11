---
type: landing
directory: developer-docs
title: Initialization Setup
page_title: Initialization Setup
description: Initialization Setup
keywords: Initialization Setup on Sunbird
published: true
allowSearch: true
---
## Overview
After the successful installation of sunbird we need to create the users and orgs.Inorder to create an user channel(rootOrg) is mandatory.So before the creation of any user rootOrg should be available.

### First RootOrg creation
First rootOrg can be created through Initialise api (/v1/system/init) using the following curl command :

```
curl -X POST \
 {{learner_service_host}}/v1/system/init \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "id":"api.system.init",
  "ts":"{{current_timestamp}}",
  "params": { },
    "request":{
        "orgName":"{{organisation_name}}",
         "channel": "{{org_channel}}"        
    }       
}'
```
Note:
learner_service_host => http host address where learner service is running
current_timestamp => valid timestamp in format of 'yyyy-mm-dd hh:mm:ss' 
organisation_name => valid organisation name
channel => valid channel to be used for the created rootOrg (should be provided while adding users later)

Api response would be like below:

```
{
    "id": "api.system.init",
    "ver": "v1",
    "ts": "2018-07-10 20:10:44:139+0530",
    "params": {
        "resmsgid": null,
        "msgid": "41626e26-1b9b-414d-99ea-d563336fb106",
        "err": null,
        "status": "success",
        "errmsg": null
    },
    "responseCode": "OK",
    "result": {
        "organisationId": "0125438741727805440",
        "response": "SUCCESS"
    }
}
```

Once first rootOrg is created Intialise api cannot be executed again and it will through error response.







