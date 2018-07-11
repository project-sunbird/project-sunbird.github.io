---
type: landing
directory: developer-docs/configuring_sunbird
title: Configuration Variables for Portal 
page_title: Configuration Variables for Portal 
description: For adopters and users to get started on Sunbird. It provides the list of configuration that need to be done to customize the sunbird 
published: true
allowSearch: false
---

### Environment Variables for Portal

To run the Sunbird portal services, you need to configure the following environment variables: 

|  **S No** | **Variable Name** | **Description** | **Purpose** | **Defult Value** | **Path** |
|  ------ | ------ | ------ | ------ | ------ | ------ |
|  1 | sunbird_portal_realm | It represents the keycloak realm value | realm value of keycloak to update per installation | sunbird | Sunbird Portal |
|  2 | sunbird_portal_auth_server_url | Represents the keycloak authorization service url | It is used to connect keycloak server | https://staging.open-sunbird.org/auth | Sunbird Portal |
|  3 | sunbird_portal_auth_server_client | Represent the client ID of the keycloak client | Used to update the client id  | portal | Sunbird Portal |
|  4 | sunbird_environment | Represents the environment where the instance is running | to send the telemetry with proper pdata and other purposes |  | Sunbird Portal |
|  5 | sunbird_instance | Represents the name of the instance | to set the name of the instance |  | Sunbird Portal |
|  6 | sunbird_learner_player_url | Represents the Learner service Proxy Url | To change learner service Proxy Url | https://staging.open-sunbird.org/api/ | Sunbird Portal |
|  7 | sunbird_content_player_url | Represents Content service Proxy Url | To change content service Proxy Url | https://staging.open-sunbird.org/api/ | Sunbird Portal |
|  8 | sunbird_content_proxy_url | Represents the Proxy url address to load plugins | Proxy url to load plugins | https://staging.open-sunbird.org | Sunbird Portal |
|  9 | sunbird_default_tenant | This value represents the default tenant for installation | Used to set default tenant for installation |  | Sunbird Portal |
|  10 | sunbird_api_auth_token | Represents athe uth token to connect APIs | token for connecting services |  | Sunbird Portal |
|  11 | sunbird_telemetry_packet_size | Represents the size of the batch to sync  | Used to set the size of events to be synced | 20 | Sunbird Portal |
|  12 | sunbird_echo_api_url | It is used to validate the JWT Token from trampoline service  | URL which is used to validate tokem from sso | https://staging.open-sunbird.org/api/echo/ | Sunbird Portal |
|  13 | sunbird_autocreate_trampoline_user | In case, there are no users, auto create a user from  the trampoline service | It is used to change the handle of the user creation from trampoline service | true | Sunbird Portal |
|  14 | sunbird_trampoline_client_id |Represents the trampoline client ID  | This ID is used to identify the client using the trampoline service  | trampoline | Sunbird Portal |
|  15 | sunbird_trampoline_secret | Represents the trampoline secret |  |  |  |
|  16 | sunbird_session_store_type | Represents the  storage for storing sessions of portal | this used to set the storage type | in-memory | Sunbird Portal |
|  17 | sunbird_portal_title_name | Represents the title that is displayed in browser | used to update title name for browser | Sunbird | Sunbird Portal |
|  18 | sunbird_portal_cdn_url | Represensts the CDN BASE URL where the static assets are stored | To update the cdn based on implementation |  | Sunbird Portal |
|  19 | sunbird_portal_default_language | It is used to set the default language of portal | The display language of the portal  | en | Sunbird Portal |
|  20 | sunbird_dataservice_url |  Respresents the data service URL | It is the data service url for accessing the data services  |https://staging.open-sunbird.org/api/   | Sunbird Portal |
|  21 | sunbird_keycloak_public | Represents the keycloak  |  | true | Sunbird Portal |
|  22 | sunbird_keycloak_realm |  Represents the keycloak realm|  | sunbird | Sunbird Portal |
|  23 | sunbird_content_channel_filter_type | Represents the filter type to show content based on the applied filter. by default it is set to all  which shows all content, if set to "self" it shows current channel content |  | all | Sunbird Portal |
|  24 | sunbird_android_app_url | Represents the android app url in play store | It is used to set android app url | http://www.sunbird.org | Sunbird Portal |
|  25 | sunbird_enable_signup | This is used to enable and disable signup funcationality |  | true | Sunbird Portal |
|  26 | sunbird_api_response_cache_ttl | Represents the Time to Live (TTL) for API response cache in seconds | Used to set cache for api responses in seconds | 600 | Sunbird Portal |
 	 
 	 
