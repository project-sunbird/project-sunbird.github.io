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

This page guides you with the necessary steps for registering a channel with Ekstep. Registering a channel is the primary requirement to setup Sunbird functionally. In this context, a channel in Sunbird is a source and conduit of information. It transfers the tenant data from the tenant system to the Ekstep server.
It is must to have your channel registered with Ekstep to access Ekstep Infra. Since, numerous services of Sunbird use Ekstep Infra. Registering a channel also helps in identifying the services accessed by a specific tenant. 
The fundamental purpose of performing this activity is to enable each channel (Root Orgs) to outline and define channel specific content. While registering a Channel, you will get a channel ID. This Channel ID can act as a filter, enable granting and revoking the permissions, manage requests etc.

### Registering a Channel 

To register a channel, follow these steps: 

1.	Enable the scheduler to find all the missing channels which are not registered in system-settings table
2.	If scheduler finds any unregistered channel in the system-settings table, it invokes the register channel job
3.	Upon successful registration of a channel, the flag is set to “true” in system-settings table

### Checking the status of Channels 

While the server initializes:

1. As a routine, the scheduler always checks the sync status of system-settings table by checking  the value of “Flag” key
2. If sync status of flag key is “false,” it will invoke the process to find the missing channels 
3. Then [Registering a channel] process will invoke 

In the mentioned processes, the following set of APIs(s) are used:

1.	[Channel registration](http://www.sunbird.org/apis/framework/#operation/ChannelV1CreatePost)  


2.	[List Channels](http://www.sunbird.org/apis/framework/#operation/ChannelV1ListPost) 
=======
</pre>
 

