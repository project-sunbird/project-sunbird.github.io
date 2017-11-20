---
type: landing
directory: developer-docs/installation/
title: Installation  Overview
page_title: Installation
description: installation overview
keywords: 'Try Sunbird, Installation method, Pre-requisites, Sandbox'
allowSearch: true

---
This page provides a summarized listing of the essential steps for planning, installing, and configuring Sunbird deployment in a live environment.The deployment of Sunbird requires several distributed components for runtime operation. Getting started with this can be cumbersome. Fortunately,the installation process is simplified for some common scenarios .

**Size and Verify Your Environment**

See the prerequisites for installation. Additional requirements for installation might apply based on the environment on which you install Sunbird and how you use Sunbird.

- **Choosing an Installation method**

Based on your usage and the level of complexity which you are comfortable with, there are a few different options for installing and running Sunbird.

- **Pre-requisites**

Each of the installation option requires a few pre-requisites to be satisfied. 
At a minimum, you should be:

   - Using a Linux OS flavour (developer installation is possible on MacOS).
   - Comfortable with a terminal. Sunbird installation is triggered from the command-line terminal.

***Note: pre-requisites are not required to try out the sandbox option***

**Installation options**

- I want to try Sunbird

If you are looking to experiment with Sunbird and test out its feature set, we recommend you use the [Sunbird sandbox](https://staging.open-sunbird.org/){:target="_blank"} which is already running in the cloud. Note, any data created in the sandbox will be erased after 24 hours.

- I want to extend Sunbird

If you plan to modify and contribute code to the Sunbird project, we recommend you follow the process [Developer installation]( developer-docs/installation/installing_sunbirdon_laptop/){:target="_blank"}. This will get you started quickly so you can start extending Sunbird.

- I want to deploy 0-10k users on Sunird

If you plan to run Sunbird in a setting upto 10k users, we recommend you follow the process [Medium scale deployment](developer-docs/installation/medium_scale_deploy/){:target="_blank"}. This option uses less resources to run Sunbird and has some limits on how much the installed application can scale.
- I want to deploy 10k+ users on Sunbird

If you plan to run Sunbird in a setting with 10k+ users, we recommend you follow the [Large scale deployment](){:target="_blank"} process. 
This will deploy Sunbird to a cloud-hosting provider of your choice in a fully containerised manner. The containers allow you to scale the resources Sunbird consumes based on the usage.

