---
type: landing
directory: developer-docs/configuring_sunbird
title: Configure OTP based SMS
page_title: Configure OTP based SMS 
description: How to set up the OTP for SMS
published: false
allowSearch: false
keywords: SSO, single sign on, single signon, singlesignon, sign in, SMS, sms, otp, OTP, Keycloak
---

## Overview
An OTP sent via SMS to the user's registered mobile number is one of the most secure and efficient ways to authenticate users for specific transactions. For example, if a user wants to reset the password, configure the text message to be sent via SMS along with the generated OTP in Keycloak. This page provides details on configuring text messages

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
3. Go to <b>Configure </b> section, select <b>Authentication</b> .
  </td>
  <td><img src="https://github.com/manzarul/project-sunbird.github.io/blob/dev/img/Selectauthenticationsection.png"></td>
  </tr>
  
  <tr>
  <td> 
	  4. Go to <b>Flows </b> tab, select <b>Reset Credentials With SMS OTP</b> from the drop-down.
</td>
<td>
  <img src="https://github.com/manzarul/project-sunbird.github.io/blob/dev/img/selectflows.png">
  </td>
  </tr>

<tr>
<td> 
	5.Select <b>Actions</b> as <i>Config </i> for <b> SMS Authentication (Reset credentials with SMS OTP) </b>.
  </td>
  <td><img src="https://github.com/manzarul/project-sunbird.github.io/blob/dev/img/selectconfig.png"></td>
  </tr>

<tr>
<td> 
	6.Change the text for <b> Template of text to send to the user </b> with the actual text of the message to be sent to users while sending the OTP SMS.
  </td>
  <td><img src="https://github.com/manzarul/project-sunbird.github.io/blob/dev/img/changesmsotp.png"></td>
  </tr>
  
</table>

