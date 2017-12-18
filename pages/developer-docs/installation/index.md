---
type: landing
directory: developer-docs/installation/
title: Installation  Overview
page_title: Installation
description: installation overview
keywords: 'Try Sunbird, Installation method, Pre-requisites, Sandbox, Deployment'
allowSearch: true

---

## Essential Steps to Plan, Install, and Configure Sunbird Deployment
The deployment of Sunbird in a live environment requires several distributed components. Before you start installation, check and decide the following:

### Size and Verify Your Environment

Requirements for Sunbird installation depend on the environment on which you install Sunbird and how you use Sunbird. 
For details, check the **Prerequisites** section for your chosen installation type. For example; if you choose to do a medium scale deployment of Sunbird, check [here](http://www.sunbird.org/developer-docs/installation/medium_scale_deploy/#link1-1-1){:target="_blank"} 

### Choosing an Installation method

Based on your usage and the level of complexity which you are comfortable with, choose from among the different options available for installing and running Sunbird.

### Pre-requisites

If you install Sunbird on any environment or choose any method of installation, the basic minimum prerequisites are: 

   - Use of a Linux OS flavour (developer installation is possible on MacOS)
   - Comfort with use of a terminal as Sunbird installation is triggered from a command-line terminal

***Note: The pre-requisites are not necessary to try the sandbox option***

## Installation options

- I want to try Sunbird

If you are looking to experiment with Sunbird and test its feature set, we recommend you use the [Sunbird sandbox](https://staging.open-sunbird.org/){:target="_blank"} which is running in the cloud. 

**Note: Data created in the sandbox is erased after 24 hours**

- I want to extend Sunbird

If you plan to modify and contribute code to the Sunbird project, we recommend you [Install Sunbird on Laptop]( developer-docs/installation/installing_sunbirdon_laptop/){:target="_blank"}. This allows you to get started quickly and help extend Sunbird.

- I want to deploy 0-10k users on Sunird

If you plan to run Sunbird for upto 10k users, we recommend you follow the [Medium scale deployment](developer-docs/installation/medium_scale_deploy/){:target="_blank"} process. This option uses less resources to run Sunbird and has some limits on how much the installed application can scale.
- I want to deploy 10k+ users on Sunbird

If you plan to run Sunbird in a setting with 10k+ users, we recommend you follow the [Large scale deployment](){:target="_blank"} process. 
This will deploy Sunbird to a cloud-hosting provider of your choice in a fully containerised manner. The containers allow you to scale the resources Sunbird consumes based on the usage.

