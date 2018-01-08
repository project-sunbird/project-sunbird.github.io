---
type: landing
directory: developer-docs/telemetry
title: Telemetry Event Details
page_title: Telemetry V3 Event Details
description: telemetry V3 event details
published: true
allowSearch: true
--- 
## V3 Event Details

Every API method has an associated event. The following API methods log details of the associated telemetry event. 

* [Start](developer-docs/telemetry/eventdetails/#start) - This method initializes capture of telemetric data associated to the start of user action 

* [Impression](developer-docs/telemetry/eventdetails/#impression) - This method is used to capture telemetry for user visits to  a specific page. 

* [Interact](developer-docs/telemetry/eventdetails/#interact) - This method is used to capture user interactions on a page. For example, search, click, preview, move, resize, configure

* [Assess ](developer-docs/telemetry/eventdetails/#access)- This method is used to capture user assessments that happen while playing content.

* [Response](developer-docs/telemetry/eventdetails/#response) - This method is used to capture user responses. For example; response to a poll, calendar event or a question.

* [Interrupt](developer-docs/telemetry/eventdetails/#interrupt) - This method is used to capture  interrupts triggered during user activity. For example;  mobile app sent to background, call on the mobile, etc.

* [Feedback](developer-docs/telemetry/eventdetails/#feedback) - This method is used to capture user feedback

* [Share](developer-docs/telemetry/eventdetails/#share) - This method is used to capture everything associated with sharing. For example; Share content, telemetry data, link, file etc.

* [Audit](developer-docs/telemetry/eventdetails/#audit)

* [Error](developer-docs/telemetry/eventdetails/#error) - This method is used to capture when users face an error

* [Heartbeat](developer-docs/telemetry/eventdetails/#heartbeat) - 

* [Log](developer-docs/telemetry/eventdetails/#log) - This method is used to capture generic logging of events.  For example; capturing logs for API calls, service calls, app updates etc.

* [Search](developer-docs/telemetry/eventdetails/#search) - This method is used to capture the search state i.e. when search is triggered for content, item, assets etc.

* [Metrics](developer-docs/telemetry/eventdetails/#metrics)

* [Summary](developer-docs/telemetry/eventdetails/#summary)

* [Exdata](developer-docs/telemetry/eventdetails/#exdata) - This method is used as a generic wrapper event to capture encrypted or serialized data

* [End](developer-docs/telemetry/eventdetails/#end) - This method is used to capture closure after all the activities are completed

### Start

This API is used to log telemetry when users view content or initiate game play 

<pre>
start: function(config, contentId, contentVer, data) { }
</pre>

Request Arguments:

<pre>
{
  "config": Object, //Config object
  "contentId": String, //Required. Id of the content
  "contentVer": String, //Required. Version of the content. Defaults to "1.0"
  "data": { // Required. event data

    "type": String, //Required.  app, session, editor, player, workflow, assessment
    "mode": "", //Required. mode of preview: preview, edit or play 
    "stageid": "" //Required. stage id where the play has been initiated
  }
}
</pre>

### Impression

This API is used to log telemetry when users visit a specific page.

<pre>
impression: function(data) { }
</pre>

Request Arguments:

<pre>
data - Object //Required

{

    "type": String, //Required. Impression type (list, detail, view, edit, workflow, search)

    "subtype": String, //Optional. Additional subtype. "Paginate", "Scroll"

    "pageid": String, //Required.  Unique page id

    "itype": "", // type of interaction - SWIPE, SCRUB (fast forward using page thumbnails) or AUTO

    "stageto": "" // game level, stage of page id to which the navigation was done

}
</pre>

### Interact

This API is used to log telemetry of user interactions on the page. For example, search, click, preview, move, resize, configure

<pre>
interact: function(data) { }
</pre>

Request Arguments:

<pre>
data - Object //Required
{
  "type": "", // Required. Type of interaction TOUCH,DRAG,DROP,PINCH,ZOOM,SHAKE,ROTATE,SPEAK,LISTEN,WRITE,DRAW,START,ENDCHOOSE,ACTIVATE,SHOW,HIDE,SCROLL,HEARTBEAT,OTHER
  "subtype": "", // Optional. Additional types for a global type. For ex: for an audio the type is LISTEN and thesubtype can be one of PLAY,PAUSE,STOP,RESUME,END
  "id": "", // Required. Resource (button, screen, page, etc) id on which the interaction happened - use systemidentifiers when reporting device events
  "pageid": "", // Optional. Stage or page id on which the event happened
  "extra": { // Optional. Extra attributes for an interaction
    "pos": [{"x":,"y":,"z":}], // Array of positional attributes. For ex: Drag and Drop has two positional attributes. One where the drag has started and the drop point
    "values": [], // Array of values, e.g. for timestamp of audio interactions
    "tid": "", // When interaction is between multiple resources, (e.g. drag and drop) - target resource id
    "uri": "" // Unique external resource identifier if any (for recorded voice, image, etc.)
  }
}
</pre>

### Assess

This API is used to log telemetry of assessments that have occured when the user is viewing content

<pre>
assess: function(data) { }
</pre>

Request Arguments:

<pre>
data - Object //Required
{
  "item": QUESTION, // Required. Question Data
  "pass": "", // Required. Yes, No. This is case-sensitive. default value: No.
  "score": , // Required. Evaluated score (Integer or decimal) on answer(between 0 to 1), default is 1 if pass=YES or 0 if pass=NO. 
  "resvalues": [{"id":"value"}], // Required. Array of key-value pairs that represent child answer (result of this assessment)
  "duration":  // Required. time taken (decimal number) for this assessment in seconds
}

QUESTION = {
  "id": "", // unique assessment question id. its an required property.
  "maxscore", // user defined score to this assessment/question.
  "exlength": , // expected time (decimal number) in seconds that ideally child should take
  "params": [ // Array of parameter tuples
     {"id":"value"} // for ex: if var1 is substituted with 5 apples the parameter is {"var1":"5"}
  ],
  "uri": "", // Unique external resource identifier if any (for recorded voice, image, etc.)
  "desc": "short description",
  "title": "title",
  "mmc": [], // User defined missing micros concepts
  "mc": []   // micro concepts list
}
</pre>

### Response

This API is used to log telemetry of user response. For example; Responded to assessments.

<pre>
response: function(data) { }
</pre>

Request Arguments:

<pre>
data  - Object //Required
{
  "target": TARGET, // Required. Target of the response
  "qid": "", // Required. Unique assessment/question id
  "type": "", // Required. Type of response. CHOOSE, DRAG, SELECT, MATCH, INPUT, SPEAK, WRITE
  "values": [{"key":"value"}] // Required. Array of response tuples. For ex: if lhs option1 is matched with rhs optionN - [{"lhs":"option1"}, {"rhs":"optionN"}]
}

TARGET = {
  "id": "", // Required. unique id for the target
  "ver": "", // Required. version of the target
  "type": "", // Required. Type of the target
  "parent": {
    "id": "", // Optional. parent id of the object
    "type": "" // Optional. parent type of the object. Required if parentid is present.
  }
}
</pre>

### Interrupt

This API is used to log telemetry for any interruptions that have occurred when a user is viewing content or playing games. For example; screen lock, incoming call, etc.

<pre>
interrupt: function(data) { }
</pre>

Request Arguments:

<pre>
data - Object //Required
{
  "type": "", // Required. Type of interuption
  "pageid": "", // Optional. Current Stage/Page unique id on which interuption occured
  "eventid": "" // Optional. unique event ID
}
</pre>

### Feedback

This API is used to log telemetry of feedback provided by the user.

<pre>
// To log content start/play event
feedback: function(data) { }
</pre>

Request Arguments:

<pre>
data - Object //Required
{
  "contentId": "", // Required. Id of the content
  "rating": 3, // Optional. Numeric score (+1 for like, -1 for dislike, or 4.5 stars given in a rating)
  "comments": "User entered feedback" // Optional. Text feedback (if any)
}
</pre>

### Share

This API is used to log telemetry when a user shares any content with other users.

<pre>
// To log content start/play event
share: function(data) { }
</pre>

Request Arguments:

<pre>
data - Object //Required
{
  "dir": "", // In/Out
  "type": "", // File/Link/Message
  "items": [{ // Required. array of items shared
    "obj": {
      "id": "",
      "type": "",
      "ver": ""
    },
    "params": [
      {"key": "value"}
    ],
    "origin": { // Origin of the share file/link/content
      "id": "", // Origin id
      "type": "" // Origin type
    },
    "to": {
      "id": "",
      "type": ""
    }
  }]
}
</pre>

### Audit

This API is used to log telemetry when an object is changed. This includes life-cycle changes as well.

<pre>
audit: function(data) { }
</pre>

Request Arguments:

<pre>
data - Object //Required
{
  "edata": {
    "props": [""], // Updated properties
    "state": "", // Optional. Current state
    "prevstate": "" // Optional. Previous state
  }
}
</pre>

### Error

This API is used to log telemetry of any error that has occurred when a user is viewing content or playing games. 

<pre>
error: function(error) { }
</pre>

Request Arguments:

<pre>
error - Object //Required
{
  "err": "", // Required. Error code
  "errtype": "", // Required. Error type classification - "SYSTEM", "MOBILEAPP", "CONTENT"
  "stacktrace": "", // Required. Detailed error data/stack trace
}
</pre>

### Heartbeat

This API is used to log telemetry for heartbeat event to denote that the process is running.

<pre>
heartbeat: function(data) { }
</pre>

Request Arguments:

<pre>
data - Object //Required
{
  {
  "edata": {
  }
}
</pre>

### Log

This API is used to log telemetry of generic log events. For example; API calls, service calls, app updates, etc.

<pre>
log: function(data) { }
</pre>

Request Arguments:

<pre>
data - Object //Required
{
  "type": "", // Required. Type of log (system, process, api_access, api_call, job, app_update etc)
  "level": "", // Required. Level of the log. TRACE, DEBUG, INFO, WARN, ERROR, FATAL
  "message": "", // Required. Log message
  "params": [{"key":"value"}] // Optional. Additional params in the log message
}
</pre>

### Search

This API is used to log telemetry when a user triggers a search for any content, item or asset 

<pre>
search: function(data) { }
</pre>

Request Arguments:

<pre>
data - Object - Required
{
  "type": "", // Required. content, assessment, asset 
  "query": "", // Required. Search query string 
  "filters": {}, // Optional. Additional filters
  "sort": {}, // Optional. Additional sort parameters
  "correlationid": "", // Optional. Server generated correlation id (for mobile app's telemetry)
  "size": 333, // Required. Number of search results
  "topn": [{}] // Required. top N (configurable) results with their score
}
</pre>

### Metrics

This API is used to log telemetry for service business metrics (also accessible via health API).

<pre>
metrics: function(data) { }
</pre>

Request Arguments:

<pre>
data - Object - Required
{
  "edata": {
    "metric1": Int,
    "metric2": Int
    /// more metrics, each is a key value
  }
}
</pre>

### Summary

This API is used to log telemetry summary event

<pre>
summary: function(data) { }
</pre>

Request Arguments:

<pre>
data - Object - Required
{
  "edata": {
    "type": "", // Required. Type of summary. Free text. "session", "app", "tool" etc
    "mode": "", // Optional.
    "starttime": Long, // Required. Epoch Timestamp of app start. Retrieved from first event.
    "endtime": Long, // Required. Epoch Timestamp of app end. Retrieved from last event.
    "timespent": Double, // Required. Total time spent by visitor on app in seconds excluding idle time.
    "pageviews": Long, // Required. Total page views per session(count of CP_IMPRESSION)
    "interactions": Long, // Required. Count of interact events
    "envsummary": [{ // Optional
        "env": String, // High level env within the app (content, domain, resources, community)
        "timespent": Double, // Time spent per env
        "visits": Long // count of times the environment has been visited
    }],
    "eventssummary": [{ // Optional
        "id": String, // event id such as CE_START, CE_END, CP_INTERACT etc.
        "count": Long // Count of events.
    }],
    "pagesummary": [{ // Optional
        "id": String, // Page id
        "type": String, // type of page - view/edit
        "env": String, // env of page
        "timespent": Double, // Time taken per page
        "visits": Long // Number of times each page was visited
    }]
  }
}
</pre>

### Exdata

This API is used to log telemetry for external data, while playing content

<pre>
exdata: function(data) { }
</pre>

Request Arguments:

<pre>
data - Object - Required

{

  type - Free flowing text. For ex: partnerdata, xapi etc

  .... Serialized data (can be either encrypted/encoded/stringified)

}
</pre>

### End

This API is used to log telemetry while the user is closing or exiting the content or game

<pre>
end: function(data) { }
</pre>

Request Arguments:

<pre>
data - Object //Required
{
  "contentId": "", // Required. Id of the content
  "type": , // Required. app, session, editor, player, workflow, assessment
  "duration": , // Required. Total duration from start to end in seconds
  "pageid": "", // Optional. Page/Stage id where the end has happened.
  "summary": [{"key":"value"}] // Optional. Summary of the actions done between start and end. For ex: "progress" for player session, "nodesModified" for collection editor
}
</pre>


