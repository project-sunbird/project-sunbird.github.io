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

Single SignOn is a centralized user authentication service and is known as (SSO). It provides the capability to authenticate a user once, and be subsequently and automatically authenticated when accessing various other related applications. It eliminates the need to separately authenticate and sign on to individual applications. 

Technically, Single SignOn makes use of a central service which orchestrates the single sign on between multiple applications.

You need to set the SSO authentication key value to provide access to users and enables you to perform the API operations. 

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
  <td> 1. Enter your credentials in the textboxes next to <b>Username or email</b> and <b>Password</b><br>
    <br>2. Click the <b>Log in<b> button to logon to Keycloak admin console
     </td>
      <td><img src="pages\developer-docs\configuring_sunbird\images\keycloak_login.png"></td>
  </tr>
    <tr>
    <td> On the left corner of your screen, you see a realm selector drop down<br>
    3. Click on the <b>dropdown</b> and select appropriate realm<br>
<b>Note:</b> Master realm is selected by default.<br>
     </td>
      <td><img src="pages\developer-docs\configuring_sunbird\images\realm_select.png"></td>
  </tr>
      <tr>
    <td> On the menu bar, search for <b>Keys tab</b> <br>
4.  Click on the <b>Keys tab</b>
     </td>
      <td><img src="pages\developer-docs\configuring_sunbird\images\select_key_tab.png"></td>
  </tr>
     <tr>
    <td> In the table, search for <b>public key</b> button<br>
      5. Click on the <b>public key</b> button <br>
        <b>Note:</b> A popup with a text string gets displayed on your screen
    </td>
    <td>
      <img src="pages\developer-docs\configuring_sunbird\images\public_key_btn.png">
      </td>
  </tr>
  <tr>
    <td> 6. Copy the string and paste it in your environment variable xxxxx which is located at ../xxxx/setup.md<br> 
     </td>
      <td><img src="pages\developer-docs\configuring_sunbird\images\copy_token.png"></td>
  </tr>
  </table>
