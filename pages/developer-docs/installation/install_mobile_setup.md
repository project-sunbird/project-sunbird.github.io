---
type: landing
directory: developer-docs/installation/
title: Mobile App Installation
page_title: Mobile app installation
description: About mobile app
allowSearch: true
---
# The Sunbird Mobile app

The Sunbird Mobile app.provides mobility to the feature rich learning platform.

## Steps to build APK from git repo:

- Install Android Studio and configure it. You can see complete configuration process [here](https://developer.android.com/studio/intro/studio-config.html) 
- Clone GitHub `sunbird-android` repo into it.
- Rename `gradle.properties.example` to `gradle.properties`
- Add you keystore detail `keystore`, `keystore_password`, `key_alias` and `key_password` in `gradle.properties`
- Replace `release_fabric_api_key` in `gradle.properties` with your fabric ApiKey. 
- You can create your account in [fabric.io](https://get.fabric.io/) and register your app. After registering your app you will get the ApiKey which you need to add in manifest.
- Replace PRODUCER_ID, CHANNEL_ID, MOBILE_APP_KEY and MOBILE_APP_SECRET in `gradle.properties` for your dev, release and production build variants.
- You need to generate key and secret for `mobile_app` user using JWT token of `mobile_admin` user.
- Please find the steps to generate key and secret [here]
(https://github.com/project-sunbird/sunbird-devops/blob/master/Installation.md#step-6-generate-key-and-secrets-for-mobile-app)
- If You want to `change the app name` go to sunbird-android/app/src/main/res/values/strings.xml and give the required app name.
- For app logo changing goto sunbird-android/app/src/main/res folder, here in all mipmap folders and drawable folder replace `ic_launcher.png` image with your logo. Logo name should be `ic_launcher.png`
- If you would like to show contents only for the given channelId than change the value of `FILTER_CONTENT_BY_CHANNEL_ID` to true, by default it's false in `build.gradle`
- Give your external path value in `Constants.class EXTERNAL_PATH`
