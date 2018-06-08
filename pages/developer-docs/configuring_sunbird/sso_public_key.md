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

Single SignOn is a user authentication service and is usually known as (SSO). It is used when you log in to an application once, you are automatically signed in to other related applications. It is very helpful in enriching the user experience where user has to login multiple times to get access across the related applications.

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
    <td> 1. Enter your credentials to login into Keycloak admin console<br>
    <br>2. Click the login button
     </td>
      <td><img src="pages\developer-docs\configuring_sunbird\images\keycloak_login.png"></td>
  </tr>
    <tr>
    <td> On the left corner of your screen, you see a realm selector drop down 
    3. Click on the <b>dropdown</b> and select appropriate realm<br>
<b>Note:</b> Master realm is selected by default.<br>
4.  Click on the "Keys" tab in the menu bar
     </td>
      <td><img src="pages\developer-docs\configuring_sunbird\images\realm_select.png"></td>
  </tr>
      <tr>
    <td> On the menu bar search for <b>Keys tab</b> <br>
5.  Click on the <b>Keys tab</b>
     </td>
      <td><img src="pages\developer-docs\configuring_sunbird\images\realm_select.png"></td>
  </tr>
     <tr>
    <td> In the table, search for <b>public key</b> button
        5. Click on the public key button <br>
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
