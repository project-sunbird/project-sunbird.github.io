---
type: landing
directory: developer-docs/installation/
title: Mobile App Installation
page_title: Mobile app installation
description: About mobile app
allowSearch: true
---
## Introduction

The Sunbird mobile learning app is a delivery format that provides learners with the flexibility to learn anywhere, anytime, even without internet connection.The Sunbird Mobile app provides mobility to the feature rich learning platform.

## Build APK from Git Repository

<table>
  <tr>
    <th>Step</th>
    <th>Instruction</th>
  </tr>
  <tr>
    <td>1.</td>
    <td>Install the Android Studio<br><i>For any installation related help, refer to the official <a href="https://developer.android.com/studio/index.html">Android site</a></i></td>
  </tr>
  <tr>
    <td>2.</td>
    <td>Clone the repsitory to android studio by executing following command in console:
    <pre>git clone https://github.com/project-sunbird/sunbird-android</pre></td>
  </tr>
  <tr>
    <td>3.</td>
    <td>In Android studio, rename `gradle.properties.example` to `gradle.properties`</td>
  </tr>
  <tr>
    <td>4.</td>
    <td>Add your keystore detail `keystore`, `keystore_password`, `key_alias` and `key_password` in `gradle.properties`. For more details about generating a key and keystore <a href="https://developer.android.com/studio/publish/app-signing.html#generate-key" target="_blank"> refer</a>to the official Android website.</td>
  </tr>
  <tr>
    <td>5.</td>
    <td>Replace `release_fabric_api_key` in `gradle.properties` with your fabric API Key</td>
  </tr>
  <tr>
    <td>6.</td>
    <td>To get the API key, create an account at <a href="https://get.fabric.io/" target="_blank">fabric.io</a> and register your app. After registering your app, you will get the API Key. Add the key in the manifest file<br><strong>Note:</strong>Every application has an <strong>AndroidManifest.xml</strong> and the file is generally locted in the root directory</td>
  </tr>
  <tr>
    <td>7.</td>
    <td>Replace PRODUCER_ID, CHANNEL_ID, MOBILE_APP_KEY and MOBILE_APP_SECRET in `gradle.properties` for your dev, release and production build variants</td>
  </tr>
  <tr>
    <td>8.</td>
    <td>Generate the key and secret for mobile_app user using the JWT token of the mobile_admin user.<br><i>To generate key and secret, <a href="https://github.com/project-sunbird/sunbird-devops/blob/master/Installation.md#step-6-generate-key-and-secrets-for-mobile-app" target="_blank">refer</a></i>to the page for more details.</td> 
  </tr>
  <tr>
    <td>9.</td>
    <td>To `change the app name, navigate to `sunbird-android/app/src/main/res/values/strings.xml` and enter the required app name</td>
  </tr>
  <tr>
    <td>10.</td>
    <td>To change the app logo navigate to `sunbird-android/app/src/main/res`in the android studio environment.
    <li>In all the mipmap and drawable folders, replace ic_launcher.png image with your desired logo</li>
      <li>The logo name should exactly match the text <B>ic_launcher.png</b></li></td>
  </tr>
  <tr>
    <td>11.</td>
    <td>To show contents only to a specific channel, change the value of FILTER_CONTENT_BY_CHANNEL_ID to true. By default,  in build.gradle it is set to false. </td>
  </tr>
  <tr>
    <td>12.</td>
    <td>Give your external path value in Constants.class EXTERNAL_PATH</td>
  </tr>
  <tr>
    <td>13.</td>
    <td>Setup FCM to support anncouncement feature in mobile app, <a href="https://firebase.google.com/docs/android/setup#manually_add_firebase" target="_blank">refer</a> to the official website.</td>
  </tr>
</table>
