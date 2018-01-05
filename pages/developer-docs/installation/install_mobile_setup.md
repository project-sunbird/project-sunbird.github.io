---
type: landing
directory: developer-docs/installation/
title: Mobile App Installation
page_title: Mobile app installation
description: About mobile app
allowSearch: true
---
# The Sunbird Mobile app

The Sunbird mobile learning app is a delivery format that provides learners with the flexibility to learn anywhere, anytime, even without internet connection.

The Sunbird Mobile app provides mobility to the feature rich learning platform.

## Steps to build APK from git repo:

- Install Android Studio and configure it.For getting help in complete configuration process [visit](https://developer.android.com/studio/intro/studio-config.html){:target="_blank"} 
- Clone the repsitory to android studio by executing following command in console:
  git clone  `https://github.com/project-sunbird/sunbird-android` 
- In Android studio, rename `gradle.properties.example` to `gradle.properties`
- Add you keystore detail `keystore`, `keystore_password`, `key_alias` and `key_password` in `gradle.properties`
- Replace `release_fabric_api_key` in `gradle.properties` with your fabric API Key. 
- To get the API key, you need to create an account in [fabric.io](https://get.fabric.io/){:target="_blank"} and register your app. After registering your app you will get the API Key which you need to add in manifest file (Every application has an AndroidManifest.xml file (with precisely that name) in its root directory.
- Replace PRODUCER_ID, CHANNEL_ID, MOBILE_APP_KEY and MOBILE_APP_SECRET in `gradle.properties` for your dev, release and production build   variants.
- You need to generate key and secret for `mobile_app` user using JWT token of `mobile_admin` user.
- Please find the steps to generate key and secret [here](https://github.com/project-sunbird/sunbird-devops/blob/master/Installation.md#step-6-generate-key-and-secrets-for-mobile-app){:target="_blank"}
- If you want to `change the app name` go to `sunbird-android/app/src/main/res/values/strings.xml` and enter the required app name.
- For changing the app logo navigate to this loctaion in android studio environment `sunbird-android/app/src/main/res`
    - In all mipmap folders and drawable folders you need to replace `ic_launcher.png` image with your desired logo.
    - Logo name should match exactly this text `ic_launcher.png`
- If you would like to show contents only to a given channelId in your app, you need to change the value of `FILTER_CONTENT_BY_CHANNEL_ID` to true, by default it's set to false in `build.gradle`
- Give your external path value in `Constants.class EXTERNAL_PATH`
