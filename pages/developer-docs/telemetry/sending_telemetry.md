---
type: landing
directory: developer-docs/telemetry
title: Sending Telemetry
page_title: Sending Telemetry
description: telemetry specification of Sunbird
published: true
allowSearch: true
---

## Prerequisites

The following are the prerequisites for sending telemetry:

### Authtoken  

Authtoken is required to access any APIs. See [AuthToken generator JS](developer-docs/telemetry/authtokengenerator_jslibrary){:target="_blank"} to understand the process to generate authorization credentials.

### Channel Id 

### API key

Sunbird implementors currently need to get a API key for accessing EkStep platform. Currently all the contents are stored here.

When you are initially trying out the Sunbird, please request the keys from the EkStep QA environment. For requesting the keys see [Procedure](developer-docs/telemetry/authtokengenerator_jslibrary/#procedure){:target="_blank"} section and to follow the steps for getting secret key.  

## Telemetry Helpers

The following telemetry helpers gives much insights about capturing and collecting the telemetry data. 

### Standalone JS Library

The standalone telemetry JS library allows users to capture telemetry data without the restrictions of using any app that uses the Genie SDK, the EkStep content player or the EkStep or Sunbird portal. Partner users can use the JS library to log and sync telemetry data. They can decide how to use the Telemetry JS library, and integrate it with their app, webpage or web service

When using the standalone telemetry JS library, you can capture and sync telemetry data only when you are connected to the Internet.

There is no storage within the library. To capture offline telemetry data, users need to decide where the data will be stored and how it will sync with the servers when their app gets connected online. [Standalone JS Library](developer-docs/telemetry/jslibrary){:target="_blank"} section will help you in understanding better how JS library serves the purpose of capturing telemetry data.

### HTML Interface Library

The ContentRenderer handles telemetry events for ECML content. HTML content has functionality such as click, navigation, assessment, etc. These functionalities are specific to or different for individual HTML content pieces. For HTML Content, the ContentRenderer logs only the telemetry start event. It does not log telemetry for any other event. By embedding the HTML interface library within the HTML content helps log telemetry events for the actions that take place in the HTML content.

[HTML Interface Library](developer-docs/telemetry/htmlinterfacelibrary){:target="_blank"} details information about the library used to log telemetry events for HTML content.

### AuthToken Generator JS

The AuthToken generator JS library is used to generate or refresh the user AuthToken. The Authtoken is mandatory for any API request. The AuthToken is passed as part of configuration to the telemetry JS library. [AuthToken Generator JS Library](developer-docs/telemetry/authtokengenerator_jslibrary){:target="_blank"} details method and process of generating key and tokens.

