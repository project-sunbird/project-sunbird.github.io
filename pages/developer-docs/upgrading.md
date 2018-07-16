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

Upgrading to the latest version of Sunbird allows you to avail benefits of new and enhanced features and ensures that bugs are fixed on the platform as well the latest updated versions of any third party component used by it.  

* From release 1.5 onwards:
	
	- All the services are maintained with same image gold version 
	- Cassandra migration is introduced to update cassandra database schema.

## Prerequisites

Ensure that you have Python installed on the Cassandra machine

## Upgrading Sunbird Services 

   1. Pull the latest code of `project-sunbird/sunbird-devops` from the master branch.
 
   2. It is recommended to take a full backup of all the databases before updating the schema 

   3. Follow the steps [here](developer-docs/installation/medium_scale_deploy/#taking-a-back-up-of-database-servers) to take the backup 

   4. Run the following command `./sunbird-install.sh`

**Note:** 

   - Executing the command will deploy the latest version of Sunbird services and also update the latest schema in databases

   - Latest image versions of all the services are updated in the master branch. To get any particular hotfix image of any Sunbird service, update the minor version in the `sunbird-devops/deploy/deploy-core.sh` file and re-run the `sunbird-devops/deploy/deploy-core.sh` script.

## Backup the Databases

   1. SSH to the database server where you want to store your backup

   2. Run the command `git clone https://github.com/project-sunbird/sunbird-devops`

   3. cd `sunbird-devops/deploy/`

### Backup Cassandra

Ensure that the prerequisites are met and follow the steps to backup Cassandra database: 

   1. Take a snapshot of Cassandara database using the following command  
	
	 `nodetool snapshot -t my_backup`
   
   2. Copy the snapshot to your backup directory
    
   	`./cassandra_backup.py <cassandra_data_path> <snapshot_name> <path_to_backup_directory>` 
	
	For example: `./cassandra_backup.py  /var/lib/cassandra/data my_backup  cassandra_backup_20180412`
		
 **Note:** Executing the command creates the snapshots of all the keyspaces as:  
		
		a) portal         -  Stores the session data
		b) dialcodes      -  Stores the energized text book details
		c) sunbirdplugin  -  Stores the custom or plugin data(used in announcement feature (Object API)
		d) sunbird	  -  Stores the organization ,user, course, batch, badger etc.
		
### Restore Cassandra

Ensure that the prerequisites are met and follow the steps to restore the Cassandra database: 

   1. Copy the Cassandra backup snapshot to the instance where you want to run restore.

   2. Restore Cassandra database using command
	           
   	`./cassandra_restore.py <cassandra_host_ip_address> <snapshotdir>` for example: `./cassandra_restore.py 10.10.10.10 ./cassandra_bakup_20180412`

### Backup Postgres

The following steps must be followed to backup Postgres database: 

   1. Run the script below to take a full backup of the Postgres database.
		
		./backup_postgres.sh
		
**Note:** Executing the command creates the backup file at the following location 

		`/tmp/postgresql-backup`. 

   2. The Backup of Postgres includes the following databases:
       
        a) api_manager -	Used by kong
        b) badger      -	Used by badger services
        c) Keycloak    -	Used by Keycloak
        d) quartz      -	Used by sunbird backend services
	

## Restore Postgres

The following steps must be followed to restore Postgres database: 

   1. Copy the backup file from the `/tmp/postgresql-backup/<backup_file>`

   2. Run the command `./restore_postgres.sh` to start restoring 
	

### Backup Elastic Search 

The following steps must be followed to backup Elastic Search database: 

   1. Run the following script to take the backup 
	
	  `./backup_elasticsearch.sh`

**Note:** Executing the command creates the backup file at the following location `/etc/elasticsearch/backup` 

   2. Backup of Elasticsearch includes the following databases: 
		
		a) searchindex      - Stores the user, org , course, batch data
		b) sunbirdplugin    - Stores the plugin related data (object API)
		c) sunbirddataaudit - Stores the user & organization audit history data

## Restore Elastic Search

The following steps must be followed to restore Elastic Search database: 

   1. Copy the backup file from `/tmp/elasticsearch-backup/<backup_file>` to the instance where you want to run the restore operation.

   2. Run the following command: 	

	`./restore_elasticsearch.sh <path/to/the/restore_file`	

**Note:** Executing this command ensures that elastic search database is restored. 
