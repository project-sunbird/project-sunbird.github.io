---
type: landing
directory: developer-docs
title: Registering Channel
page_title: Registering Channel
description: Registering Channel for root organization creation 
published: true
allowSearch: true
---
## Overview

This page guides you with the necessary steps for registering a channel with Ekstep. Since, registering a channel serves as a pre-requisite for creation of a root Organization 
After registering a channel check the channel's registration status.    

## Purpose

The fundamental purpose of performing this activity is to enable each channel (Root Orgs) to outline and define channel specific curriculum framework. Based on the channel value, provided at the time of registering a channel with Ekstep. Specific set of curriculum content framework will load. 


### Registering a Channel 

1.	A scheduler job will run to find all the missing channels not registered with Ekstep
2.	Once a few missing unregistered channels are found, the registering channel job is invoked to start registering these channels
3.	Successful registration of a channel sets a flag to “true” in system-settings table

### Checking the status of Channels 

While the server starts up:

1.	As a routine, the scheduler always checks the sync status from system-settings table by checking the value of “Flag”
2.	If sync status is set to “false,” it will invoke the process to find the missing channels
3.	Register the channels with Ekstep by following the steps in section [Registering a channel] ()<!-- this link will be generated once the page goes on production-->
4.	Update the “Flag” key in system-settings table

The process for registering the channel uses the Channel API. Here is the sample payload for:

1.	Channel registration 
2.	List Channels 

## Channel Registration API

The request payload:

URL : /channel/v3/create

Method : POST

RequestBody :

<pre>

{
   "request": {
      "channel":{
        "code": "012424880506855424168",  // code is hashTagId value in sunbird
        "name": "cltindia",               // name is channel value in sunbird
        "description": "CLT India"        //description of organization
      }
    }
}

</pre>

The response Payload:

<pre>

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

</pre>

## Get channel list API 

The request payload:

URL : /channel/v3/list

Method : POST 

<pre>

RequestBody :

    {
      "request": { }
    }

</pre>

The Response payload:

<pre>

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

</pre>
 
