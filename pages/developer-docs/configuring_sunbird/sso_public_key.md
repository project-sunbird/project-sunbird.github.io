---
type: landing
directory: developer-docs/configuring_sunbird/
title: Setting up SSO Public Key
page_title: Setting up SSO Public Key 
description: How to set up the SSO public key
published: true
allowSearch: false
keywords: SSO, Keys, Public key, user authentication, single sign on, single signon, singlesignon, sign in
---
## Overview

Sunbird faciltates the use of Single SignOn (SSO) for user authentication. Technically, SSO uses a central service that orchestrates common authentication between multiple applications. Use of the SSO service eliminates the need for users to sign in to individual applications and hence removes separate authentication of the user for each application. It authenticates users only once, for the first time, when they sign in. Subsequently, users are automatically authenticated when they access other related applications. 

To enable and manage user authentication and other related operations, you need to set up the SSO authentication key value in your environment. 

## Setting Up the SSO Public Key

The following process guides you in setting up the SSO authentication key:

<table>
  <tr>
    <th style="width:35%;">Step
    </th>
    <th style="width:65%;">Screen
    </th>
  </tr>
  <tr>
  <td> 1. Enter your <b>Username or email</b> and <b>Password</b><br>
    <br>2. Click <b>Log in<b> to log into the Keycloak admin console
  </td>
      <td><img src="pages\developer-docs\configuring_sunbird\images\keycloak_login.png"></td>
  </tr>
    <tr>
    <td> 
    3. Click the <b>realm selector dropdown</b> from the left corner of your screen and select appropriate realm
      <b>Note:</b> The <b>Master</b> realm is selected by default.<br>
     </td>
      <td><img src="pages\developer-docs\configuring_sunbird\images\realm_select.png"></td>
  </tr>
      <tr>
    <td> 
   4. Click on the <b>Keys tab</b> from the menu bar
     </td>
      <td><img src="pages\developer-docs\configuring_sunbird\images\select_key_tab.png"></td>
  </tr>
     <tr>
    <td> 
      5. Click on the <b>public key</b> button from the table<br>
        <b>Note:</b> A text string is displayed as a popup 
    </td>
    <td>
      <img src="pages\developer-docs\configuring_sunbird\images\public_key_btn.png">
      </td>
  </tr>
  <tr>
    <td> 6. Copy the text string and paste it as a value for the <b>xxxxx</b> environment variable in the <b>../xxxx/setup.md</b> file<br> 
     </td>
      <td><img src="pages\developer-docs\configuring_sunbird\images\copy_token.png"></td>
  </tr>
  </table>
