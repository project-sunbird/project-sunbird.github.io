---
type: landing
directory: developer-docs/telemetry
title: Consuming Telemetry Data
page_title: Consuming Telemetry Data
description: Consuming Telemetry Data
published: true
allowSearch: true
---

## Telemetry Exhaust APIs

Ekstep infra is designed to receive telemetry from multiple channels. It is common that, these channels will not have the data pipeline to process the telemetry data. Hence, ekstep infra should make the telemetry available through a daily exhaust.

This document proposes approaches on how telemetry data can be made available to channels.

### Data Exhaust Register Client API

``POST /v1/client``

This api will register a new Data Exhaust Client and returns a license-key for the given access. Client can use the same API to register multiple license-keys for different accesses.

##### Request data

```javascript
{
    "id": "ekstep.data_exhaust_client",
    "ver": "1.0",
    "ts": "2015-08-04T17:36:36+05:30",
    "params": {
        "requesterId": "", 
        "did": "ff305d54-85b4-341b-da2f-eb6b9e5460fa",
        "key": "",
        "msgid": "ff305d54-85b4-341b-da2f-eb6b9e5460fa"
    },
    "request": {
         "clientName": "testclient",
         "licenseKeyName": "dashboard"
    }
}
```

##### Response 

 ```javascript
 {
    "id": "ekstep.data_exhaust_client",
    "ver": "1,0",
    "ts": "",
    "params": {
        "resmsgid": "054f3b10-309f-4552-ae11-02c66640967b",
        "msgid": "ff305d54-85b4-341b-da2f-eb6b9e5460fa",
        "status": "successful",
        "err": "",
        "errmsg": ""
    },
    "result": {
       "licenseKey": "61d81fac-cc60-4f2f-9fe7-daef674af21a"
    }  
}
```

### Data Exhaust Authenticate API

``POST /v1/client/authenticate``

This api will validate the given license-key and returns client information

##### Request data

```javascript
{
    "id": "ekstep.data_exhaust_client_authenticate",
    "ver": "1.0",
    "ts": "2015-08-04T17:36:36+05:30",
    "params": {
        "requesterId": "", 
        "did": "ff305d54-85b4-341b-da2f-eb6b9e5460fa",
        "key": "",
        "msgid": "ff305d54-85b4-341b-da2f-eb6b9e5460fa"
    },
    "request": {
         "licenseKey": "61d81fac-cc60-4f2f-9fe7-daef674af21a"
    }
}
```

##### Response 

 ```javascript
{
    "id": "ekstep.data_exhaust_client_authenticate",
    "ver": "1,0",
    "ts": "",
    "params": {
        "resmsgid": "054f3b10-309f-4552-ae11-02c66640967b",
        "msgid": "ff305d54-85b4-341b-da2f-eb6b9e5460fa",
        "status": "successful",
        "err": "",
        "errmsg": ""
    },
    "result": {
       "clientName": "testclient",
       "licenseKeyName": "dashboard"
    }
}
```

### Data Exhaust Authorize API

``POST /v1/client/authorize``

This api will authorize the access to a particular resource/data sets

##### Request data

```javascript
{
    "id": "ekstep.data_exhaust_client_authorize",
    "ver": "1.0",
    "ts": "2015-08-04T17:36:36+05:30",
    "params": {
        "requesterId": "", 
        "did": "ff305d54-85b4-341b-da2f-eb6b9e5460fa",
        "key": "",
        "msgid": "ff305d54-85b4-341b-da2f-eb6b9e5460fa"
    },
    "request": {
         "clientName": "testclient",
         "licenseKeyName": "dashboard",
         "resourceId": "9912345-4b0d-420b-a00c-7c2a2a9e77e8"
    }
}
```

##### Response 

 ```javascript
{
    "id": "ekstep.data_exhaust_client_authorize",
    "ver": "1,0",
    "ts": "",
    "params": {
        "resmsgid": "054f3b10-309f-4552-ae11-02c66640967b",
        "msgid": "ff305d54-85b4-341b-da2f-eb6b9e5460fa",
        "status": "successful",
        "err": "",
        "errmsg": ""
    } 
}
```

### Data Exhaust Dataset API

``POST /v1/datasets/{datasetId}/{resourceId}/{fromDate}/{toDate}``

This api will return the Data Exhaust Dataset based on datasetId, resourceId, fromDate and toDate.

* **datasetId**: ID of the dataset.
* **resourceId**: ID of the resource. For partner data, this will be the hash of the partner id (org.ekstep.partner.name). Hash must be generated using SHA-1 algorithm and must be 128 bits long
* **fromDate**: Must be in YYYY-MM-DD format. Will be defaulted to yesterday, if not specified
* **toDate**: Must be in YYYY-MM-DD format. Will be defaulted to yesterday, if not specified. toDate must be greather than or equal to fromDate, toDate must be less than today. This is as per

**Note**: Maximum one month's (31 days) data could be downloaded in one API call

##### Request data

```javascript
{
    "id": "ekstep.data_exhaust_dataset_service",
    "ver": "1.0",
    "ts": "2015-08-04T17:36:36+05:30",
    "params": {
        "requesterId": "", 
        "did": "ff305d54-85b4-341b-da2f-eb6b9e5460fa",
        "key": "",
        "msgid": "ff305d54-85b4-341b-da2f-eb6b9e5460fa"
    },
    "request": {
         "licenseKey": "61d81fac-cc60-4f2f-9fe7-daef674af21a"
    }
}
```

##### Response 

In case of success, a zip file is returned in response body. This zip file will internally contain multiple zip files, one file per day. 

In case of error, an appropriate error response is returned, as JSON, and the format of the same is below:

 ```javascript
{
    "id": "ekstep.data_exhaust_dataset_service",
    "ver": "1,0",
    "ts": "",
    "params": {
        "resmsgid": "054f3b10-309f-4552-ae11-02c66640967b",
        "msgid": "ff305d54-85b4-341b-da2f-eb6b9e5460fa",
        "status": "successful", // successful or failed
        "err": "", //Will contain error code if status is 'failed'
        "errmsg": "" //Will contain an error message if status is 'failed'
    } 
}
```

Possible error codes are:

- ```INVALID_DATA_ERROR:``` Request JSON is not parsable
- ```INVALID_DATE:``` fromDate is after toDate or toDate is not before today
- ```DATE_RANGE_TOO_LARGE:``` Data requested for more than 31 days
- ```AUTHORIZATION_FAILED:``` User does not have access to the given dataset or resource
- ```LOGIN_FAILED:``` License key is invalid
- ```INTERNAL_ERROR:``` Technical error in the API

### Data Exhaust Internal API for License-key to Resource Mapping

``POST /v1/associate/{resourceId}``

This API will associate the resource with the given license-key.


##### Request data

```javascript
{
    "id": "ekstep.data_exhaust_resource_associate",
    "ver": "1.0",
    "ts": "2015-08-04T17:36:36+05:30",
    "params": {
        "requesterId": "", 
        "did": "ff305d54-85b4-341b-da2f-eb6b9e5460fa",
        "key": "",
        "msgid": "ff305d54-85b4-341b-da2f-eb6b9e5460fa"
    },
    "request": {
         "licenseKey": "61d81fac-cc60-4f2f-9fe7-daef674af21a"
    }
}
```

##### Response 

 ```javascript
{
    "id": "ekstep.data_exhaust_resource_associate",
    "ver": "1,0",
    "ts": "",
    "params": {
        "resmsgid": "054f3b10-309f-4552-ae11-02c66640967b",
        "msgid": "ff305d54-85b4-341b-da2f-eb6b9e5460fa",
        "status": "successful",
        "err": "",
        "errmsg": ""
    } 
}
```

## v2 APIs

### Data Exhaust Dataset API

``POST /v2/datasets/{datasetId}/{resourceId}/{fromDate}/{toDate}?tags[]={tag1}&tags[]={tag2}``

This API will schedule a request to create a Dataset based on datasetId, resourceId, fromDate, toDate and tags.

* **datasetId**: ID of the dataset.
* **resourceId**: ID of the resource. For partner data, this will be the hash of the partner id (org.ekstep.partner.name). Hash must be generated using SHA-1 algorithm and must be 128 bits long
* **fromDate**: Must be in YYYY-MM-DD format. Will be defaulted to yesterday, if not specified
* **toDate**: Must be in YYYY-MM-DD format. Will be defaulted to yesterday, if not specified. toDate must be greather than or equal to fromDate, toDate must be less than today. This is as per
* **tags**: This is the list of program tags used to filter the response further.

**Note**: Maximum one month's (31 days) data could be downloaded in one API call.

##### Request data

```javascript
{
    "id": "ekstep.data_exhaust_dataset_service",
    "ver": "2.0",
    "ts": "2015-08-04T17:36:36+05:30",
    "params": {
        "requesterId": "",
        "did": "ff305d54-85b4-341b-da2f-eb6b9e5460fa",
        "key": "",
        "msgid": "ff305d54-85b4-341b-da2f-eb6b9e5460fa"
    },
    "request": {
        "licenseKey": "61d81fac-cc60-4f2f-9fe7-daef674af21a", //License key of partner. Mandatory
        "partnerid": "{partner-id}", //Partner ID. Mandatory
        "username": "{username-of-logged-in-user}" //Username of the logged in user. Mandatory
    }
}
```

##### Response

In case of success, a requestid is provided which can be used to get the processing status of the request.

 ```javascript
{
    "id": "ekstep.data_exhaust_dataset_service",
    "ver": "2.0",
    "ts": "",
    "params": {
        "resmsgid": "054f3b10-309f-4552-ae11-02c66640967b",
        "msgid": "ff305d54-85b4-341b-da2f-eb6b9e5460fa",
        "status": "successful",
        "err": "",
        "errmsg": ""
    },
    result:{
        "requestid": "ghf03e54-89b4-312b-dbff-eb90ue5460fa"
    }
}
```

Possible error codes are:

- ```INVALID_DATA_ERROR:``` Request JSON is not parsable
- ```LOGIN_FAILED:``` License key is invalid
- ```AUTHORIZATION_FAILED:``` User does not have access to the given dataset or resource
- ```INVALID_DATE:``` fromDate is after toDate or toDate is not before today
- ```DATE_RANGE_TOO_LARGE:``` Data requested for more than 31 days
- ```MISSING_PARTNERID:``` Mandatory field partnerid missing
- ```MISSING_USERNAME:``` Mandatory field username missing
- ```INTERNAL_ERROR:``` Technical error in the API

### Data Exhaust Requests Scheduled for Partner

``POST /v2/datasets/requests/{partnerid}``

This API will return information about the requests that are scheduled for given partnerid.

* **partnerid**: Partner ID.

##### Request data

```javascript
{
    "id": "ekstep.data_exhaust_dataset_requests_service",
    "ver": "2.0",
    "ts": "2015-08-04T17:36:36+05:30",
    "params": {
        "requesterId": "",
        "did": "ff305d54-85b4-341b-da2f-eb6b9e5460fa",
        "key": "",
        "msgid": "ff305d54-85b4-341b-da2f-eb6b9e5460fa"
    },
    "request": {
        "licenseKey": "{license key}", //License key of partner. Mandatory
    }
}
```

##### Response

 ```javascript
{
    "id": "ekstep.data_exhaust_dataset_requests_service",
    "ver": "2.0",
    "ts": "",
    "params": {
        "resmsgid": "054f3b10-309f-4552-ae11-02c66640967b",
        "msgid": "ff305d54-85b4-341b-da2f-eb6b9e5460fa",
        "status": "successful",
        "err": "",
        "errmsg": ""
    },
    result: {
        "requests": [
            {
                "partnerid": "{partnerid}",
                "username": "{username}",
                "requestid": "{requestid}",
                "datasetid": "{datasetid}",
                "resourceid": "{resourceid}",
                "fromdate": "{fromdate}",
                "todate": "{todate}",
                "tags": "{tags}",
                "createdat": 1455031079070, //epoch time at which the request was created
                "tracker": {
                    "status":"inprogress|complete|failed",
                    "downloadurl":"{S3 url}"
                }
            }
        ]
    }
}
```

Possible error codes are:

- ```INVALID_DATA_ERROR:``` Request JSON is not parsable
- ```LOGIN_FAILED:``` License key is invalid
- ```AUTHORIZATION_FAILED:``` User does not have access to the given dataset or resource
- ```MISSING_PARTNERID:``` Mandatory field partnerid missing
- ```INTERNAL_ERROR:``` Technical error in the API

### Data Exhaust Dataset Aggregation Request Status API

``POST /v2/datasets/requests/status/{requestid}``

This api will return the status of Dataset aggregation request.

* **requestid**: Request ID that was returned when the request was scheduled.

##### Request data

```javascript
{
    "id": "ekstep.data_exhaust_dataset_request_status_service",
    "ver": "2.0",
    "ts": "2015-08-04T17:36:36+05:30",
    "params": {
        "requesterId": "",
        "did": "ff305d54-85b4-341b-da2f-eb6b9e5460fa",
        "key": "",
        "msgid": "ff305d54-85b4-341b-da2f-eb6b9e5460fa"
    },
    "request": {
         "licenseKey": "" //Partner license key. Mandatory
    }
}
```

##### Response

```javascript
{
    "id": "ekstep.data_exhaust_dataset_request_status_service",
    "ver": "2.0",
    "ts": "",
    "params": {
        "resmsgid": "054f3b10-309f-4552-ae11-02c66640967b",
        "msgid": "ff305d54-85b4-341b-da2f-eb6b9e5460fa",
        "status": "successful",
        "err": "",
        "errmsg": ""
    },
    "result": {
        "status": "inprogress|complete|failed", //Status of the request
        "downloadurl": "S3 URL" //If the status is complete, this field will have S3 link for aggregated dataset. For any other status this field should be ignored
    }
}
```

Possible error codes are:

- ```INVALID_DATA_ERROR:``` Request JSON is not parsable
- ```LOGIN_FAILED:``` License key is invalid
- ```AUTHORIZATION_FAILED:``` User does not have access to the given dataset or resource
- ```INVALID_REQUESTID:``` Mandatory field requestid is missing or does not exist
- ```INTERNAL_ERROR:``` Technical error in the API

### Data Exhaust Update Dataset Aggregation Request Status API

``POST /v2/datasets/requests/update/{requestid}``

This api will be used by the Spark job to update the status of Dataset aggregation request. Once the job completes aggregation it will invoke this API to update the status and download URL.

* **requestid**: Request ID that was returned when the request was scheduled.

##### Request data

```javascript
{
    "id": "ekstep.data_exhaust_dataset_request_update_service",
    "ver": "2.0",
    "ts": "2015-08-04T17:36:36+05:30",
    "params": {
        "requesterId": "",
        "did": "ff305d54-85b4-341b-da2f-eb6b9e5460fa",
        "key": "",
        "msgid": "ff305d54-85b4-341b-da2f-eb6b9e5460fa"
    },
    "request": {
        "status": "inprogress|complete|failed", //Status of the request
        "downloadurl": "S3 URL" //If the status is complete, this field will have S3 link for aggregated dataset. For any other status this field should be ignored
    }
}
```

##### Response

```javascript
{
    "id": "ekstep.data_exhaust_dataset_request_update_service",
    "ver": "2.0",
    "ts": "",
    "params": {
        "resmsgid": "054f3b10-309f-4552-ae11-02c66640967b",
        "msgid": "ff305d54-85b4-341b-da2f-eb6b9e5460fa",
        "status": "successful",
        "err": "",
        "errmsg": ""
    }
}
```

Possible error codes are:

- ```INVALID_DATA_ERROR:``` Request JSON is not parsable
- ```INVALID_REQUESTID:``` Mandatory field requestid is missing or does not exist
- ```INTERNAL_ERROR:``` Technical error in the API

## v3 APIs

### Data Exhaust Dataset V3 API

``POST /data/v3/datasets/{datasetId}/{resourceId}/{fromDate}/{toDate}``

This api will return the Data Exhaust Dataset based on datasetId, resourceId, fromDate and toDate.

* **datasetId**: ID of the dataset.
* **resourceId**: ID of the resource. For partner data, this will be the hash of the partner id (org.ekstep.partner.name). Hash must be generated using SHA-1 algorithm and must be 128 bits long
* **fromDate**: Must be in YYYY-MM-DD format. Will be defaulted to yesterday, if not specified
* **toDate**: Must be in YYYY-MM-DD format. Will be defaulted to yesterday, if not specified. toDate must be greather than or equal to fromDate, toDate must be less than today. This is as per

**Note**: Maximum one month's (31 days) data could be downloaded in one API call

##### Authorization

JWT token needs to be passed as part of Authorization header as mentioned below: 

`authorization: Bearer {JWT} token`.

##### Request data

```javascript
{
    "id": "ekstep.data_exhaust_dataset_service",
    "ver": "1.0",
    "ts": "2015-08-04T17:36:36+05:30",
    "params": {
        "requesterId": "", 
        "did": "ff305d54-85b4-341b-da2f-eb6b9e5460fa",
        "key": "",
        "msgid": "ff305d54-85b4-341b-da2f-eb6b9e5460fa"
    }
}
```

##### Response 

In case of success, a zip file is returned in response body. This zip file will internally contain multiple zip files, one file per day. 

In case of error, an appropriate error response is returned, as JSON, and the format of the same is below:

 ```javascript
{
    "id": "ekstep.data_exhaust_dataset_service",
    "ver": "1,0",
    "ts": "",
    "params": {
        "resmsgid": "054f3b10-309f-4552-ae11-02c66640967b",
        "msgid": "ff305d54-85b4-341b-da2f-eb6b9e5460fa",
        "status": "successful", // successful or failed
        "err": "", //Will contain error code if status is 'failed'
        "errmsg": "" //Will contain an error message if status is 'failed'
    } 
}
```

Possible error codes are:

- ```INVALID_DATA_ERROR:``` Request JSON is not parsable
- ```INVALID_DATE:``` fromDate is after toDate or toDate is not before today
- ```DATE_RANGE_TOO_LARGE:``` Data requested for more than 31 days
- ```AUTHORIZATION_FAILED:``` User does not have access to the given dataset or resource
- ```LOGIN_FAILED:``` License key is invalid
- ```INTERNAL_ERROR:``` Technical error in the API

### Using channel ID and API key to request channel telemetry

## Understanding typical workflows from Telemetry data

This section details **Standard Telemetry Workflows** for different access channels.

### Mobile App

<pre>
START(type: "app")
    ...| --> app events such as IMPRESSION, FEEDBACK, etc may happen
    START(type: "session")
        ...
        | --> IMPRESSION - For the pages that the user visits
        | --> INTERACT --> one of the content is clicked
            | --> START(type: "player") --> events generated by specific content
                ...|
                ...| --> in-content events such as ASSESS, INTERACT, IMPRESSION, LEVEL_SET etc.
                ...|
            | --> END(type: "player")
        | --> IMPRESSION - Returned back to mobile app for content player
        ...| --> app events such as IMPRESSION, INTERACT, etc. may happen
        | --> INTERACT --> one of the content is clicked
            | --> START(type: "player") --> events generated by specific content
                ...|
                ...| --> in-content events such as ASSESS, INTERACT, IMPRESSION, LEVEL_SET etc.
                ...|
            | --> END(type: "player")
        | --> IMPRESSION - Returned back to mobile app for content player
        ...| --> app events such as IMPRESSION, INTERACT, etc. may happen
    END(type: "session")
    ...| --> app events such as APP_UPDATE, FEEDBACK, etc may happen
END(type: "app")
</pre>

### Web Portal

<pre>
AUDIT (object: user) --> (Optional if a user is created for the first time)
START(type: "session") --> User session starts
    ...
    | --> IMPRESSION - For the pages that the user visits
    | --> INTERACT - For the interactions on the page
    // there is no explicit logout/timeout
</pre>

### Content editor

<pre>
START (type: "session") - User logs in
    ...
    | --> IMPRESSION (Portal) - User visits content creation page (cdata session)
    | --> INTERACT (Portal) - User initiates content creation
    | --> AUDIT (Platform) - User creates a new content
    | --> START (type: "editor", mode: "content")
        ...
        | --> INTERACT (Editor) - In editor, user is loading the asset browser
        | --> SEARCH (Platform) - In AT, user is searching for assets (cdata session, search result id)
        | --> PLUGIN_LIFECYCLE (Editor) - User selects the asset for content (which search result was used)
        | --> PLUGIN_LIFECYCLE (Editor) - User removes the asset from content
        | --> INTERACT (Editor) - User clicks save in AT
        | --> ACCESS (Platform) - Platform save API is called
        | --> INTERACT (Editor) - User clicks on submit to review
        | --> AUDIT (object: Content, state: "Review", prevstate: "Draft") - Platform sends the content to review state
    | --> END (type: "editor", mode: "content") - User closes the editor and goes back to portal
    </pre>
    
### Backend-services

<pre> 
    AUDIT (object: Service, state: "Ready") --> State transition to READY
    ...| --> ACCESS events for API requests
    ACCESS
        LOG --> Log events in the context of the incoming request (by request correlation ID)
        ...
    METRICS --> Health/business metrics (e.g. number of jobs executed)
    AUDIT (object: Service, state: "Stopped") --> State transition to STOPPED
    </pre>
