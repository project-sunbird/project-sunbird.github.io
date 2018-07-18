---
type: landing
directory: developer-docs/configuring_sunbird
title: Portal Service Environment Variables  
page_title: Portal Service Environment Variables 
description: List of environment variables needed to operationalize and customize Sunbird 
published: true
allowSearch: true
---

The following is a list of environment variables and their default values, as required to run the Sunbird portal service. The list also gives you an indication of the purpose of the variable. Modifying the variable value, allows you to change default behavior based on your need or purpose.      

|  **S No** | **Variable Name** | **Description** | **Purpose** | **Defult Value** | **Path** |
|  ------ | ------ | ------ | ------ | ------ | ------ |
|  1 | sunbird_portal_realm | It represents the keycloak realm value | realm value of keycloak to update per installation | sunbird | Sunbird Portal |
|  2 | sunbird_portal_auth_server_url | Represents the keycloak authorization service URL | It is used to connect keycloak server | https://staging.open-sunbird.org/auth | Sunbird Portal |
|  3 | sunbird_portal_auth_server_client | Represents the client ID of the keycloak client | Used to update the client ID  | portal | Sunbird Portal |
|  4 | sunbird_environment | Represents the environment where the instance is running | Used to send the telemetry with proper pdata and other purposes |  | Sunbird Portal |
|  5 | sunbird_instance | Represents the name of the instance | Used to set up the name of the instance |  | Sunbird Portal |
|  6 | sunbird_learner_player_url | Represents the Learner service Proxy URL | Used to change the learner service Proxy URL | https://staging.open-sunbird.org/api/ | Sunbird Portal |
|  7 | sunbird_content_player_url | Represents the Content service Proxy URL | To change content service Proxy URL | https://staging.open-sunbird.org/api/ | Sunbird Portal |
|  8 | sunbird_content_proxy_url | Represents the Proxy URL address to load plugins | Proxy URL to load plugins | https://staging.open-sunbird.org | Sunbird Portal |
|  9 | sunbird_default_tenant | Represents the default tenant of the installation | Used to set default tenant for installation |  | Sunbird Portal |
|  10 | sunbird_api_auth_token | Represents the auth token to connect APIs | The token used to connect the services |  | Sunbird Portal |
|  11 | sunbird_telemetry_packet_size | Represents the size of the batch to sync data  | Used to set the size of events to be synced | 20 | Sunbird Portal |
|  12 | sunbird_echo_api_url | Represents the URL used to validate the SSO token | Used to validate the JWT Token from the trampoline service | https://staging.open-sunbird.org/api/echo/ | Sunbird Portal |
|  13 | sunbird_autocreate_trampoline_user | In case there are no users, auto create a user from  the trampoline service | It is used to change the handle for user creation from trampoline service | true | Sunbird Portal |
|  14 | sunbird_trampoline_client_id |Represents the trampoline client ID  | This ID is used to identify the client using the trampoline service  | trampoline | Sunbird Portal |
|  15 | sunbird_trampoline_secret | Represents the trampoline secret |  |  |  |
|  16 | sunbird_session_store_type | Represents the  storage used to store portal sessions | Used to set the storage type | in-memory | Sunbird Portal |
|  17 | sunbird_portal_title_name | Represents the title displayed in browser | Used to update title name for browser | Sunbird | Sunbird Portal |
|  18 | sunbird_portal_cdn_url | Represents the CDN BASE URL where static assets are stored | To update the CDN based on implementation |  | Sunbird Portal |
|  19 | sunbird_portal_default_language | It is used to set the default language of the portal | The display language of the portal  | en | Sunbird Portal |
|  20 | sunbird_dataservice_url |  Represents the data service URL | It is the data service URL to access the data services  |https://staging.open-sunbird.org/api/   | Sunbird Portal |
|  21 | sunbird_keycloak_public | Represents the keycloak  |  | true | Sunbird Portal |
|  22 | sunbird_keycloak_realm |  Represents the Keycloak realm|  | sunbird | Sunbird Portal |
|  23 | sunbird_content_channel_filter_type | Represents the filter type to show content based on the applied filter. By default it is set to 'all' which displays all content. If set to 'self', it shows the current channel content |  | all | Sunbird Portal |
|  24 | sunbird_android_app_url | Represents the android app URL in play store | Used to set the android app URL | http://www.sunbird.org | Sunbird Portal |
|  25 | sunbird_enable_signup | This is used to enable and disable signup funcationality |  | true | Sunbird Portal |
|  26 | sunbird_api_response_cache_ttl | Represents the Time-to-Live (TTL) for the API response cache in seconds | Used to set cache for API responses in seconds | 600 | Sunbird Portal |
 	 
 	 
