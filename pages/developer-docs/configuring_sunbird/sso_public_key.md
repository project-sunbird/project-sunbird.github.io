---
type: landing
directory: developer-docs/configuring_sunbird/
title: Setting up SSO Public Key
page_title: Setting up SSO Public Key 
description: How to set up the SSO public key
published: true
allowSearch: false
---
## Overview

Single Sign On (SSO) occurs when a user logs in to one application and is then signed in to other applications automatically, regardless of the platform, technology, or domain used. Single SignOn usually makes use of a central service which orchestrates the single sign on between multiple applications.

To provide user access and enable API operations, you need to set the SSO authentication key values in the environment correctly.

## Process for Setting Up the SSO public key

The following process guides you in setting up the SSO authentication key:

1.  Login to Keycloak with admin account.
2.  Select the realm (default selected realm will be master), if you intend to use some other realm then select that 
3.  Click on the "Keys" tab
4.  Click on the Public key button
5. A popup opens up
6. Copy the value which looks like this 

<table>
  <tr>
    <th style="width:35%;">Step
    </th>
    <th style="width:65%;">Screen
    </th>
  </tr>
  
  <tr>
    <td> 1. Login to Key cloak with admin account
     </td>
      <td><img src="pages\developer-docs\configuring_sunbird\images\keycloak_login.png"></td>
  </tr>
    <tr>
    <td> 2. Select the realm (default selected realm will be master), if you intend to use some other realm then select that <br>
     3. Click on the "Keys" tab
     </td>
      <td><img src="pages\developer-docs\configuring_sunbird\images\realm_select.png"></td>
  </tr>
     <tr>
    <td>4.  Click on the Public key button<br>
        5. A popup opens up<br>
    </td>
    <td>
      <img src="pages\developer-docs\configuring_sunbird\images\public_key_btn.png">
      </td>
  </tr>
  <tr>
    <td> 6. Copy the value which looks like this <br>
     </td>
      <td><img src="pages\developer-docs\configuring_sunbird\images\copy_token.png"></td>
  </tr>
  </table>
