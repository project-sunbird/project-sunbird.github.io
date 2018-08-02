---
type: landing
directory: developer-docs
title: Initialization Setup
page_title: Initialization Setup
description: Initialization Setup
keywords: Initialize Sunbird, create root org, root org, channel setup, rootorg, rootOrg
published: true
allowSearch: true
---
## Overview
After successfully installing Sunbird, to make it functional, it is important to create users and organizations. However, before creating users, it is necessary to create the channel (rootOrg).

### Create First RootOrg 
Use the Initialise api (/v1/system/init) to create the First rootOrg. Use the following curl command :

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

**Note:** The values for the variables in the command are as follows:

- **learner_service_host** http host address where learner service is running

- **current_timestamp** valid timestamp in format of 'yyyy-mm-dd hh:mm:ss' 

- **organisation_name** valid organisation name

- **channel** valid channel to be used for the created rootOrg (should be provided while adding users later)

The API response is as follows:

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

**Note** The Intialise API can be used only once to create the first rootOrg. If you try to execute it again, it will return the following error response:

 ```
 {
    "id": "api.system.init",
    "ver": "v1",
    "ts": "2018-07-11 15:38:00:213+0530",
    "params": {
        "resmsgid": null,
        "msgid": "3db7ee89-edc9-4fcf-b463-dc7aa46a309e",
        "err": "SYSTEM_ALREADY_INITIALISED",
        "status": "SYSTEM_ALREADY_INITIALISED",
        "errmsg": "System already initialised.Cannot initialise again."
    },
    "responseCode": "CLIENT_ERROR",
    "result": {}
}
```
