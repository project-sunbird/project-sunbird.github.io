---
type: landing
directory: developer-docs
title: Initialization Setup
page_title: Initialization Setup
description: Initialization Setup
keywords: Initialize Sunbird, create root org, root org, channel setup, rootorg, rootOrg
published: true
allowSearch: true
---
## Overview
The Sunbird Initialization script initializes the system settings for new as well as existing adopters. This page provides information for both scenarios. 

In case of new adopters, the script:

- Creates first tenant organisation
- Registers the channel of the first tenant organisation
- Registers the hashTagId of the first tenant organisation
- Creates sunbird admin user with ORG_ADMIN role
- Initializes the system settings

In case of existing adopters, the script:

- Checks whether the tenant organisation exists with the configured channel
- Initializes the system settings

## New Adopter Initialization

### Configuration

Configure the following fields in the config file available in the deploy folder to create the first organisation and user in Sunbird

- sunbird_custodian_tenant_name (Custodian Organisation Name)
- sunbird_custodian_tenant_description (Custodian Organisation Description)
- sunbird_custodian_tenant_channel (Custodian Organisation Channel)
- sunbird_root_user_firstname (first name of the Sunbird admin user)
- sunbird_root_user_lastname (last name of the Sunbird admin user - optional field)
- sunbird_root_user_username (username to be used for login to Sunbird)
- sunbird_root_user_password (password to be used for login to Sunbird)
- sunbird_root_user_email (email address of the Sunbird admin user)
- sunbird_root_user_phone (mobile number of the Sunbird admin user)

### Running the script

By default, the system initialization script runs at the end of the sunbird installation script(`sunbird_install.sh`).

If needed, you can run it separately using the following command
`sunbird_install.sh -s systeminit`

## Existing Adopter Initialization

### Configuration

Configure the following fields in the config file available in the deploy folder. The organisation with the configured channel is the custodian organisation during system initialization.

- sunbird_custodian_tenant_channel (Custodian Organisation Channel)

### Running the script

You can run the script using the `sunbird_upgrade.sh` command.
