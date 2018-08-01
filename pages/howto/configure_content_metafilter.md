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

## Overview

Multiple tenants can share content from EkStep content repository using the Sunbird platform. In Sunbird, a tenant is a root organisation that shares a common access with specific privileges to the software instance. Root organizations can define their own frameworks and set preferences like default language and default search categories. Sunbird maps each root organization to a concept known as a channel. Sunbird allows an instance owner to change the default behavior to content meta based filtering for filtering content based on content meta attributes like channels, framework, contentType, mimeType and resourceType.
  
### Prerequisites

<This section should contain information about what should have been done before a user can proceed to undertake this task.>

### Scenario
 A Sunbird adopter can configure content filters to consume content from preferred sources. Once this configuration is defined, the filter is applied for content consumption. For example:
- An organization administrator whitelists channels X and Y, then they receive content only from the channel X and Y. 
- An organization administrator blacklists channels X and Y, then they receive content from channels apart from X and Y. 
- An organization administrator whitelists X and Y channels and blacklists Y and Z channels, then they receive content from (X+Y) -(Y+Z) = X channel.

Meta filters can be applied to the following:
- Channels 
- Framework 
- ResourceType 
- MimeType 
- ContentType 

Organization administrator can blacklist or whitelist any one or all of these categories. For example for a combination of meta filter configuration: 
An administrator whitelists channels and contentType and blacklists framework, resourceType and mimeType. As a result of applying these filters, they will receive content from the whitelisted categories, channels and contentType, and will not receive content from blacklisted categories framework, resourceType, and mimeType.


### Configured Environment Variables
---|S.NO|  Environment Variable | Sample Value |---

| 1 | sunbird_content_filter_framework_whitelist | 
| 2 | sunbird_content_filter_framework_blacklist | 
| 3 | sunbird_content_filter_contenttype_whitelist | =NCF,01231711180382208027
| 4 | sunbird_content_filter_contenttype_blacklist | =NCF,01231711180382208027
| 5 | sunbird_content_filter_resourcetype_whitelist |  = ”Learn”, “Read”
| 6 | sunbird_content_filter_resourcetype_blacklist |  = "application/vnd.ekstep.h5p-archive"
| 7 | sunbird_content_filter_mimetype_whitelist | =Story
| 8 | sunbird_content_filter_mimetype_blacklist | =“application/vnd.ekstep.content-collection”
| 9 | sunbird_content_service_whitelisted_channels | =b00bc992ef25f1a9a8d63291e20efc8d
| 9 | sunbird_content_service_blacklisted_channels | =012345678901210240402

The values assigned in environment variables are comma separated.

When values are assigned to the environment variables, then a filter query result is generated based on these filter values. 

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

