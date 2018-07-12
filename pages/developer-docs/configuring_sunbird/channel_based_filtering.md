---
type: landing
directory: developer-docs/configuring_sunbird
title: Channel Based Content Filtering
page_title: Channel Based Content Filtering 
description: Channel Based Content Filtering
published: true
allowSearch: true
---
## Scenario

Multiple tenants can share content from the EkStep content repository using the Sunbird platform. In Sunbird, a tenant is a root organisation who shares a common access with specific privileges to the software instance. Root orgs can define their own frameworks and set preferences like default language and default search categories. Sunbird maps each root org to a concept called a channel. Sunbird allows an instance owner to change the default behavior to channel-based content filtering for filtering content based on channel.

## Version

This feature is applicable for Sunbird 1.7.

## Intended Audience

Instance Admin

## Prerequisite

Prerequisite to access  the shared EkStep content repository:

* Get Sunbird API key

* Create Root org

* Create Users

* Configure the framework and taxonomy

## Overview and Concept

Content discovery in Sunbird is not limited to a single channel. Sunbird adopters can access to a global, shared content repository. However, given the diversity of content across channels, content published in one channel may not always be helpful to the users of other channels. A Sunbird adopter can configure the list of channels from which it would like to consume content. Once this configuration is defined, a filter will be applied for content consumption. Only content from the configured channels will be available in Sunbird through search or navigation. A tenant can blacklist channels as well. In that case, they will not receive any content from the channels that are blacklisted by them.

As an example: If an adopter whitelists channels X and Y, they will receive content only from the channel X and Y. If  they blacklists channels X and Y, they will receive content other channels apart from X and Y. If they whitelists X and Y channels and blacklists Y and Z channels, they will receive content from (X+Y) (Y+Z) = X channel

## Taskflow

This configuration is a deployment time configuration. Being a Sunbird adopter, you need to set environment variable to enable channel based content filter. 

**Variables for whitelisting and blacklisting channels** to enable the channel-based content filtering:

	 	 	 	

<table>
  <tr>
    <td>S No.</td>
    <td>Variable Name</td>
    <td>Description</td>
    <td>Purpose</td>
    <td>Default Value</td>
    <td>Path</td>
  </tr>
  <tr>
    <td>1</td>
    <td>sunbird_content_service_whitelisted_channels</td>
    <td>Configures the channels whose content can be displayed in the portal. This is a comma-separated string ex:"A,B,C”where A,B,C are different channels</td>
    <td>Variable is used to whitelist the Channel whose content should be displayed</td>
    <td><blank></td>
    <td>Content Service</td>
  </tr>
  <tr>
    <td>2</td>
    <td>sunbird_content_service_blacklisted_channels</td>
    <td>Configures the channels whose content should not be displayed in the portal this is a comma-separated string ex:”X,Y,Z”where X,Y,Z are channels</td>
    <td>Variable is used to blacklist the channel whose content should not be displayed</td>
    <td><blank></td>
    <td>Content Service</td>
  </tr>
</table>


For more information, refer to the **Configuration Variables page**.

## Glossary

**Tenant** - A tenant is a root org who share a common access with specific privileges to the software instance.

**Multi-tenant** - Multi-tenancy is an architecture in which a single instance of a software application serves multiple customers. Each customer is called a tenant. 

**Channel** - A channel is a tenant on the platform which can define its own frameworks and set preferences like default language and default search categories. 

