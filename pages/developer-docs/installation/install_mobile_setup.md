---
type: landing
directory: developer-docs/installation/
title: Mobile App Installation
page_title: Mobile app installation
description: About mobile app
allowSearch: true
---
## Introduction

The Sunbird Mobile app provides mobility to the feature rich learning platform. It provides learners with the flexibility to learn anywhere, anytime and even without an Internet connection. 

## Build APK from Git Repository

<table>
  <tr>
    <th>Step</th>
    <th>Instruction</th>
  </tr>
  <tr>
    <td>1.
    </td>
    <td>Install Android Studio<br><i>Please refer to the official <a href="https://developer.android.com/studio/index.html">Android documentation</a></i> for installation instructions.
    </td>
  </tr>
  <tr>
    <td>2.</td>
    <td>Clone the mobile app source code by executing the below command in console.
    <pre>git clone https://github.com/project-sunbird/sunbird-android</pre></td>
  </tr>
  <tr>
    <td>3.</td>
    <td>Open the cloned project in Android studio. Rename `gradle.properties.example` to `gradle.properties`</td>
  </tr>
  <tr>
    <td>4.</td>
    <td>Replace the application id in app/build.gradle with implementation specific application id. <br>
    <br><b>Note</b>: The application ID for the new build must be unique. Installation on any device fails if two apps are installed with same app ID.
    <br>Example: <br> <code> applicationId: "org.implementation.app" </code> <br> </td>
  </tr>
  <tr>
    <td>5.</td>
    <td>Replace redirect base url <code>REDIRECT_BASE_URL</code> and all other base urls with your respective domain name in build.gradle<br>
  <br>
  Example:
<br>
<pre>
<code>
buildConfigField 'String', 'REDIRECT_BASE_URL', '"(http or https://domain-name)"'
buildConfigField 'String', 'TELEMETRY_BASE_URL', '"(http or https://domain-name)/api/data/v1"'
</code>
</pre>
  </td>
  </tr>
  <tr>
    <td>6.</td>
    <td>Replace the producer id <code>PRODUCER_ID</code> for respective environments in gradle.properties as per the format mentioned below
<pre> <code>
"env.implementation-name.app"
</code> </pre>
</td>
  </tr>
  <tr>
    <td>7.</td>
    <td>Add your keystore details: <code>keystore</code>, <code>keystore_password</code>, <code>key_alias</code> and <code>key_password</code> in <code>gradle.properties</code>.<br> Please refer to the official Android documentation for <a href="https://developer.android.com/studio/publish/app-signing.html#generate-key" target="_blank"> generating a key and keystore</a>.</td>
  </tr>
  <tr>
    <td>8.</td>
    <td>Replace `release_fabric_api_key` in `gradle.properties` with your fabric API Key. Please create an account in <a href="https://get.fabric.io/" target="_blank">fabric.io</a> and register the app to get the API key. </td>
  </tr>
  <tr>
    <td>9.</td>
    <td>Replace PRODUCER_ID, CHANNEL_ID, MOBILE_APP_KEY and MOBILE_APP_SECRET in `gradle.properties` for your dev, release and production build variants</td>
  </tr>
  <tr>
  <td>10.</td>
  <td>Generate the key and secret for mobile_app user using the JWT token of the mobile_admin user. The JWT token for mobile_admin user will be printed on the application server folder /where-you-cloned-sunbird-devops-repo/sunbird-devops/deploy/logs/apis.log.<br>Please invoke the below API to generate the key and secret for the mobile app:
  <pre> <code>
   curl -X POST \
     &lt;your-sunbird-base-url&gt;/api/api-manager/v1/consumer/mobile_app/credential/register \
     -H 'authorization: Bearer &lt;mobile_admin_jwt_token_from_apis_log_file&gt;' \
     -H 'content-type: application/json' \
     -d '{
     "request": {
       "key": "&lt;implementation-name&gt;-mobile-app-&lt;version-number&gt;"
     }
   }' </code> </pre>
   Result will be
  <br>
  <code>{"result":{"key":"&lt;implementation-name&gt;-mobile-app-&lt;version-number&gt;","secret":"&lt;secret&gt;"}}</code>

   Use the value of "key" and "secret" from the response above for MOBILE_APP_KEY and MOBILE_APP_SECRET configuration in respective environments in gradle.properties file.
   Example:
  <pre>
  <code>
dev_mobile_app_key = "&lt;implementation-name&gt;-mobile-app-&lt;version-number&gt;"
dev_mobile_app_secret = "&lt;secret&gt;" </code>
  </pre>
  </td> 
  </tr>
  <tr>
    <td>11.</td>
    <td>To change the app name, navigate to <code>sunbird-android/app/src/main/res/values/strings.xml</code> and enter the required app name</td>
  </tr>
  <tr>
    <td>12.</td>
    <td>To change the app logo navigate to <code>sunbird-android/app/src/main/res</code> in android studio.
    <li>In all the mipmap and drawable folders, replace ic_launcher.png image with your desired logo</li>
      <li>The logo name should exactly match the text <b>ic_launcher.png</b></li></td>
  </tr>
  <tr>
    <td>13.</td>
    <td>To show contents only for a specific channel, change the value of FILTER_CONTENT_BY_CHANNEL_ID in build.gradle to true. By default, it is set to false. </td>
  </tr>
  <tr>
    <td>14.</td>
    <td>Give your external path value in Constants.class EXTERNAL_PATH</td>
  </tr>
  <tr>
    <td>15.</td>
    <td>Please setup FCM to support announcement feature in mobile app following the <a href="https://firebase.google.com/docs/android/setup#manually_add_firebase" target="_blank">Android documentation</a>.</td>
  </tr>
</table>
