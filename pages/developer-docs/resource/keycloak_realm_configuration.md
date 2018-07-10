Sunbird uses Keycloak as the identity and authentication provider. Once the sunbird services are set up, navigate to https://sunbird.example.com/auth/admin("target;_"blank)(Assuming you've set up sunbird on sunbird.example.com) to access the Keycloak administration.

## Setting the Admin password

1. Log into the docker container which is running your keycloak service by following below commands
```bash
# Find where the container is running
docker service ps keycloak1
# If you are running all services on single server no need to SSH
# If you are in a different server, SSH into node running keycloak
ssh <node-running-keycloak-container>
# Find the keycloak container ID
docker ps | grep keycloak
# Login to container
docker exec -uroot -it <container-ID> sh
```

2. Change to the keycloak root directory (most likely `/opt/jboss/keycloak`)

3. Run the following script to set the administrative user and password
```bash
$ ./bin/add-user-keycloak.sh -u <admin> -p <yourpassword>
```

The script will run and create the admin user and password. You can now log into the administration console using these credentials.

Once you are in the administration console, follow the steps below to set up the clients and the secrets.

## Import Realm

To simplify configuration, sunbird provides a ready realm that you can import and start using. Download the realm from here. To import the realm, use the 'Add realm' button (check screenshots below). On the import screen, choose the json file and then click 'Create'.

@TODO : Import realm images 1-3

Once the realm is imported ensure the realm is chosen as the active realm before proceeding with the rest of the configuration

##  SMTP Configuration

Email configuration is needed to ensure password reset and user management flows work smoothly. Navigate to `Realm Settings > Email`. Fill up the SMTP credentials and use the Test Connection button to verify the SMTP connection is working.

## Create a user who can access the user management API

Navigate to Manage > Users and create a new user. Put the username as `user-manager`, set the email to be verified and save. After saving, assign a password to this user.

Next, update the Client roles under Role mappings to ensure that this user has the `manage-users`, `query-users`, `query-groups` and `view-users` roles. The screenshot below has reference configuration.

@TODO : User roles image

Use these username and password values for this user as the values for `sunbird_sso_username` and `sunbird_sso_password` in the configuration.

## Update Client & Secrets

Navigate to `Clients` and make the changes listed below to each of the clients. Only change the clients listed below. Settings for other clients need not be changed.

### account, broker, realm-management
Go to the `Credentials` tab and regenerate the Secret and Registration Access Token. Note both, you will need them in a later step.

### android
Change the Root URL to `https://sunbird.example.com`
Add a Valid Redirect URI `https://sunbird.example.com/oauth2callback`

### portal
Change the Root URL to `https://sunbird.example.com`
Add Valid Redirect URIs `https://sunbird.example.com/private/*` and `https://sunbird.example.com/`

### trampoline
Change the Root URL to `https://sunbird.example.com`
Go to the Credentials tab and regenerate the Secret and Registration Access Token. Use the secret as the value for the `sunbird_trampoline_secret` configuration.
