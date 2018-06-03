---
type: landing
directory: developer-docs/configuring_sunbird/
title: Setting up SSO Public Key
page_title: Setting up SSO Public Key 
description: How to set up the SSO public key
published: true
allowSearch: false
---
SSO public key setup is required for user authentication. If proper value is not set inside system environment variable then non of the authorized api call will work.  To do the Sso public key setup follow below steps.

1.  Login to keycloak with admin account.
2.  Select the realm (default selected realm will be master), if application is using some other realm then select that one. 
3.  On top you will get a tab for "Keys"
4.  Select keys tab and then on tabular format you will get Public key option , click this button, it will open a popup , copy that value and set it into ENV.

 Screen shot:
   

<img src="https://github.com/ekstep/Common-Design/blob/master/images/sunbird/Sso_Screen-1.png"/>

<img src="https://github.com/ekstep/Common-Design/blob/master/images/sunbird/sso-screen-2.png"/>
