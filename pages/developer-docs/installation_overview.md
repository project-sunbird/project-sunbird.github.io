---
type: landing
directory: developer-docs
title: Installation  Overview
page_title: Installation
description: installation overview
keywords: 'Try Sunbird, Installation method, Pre-requisites, Sandbox'
---
{% ingredient /developer-docs/install_sb_overview_p1 %}{% endingredient %}

### Installation Options

- **I want to try Sunbird**

If you are looking to experiment with Sunbird and test out its feature set, we recommend you use the [Sunbird sandbox](https://staging.open-sunbird.org/) which is already running in the cloud. Note, any data created in the sandbox will be erased after 24 hours.

- **I want to extend Sunbird**

If you plan to modify and contribute code to the Sunbird project, we recommend you to follow the process [Developer installation]( developer-docs/developer_install ). This will get you started quickly so you can start extending Sunbird.

- **I want to deploy 0-10k users on Sunird**

If you plan to run Sunbird in a setting upto 10k users, we recommend you to follow the process [Medium scale deployment](developer-docs/medium_scale_deploy ). This option uses less resources to run Sunbird and has some limits on how much the installed application can scale.

- **I want to deploy 10k+ users on Sunbird**

If you plan to run Sunbird in a setting with 10k+ users, we recommend you to follow the [Large scale deployment](developer-docs/large_scale_deploy) process. 

This will deploy Sunbird to a cloud-hosting provider of your choice in a fully containerised manner. The containers allow you to scale the resources Sunbird consumes based on the usage.
