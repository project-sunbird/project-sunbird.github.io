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

Upgrading to the latest version of Sunbird allows you to avail benefits of new and enhanced features and bugs fixed on the platform as well the latest updated versions of any third party component used by it.  

* From release-1.5:
	- All the services are maintained with same image gold  version 
	- Cassandra migration is introduced to update  cassandra database schema.
 
## Upgrading Sunbird Services 

1. Pull the latest code of `project-sunbird/sunbird-devops` from the master branch.
 
2. It is good practice to take a full backup of all the databases before updating the new schema. Follow steps [here](developer-docs/installation/medium_scale_deploy/#taking-a-back-up-of-database-servers) to take backup. 

3. Run `./sunbird-install.sh`. This will deploy the latest version of sunbird services and also update the latest schema on databases.

**Note:** Latest images versions of all the services are updated in the master branch. To get the particular hotfix image of any Sunbird service, update the minor version in the `sunbird-devops/deploy/deploy-core.sh` file. Re-run the `sunbird-devops/deploy/deploy-core.sh`


## Backup and Restore of Sunbird Databases

1. ssh to the database server on which you want to take backup.

2. Run `git clone https://github.com/project-sunbird/sunbird-devops`

3. cd `sunbird-devops/deploy/`

### Cassandra

**Backup:** 
	
   * Take a snapshot of Cassandara database using  
	
		nodetool snapshot -t my_backup
   
  * Copy the snapshot to your backup directory. 
    
        ./cassandra_backup.py <cassandra_data_path> <snapshot_name> <path_to_backup_directory>

      for example:

        ./cassandra_backup.py  /var/lib/cassandra/data my_backup  cassandra_backup_20180412
		
 * Above command creates the snapshot of all the keyspaces mentioned below. 
		
		portal         -  Stores the session data
		dialcodes      -  Stores the energized text book details
		sunbirdplugin  -  Stores the custom or plugin data(used by announcment team as an object api internally)
		sunbird	       -  Stores the org,user,course,batch,badgr etc..
		

**Restore:**

* Copy the Cassandra backup snapshot to the instance where you want to run restore.

* Restore Cassandra database using command
	           
      ./cassandra_restore.py <cassandra_host_ip_address> <snapshotdir>
      
  for example: 

	  ./cassandra_restore.py 10.10.10.10 ./cassandra_bakup_20180412


### Postgres

**Backup:** 

* Run the script below to take a full backup of the Postgres database.
		
		./backup_postgres.sh
		
* Above command creates the backup file in the location `/tmp/postgresql-backup`. 

* Backup of Postgres is done for below databases
       
        api_manager -	Used by kong
        badger	    -	Used by badger services
        Keycloak    -	Used by Keycloak
        quartz      -	Used by sunbird backend services
	

**Restore:**

* Copy the backup file from the `/tmp/postgresql-backup/<backup_file>`

* Run the below command for restore
		
		./restore_postgres.sh
	

### Elasticsearch 

**Backup:**

* Run the below script for backup 
	
		./backup_elasticsearch.sh

* Above command creates the backup file in the location `/etc/elasticsearch/backup`. 

* Backup of Elasticsearch is done for below databases
		
		searchindex      - Stores the user, org , course, batch data
		sunbirdplugin    - Stores the plugin related data (object API)
		sunbirddataaudit - Stores the user & org audit history data.

**Restore:**

Copy the backup file from the `/tmp/elasticsearch-backup/<backup_file>` to the instance where you want to run restore.

Run
	
	./restore_elasticsearch.sh <path/to/the/restore_file	
	
**Note:** Install Python on the Cassandra machine, if you use our scripts to backup or restore the Cassandra database.

