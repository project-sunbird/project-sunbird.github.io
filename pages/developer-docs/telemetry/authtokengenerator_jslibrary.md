---
type: landing
directory: developer-docs/telemetry
title: AuthToken Generator JS Library
page_title: AuthToken generator JS library
description: AuthToken generator JS library
published: true
allowSearch: true
---
## Methods

The following API methods are provided by the AuthToken generator library

### Generate new AuthToken

<pre>
generate: function(key, secret){}
</pre> 

Request Arguments:

<pre>
key- "key" of the JWT Credential For ex: '398e54e888da42f8d089je28c298o42b'
secret- "secret" of the JWT Credential For ex: '07c6e2t1rb92987fnrd705jkk8582p9e'
</pre>

### Regenerate Expired AuthToken

<pre>
refresh: function(oldAuthToken) { }
</pre>

## How to generate authorization credentials

This section details the procedure to generate the AuthToken and secret key that is required to access any APIs and to configure the standalone telemetry JS library.

### Process

<img src="pages/developer-docs/installation/images/telemetry_service2.png">

### Prerequisites

* Access to the Ekstep Community portal

### Procedure

<table>
  <tr>
    <td style="width:35%;">Step</td>
    <td style="width:65%;">Screen</td>
  </tr>
  <tr>
    <td><strong>Sign In</strong> <br>1. Sign in to  Ekstep QA portal (https://qa.ekstep.in) <br>2. Go to Resources > Developers <br> <strong>Note:</strong> If you have already created QA credentials and tested Sunbird, and are looking at acquiring production credentials, repeat the same steps on visit <a href="https://community.ekstep.in/api-credentials" target="_blank">https://community.ekstep.in/api-credentials</a> instead.</td>
    <td><img src="pages/developer-docs/installation/images/telemetry_service3.png"></td>
  </tr>
  <tr>
    <td><strong>Request API Access</strong> <br>1. Select <strong>API credentials</strong> <br>2. The <strong>Manage Credentials</strong> page is displayed
<br>3. Click <strong>Request API access</strong> to request access for available API groups</td>
    <td><img src="pages/developer-docs/installation/images/telemetry_service4.png"></td>
  </tr>
  <tr>
    <td><li>On successful submission of the API access request, the portal admin is notified. The admin either approves or rejects the request</li> <br><li> You are notified of the admin’s action through a mail to your registered mail ID </li> <br> <li>You can also view the action taken, by clicking the notification icon on the portal</li></td>
    <td><img src="pages/developer-docs/installation/images/telemetry_service5.png"></td>
  </tr>
  <tr>
    <td><strong>Generate New Credentials</strong> <br>1. Enter the username <br>2. Enter notes, if any <br>3. The API groups that can be accessed with the created credentials are listed here <br>4. Click <strong>Generate credentials</strong> to generate key and secret</td>
    <td><img src="pages/developer-docs/installation/images/telemetry_service6.png"></td>
  </tr>
  <tr>
    <td><strong>Note the Credentials</strong> <br>1. Ensure to copy the key and secret and confirm the same <br>2. Click <strong>Close</strong> after copying the Key and Secret
</td>
    <td><img src="pages/developer-docs/installation/images/telemetry_service7.png"></td>
  </tr>
</table>
