---
directory: developer-docs/configuring_sunbird
title: Import External Content 
page_title: Import External Content
description: Details on how to configure Sunbird domain to whitelist external domains
keywords: whitelist, upload external link, upload external video, upload other than youtube
published: true
type: landing
allowSearch: true
---


## Overview
Sunbird platform allows adopters/users to upload content from external sources. Using the option, an adopter can upload the content that is already available with them and the content from the external sources to sunbird content library. They can upload external content from different websites such as youtube, Dailymotion and so on. This section explains the procedure of enabling a domain to host content from external sources. 

### Prerequisite
Ensure the following to enable a domain to host content from external links:
- You are logged in as the organization administrator
- You have access to set the environment variables

### Checklist before Whitelisting a Domain
<Will be taken care by legal team>

### Configuring the Domain
To enable domains to host content from external links, an admin needs to configure an enviroenment variable.
You must set the<b>sunbird_extcont_whitelisted_domains<b>variable to whitelist a external website.

For an example, if you need to allow a domain to host content from an external source "dailymotion.com", you need to configure the domain in the below format:
<b>SUNBIRD_EXTCONT_WHITELISTED_DOMAINS: env.sunbird_extcont_whitelisted_domains || 'dailymotion.com'<b>

Once the domain is configured in this manner, it will allow content creators of the organisation to upload content from external sources.
To know <b>how to upload external content to Sunbird content library<b>, refer to the [Upload Content to Sunbird](http://www.sunbird.org/features-documentation/upload/){:target="_blank"}section.

