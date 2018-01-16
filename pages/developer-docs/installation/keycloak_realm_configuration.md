---
type: landing
directory: developer-docs/installation
title: Configure Keycloak 
page_title: Configure Keycloak
description: Keycloak configuration
published: true
allowSearch: true
---

## Access Keycloak Administration

Assuming that you have set up Sunbird on sunbird.example.com, You can open Keycloak administration panel simply by navigating to **https://sunbird.example.com/auth/admin**

## Import Realm

- To simplify the configuration, Sunbird provides a ready to use realm that can be readily imported and used. Download the realm <a  href="https://raw.githubusercontent.com/project-sunbird/project-sunbird.github.io/dev/pages/developer-docs/installation/other_files/keycloak-realm.json">here</a>.

- To import the realm, use the 'Add realm' button as shown in the following screens. 

{% image src='pages/developer-docs/installation/images/keycloack-add-realm.png' half center alt='Keycloak realm' %}{:target="_blank"}

{% image src='pages/developer-docs/installation/images/keycloak-choose-json.png' half center alt='choose keycloak json' %}{:target="_blank"}

- On the import screen, choose the json file and click 'Create'.

{% image src='pages/developer-docs/installation/images/keycloak-import-realm.png' half center alt='Keycloak import realm' %}{:target="_blank"}

Once the realm is imported ensure the realm is set as active realm before proceeding with the rest of the configuration.

## Create User to Access User Management API

Navigate to Manage, then to Users and create a new user.

- Enter the username as `user-manager`, set the email to be verified and save. 

- Assign a password to this user.

- Update client roles under role mappings to ensure that this user has the `manage-users`, `query-users`, `query-groups` and `view-users` permissions.

**Note:** Refer to the following screenshot for reference configuration.

{% image src='pages/developer-docs/installation/images/keycloak-add-user-manager.png' half center alt='Keycloak use management' %}{:target="_blank"}

- Use corresponding username and password values for this user as the values for `sunbird_sso_username` and `sunbird_sso_password` in the configuration.

## Update Client & Secrets

Navigate to Clients and make the following changes to each of the clients. 

**Note:** Modify only the clients listed below. You do not need to modify the settings for other clients.

### Account, broker, realm-management

Go to the Credentials tab and regenerate the Secret and Registration Access Token. Make a note of both as they will be required at later stage.

### Android

Change the Root URL to `https://sunbird.example.com`
Add a Valid Redirect URI `https://sunbird.example.com/oauth2callback`

### Portal

Change the Root URL to `https://sunbird.example.com`
Add Valid Redirect URIs `https://sunbird.example.com/private/*` and `https://sunbird.example.com/`

### Trampoline

Change the Root URL to `https://sunbird.example.com`
Go to the Credentials tab and regenerate the Secret and Registration Access Token. Use the secret as the value for the `sunbird_trampoline_secret` configuration.

##  SMTP Configuration

It is necessary to configure email for smooth working of the password reset functionality and user management workflows. 
Navigate to `Realm Settings > Email`. Enter the SMTP credentials and click the Test Connection button to verify that the SMTP connection is working.
