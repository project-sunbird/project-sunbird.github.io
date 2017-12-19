---
type: landing
directory: developer-docs/installation
title: Configure Keycloak 
page_title: Configure Keycloak
description: Keycloak configuration
published: true
allowSearch: true
---
## Getting Started

A step by step guide to run and provision the keycloak server locally is explained in detail [here](http://www.keycloak.org/docs/latest/getting_started/index.html){:target="_blank"}.

**Note:** Sunbird uses Keycloak as the identity and authentication provider. 

## Access Keycloak

Once the Sunbird services are set up, lets access the keycloak by following these steps:

Assuming that you have set up sunbird on **sunbird.example.com**.

- You can open Keycloak administration panel simply by navigating to https://sunbird.example.com/auth/admin.

- Since you might have configured URL with your desired text , you need to replace the default URL address text with your configured URL text to access the Keycloak.
>This is an example of default URL :      https://ab009.effgg.com/auth/admin 
Change it to your configured URL. 
>This is an example your configured URL : https://xxxxxx.yyyyyy.com/auth/admin
Where xxxxx and yyyy represent the characters of your configured URL text.

**Note:** The characters "xxxx"and "yyyy" are just used as an example text herein.

## Setting the Admin password

- Log into the docker container running keycloak by executing the following commands:

<pre>
#Find where the container is running
docker service ps keycloak1
#If you are running all services on single server no need to SSH
#If you are in a different server, SSH into node running keycloak
ssh {node-running-keycloak-container}
#Find the keycloak container ID
docker ps | grep keycloak
#Login to container
docker exec -uroot -it {container-ID}
</pre>

- Change to the path to keycloak root directory (most likely `/opt/jboss/keycloak`)
- Execute the following script to set the administrator user name and password

```
$ ./bin/add-user-keycloak.sh -u <admin> -p <yourpassword>
```

The script is executed creating the admin user and password. 

You can log into the administration console using these credentials.

After you can view the administration console, follow the steps provided below to set clients and the secrets.

## Import Realm

- To simplify the configuration, Sunbird provides a ready to use realm that can be readily imported and used. Download the realm <a  href="https://raw.githubusercontent.com/project-sunbird/project-sunbird.github.io/dev/pages/developer-docs/installation/other_files/keycloak-realm.json"  download>here</a>.

- To import the realm, use the 'Add realm' button as shown in the following screens. 

{% image src='pages/developer-docs/installation/images/keycloack-add-realm.png' half center alt='Keycloak realm' %}

{% image src='pages/developer-docs/installation/images/keycloak-choose-json.png' half center alt='choose keycloak json' %}

- On the import screen, choose the json file and click 'Create'.

{% image src='pages/developer-docs/installation/images/keycloak-import-realm.png' half center alt='Keycloak import realm' %}

Once the realm is imported ensure the realm is set as active realm before proceeding with the rest of the configuration.

## Create User to Access User Management API

Navigate to Manage, then to Users and create a new user.

1. Enter the username as `user-manager`, set the email to be verified and save. 

2. Assign a password to this user.

3. Update client roles under role mappings to ensure that this user has the `manage-users`, `query-users`, `query-groups` and `view-users` permissions.

**Note:** Refer to the following screenshot for reference configuration.

{% image src='pages/developer-docs/installation/images/keycloak-add-user-manager.png' half center alt='Keycloak use management' %}

4. Use corresponding username and password values for this user as the values for `sunbird_sso_username` and `sunbird_sso_password` in the configuration.

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
