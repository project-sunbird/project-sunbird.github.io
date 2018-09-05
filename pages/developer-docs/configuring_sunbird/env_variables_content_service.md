---
type: landing
directory: developer-docs/configuring_sunbird
title: Content Service Environment Variables
page_title: Content Service Environment Variables
description: List of Environment variables required to operationalize the Sunbird content service 
published: true
allowSearch: true
---

The following is a list of environment variables and their default values, as required to run the Sunbird content service. The list also gives you an indication of the purpose of the variable. Modifying the variable value, allows you to change default behavior based on your need or purpose.  
 	 
| S No. | Variable Name | Description| Purpose | Sample Value |
|---------|----------|---------|-------|-------|-------|
| 1  | ekstep_telemetry_storage_toggle | Represents the toggle to turn the EkStep telemetry storage on or off |  Used to turn the telemetry off or on  | on |	
| 2  | sunbird_extcont_whitelisted_domains | Represents the file that stores the whitelisted domains in a comma-separated format | Used to store the white listed domains| youtube.com.youtu.be |  
|  3 | sunbird_default_channel | Represents the default channel used to generate telemetry, if nothing is sent from client headers<br/>This is the same as specified in the Learner service<br/>It should be a valid root org | Used to ensure there is a channel for each telemetry event generated |  |
| 4 | sunbird_content_plugin_base_url | Represents the proxy URL to the content plugins repository<br/> This is needed only in the dev setup. In the server environment, plugins are handled by the nginx proxy | Used to update the plugins base URL | https://qa.ekstep.in |
|  5 | sunbird_content_provider_api_base_url | Represents the base URL of the content provider | Used to update the content provider URL  | https://qa.ekstep.in/api |
|  6 | sunbird_content_provider_api_key | Represents the API Key used to authorize the content provider | Used to authorize the content provider  |  |
|  7 | sunbird_environment | Represents the instance environment | Used to identify the environment to which to send telemetry data with proper pdata. It is also used for other related purposes |  |
|  8 | sunbird_instance | Represents the name of the instance<br/> This should be the same as the value in the player/learner-service | Used to set the name of the instance |  |
|  9 | sunbird_cassandra_ips | Represents the IP address of the Cassandra DB to connnect the Sunbird Content service | Used to connect to cassandra db  | 127.0.0.1 |
|  10 | sunbird_cassandra_port | The port number on which the Cassandra DB is running | Used to update the Cassandra port number | 9042 |
|  11 | sunbird_keycloak_auth_server_url | The URL of the Keycloak auth service to connect the Sunbird Content service | Used to connect the Keycloak server | https://staging.open-sunbird.org/auth |
|  12 | sunbird_keycloak_realm | Represents the keycloak realm value | Used to update the realm value of Keycloak, per installation | Sunbird |
|  13 | sunbird_keycloak_client_id | Represents the client ID in Keycloak  | Used to update the client ID in Keycloak | portal |
|  14 | sunbird_keycloak_public | Represents the Keycloak type | Used to specify the keycloak public type  | true |
|  15 | sunbird_image_storage_url | Represents the base URL where images are stored after generating the qrcode images | Used to edit the storage URL |  |
|  16 | sunbird_dial_code_registry_url | Represents the base URL of the qr code image generated | Used to set the base URL for qr code |  |
|  17 | sunbird_azure_account_name | Represents the Azure account name to connect to Azure storage | Used to connect the Azure account  |  |
|  18 | sunbird_azure_account_key | Represents the azure account key to connect to the Azure storage | Used to connect to Azure |  |
|  19 | sunbird_telemetry_sync_batch_size | Represents the batch size to sync data  | Used to set the size of events to be synced | 20 |
|  20 | sunbird_content_service_whitelisted_channels | Represents list of whitelisted channels (comma separated) | Used to whitelist channels | $.instance.all |
|  21 | sunbird_content_service_blacklisted_channels | Represents list of blacklisted channels (comma seperated) | Used to blacklist channels | 1.23E+19 | 
|  22 | sunbird_content_service_channel_refresh_cron | Represents the node cron interval string | Used to run cron every 5 minutes. enabled only if $.instance.all is present in whitelisted channels) | */5**** | 
|  23 | sunbird_content_service_whitelisted_framework| Represents list of whitelisted frameworks (comma seperated) | Used to whitelist frameworks while searching for content | NCF, NCFCOPY |
|  24 | sunbird_content_service_blacklisted_contenttype | Represents list of blacklisted content types(comma sepertaed) | Used to blacklist contenttype while searching for content | Asset | 
|  25 | sunbird_content_service_blacklisted_resourcetype | Represents list of blacklisted resource types(comma seperated) | Used to blacklist contenttype while searching for content | Lesson plan | 
|  26 | sunbird_content_service_blacklisted_mimetype | Represents list of blacklisted mime types(comma seperated) | Used to blacklist mimetype while searching for content | video/x-youtube | 
|  27 | sunbird_content_service_enable_logging | Required to enable or disable the content service logging | | True |
|  28 | sunbird_content_repo_api_base_url | Represents the proxy URL to the content repository | | https://qa.ekstep.in/api |
|  29 | sunbird_content_repo_api_key | Represents the proxy URL api key for the content repository | | |
|  30 | sunbird_search_service_api_base_url | Represents the proxy URL to the search service| | https://qa.ekstep.in/api/search|
|  31 | sunbird_search_service_api_key | Represents the proxy URL api key for the search service | | True |
|  32 | sunbird_dial_repo_api_base_url | Represents the proxy URL to the dial repository | | https://qa.ekstep.in/api |
|  33 | sunbird_dial_repo_api_key | Represents the proxy URL api key for the dial repository | | |
|  34 | sunbird_plugin_repo_api_base_url | Represents the proxy URL to the plugin repository for searching plugins | | https://qa.ekstep.in/api |
|  35 | sunbird_plugin_repo_api_key | Represents the proxy URL api key to the plugin repository for searching plugins | | |
|  36 | sunbird_data_service_api_base_url | Represents the proxy URL to the data service | | https://qa.ekstep.in/api |
|  37 | sunbird_data_service_api_key | Represents the proxy URL api key for the data service | | |
|  38 | sunbird_language_service_api_base_url |  Represents the proxy URL to the language service | | https://qa.ekstep.in/api/language|
|  39 | sunbird_language_service_api_key | Represents the proxy URL api key for the language service | | |
|  40 | sunbird_portal_base_url | Used to construct the content link which will be sent in the email and also used to read the Form API | | https://staging.open-sunbird.org |






