## Overview
This section guides you with the necessary steps for registering a channel with Ekstep. Since, registering a channel serves as a pre-requisite for creation of a root Organization. 
The following sections provide detailed instructions as how you can register a channel with Ekstep? 
You must follow the steps in a sequential manner

## Purpose 

The fundamental purpose of performing this activity is to enable each channel (Root Orgs) to outline and define channel specific curriculum framework. Based on the channel value, provided after registration of the channel with Ekstep. Specific set of channel specific curriculum content framework will load. 

## Design Principles 

1.	Registering a channel with Ekstep, while creating a Root organization in Sunbird.
2.	As a pre-requisite for creation of an organization, the channel registration process should be successful
3.	Channel registration is applicable only for root org creation

## Registering and Checking status of channels

The following is the process which details about registering a channel followed by checking the status of the channels:

### Registering a Channel 

1.	A scheduler job will run to find all the missing channels not registered with Ekstep
2.	Once a few missing unregistered channels are found, the registering channel job is invoked to start registering these channels
3.	Successful registration of a channel sets a flag to “true” in system-settings table

### Checking the status of Channels 

While the server starts up:
1.	As a routine, the scheduler always checks the sync status from system-settings table by checking the value of “Flag”
2.	If sync status is set to “false,” it will invoke the process to find the missing channels
3.	Register those channels with Ekstep by following the steps in section [Registering a channel] ()
4.	Update the “Flag” key in system-settings table

The process for registering the channel uses the Channel API, Here is the sample payload for 
1.	Channel registration 
2.	List Channels 

## Channel Registration API

The request payload:

``` 
URL : /channel/v3/create

Method : POST 

RequestBody :

     {
   "request": {
      "channel":{
        "code": "012424880506855424168",  // code is hashTagId value in sunbird
        "name": "cltindia",               // name is channel value in sunbird
        "description": "CLT India"        //description of organisation
      }
    }
}


```

The response Payload:

```

Response :

{
    "id": "ekstep.learning.channel.create",
    "ver": "1.0",
    "ts": "2018-02-12T11:39:27ZZ",
    "params": {
        "resmsgid": "a3449214-d429-4c25-96fb-9c1edb4b5201",
        "msgid": null,
        "err": null,
        "status": "successful",
        "errmsg": null
    },
    "responseCode": "OK",
    "result": {
        "node_id": "012424880506855424168",
        "versionKey": "1518435567708"
    }
}
```

## Get channel list API 

The request p

```
URL : /channel/v3/list

Method : POST 

RequestBody :

    {
      "request": { }
    }


Response :

{
    "id": "ekstep.learning.channel.list",
    "ver": "1.0",
    "ts": "2018-02-13T05:54:38ZZ",
    "params": {
        "resmsgid": "fcd5e23e-db98-4c05-b162-4b11f1449f8e",
        "msgid": null,
        "err": null,
        "status": null,
        "errmsg": null
    },
    "responseCode": "OK",
    "result": {
        "channels": [
            {
                "identifier": "channel",
                "code": "channel",
                "frameworks": [],
                "consumerId": "62e15662-bb09-439f-86e2-d65bd84f3c23",
                "channel": "in.ekstep",
                "description": "",
                "createdOn": "2017-12-20T06:20:55.096+0000",
                "versionKey": "1513750855096",
                "appId": "ekstep_portal",
                "name": "channel",
                "lastUpdatedOn": "2017-12-20T06:20:55.096+0000",
                "categories": [],
                "defaultFramework": "NCF",
                "status": "Live"
            }
        ],
        "count": 1
    }
}
```

