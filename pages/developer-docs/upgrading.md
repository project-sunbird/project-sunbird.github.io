---
type: landing
directory: developer-docs
title: Upgrading Sunbird 
page_title: Upgrading Sunbird Services and Database Servers
description: Upgradation of services, dataset etc in Sunbird
published: true
allowSearch: true
---

## Overview

Upgrading to the latest version of Sunbird allows you to avail benefits of:

- Sunbird's new and enhanced features
- fixes done for bugs raised on the platform
- the latest updated versions of any third party component used within Sunbird  

* From release 1.5 onwards:
	
- All the services are maintained with same image gold version 
- Cassandra migration is introduced to update cassandra database schema


## Backup the Databases

1.Run `git clone https://github.com/project-sunbird/sunbird-devops`

2.cd `sunbird-devops/deploy/`

### Backup Cassandra

1. Taking the backup
    
   	`./cassandra_backup.py`
	
This step will create a <cassandra_backup-{year}-{month}-{date}> with all data and schema in your working directory.
		
### Backup Postgres

To take a backup of the Postgres database: 

1.Run the following script to take a full backup of the Postgres database
		
		./backup_postgres.sh
		
**Note:** Executing the command creates the backup file at the following location: 

		**/tmp/postgresql-backup** 

2.Postgres Backup includes the following databases:
       
a) api_manager -	Used by kong
b) badger      -	Used by badger services
c) Keycloak    -	Used by Keycloak
d) quartz      -	Used by sunbird backend services

### Backup Elastic Search 

To take a backup of Elastic Search databases: 

1.Run the following script to take the backup 
	
	  `./backup_elasticsearch.sh`

**Note:** Executing the command creates the backup file at **/etc/elasticsearch/backup** 

 2. Elasticsearch backup includes the following databases: 
		
a) searchindex      - Stores the user, org , course, batch data
b) sunbirdplugin    - Stores the plugin related data (object API)
c) sunbirddataaudit - Stores the user & organization audit history data

## Restore Databases

### Restore Cassandra

1. Copy the Cassandra backup to the instance where you want to restore 

2. Untar the backup

3. It'll create directory named cassandra_backup.

4. Run cqlsh -f 'cassandra_backup/db_schema.cql'. It'll restore all the schemas.

5. Restore data using the following command:
	           
   	`./cassandra_restore.py --host <cassandra_host_ip_address> <snapshotdir>`
    
    for example: `./cassandra_restore.py --host 10.10.10.10 cassandra_bakup`

### Restore Elastic Search

To restore the Elastic Search databases, follow these steps: 

1. Copy the backup file from `/tmp/elasticsearch-backup/<backup_file>` to the instance where you want to run the restore operation.

2. Run the following command: 	

	`./restore_elasticsearch.sh <path/to/the/restore_file`	

### Restore Postgres

To restore the Postgres database: 

1. Copy the backup file from  **/tmp/postgresql-backup/<backup_file>**

2. Run the command `./restore_postgres.sh`  
	
## Upgrading Sunbird Services 

   1. Pull the latest code of `project-sunbird/sunbird-devops` from its master branch
 
        `git -C sunbird-devops pull || git clone https://github.com/project-sunbird/sunbird-devops`
 
   2. Run the command `cd sunbird-devops/deploy && ./sunbird-install.sh`

**Note:** 

   - Executing the command deploys the latest version of Sunbird services and also updates the latest schema in the databases

   - The latest image versions of all the services are updated in the master branch. To get a hotfix image of any Sunbird service, update the minor version in the `sunbird-devops/deploy/deploy-core.sh` file and re-run the `sunbird-devops/deploy/deploy-core.sh` script.
