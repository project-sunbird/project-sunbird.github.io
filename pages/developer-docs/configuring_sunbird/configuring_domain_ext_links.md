---
directory: developer-docs
title: Developer Documentation 
page_title: Developer Documentation
description: Developer Documentation Overview
keywords: 'Installation, pre requisite, extending sunbird'
published: true
type: landing
allowSearch: true
---
## Scenario

### Version

###Intended Audience

## Prerequisites

## Overview

## Taskflow

## Concepts Covered
=======
directory: developer-docs/configuring_sunbird
title: Configuring Domain for External Links
page_title: Configuring Domain for External Links 
description: Details on how to configure Sunbird domain to whitelist external domains
keywords: whitelist, upload external link, upload external video, upload other than youtube
published: true
allowSearch: true
---

## Overview
Content created or available offline can be uploaded on Sunbird. Organization administrators can upload content available on external sources such as dailymotion.com etc. on Sunbird. This ousection explains the procedure of how to configure domains to allow hosting content from such external sources. 

### Prerequisite
To configure domains to host external links, ensure the following:
- You are logged in as the organization administrator
- You have access to set the environment variables

###  Things to consider before whitelisting a domain
<Will be taken care by legal team>

### Configuring the Domain
You can set the whitelisted domain in the environment variables of Sunbird to the variable 'sunbird_extcont_whitelisted_domains'.
Example: sunbird_extcont_whitelisted_domains='youtube.com,youtu.be,dailymotion.com', where youtube.com and youtu.be are default whitelisted domains, and dailymotion.com is the newly whitelisted domain. 

