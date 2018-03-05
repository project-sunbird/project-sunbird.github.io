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

This page guides you with the necessary steps for registering a channel with Ekstep. As, registering a channel is the immediate requirement to setup Sunbird functionally.
The following procedure ensures that the Sunbird is successfully set up functionally:

-	Register a channel with Ekstep
-	Set up a Root organization
-	Set up the users

But before you are registering the channel, you need to have a clear understanding of: 

1. What is a channel in the Sunbird?
2. Why is there a need to register a channel with Ekstep?

A channel in Sunbird identifies the source of information. The channel also functions to transfer the tenant specific data (mostly content) from the tenant system to the Ekstep server.

There is the need to register a channel as numerous services of Sunbird use Ekstep Infra. So, to identify the services accessed by a specific tenant of sunbird, registering that tenant channel with EkStep is must. 
Simplifying this, all the access to Estep Infra and other related activities from a specific sunbird tenant must be tagged with a specific channel and that channel must be registered with Ekstep
The fundamental purpose of performing this activity is to enable each channel (Root Orgs) to outline and define channel specific content. Based on the channel value, provided at the time of registering a channel with Ekstep. Specific set of curriculum content will load. 



### Registering a Channel 

To register a channel, follow these steps: 

1.	Enable a scheduler to find all the missing channels not registered with Ekstep
2.	If scheduler finds any unregistered channel, it invokes the register channel job
3.	Upon successful registration of a channel, the flag is set to “true” in system-settings table
### Checking the status of Channels 

While your server initializes:


1. As a routine, the scheduler always checks the sync status of system-settings table by checking  the value of “Flag”
2. If sync status flag is “false,” it will invoke the process to find the missing channels 
3. The register a channel process will run 

In the mentioned processes, you will have to use the following set of APIs(s)

1.	[Channel registration](http://www.sunbird.org/apis/framework/#operation/ChannelV1CreatePost)  
Checking the status of channels 
2.	[List Channels](http://www.sunbird.org/apis/framework/#operation/ChannelV1ListPost) 
