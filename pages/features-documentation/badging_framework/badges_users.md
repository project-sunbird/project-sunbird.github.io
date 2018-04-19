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
Awarding Badges to people is a mechanism commonly used to recognize their skills and accomplishments. Badges can represent an award, a certificate, an endorsement or an authorization.
Organizations can assign badges to users for:
- Completing prescribed courses 
- Using Sunbird in classrooms for prescribed or more duration of time
- Creating content that is highly used
- Awards and certifications received offline

Currently, badges are issued to users using APIs.

## Issuing Badges to Users
<br>1. Create the required badges. <br> **Note:** For details, refer to <a href="features-documentation/badging_framework/creating_badges/" target="_blank"> Creating Badges</a> <br>2. Make a list of the issuer ID and badge ID of each badge created <br>3. Use the <a href ="http://www.sunbird.org/apis/badgingframeworkapi/#operation/BadgeAssertionCreatePost/" target="_blank"> Create Badge Assertion API</a>, and issue the created badges to each user. For each badge, it is mandatory to provide the following details: <br>&emsp;a) Issuer ID <br>&emsp;b) Badge ID <br>&emsp;c) Profile ID of the user
