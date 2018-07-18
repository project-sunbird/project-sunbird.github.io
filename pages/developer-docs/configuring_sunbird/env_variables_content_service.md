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
 	 
| S No. | Variable Name | Description| Purpose | Default Value |Path   |	
|---------|----------|---------|-------|-------|-------|
| 1  | ekstep_telemetry_storage_toggle | Represents the toggle to turn the EkStep telemetry storage on or off |  Used to turn the telemetry off or on  | on |Sunbird-LMS |	
| 2  | sunbird_external_content_whitelisted_domains | Represents the file that stores the whitelisted domains in a comma-separated format | Used to store the white listed domains| youtube.com  |Sunbird-portal |	  
|  3 | sunbird_default_channel | Represents the default channel used to generate telemetry, if nothing is sent from client headers<br/>This is the same as specified in the Learner service<br/>It should be a valid root org | Used to ensure there is a channel for each telemetry event generated |  |  |
| 4 | sunbird_content_plugin_base_url | Represents the proxy URL to the content plugins repository<br/> This is needed only in the dev setup. In the server environment, plugins are handled by the nginx proxy | Used to update the plugins base URL | https://qa.ekstep.in |
|  5 | sunbird_content_provider_api_base_url | Represents the base URL of the content provider | Used to update the content provider URL  | https://qa.ekstep.in/api |
|  6 | sunbird_content_provider_api_key | Represents the API Key used to authorize the content provider | Used to authorize the content provider  |  | |
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
