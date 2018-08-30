---
type: landing
directory: developer-docs/configuring_sunbird
title: Configuring Sunbird App
page_title:  Content Filtering
description: How to configure sunbird app 
keywords: configuring Sunbird app, dislay sign in page, sunbird property
published: True
allowSearch: True
---
## Overview

Sunbird adopters have the privilege to decide whether to log in a new user as a registered user or as a guest user. Adopters can customise the app in such a way that once a user installs and open the app, the user can get the login page to enter the details in the login page field or the user can log in as a guest user without sharing any details of his or her.

## Prerequisite

* An instance of Sunbird that is successfully installed and configured.

* The instance should have access to Sunbird property files.

## Intended Audience

Instance admin

## Scenario

The admin can customise several scenarios such as:

* Whether to display the Login/Guest page to new users

* Whether to display Sign in footer card on the app

* Whether to display onboarding cards

* Whether to display categories in the profile page 

## Taskflow

To customise the app, instance admin must set the configuration variable inside the <b>sunbird-mobile repo</b> inside <b>buildConfig</b> folder.

### 1)Scenario: Whether to display Login/Guest page to  new users

Adopters are able to configure whether to display Login/Guest page to new users (If hidden, take directly to user type selection as Guest).

**Taskflow:**

Adopters can set the <b>display_onboarding_page</b> variable as <b>true</b> in <b>sunbird.properties file</b>, if they want to display the Login/Guest page, else by default the value is false.

**Variable Details:**

<table>
  <tr>
    <td>Sl No.</td>
    <td>Variable Name</td>
    <td>Description</td>
    <td>Default Value</td>
  </tr>
  <tr>
    <td>1






</td>
    <td>display_onboarding_page
</td>
    <td>Adopters must configure whether to display Login/Guest page to new users</td>
    <td>false</td>
  </tr>
</table>


### 2) Scenario: Whether to display the Signin footer card on app

 Adopters are able to configure Whether to display Signin footer card on app by configuring the below-mentioned variables.

**Taskflow:**

* Adopter can set the <b>display_signin_footer_card_in_course_tab_for_teacher</b>variable as <b>true</b> in sunbird.properties file if they want to show the sign-in footer in the course tab for the teachers, else by default, the value is false.

* Adopter can set the <b>display_signin_footer_card_in_library_tab_for_teacher</b> variable <b>true</b> in sunbird.properties file if they want to show the sign-in footer in the library tab for the teachers, else by default, the value is false.

* Adopter can set the <b>display_signin_footer_card_in_profile_tab_for_teacher</b>as <b>true</b> in sunbird.properties file if they want to show the sign-in footer in the profile tab for the teachers, else by default, the value is false.

* Adopter can set the <b>display_signin_footer_card_in_library_tab_for_student</b> variable as <b>true</b> in sunbird.properties file if they want to show the sign-in footer in the library tab for the students, else by default, the value is false.

* Adopter can make the <b>display_signin_footer_card_in_profile_tab_for_student</b> variable as <b>true<?b> in sunbird.properties file if they want to show the sign-in footer in the profile tab for the students, else by default, the value is false.

**Variable Details:**

<table>
  <tr>
    <td>Sl No.</td>
    <td>Variable Name</td>
    <td>Description</td>
    <td>Default Value</td>
  </tr>
  <tr>
    <td>1






</td>
    <td>display_signin_footer_card_in_course_tab_for_teacher

</td>
    <td>Adopters must configure whether to show signin card for teachers in course tab.</td>
    <td>false</td>
  </tr>
  <tr>
    <td>2</td>
    <td>display_signin_footer_card_in_library_tab_for_teacher
</td>
    <td>Adopters must configure whether to show signin card for teachers in library tab.</td>
    <td>false</td>
  </tr>
  <tr>
    <td>3</td>
    <td>display_signin_footer_card_in_profile_tab_for_teacher
</td>
    <td>Adopters must configure whether to show signin card for teachers in profile tab.</td>
    <td>false</td>
  </tr>
  <tr>
    <td>4</td>
    <td>display_signin_footer_card_in_library_tab_for_student
</td>
    <td>Adopters must configure whether to show signin card for student in library tab.</td>
    <td>false</td>
  </tr>
  <tr>
    <td>5</td>
    <td>display_signin_footer_card_in_profile_tab_for_student
</td>
    <td>Adopters must configure whether to show signin card for student in profile tab.</td>
    <td>false</td>
  </tr>
</table>


### 3) Scenario: Whether to display onboarding cards or not

Adopters should be able to configure whether to display onboarding cards or not by configuring the below-mentioned variables:

**Taskflow:**

Adopters can set the <b>display_onboarding_cards</b> variable as <b>true </b>in sunbird.properties file, if they want to display the Login/Guest page, else by default the value is false.

<table>
  <tr>
    <td>Sl No.</td>
    <td>Variable Name</td>
    <td>Description</td>
    <td>Default Value</td>
  </tr>
  <tr>
    <td>1






</td>
    <td>display_onboarding_cards
</td>
    <td>Adopters must configure whether to display onboarding cards</td>
    <td>false</td>
  </tr>
</table>


### 4) Scenario: Whether to display categories in profile page or not

Adopters are able to configure whether to display categories in profile page or not by configuring the below-mentioned variables.

**Taskflow:**

Adopter can set the <b>display_framework_categories_in_profile</b> variable as <b>true</b> in sunbird.properties file, if they want to display the Login/Guest page, else by default the value is false.

**Variable Details:**

<table>
  <tr>
    <td>Sl No.</td>
    <td>Variable Name</td>
    <td>Description</td>
    <td>Default Value</td>
  </tr>
  <tr>
    <td>1






</td>
    <td>display_framework_categories_in_profile
</td>
    <td>Adopters must configure whether to display categories in profile page</td>
    <td>false</td>
  </tr>
</table>


