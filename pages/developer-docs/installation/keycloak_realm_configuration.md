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
The Sunbird uses Keycloak as the identity and authentication provider. 

### Access Keycloak

Once the sunbird services are set up, [visit](https://sunbird.example.com/auth/admin){:target="_blank"} (Assuming you've set up sunbird on sunbird.example.com) to access the Keycloak administration.


### Setting the Admin password

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

The script will execute creating admin user and password. 

- You can now log into the administration console using these credentials.

Once you view the administration console,clients and the secrets can be set by following steps:

### Import Realm

To simplify the configuration, Sunbird provides a ready to use realm that can be readily imported and used. Download the realm [here](pages/developer-docs/installation/other_files/keycloak-realm){:target="_blank"}. 

To import the realm, use the 'Add realm' button, refer to the following images to get more clarity. 

{% image src='pages/developer-docs/installation/images/keycloack-add-realm.png' half center alt='Keycloak realm' %}

{% image src='pages/developer-docs/installation/images/keycloak-choose-json.png' half center alt='choose keycloak json' %}

On the import screen, choose the json file and then click 'Create'.

{% image src='pages/developer-docs/installation/images/keycloak-import-realm.png' half center alt='Keycloak import realm' %}

Once the realm is imported ensure the realm is set as active realm before proceeding with the rest of the configuration

###  SMTP Configuration

Email configuration is needed to ensure password reset and user management flows work smoothly. Navigate to `Realm Settings > Email`. Fill up the SMTP credentials and use the Test Connection button to verify the SMTP connection is working.

### Create a user who can access the user management API

Navigate to Manage > Users and create a new user. Put the username as `user-manager`, set the email to be verified and save. After saving, assign a password to this user.

Next update the client roles under role mappings to ensure that this user has the `manage-users`, `query-users`, `query-groups` and `view-users` roles.The screenshot below gives a view of reference configuration.

{% image src='pages/developer-docs/installation/images/keycloak-add-user-manager.png' half center alt='Keycloak use management' %}

Use corresponding username and password values for this user as the values for `sunbird_sso_username` and `sunbird_sso_password` in the configuration.

### Update Client & Secrets

Navigate to `Clients` and make the changes listed below to each of the clients. Only change the clients listed below. Settings for other clients need not be changed.

#### Account, broker, realm-management

Go to the `Credentials` tab and regenerate the Secret and Registration Access Token. Note both, you will need them in a later step.

#### Android

Change the Root URL to `https://sunbird.example.com`
Add a Valid Redirect URI `https://sunbird.example.com/oauth2callback`

#### Portal

Change the Root URL to `https://sunbird.example.com`
Add Valid Redirect URIs `https://sunbird.example.com/private/*` and `https://sunbird.example.com/`

#### Trampoline

Change the Root URL to `https://sunbird.example.com`
Go to the Credentials tab and regenerate the Secret and Registration Access Token. Use the secret as the value for the `sunbird_trampoline_secret` configuration.
