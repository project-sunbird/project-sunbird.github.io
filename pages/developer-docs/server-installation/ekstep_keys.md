---
type: landing
directory: developer-docs/server-installation/
title: Prerequisites
page_title: Server Installation Prerequisites
description: Setting up Sunbird on a server
allowSearch: true
---

## Methods

This section details the procedure to generate the AuthToken and secret key that is required to access any APIs

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

### Generate JWT With Bash
Authtoken can be generated using the bash script also, for more details refer blog for this <a href="https://willhaley.com/blog/generate-jwt-with-bash/" target="_blank">https://willhaley.com/blog/generate-jwt-with-bash/</a> 

## Prerequisites
* Browse for <a href="<a href="https://letsencrypt.org/" target="_blank">Ekstep Community Portal</a>
* Login to the portal using your Google or Facebook account
 
## Requesting Access

<table>
  <tr>
    <td style="width:35%;">Step</td>
    <td style="width:65%;">Screen</td>
  </tr>
  <tr>
    <td>Go to Resources > Developers <br> <strong>Note:</strong> If you have already created QA credentials and tested Sunbird, and are looking at acquiring production credentials, repeat the same steps on visit <a href="https://community.ekstep.in/api-credentials" target="_blank">https://community.ekstep.in/api-credentials</a> instead.</td>
    <td><img src="pages/developer-docs/installation/images/telemetry_service3.png"></td>
  </tr>
  <tr>
    <td><strong>Requesting API Access</strong> <br>1. Select <strong>API credentials</strong> <br>2. The <strong>Manage Credentials</strong> page is displayed
<br>3. Click <strong>Request API access</strong> to request access for available API groups</td>
    <td><img src="pages/developer-docs/installation/images/telemetry_service4.png"></td>
  </tr>
  <tr>
    <td><li>On successful submission of the API access request, the portal admin is notified. The admin either approves or rejects the request</li> <br><li> You are notified of the admin’s action through a mail to your registered mail ID </li> <br> <li>You can also view the action taken, by clicking the notification icon on the portal</li></td>
    <td><img src="pages/developer-docs/installation/images/telemetry_service5.png"></td>
  </tr>
  <tr>
    <td><strong>Generating New Credentials</strong> <br>1. Enter the username <br>2. Enter notes, if any <br>3. The API groups that can be accessed with the created credentials are listed here <br>4. Click <strong>Generate credentials</strong> to generate key and secret</td>
    <td><img src="pages/developer-docs/installation/images/telemetry_service6.png"></td>
  </tr>
  <tr>
    <td><strong>Copying the Credentials</strong> <br>1. Ensure to copy the key and secret and confirm the same <br>2. Click <strong>Close</strong> after copying the Key and Secret
</td>
    <td><img src="pages/developer-docs/installation/images/telemetry_service7.png"></td>
  </tr>
</table>
