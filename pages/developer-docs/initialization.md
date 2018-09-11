---
type: landing
directory: developer-docs
title: Initialisation Setup
page_title: Initialisation Setup
description: Initialisation Setup
keywords: Initialise Sunbird, create root org, root org, channel setup, rootorg, rootOrg
published: true
allowSearch: true
---
## Overview
Sunbird Initialisation script initialises the system settings for new adopters as well as old adopters.

For New Adopters:
- Creates first tenant organisation
- Registers the channel of the first tenant organisation
- Registers the hashTagId of the first tenant organisation
- Creates sunbird admin user with ORG_ADMIN role
- Initialises the system settings

For Old Adopters:
- Checks whether the tenant organisation exists with the configured channel
- Initialises the system settings

## New Adopters

### Configuration

Configure these fields in the config file in the deploy folder. First organisation and user in Sunbird will be created with these details

- sunbird_custodian_tenant_name (Custodian Organisation Name)
- sunbird_custodian_tenant_description (Custodian Organisation Description)
- sunbird_custodian_tenant_channel (Custodian Organisation Channel)
- sunbird_root_user_firstname (first name of the Sunbird admin user)
- sunbird_root_user_lastname (last name of the Sunbird admin user - optional field)
- sunbird_root_user_username (username to be used for login to Sunbird)
- sunbird_root_user_password (password to be used for login to Sunbird)
- sunbird_root_user_email (email address of the Sunbird admin user)
- sunbird_root_user_phone (mobile number of the Sunbird admin user)

### How to run the script

By default, system initialisation script will run at the end of the sunbird installation script(`sunbird_install.sh`).

If needed, it can be run separately using the following command
`sunbird_install.sh -s systeminit`

## Existing Adopter

### Configuration

Configure these fields in the config file in the deploy folder. The organisation with the configured channel will be made as the custodian organisation during system initialisation

- sunbird_custodian_tenant_channel (Custodian Organisation Channel)

### How to run the script

The script can be run by running the `sunbird_upgrade.sh` script
