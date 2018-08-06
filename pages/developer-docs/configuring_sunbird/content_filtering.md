---
type: landing
directory: developer-docs/configuring_sunbird
title: Content Filtering
page_title:  Content Filtering
description: How to setup filtering of content
keywords: content filter, channel, channel based filtering, content filtering, Framework filtering, resource based filtering, mimetype filter, filter
published: True
allowSearch: True
---
## Overview

In Sunbird, a tenant is a root organization, that shares common access to the content repository with specific privileges to the software instance. Sunbird allows you to set up a hierarchy of organizations for every instance installed. After sucessfully installing Sunbird, the first step is to create the first root organization also called as the tenant organization, followed by creating a heirarchy of organizations under each of it. Root organizations can define their own framework and set preferences like default language and search categories. The content is categorized in Sunbird is using: 

**Channel**
**Framework**
**Resource Type**
**Mime Type**
**Content Type**

The adopters can choose to mark the search categories as: 

* Whitelisted: Those channels whose content is best suited for their user's needs and demands. Users can use and explore content across whitelisted channels.

* Blacklisted: Those channels whose content cannot be accessed. Users cannot access any content from blacklisted channels. 

For example, if an adopter whitelists channels X and Y, their users receive content only from channel X and Y. If an adopter blacklists channels X and Y, their users receive content from channels other than from channels X and Y. If an adopter whitelists channels X and Y and blacklists channels Y and Z, their users receive content from (X+Y) minus (Y+Z) = X channel

Once this is configured, Sunbird applies a filter for the content that is made available to users of that organization. Users can only search or navigate to content from the chosen channels.

If an adopter set the <b>$.instance.all</b> keyword inside the whitelisting variable (X,Y, $instance.all), in that case, all the available channels in the instance along with X and Y will be whitelisted.

Let us consider an example of an organization which works in the domain of water conservation and works with multiple NGOs, village panchayats, and district administration authorities in multiple states of India. The organization would like to allow all their stakeholders to have access to the common knowledge repository, and at the same time also allow each stakeholder to independently access content that is specific to the stakeholders. For example, village A in state B is plagued with a problem of industrial effluents depleting the water table at a very rapid pace. The village panchayat needs content with specific solutions. Other states do not require such content. In such a scenario, Sunbird allows content to be filtered for display to a specific group of users for the vilage A of state B.  

**Version Applicable**

This feature is applicable from Sunbird 1.9.0 onwards

**Intended Audience**

The Sunbird instance administrator

## Prerequisites

- An instance of Sunbird that is successfully installed and configured

- The instance should have access to the shared EkStep content repository

## Taskflow

To enable fitering content according to the various categories set the following environment variables at the time of deployment. 

**Channel Based Filtering**

Sunbird maps each root organization to a concept called a channel. Sunbird allows the instance owner to change the default behavior to channel-based content filtering. Sunbird adopters can access a global, shared content repository (possibly the EkStep content repository). Sunbird does not limit content discovery to a single channel. However, given the diversity of content across channels, content published in one channel may not always be helpful to the users of other channels. To enable filtering of content for a channel, 

|S No. | Variable Name | Description | Purpose | Default Value | Path |Example |
|------|---------------|-------------|---------|---------------|------|-----|
| 1 | sunbird_content_service_whitelisted_channels | Configures the channels whose content can be displayed in the Sunbird instance. This is a comma-separated string ex:"A,B,C”where A,B,C are different channels | Variable is used to whitelist the Channel whose content should be displayed | <blank>  |  Content Service | Whitelist channels in Sunbird are ekstep.in and 0124758418460180480 |
| 2 | sunbird_content_service_blacklisted_channels | Configures the channels whose content should not be displayed in the Sunbird instance this is a comma-separated string ex:”X,Y,Z”where X,Y,Z are channels | Variable is used to blacklist the channel whose content should not be displayed | <blank> | Content Service |  Blacklist channels in Sunbird 0124758449502453761 |


**Framework**


|S No. | Variable Name | Description | Purpose | Default Value | Path |Example |
|------|---------------|-------------|---------|---------------|------|-----|
| 1 | sunbird_content_filter_framework_whitelist | Configures the framework whose content can be displayed in the portal. This is a comma-separated string ex:”A,B,C”where A,B,C are different framework ID | Variable is used to whitelist the framework whose content should be displayed | <blank> | Content Service |NCF |
| 2 | sunbird_content_filter_framework_blacklist | Configures the framework whose content should not be displayed in the portal this is a comma-separated string ex:”X,Y,Z”where X,Y,Z are framework ID| Variable is used to blacklist the framework whose content should not be displayed|<blank> |Content Service |NCFCOPY |

**Content Type** 

The content types defined in Sunbird are Resource, Asset, Collection, Course, and Lesson Plan

|S No. | Variable Name | Description | Purpose | Default Value | Path |Example |
|------|---------------|-------------|---------|---------------|------|------|
| 1 | sunbird_content_filter_contenttype_whitelist | Configures the contentType whose content can be displayed in the portal. This is a comma-separated string ex:”A,B,C”where A,B,C are different contentType | Variable is used to whitelist the contentType whose content should be displayed | <blank> | Content Service | |
| 2 | sunbird_content_filter_contenttype_blacklist | Configures the contentType whose content should not be displayed in the portal this is a comma-separated string ex:”X,Y,Z”where X,Y,Z are contentType  | Variable is used to blacklist the contentType whose content should not be displayed | <blank> |Content Service| |


**Resource Type**
 The resource type defined in Sunbird are Collection, Lesson Plan, Course, Book, Story, Read

|S No. | Variable Name | Description | Purpose | Default Value | Path |Example |
|------|---------------|-------------|---------|---------------|------|--------|
| 1 | sunbird_content_filter_resourcetype_whitelist | Configures the resourceType whose content can be displayed in the portal. This is a comma-separated string ex:”A,B,C”where A,B,C are different resourceType | Variable is used to whitelist the resourceType whose content should be displayed |<blank>/ Collection, Lesson Plan, Course, Book, Story, Read, | Content Service|  |
| 2 | sunbird_content_filter_resourcetype_blacklist | Configures the resourceType whose content should not be displayed in the portal. This is a comma-separated string ex:”X,Y,Z”where X,Y,Z are resourceType | Variable is used to blacklist the resourceType whose content should not be displayed | <blank> | Content Service |  |

**Mime Type**

The file formats that are supported in Sunbird are application/pdf, video/mp4, video/x-youtube, video/youtube, application/vnd.ekstep.html-archive, application/epub, application/vnd.ekstep.h5p-archive, video/webm, text/x-url

|S No. | Variable Name | Description | Purpose | Default Value | Path |Example |
|------|---------------|-------------|---------|---------------|------|--------|
| 1 | sunbird_content_filter_mimetype_whitelist | Configures the mimeType whose content can be displayed in the portal. This is a comma-separated string ex:”A,B,C”where A,B,C are different mimeType | Variable is used to whitelist the mimeType whose content should be displayed | <blank> | Content Service |  |
| 2 | sunbird_content_filter_mimetype_blacklist | Configures the mimeType whose content should not be displayed in the portal this is a comma-separated string ex:”X,Y,Z”where X,Y,Z are mimeType | Variable is used to blacklist the mimeType whose content should not be displayed | <blank> | Content Service |  |


**Updating the Database**


|S No. | Variable Name | Description | Purpose | Default Value | Path | 
|------|---------------|-------------|---------|---------------|------|------- |
| 1 | sunbird_content_service_channel_refresh_cron | Configures the cron job interval to update the channels regularly.E.g: “*/5****” this value updates the channel every 5 minutes | Variable is used to set the cron scheduler |<blank>| Content Service | |

For details, refer to the [Configuration Variables page](Configuration variable page)

## Concepts Covered

**Tenant** - A tenant is a root organization that shares common access with specific privileges to the software.

**Multi-tenant** - Multi-tenancy is an architecture in which a single instance of a software application serves multiple customers. Each customer is called a tenant. 

**Channel** - A channel is a unique identifier that makes a tenant unique. 

**Framework**- A structure designed to define the scope of something.	On Sunbird, the framework is defined through a string of vocabularies

**Resource Type**- Resource is the smallest unit of content that can be created on Sunbird. Resource type refers to the different types of resources that can be created on Sunbird, namely, Learn, Play, Practice, Read, Teach, Test  

**Mime Type**- Mime type refers to the different file formats that can be uploaded on Sunbird, for example, .mp4, ECML, EPUB etc. 

**Content Type**- Content type refers to the different resources that can be created on Sunbird, namely, book, course, collection, lesson plan, resource 
