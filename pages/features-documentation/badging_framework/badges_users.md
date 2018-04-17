---
type: landing
directory: features-documentation/badging_framework
title: Issuing Badges to Users
page_title: Issuing Badges to Users
description: Details on the procedure of issuing badges to users on Sunbird
keywords: 'badges, assign badges, create badges, issue badges, mark as recommneded, mark as popular, mark as official'
published: true
allowSearch: true
---

## Overview
Badging is a mechanism commonly used to recognize people with a set of skills and accomplishments. Badges can represent an award, a certificate, an endorsement or an authorization.
Organizations can assign badges to users for:
- Completing prescribed courses on DIKSHA
- Using DIKSHA in classrooms for prescribed or more duration of time
- Creating content on DIKSHA which has increased consumption rate
- Replicating awards and certifications received offline

This documentation details the procedure on how to assign badges to users. Currently, the process of assigning badges is a technical process using API references.

## Issuing Badges to Users
To issue badges to user, <br>1. Create the required badges. To read more on creating badges on DIKSHA, refer Creating Badges <br>2. Make a list the issuer ID and badge ID of each badge created <br>3. Use the Create Badge Assertion API, and issue the created badges for each user. For each badge, it is mandatory to provide the following details: <br>&emsp;a) Issuer ID <br>&emsp;b) Badge ID <br>&emsp;c) Profile ID of the user
