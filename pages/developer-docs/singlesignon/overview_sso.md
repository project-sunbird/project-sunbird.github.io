---
type: landing
directory: developer-docs/singlesignon
title: Onboarding and Single Sign On
page_title: Onboarding and Single Sign On
description: Overview of single sign on process and user onboarding
published: true
allowSearch: true
---

Single sign on property is an authentication service enabling users to use one set of login credentials, i.e, user name and password, to access multiple applications. Sunbird platform allows signed on users on integrated systems to effortlessly navigate through all instances of the portal simply by sharing trusted login status. 

This philosophy of access is built around a premise of trust between Sunbird and integrated systems. When an authenticated user on integrated system navigates to Sunbird, the integrated system redirects the browser and sends the details of the user to the portal. The sender’s private key is used to sign this data, to allow Sunbird to trust the incoming data and allow the user to sign in. This ensures that for integrating systems, the only change is in the user being re-directed to the portal ensuring that there are no interruptions on their internal authentication implementation.


### Prerequisites 

Ensure the following before technical integration:

* User is registered on Sunbird

* User’s public key is shared with Sunbird

* ‘iss’ is shared with user
