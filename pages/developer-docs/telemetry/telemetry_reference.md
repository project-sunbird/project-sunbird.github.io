---
type: landing
directory: apis
title: Telemetry References
page_title: Telemetry Documentation
description: Telemetry Documentation
keywords: Telemetry Documentation
published: true
allowSearch: true
---

### Standalone JS Library

The standalone telemetry JS library allows users to capture telemetry data without the restrictions of using any app that uses the Genie SDK, the EkStep content player or the EkStep or Sunbird portal. Partner users can use the JS library to log and sync telemetry data. They can decide how to use the Telemetry JS library, and integrate it with their app, webpage or web service

When using the standalone telemetry JS library, you can capture and sync telemetry data only when you are connected to the Internet.

There is no storage within the library. To capture offline telemetry data, users need to decide where the data will be stored and how it will sync with the servers when their app gets connected online. [Standalone JS Library](developer-docs/telemetry/jslibrary){:target="_blank"} section will help you in understanding better how JS library serves the purpose of capturing telemetry data.

### HTML Interface Library

The ContentRenderer handles telemetry events for ECML content. HTML content has functionality such as click, navigation, assessment, etc. These functionalities are specific to or different for individual HTML content pieces. For HTML Content, the ContentRenderer logs only the telemetry start event. It does not log telemetry for any other event. By embedding the HTML interface library within the HTML content helps log telemetry events for the actions that take place in the HTML content.

[HTML Interface Library](developer-docs/telemetry/htmlinterfacelibrary){:target="_blank"} details information about the library used to log telemetry events for HTML content.

### AuthToken Generator JS Library

The AuthToken generator JS library is used to generate or refresh the user AuthToken. The Authtoken is mandatory for any API request. The AuthToken is passed as part of configuration to the telemetry JS library. [AuthToken Generator JS Library](developer-docs/telemetry/authtokengenerator_jslibrary){:target="_blank"} details method and process of generating key and tokens.
**Bulk Upload Service APIs**

- **[Bulk Upload Service APIs](apis/bulkupload/){:target="_blank"}** The Bulk Upload resources perform operations related to uploads on the Sunbird Platform. The Bulk Upload API(s) operations include uploads and updations.

**Content APIs**

- **[Content APIs](apis/content/){:target="_blank"}** The Content API resources perform operations related to Content on the Sunbird Platform. The operations include the basic CRUD (Create, Read, Update and Delete) operations and other operations such as upload, publish.

**Course Batch Management APIs**

- **[Course Batch Management APIs](apis/coursebatchmanapi/){:target="_blank"}** The Course Batch Management API resources perform operations related to management of batches for courses on the Sunbird Platform. The basic operations include creation, updation, joining, listing.

**Data Sync APIs**

- **[Data Sync APIs](apis/datasyncapi/){:target="_blank"}** The Data synchronization API resources perform operations related to data on the Sunbird Platform. Data synchronization API(s) are responsible for establishing consistency among data from a source to a target data storage and vice versa with continuous harmonization of the data over time.

**Metrics APIs**

- **[Metrics APIs](apis/metricsapi/){:target="_blank"}** The Metrics resources analyze sunbird's overall performance and efficiency.These resources perform operations related to the metrics on the Sunbird Platform. The metrics resource performs various operations related to content consumption, content snapshot aggregation.

**Notification APIs**

- **[Notification APIs](/apis/notificationapi/){:target="_blank"}** The Email resources provides the notification mechanism for all the users on Sunbird .The Resource notifies users officially about something on Sunbird.

**Organization Management APIs**

- **[Organisation Management APIs](apis/orgapi/){:target="_blank"}** The Organisation Management API resources perform operations related to management of Organisation on the Sunbird Platform. The basic operations include creation, updation, joining, approving.

**User APIs**

- **[User APIs](apis/userapi/){:target="_blank"}** The User API resources perform operations related to the Users on the Sunbird Platform. The basic operations include Creation, Updation, Reading & Searching.
