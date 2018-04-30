---
type: landing
directory: developer-docs/installation/
title: Installation 
page_title: Installation
description: installation 
keywords: 'Try Sunbird, Installation method, Pre-requisites, prerequisites, Sandbox, Deployment'
allowSearch: true

---

## Plan, Install and Configure Sunbird 
The deployment of Sunbird in a live environment requires several distributed components. Before you start installation, check for the following components:

### Size and Verify your Environment

Requirements for Sunbird installation depends on the environment on which you install and use Sunbird. 
For details, check the **Prerequisites** section for your chosen installation method. 

For example; if you choose to do a medium-scale deployment of Sunbird, check [here](http://www.sunbird.org/developer-docs/installation/medium_scale_deploy/#pre-requisites){:target="_blank"} 

### Choosing an Installation method

Based on your usage and the level of complexity which you are comfortable with, choose from among the different options available for installing and running Sunbird.

### Pre-requisites

If you install Sunbird in any environment or choose any method of installation, the basic minimum prerequisites are: 

   - Use of a Linux OS flavor (developer installation is possible on MacOS)
   - Comfort with use of a terminal as Sunbird installation is triggered from a command-line terminal

***Note: The prerequisites are not necessary to try the sandbox option***

## Installation options

### Try Sunbird

If you are looking to experiment with Sunbird and test its feature set, we recommend you use the [Sunbird sandbox](https://staging.open-sunbird.org/){:target="_blank"} which is running in the cloud. 

**Note: Data created in the sandbox is erased after 24 hours**

### Extend Sunbird

If you plan to modify and contribute code to the Sunbird project, we recommend you [Install Sunbird on your machine](developer-docs/installation/installing_sunbirdon_machine/){:target="_blank"}. This allows you to get started quickly and help extend Sunbird.

### Deploy Sunbird for up to 10 Thousand Users

If you plan to run Sunbird for up to 10 thousand users, we recommend you follow the [Medium scale deployment](developer-docs/installation/medium_scale_deploy/){:target="_blank"} process. This option uses fewer resources to run Sunbird and has some limits on how much the installed application can scale.

### Deploy Sunbird for over 10 Thousand Users 

You can plan to run Sunbird in a setting with over 10 thousand users. This will deploy Sunbird to a cloud-hosting provider of your choice in a fully containerized manner. The containers allow you to scale the resources Sunbird consumes based on the usage.

