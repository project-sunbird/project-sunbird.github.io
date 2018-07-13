---
type: landing
directory: developer-docs/configuring_sunbird
title: Fliter Content for a Channel
page_title: Fliter Content for a Channel 
description: Fliter Content for a Channel
keywords: filter, channel, channel based filtering, content filtering, set up content filtering
published: true
allowSearch: true
---
## Scenario
An organization works in the domain of water conservation and works with multiple NGOs, village panchayats, and district administration authorities in multiple states of India. The organization would like to allow all their stakeholders to have access to the common knowledge repository, and at the same time also allow each stakeholder to independently access content that is specific to the stakeholders. For example, village A in state B is plagued with a problem of industrial effluents depleting the water table at a very rapid pace. The village panchayat needs content with specific solutions. Other states do not require such content. In such a scenario, Sunbird allows content to be filtered for display to a specific group of users for the vilage A.           

### Version

This feature is applicable from Sunbird 1.7.0 onwards

### Intended Audience

The Instance Admin

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
|1 | sunbird_content_service_whitelisted_channels | Configures the channels whose content can be displayed in the Sunbird instance. This is a comma-separated string ex:"A,B,C”where A,B,C are different channels | Variable is used to whitelist the Channel whose content should be displayed |   |  Content Service |
| 2 | sunbird_content_service_blacklisted_channels | Configures the channels whose content should not be displayed in the Sunbird instance this is a comma-separated string ex:”X,Y,Z”where X,Y,Z are channels | Variable is used to blacklist the channel whose content should not be displayed |  | Content Service |  

For details, refer to the **Configuration Variables page**.

## Concepts Covered

**Tenant** - A tenant is a root organization that shares common access with specific privileges to the software instance

**Multi-tenant** - Multi-tenancy is an architecture in which a single instance of a software application serves multiple customers. Each customer is called a tenant. 

**Channel** - A channel is the identifier that makes the tenant unique. 

