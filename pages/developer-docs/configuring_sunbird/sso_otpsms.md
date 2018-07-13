---
type: landing
directory: developer-docs/configuring_sunbird
title: Configuration for OTP based SMS
page_title: Configuration for OTP based SMS 
description: How to set up the OTP for SMS
published: true
allowSearch: true
keywords: SSO, single sign on, single signon, singlesignon, sign in, SMS, sms, otp, OTP, Keycloak
---

### Please follow below steps to do SMS text configuration in keycloak.

<table>

<tr>
<th style="width:35%;">Step</th>
<th style="width:65%;">Screen</th>
 </tr>
  
<tr>
  <td>
1. Enter your <b>Username or email</b> and <b>Password</b><br>Click <b>Log in</b> to log into the Keycloak admin console
</td>
<td><img src="https://github.com/project-sunbird/project-sunbird.github.io/blob/dev/pages/developer-docs/configuring_sunbird/images/keycloak_login.png"></td>
</tr>
 
<tr>
  <td> 
2. Click the <b>Realm Selector Dropdown</b> from the left corner of your screen and select appropriate realm <br>
<b>Note:</b> The <b>Master</b> realm is selected by default.
	</td>
	<td><img src="https://github.com/project-sunbird/project-sunbird.github.io/blob/dev/pages/developer-docs/configuring_sunbird/images/realm_select.png"></td>
	</tr>
	
  <tr>
  <td> 
  3. Select <b>Authentication</b> under configure section.
  </td>
  <td><img src="https://github.com/manzarul/project-sunbird.github.io/blob/dev/img/keycloack/SelectAuthenticationsection.png"></td>
  </tr>
  
  <tr>
  <td> 
  4. Under <b>flows tab </b> select "Reset Credentials With SMS OTP" from drop down.
</td>
<td>
  <img src="https://github.com/manzarul/project-sunbird.github.io/blob/dev/img/keycloack/SelectFlows.png">
  </td>
  </tr>

<tr>
<td> 
  5.Select "Config" as <b>Actions</b> for "SMS Authentication (Reset credentials with SMS OTP)".
  </td>
  <td><img src="https://github.com/manzarul/project-sunbird.github.io/blob/dev/img/keycloack/SelectConfig.png"></td>
  </tr>

<tr>
<td> 
	  6.Change the text message "Template of text to send to the user".
  </td>
  <td><img src="https://github.com/manzarul/project-sunbird.github.io/blob/dev/img/keycloack/ChangeSMSOTP.png"></td>
  </tr>
  
</table>

