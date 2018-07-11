### Environment Variables for Content service
To run the Sunbird content services, you need to configure the following environment variables:
 	 
| S No. | Variable Name | Description| Purpose | Default Value |Path   |	
|---------|----------|---------|-------|-------|-------|
| 1  | ekstep_telemetry_storage_toggle | Toggle to make telemetry storage on and off for ekstep  |  It turns the telemetry off or on  | on |Sunbird-LMS |	
| 2  | sunbird_external_content_whitelisted_domains | To store the whitelisted domains (comma seperated) | It stores the white listed domains| youtube.com  |Sunbird-portal |	  
|  3 | sunbird_default_channel | The default channel to generate telemetry if nothing is sent from client headers<br/>Same as the one in learner-service<br/>Should be a valid root org | To have channel for each telemetry event generated |  |
|  4 | sunbird_content_plugin_base_url | proxy url to content plugins repo<br/>needed only in dev setup. In server environments, plugins are handled by the nginx proxy | To update plugins base url | https://qa.ekstep.in |
|  5 | sunbird_content_provider_api_base_url | It is the base url of content provider | it is used to update content provider url  | https://qa.ekstep.in/api |
|  6 | sunbird_content_provider_api_key | API Key of content provider for authorization | This value required for authorization in content provider  |  |
|  7 | sunbird_environment | The instance environment | It is used to identify the environment to send send the telemetry data with proper pdata and for other  related purposes |  |
|  8 | sunbird_instance | Represents the name of the instance<br/>It should be configured same as the value in player/learner-service | to set the name of the instance |  |
|  9 | sunbird_cassandra_ips | cassandra db ips to connnect | used to connect to cassandra db  | 127.0.0.1 |
|  10 | sunbird_cassandra_port | port number on which cassandra db is running | used to update cassandra port number | 9042 |
|  11 | sunbird_keycloak_auth_server_url | keycloak auth service url to connect | It is used to connect keycloak server | https://staging.open-sunbird.org/auth |
|  12 | sunbird_keycloak_realm | Represents the keycloak realm value | realm value of keycloak to update per installation | sunbird |
|  13 | sunbird_keycloak_client_id | Represents the keycloaks client ID  | Used to update the client ID | portal |
|  14 | sunbird_keycloak_public | Represents the keycloak type | It is the keycloak public type  | true |
|  15 | sunbird_image_storage_url | base url where images are stored after generating qrcode images | Used to edit the storage url |  |
|  16 | sunbird_dial_code_registry_url | The base url of the qr code image generated | It is used to set the base url for qr code |  |
|  17 | sunbird_azure_account_name | The azure account name for connecting to azure storage | It is used to connect azure account  |  |
|  18 | sunbird_azure_account_key | The azure account key for connecting to azure storage | The key used to connect to azure |  |
|  19 | sunbird_telemetry_sync_batch_size | The size of the batch to sync  | Used to set the size of events to be synced | 20 |
