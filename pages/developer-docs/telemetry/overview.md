---
type: landing
directory: developer-docs/telemetry
title: Telemetry
page_title: Telemetry
description: telemetry specification of Sunbird
published: true
allowSearch: true
--- 
## What is Telemetry?

The word ‘Telemetry’ is derived from its Greek etymological roots, tele - remote and metron - measure. 

In today’s connected world, Telemetry is a term used for technologies that automatically record and measure statistical data from real-world use and forward it to IT systems in a remote location for further analysis and study. Telemetry is used in a myriad of industries from tracking spacecrafts, medical monitoring, tracking wildlife, and so on.

'Events' are broad, human-readable actions, that can be tracked as a string. Events are used to categorize telemetry data.They are the basic unit for analytics and help identify user navigation or flow.

The concept of telemetry events is to identify:

**Who** did **what**, **on** **what**, and **where**, **using** **what**, **in relation** to what?

Every event has the following sections and corresponding fields to capture the data:

<table>
  <tr>
    <td>Section </td>
    <td>Description </td>
    <td>Attributes</td>
  </tr>
  <tr>
    <td>About </td>
    <td>About the event</td>
    <td>ets
mid</td>
  </tr>
  <tr>
    <td>Who </td>
    <td>About the actor</td>
    <td>uid</td>
  </tr>
  <tr>
    <td>did </td>
    <td>Verb or action</td>
    <td>eid</td>
  </tr>
  <tr>
    <td>on what </td>
    <td>Action on what object?</td>
    <td>content_id
content_ver</td>
  </tr>
  <tr>
    <td>and where</td>
    <td>Context of the action</td>
    <td>env
did
sid
channel
pdata</td>
  </tr>
  <tr>
    <td>using what</td>
    <td>Using which tool?</td>
    <td>?</td>
  </tr>
  <tr>
    <td>In relation to</td>
    <td>Related to which action?</td>
    <td>cdata</td>
  </tr>
</table>

## Why we need Telemetry?

The objective of telemetry is to assist in product, application or service development, modification or security. It works as a framework. Telemetry enables automatic collection of data from real-world, real-time use.

Typically, there are four levels of telemetry:

* Security

* Basic

* Enhanced

* Full

<img src="pages/developer-docs/installation/images/telemetry_1.png"> 

The level of data collected is a discrete decision of an organization or business. Analysis of this data offers insights into product and user behaviour and usage patterns, driving business decisions and research outcomes. You can program your telemetry analytics to suit your requirements.

Sunbird’s telemetry service has Full level telemetry.

<!--## What is Telemetry Channel?
-->
