---
type: landing
directory: developer-docs/server-installation/
title: Configuring the Installer
page_title: Configuring the Installer
description: Prerequisites for setting up Sunbird on a server
allowSearch: true
---

## Installation Procedure

To install Sunbird choose one docker swarm manager as the installation server and execute the instructions explained in this section. In a two server setup, execute the following steps from the server designated to run the application server

## Getting the Installer

* Clone the installer repository from github.com


    git clone https://github.com/project-sunbird/sunbird-devops.git
    cd sunbird-devops
    git checkout tags/release-1.10
    cd deploy

##### Description of commands:
* git clone: To clone the repository on your local
* cd sunbird-devops: To change the directory to "sunbird-devops" folder
* git checkout {branch name}: To change from the current branch to tags/release branch
* cd deploy: To change the directory to deploy folder. You can further run your git commands here

## Configuring the Installer

* Update the configuration parameters in the `config` file. The config file is a YAML file.

The configuration parameters are explained in the following table: 

   | Variable Name | Description   | Mandatory|
   |-------------- |---------------|----------|
   |**ansible_private_key_path** | The path of the private SSH key file for the ssh_ansible_user. Ansible uses this file to SSH into all servers in this Sunbird setup        |YES|
   |**app_address_space**         | The application server address space. For example, 10.3.0.0/24   | YES |
   |**backup_storage_key**| The storage key of the Elasticsearch backup |YES|
   |**badger_admin_email**| The email ID of the badger administrator |YES| 
   |**badger_admin_password**| The password for the badger administrator |YES| 
   |**cassandra_host**|The IP address of the Cassandra database.| NO |
   |**cert_path**| Path to the .cert file in the SSL certificate for nginx. This variable is not mandatory, if the value is set to http| NO |
   |**database_host**|The private IP address of the database server | NO |
   |**database_password**       |  The common password for all the databases | NO |
   |**dns_name**    | The domain name or IP address of your installation. Provide the IP address, if want to access Sunbird over a network or if you do not have a domain name.     |YES|
   |**ekstep_api_base_url**| The base URL for all EkStep APIs. The URL for non production environment is: https://qa.ekstep.in/api and production is: https://api.ekstep.in |YES|
   |**ekstep_api_key**|The JWT token generated using Authtoken and secret |YES|
   |**ekstep_proxy_base_url**|The proxy URL for EkStep. The URL for non production environment is: https://qa.ekstep.in  and production: https://community.ekstep.in |YES|
   |**elasticsearch_host**       |A comma-separated (,) list of Elasticsearch database IP addresses. |No|
   |**env**    | The name of identifying the environment into which Sunbird is deployed. For example; development, test, staging, production, etc. |YES|
   |**grafana_admin_password**| Password for Grafana dashboard |NO|   
   |**implementation_name** | Name of your Sunbird implementation|YES|   
   |**keycloak_admin_password** |The Keycloak admin console password. The default admin username is **admin**  |YES|
   |**keycloak_host** | A comma-separated (,) list of Keycloak IP addresses    |NO|
   |**key_path** | Path to .key file  in the SSL certificate for nginx. This variable is not mandatory, if the value of **proto** is set to http |NO|
   |**mail_server_host**| The mail server host used to send alerts |NO|   
   |**mail_server_port**| The port at which the mail server listens to |NO |  
   |**mail_server_password**| Password of the account permitted to send Sunbird email alerts |NO| 
   |**mail_server_username**| Username of the account permitted to send Sunbird email alerts |NO| 
   |**monitor_alerts_slack_channel**| List of SLACK channels which would like to receive Sunbird alert emails |NO| 
   |**monitor_alerts_slack_url**| SLACK application webhook URL  |NO| 
   |**postgres_master_host**| The IP address of the Postgres master database   |NO|
   |**postgres_slave_host**| The IP address of the Postgres slave database. If you do not need a slave node, specify the IP address of the master |NO| 
   |**proto**| The web protocol to be used. This is either http or https. Use http if the value of the **dns_name** variable is an IP address or if you have a domain but do not want SSL for trials | YES|
   |**proxy_prometheus**| Setting up Prometheus Proxy |NO| 
   |**ssh_ansible_user**  | The SSH user name that has sudo access to all servers.      |YESYES|
   |<a href="developer-docs/configuring_sunbird/sso_publickey" target="_blank">**sso_password</a> |The password for the keycloak SSO user. The default user is **user-manager**. You can change it from the Keycloak GUI|yes|
   |**swarm_manager_host** |A comma-separated (,) list of the IP addresses of swarm managers |no|
   |**swarm_node_host** | A comma-separated (,) list of swarm node IP addresses |no| 
   |**sunbird_azure_storage_account**  | The Azure storage account for the badger service     |YES|
   |**sunbird_azure_storage_key**  | The Azure storage key for the badger service    |YES|
   |**sunbird_default_channel**| channel name with which you are creating the organization |YES| 
   |**sunbird_image_storage_url**| The Azure image url for the badger service |YES|
   |**sunbird_installation_email**| The Sunbird installation email ID |no|
   |**sunbird_telemetry_pdata_id**| The Sunbird telemetry pdata ID, for example <br> {env}.{implimentation_name}.learning.service |no| 
   | **sudo_passwd**       |In case passwordless SSH has not been enabled, this will be the plaintext password of the user account which will log into all other servers in the Sunbird setup|NO|  
   |**sunbird_sso_publickey**| For creation of User, http://<dns_name>/auth -> realm settings -> keys -> public keys (click on public keys) and paste the value |YES|  
   |**trampoline_secret**|The Trampoline secret for Keycloak. The secret must be a minimum of 8 characters   |no|
   |**vault_postgres_exporter_password**| postgres vault exporter password |no|  
   |**vault_proxy_prometheus_admin_creds**| prometheus admin password |no|    




