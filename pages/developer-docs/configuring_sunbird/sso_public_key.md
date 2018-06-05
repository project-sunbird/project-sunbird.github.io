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

<table>
  <tr>
    <th style="width:35%;">Step
    </th>
    <th style="width:65%;">Screen
    </th>
  </tr>
  
  <tr>
    <td> 1. Enter your credentials to login into Keycloak admin console<br>
    <br>2. Click the login button
     </td>
      <td><img src="pages\developer-docs\configuring_sunbird\images\keycloak_login.png"></td>
  </tr>
    <tr>
    <td> 3. Click on the dropdown and select appropriate realm<br>
<b>Note:</b> By default the master realm is selected<br>
4.  Click on the "Keys" tab in the menu bar
     </td>
      <td><img src="pages\developer-docs\configuring_sunbird\images\realm_select.png"></td>
  </tr>
     <tr>
    <td>
        5. Click on the public key button <br>
        <b>Note:</b> A pop up opens up
    </td>
    <td>
      <img src="pages\developer-docs\configuring_sunbird\images\public_key_btn.png">
      </td>
  </tr>
  <tr>
    <td> 6. Copy the string and paste in your environment variable <br>
     </td>
      <td><img src="pages\developer-docs\configuring_sunbird\images\copy_token.png"></td>
  </tr>
  </table>
