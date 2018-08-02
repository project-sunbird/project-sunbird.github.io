---
type: landing
directory: developer-docs/configuring_sunbird
title: Filter Content for a Channel
page_title: Filter Content for a Channel 
description: How to setup filtering of content for a channel. 
keywords: filter, channel, channel based filtering, content filtering, set up content filtering
published: false
allowSearch: false
---
## Scenario

An organization works in the domain of water conservation and works in multiple Indian states, with NGOs, village panchayats and other authorities. The organization would like to allow all their stakeholders to have access to the common knowledge repository, and at the same time also allow each state to independently access content that is specific to them. For example, village A in state B is plagued with a problem of a rapidly depleting the water table. The village panchayat needs content with specific solutions. Other states do not require such content. In such a scenario, Sunbird allows content to be filtered for display only to users of state B.           

**Version Applicable**

This feature is applicable from Sunbird 1.7.0 onwards

**Intended Audience**

The Sunbird instance administrator

## Prerequisites

- An instance of Sunbird that is successfully installed and configured

- The instance should have access to the shared EkStep content repository

## Overview 

In Sunbird, a tenant is a root organization, that shares common access to the content repository with specific privileges to the software instance. Sunbird allows you to set up a hierarchy of organizations for every instance installed. After sucessfully installing Sunbird, the first step is to create the first root organization also called as the tenant organization, followed by creating a heirarchy of organizations under each of it. Root organizations can define their own framework and set preferences like default language and search categories. Sunbird maps each root organization to a concept called a channel. Sunbird allows the instance owner to change the default behavior to channel-based content filtering.

Sunbird adopters can access a global, shared content repository (possibly the EkStep content repository). Sunbird does not limit content discovery to a single channel. However, given the diversity of content across channels, content published in one channel may not always be helpful to the users of other channels. Hence, adopters can choose to mark channels as: 

* Whitelisted: Those channels whose content is best suited for their user's needs and demands. Users can use and explore content across whitelisted channels.

* Blacklisted: Those channels whose content cannot be accessed. Users cannot access any content from blacklisted channels. 

For example, if an adopter whitelists channels X and Y, their users receive content only from channel X and Y. If an adopter blacklists channels X and Y, their users receive content from channels other than from channels X and Y. If an adopter whitelists channels X and Y and blacklists channels Y and Z, their users receive content from (X+Y) minus (Y+Z) = X channel

Once this is configured, Sunbird applies a filter for the content that is made available to users of that organization. Users can only search or navigate to content from the chosen channels.

## Taskflow

To enable filtering of content for a channel, set the following environment variables at the time of deployment. 


|S No. | Variable Name | Description | Purpose | Default Value | Path |
|------|---------------|-------------|---------|---------------|------|
| 1 | sunbird_content_service_whitelisted_channels | Configures the channels whose content can be displayed in the Sunbird instance. This is a comma-separated string ex:"A,B,C”where A,B,C are different channels | Variable is used to whitelist the Channel whose content should be displayed | <blank>  |  Content Service |
| 2 | sunbird_content_service_blacklisted_channels | Configures the channels whose content should not be displayed in the Sunbird instance this is a comma-separated string ex:”X,Y,Z”where X,Y,Z are channels | Variable is used to blacklist the channel whose content should not be displayed | <blank> | Content Service |  
| 3 | sunbird_content_filter_framework_whitelist | Configures the framework whose content can be displayed in the portal. This is a comma-separated string ex:”A,B,C”where A,B,C are different framework ID | Variable is used to whitelist the framework whose content should be displayed | <blank> | Content Service |
| 4 | sunbird_content_filter_framework_blacklist | Configures the framework whose content should not be displayed in the portal this is a comma-separated string ex:”X,Y,Z”where X,Y,Z are framework ID| Variable is used to blacklist the framework whose content should not be displayed|<blank> |Content Service |
| 5 | sunbird_content_filter_contenttype_whitelist | Configures the contentType whose content can be displayed in the portal. This is a comma-separated string ex:”A,B,C”where A,B,C are different contentType | Variable is used to whitelist the contentType whose content should be displayed | <blank> | Content Service |
| 6 | sunbird_content_filter_contenttype_blacklist | Configures the contentType whose content should not be displayed in the portal this is a comma-separated string ex:”X,Y,Z”where X,Y,Z are contentType  | Variable is used to blacklist the contentType whose content should not be displayed | <blank> |Content Service| 
| 7 | sunbird_content_filter_resourcetype_whitelist | Configures the resourceType whose content can be displayed in the portal. This is a comma-separated string ex:”A,B,C”where A,B,C are different resourceType |Variable is used to whitelist the resourceType whose content should be displayed |<blank> / Collection, Lesson Plan, Course, Book, Story, Read, | Content Service|
| 8 | sunbird_content_filter_resourcetype_blacklist | Configures the resourceType whose content should not be displayed in the portal this is a comma-separated string ex:”X,Y,Z”where X,Y,Z are resourceType | Variable is used to blacklist the resourceType whose content should not be displayed | <blank> | Content Service
| 9 | sunbird_content_filter_mimetype_whitelist | Configures the mimeType whose content can be displayed in the portal. This is a comma-separated string ex:”A,B,C”where A,B,C are different mimeType | Variable is used to whitelist the mimeType whose content should be displayed | <blank> | Content Service |
| 10 | sunbird_content_filter_mimetype_blacklist | Configures the mimeType whose content should not be displayed in the portal this is a comma-separated string ex:”X,Y,Z”where X,Y,Z are mimeType | Variable is used to blacklist the mimeType whose content should not be displayed | <blank> | Content Service |

For details, refer to the **Configuration Variables page**.

## Concepts Covered

**Tenant** - A tenant is a root organization that shares common access with specific privileges to the software instance

**Multi-tenant** - Multi-tenancy is an architecture in which a single instance of a software application serves multiple customers. Each customer is called a tenant. 

**Channel** - A channel is the identifier that makes the tenant unique. 
