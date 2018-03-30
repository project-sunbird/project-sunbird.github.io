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

Assuming that you have set up Sunbird on sunbird.example.com, You can open Keycloak administration panel simply by navigating to: **https://sunbird.example.com/auth/admin**

## Import Realm

- To simplify the configuration, Sunbird provides a ready to use realm that can be imported and used. 
-[Download](https://raw.githubusercontent.com/project-sunbird/project-sunbird.github.io/dev/pages/developer-docs/installation/other_files/keycloak-realm.json) the realm to get started.

Follow the steps to add, import and create the Keycloak realm:
<table>
    <tr>
         <th style="width:35%;">Step</th>
         <th style="width:65%;">Screen</th>
    </tr>
 <tr>
        <td> 
        In order to  import the realm:<br> 

        1. Click on <b>Add realm</b> button

        </td>
            <td>
            <img src="pages/developer-docs/installation/images/keycloack-add-realm.png">
            </td>
</tr>
<tr>
        <td> On the add realm screen<br>
        

1. Click on <strong>Select file</strong> next to the Import label on the screen, choose the appropriate .json file <br>

2. Type the appropriate name <br>
        </td>
            <td>
            <img src="pages/developer-docs/installation/images/keycloak-choose-json.png">
            </td>
</tr>
<tr>
        <td> 1. Click on <
        </td>
            <td>
            <img src="pages/developer-docs/installation/images/keycloak-import-realm-create.png">
            </td>
</tr>
</table>

**Note:**Once the realm is imported, ensure that the realm is set as active before proceeding with the rest of the configuration.

## Create User to Access User Management API

Navigate to Manage tab, then to Users and create a new user.


1. Enter the username as **user-manager**
2. Set the email to be verified
3. Click save
4. Assign/Type a password for this new user
5. Update client roles under role mappings to ensure that this new user has the following permissions:
    
    - manage-users
    - query-users
    - query-groups
    - view-users

**Note:** Refer to the following image for reference configuration.


{% image src='pages/developer-docs/installation/images/keycloak-add-user-manager.png' half center alt='Keycloak use management' %}{:target="_blank"}

Use the corresponding username and password values for this newly created user and set the values for **sunbird_sso_username** and **sunbird_sso_password** in the configuration file.

## Update Client & Secrets

- Navigate to Clients and make the following changes to each of the clients

**Note:** Modify only the clients listed below. You do not need to modify the settings for other clients.

### Account, broker, realm-management

- Go to the Credentials tab and regenerate the Secret and Registration Access Token. Make a note of both as you will require these at a later stage.

## Configurations

The following steps will guide you through the configuration settings:

### Android

1. Change the Root URL `https://sunbird.example.com`
2. Add a Valid Redirect URL `https://sunbird.example.com/oauth2callback`

### Portal

1. Change the Root URL to `https://sunbird.example.com`
2. Add Valid Redirect URIs `https://sunbird.example.com/private/*` and `https://sunbird.example.com/`

### Trampoline

1. Change the Root URL to **https://sunbird.example.com**
2. Go to the Credentials tab and regenerate the Secret and Registration Access Token
3. Use the secret as the value for the **sunbird_trampoline_secret** configuration

### SMTP

1. It is necessary to configure email for smooth working of the password reset functionality and user management workflows
2. Navigate to **Realm Settings** and then to **Email**
3. Enter the **SMTP credentials**

4. Click the **Test Connection** button to verify that the SMTP connection is configured correctly
