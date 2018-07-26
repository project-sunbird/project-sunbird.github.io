---
type: landing
directory: howto
title: How do i configure filters for meta tags provided to content  
page_title: How do I Configure Filters for Meta Tags provided to Content 
description: Describes how to configure filters that are used for the metadata attributed to content 
keywords: 'How to, How do I, create user, user accounts, setup, metadata, filetrs'
published: true
allowSearch: true
---

## Sample Scenario

Multiple tenants can share content from the EkStep content repository using the Sunbird platform. In Sunbird, a tenant is a root organisation who shares a common access with specific privileges to the software instance. Root orgs can define their own frameworks and set preferences like default language and default search categories. Sunbird maps each root org to a concept called a channel. Sunbird allows an instance owner to change the default behavior to content meta based filtering for filtering content based on content meta attributes like channels, framework, contentType, mimeType and resourceType.
  
## Prerequisites

<This section should contain information about what should have been done before a user can proceed to undertake this task.>

## Overview

<This section should contain information about why the task needs to be done, when, and what the task is about.> 
 A Sunbird adopter can configure the list of ‘content meta filters’ from which it would like to consume content. Once this configuration is defined, a filter will be applied for content consumption. In that case, they will not receive any content from the channels that are blacklisted by them.

As an example for single configuration: 
If an adopter whitelists channels X and Y, they will receive content only from the channel X and Y. 
If they blacklists channels X and Y, they will receive content other channels apart from X and Y. 
If they whitelists X and Y channels and blacklists Y and Z channels, they will receive content from (X+Y) -(Y+Z) = X channel.

Example for all whitelisted content meta filter configuration: 
If an adopter whitelists 
channels A, B, C 
framework E, F, 
resourceType G, H, I, 
mimeType J,K,L and 
contentType M,N,O, 

then they will receive content only from the whitelisted channels, framework, resourceType and mimeType and contentType.

Example for all blacklisted content meta filter configuration: 
If an adopter blacklists 
channels A, B, 
framework E, F 
resourceType G 
mimeType J,K,L and 
contentType M,N,O 

then they will not receive content from the blacklisted channels, framework, resourceType, mimeType and contentType.

Example for combination of meta filter configuration: 
If an adopter whitelists 
channels and 
contentType
And blacklists 
framework, 
resourceType and
mimeType 

then they will receive the content from whitelisted channels and contentType, and will not receive content from blacklisted framework, resourceType and mimeType.


## Taskflows
<This section should contain how the task should be performed in a sequence of steps.>

The following variables are configured environment variables

sunbird_content_filter_framework_whitelist
sunbird_content_filter_framework_blacklist
sunbird_content_filter_contenttype_whitelist
sunbird_content_filter_contenttype_blacklist
sunbird_content_filter_resourcetype_whitelist
sunbird_content_filter_resourcetype_blacklist
sunbird_content_filter_mimetype_whitelist
sunbird_content_filter_mimetype_blacklist
sunbird_content_service_whitelisted_channels
Sunbird_content_service_blacklisted_channels

Example of the environment variable configuration:

sunbird_content_service_whitelisted_channels =b00bc992ef25f1a9a8d63291e20efc8d
sunbird_content_service_blacklisted_channels =012345678901210240402
sunbird_content_service_whitelisted_framework =NCF,01231711180382208027
sunbird_content_service_blacklisted_framework =012315809814749184151,FWATMPT1
sunbird_content_service_whitelisted_contenttype = “Resource”, “Plugin”
sunbird_content_service_blacklisted_contenttype=Story
Sunbird_content_filter_mimetype_whitelist = “application/vnd.ekstep.content-collection”,
Sunbird_content_filter_mimetype_blacklist = “application/vnd.ekstep.ecml-archive”
Sunbird_content_filter_resourcetype_whitelist = ”Learn”, “Read”
sunbird_content_filter_resourcetype_blacklist = "application/vnd.ekstep.h5p-archive"

The values assigned in environment variables are comma separated.

If the values are assigned to the above variables, then a filter query is generated based on the filter values. There are whitelisted and blacklisted types for each meta filter. If whitelisted values are configured, then the content from the whitelisted meta filters are only displayed. 
If blacklist values are defined then, those contents are not displayed.

An Object of the filters is generated with the blacklist and whitelist configurations of meta filter and applied for content consumption.


The values of available content are:

1.Content type:
Resource,
Asset,
Collection,
Course,
LessonPlan

2. Resource type:
Collection,
Lesson Plan,
Course,
Book, Story,
Read,

3. MimeType
application/pdf,
video/mp4,
video/x-youtube,
video/youtube,
application/vnd.ekstep.html-archive,
application/epub,
application/vnd.ekstep.h5p-archive,
video/webm,
text/x-url

4. Channels
ekstep.in
0124758418460180480
0124758449502453761

5. Framework
NCF
NCFCOPY

Variables for whitelisting and blacklisting meta filters to enable the content meta filtering:


<table>
<thead>
    <tr>
      <th>S No.</th>
      <th>Variable Name</th>
      <th>Description</th>
      <th>Purpose</th>
      <th>Default Value</th>
      <th>Path</th>
    </tr>
  </thead>
  <tbody>
<tr>
      <td>1</td>
      <td>sunbird_content_service_whitelisted_channels</td>
      <td>Configures the channels whose content can be displayed in the portal. This is a comma-separated string ex:”A,B,C”where A,B,C are different channel id</td>
      <td>Variable is used to whitelist the Channel whose content should be displayed</td>
      <td><blank></td>
      <td>Content Service</td>
    </tr>
    <tr>
      <td>2</td>
      <td>sunbird_content_service_blacklisted_channels</td>
      <td>Configures the channels whose content should not be displayed in the portal this is a comma-separated string ex:”X,Y,Z”where X,Y,Z are channel ids</td>
      <td>Variable is used to whitelist the Channel whose content should be displayed</td>
      <td><blank></td>
      <td>Content Service</td>
    </tr>
    <tr>
      <td>3</td>
      <td>sunbird_content_filter_framework_whitelist</td>
      <td>Configures the framework whose content can be displayed in the portal. This is a comma-separated string ex:”A,B,C”where A,B,C are different framework id</td>
      <td>Variable is used to whitelist the framework whose content should be displayed</td>
      <td><blank></td>
      <td>Content Service</td>
    </tr>
    <tr>
      <td>4</td>
      <td>sunbird_content_filter_framework_blacklist</td>
      <td>Configures the framework whose content should not be displayed in the portal this is a comma-separated string ex:”X,Y,Z”where X,Y,Z are framework id</td>
      <td>Variable is used to blacklist the framework whose content should not be displayed</td>
      <td><blank></td>
      <td>Content Service</td>
    </tr>
     <tr>
      <td>5</td>
      <td>sunbird_content_filter_contenttype_whitelist</td>
      <td>Configures the contentType whose content can be displayed in the portal. This is a comma-separated string ex:”A,B,C”where A,B,C are different contentType</td>
      <td>Variable is used to whitelist the contentType whose content should be displayed</td>
      <td><blank></td>
      <td>Content Service</td>
    </tr>
     <tr>
      <td>6</td>
      <td>sunbird_content_filter_contenttype_blacklist</td>
      <td>Configures the contentType whose content should not be displayed in the portal this is a comma-separated string ex:”X,Y,Z”where X,Y,Z are contentType</td>
      <td>Variable is used to blacklist the contentType whose content should be displayed</td>
      <td><blank></td>
      <td>Content Service</td>
    </tr>
    <tr>
      <td>7</td>
      <td>sunbird_content_filter_resourcetype_whitelist</td>
      <td>Configures the resourceType whose content can be displayed in the portal. This is a comma-separated string ex:”A,B,C”where A,B,C are different resourceType</td>
      <td>Variable is used to whitelist the resourceType whose content should be displayed</td>
      <td><blank></td>
      <td>Content Service</td>
    </tr>
    <tr>
      <td>8</td>
      <td>sunbird_content_filter_resourcetype_blacklist</td>
      <td>Configures the resourceType whose content should not be displayed in the portal this is a comma-separated string ex:”X,Y,Z”where X,Y,Z are resourceType</td>
      <td>Variable is used to blacklist the resourceType whose content should be displayed</td>
      <td><blank></td>
      <td>Content Service</td>
    </tr>
     <tr>
      <td>9</td>
      <td>sunbird_content_filter_mimetype_whitelist</td>
      <td>Configures the mimeType whose content can be displayed in the portal. This is a comma-separated string ex:”A,B,C”where A,B,C are different mimeType</td>
      <td>Variable is used to whitelist the mimeType whose content should be displayed</td>
      <td><blank></td>
      <td>Content Service</td>
    </tr>
     <tr>
      <td>10</td>
      <td>sunbird_content_filter_mimetype_blacklist</td>
      <td>Configures the mimeType whose content should not be displayed in the portal this is a comma-separated string ex:”X,Y,Z”where X,Y,Z are mimeType</td>
      <td>Variable is used to blacklist the mimeType whose content should not be displayed</td>
      <td><blank></td>
      <td>Content Service</td>
    </tr>
  </tbody>
  </table>

## Concepts Covered

<This section should cover in brief, the concepts covered.>

## Related Topics

<This section should provide links to related topics.>

