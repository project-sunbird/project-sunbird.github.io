---
type: landing
directory: developer-docs/installation/
title: Mobile App Installation
page_title: Mobile app installation
description: About mobile app
allowSearch: true
---
# sunbird-android

Mobile app for sunbird software. Provides the mobile interfaces for all functionality of Sunbird.

## Steps to build APK from git repo:

1. Install Android Studio and configure it.
2. Clone GitHub `sunbird-android` repo into it.
3. Rename `gradle.properties.example` to `gradle.properties`
4. Add you keystore detail `keystore`, `keystore_password`, `key_alias` and `key_password` in `gradle.properties`
9. Replace `release_fabric_api_key` in `gradle.properties` with your fabric ApiKey. You can create your account in [fabric.io](https://get.fabric.io/) and register your app. After registering your app you will get the ApiKey which you need to add in manifest.
5. Replace PRODUCER_ID, CHANNEL_ID, MOBILE_APP_KEY and MOBILE_APP_SECRET in `gradle.properties` for your dev, release and production build variants.
6. You need to generate key and secret for `mobile_app` user using JWT token of `mobile_admin` user.
Please find the steps here
[https://github.com/project-sunbird/sunbird-devops/blob/master/Installation.md#step-6-generate-key-and-secrets-for-mobile-app](https://github.com/project-sunbird/sunbird-devops/blob/master/Installation.md#step-6-generate-key-and-secrets-for-mobile-app)
7. If You want to `change the app name` go to sunbird-android/app/src/main/res/values/strings.xml and give the required app name.
8. For app logo changing goto sunbird-android/app/src/main/res folder, here in all mipmap folders and drawable folder replace `ic_launcher.png` image with your logo. Logo name should be `ic_launcher.png`
10. If you would like to show contents only for the given channelId than change the value of `FILTER_CONTENT_BY_CHANNEL_ID` to true, by default it's false in `build.gradle`
11. Give your external path value in `Constants.class EXTERNAL_PATH`
