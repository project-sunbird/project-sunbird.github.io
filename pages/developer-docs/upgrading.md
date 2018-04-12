---
type: landing
directory: developer-docs
title: Upgrading
page_title: Upgrading
description: Upgradation of services, dataset etc in Sunbird
published: true
allowSearch: true
---
## Overview
Upgrading to the latest version of Sunbird allows you to avail benefits of new and enhanced features and bugs fixed on the platform as well the latest updated versions of any third party component used by it.  

## Upgrading Sunbird

1. Pull the latest code of `project-sunbird/sunbird-devops`from the master branch 

2. Take a backup of all the databases. Follow steps here provided in the following section to take a backup. 

3. Run the script `./sunbird_upgrade.sh`  in `sunbird-devops/deploy`

**Note:** All the core services latest images versions are already updated in the master branch . To get the hotfix of any Sunbird with a new image, go to `sunbird-devops/deploy/deploy-core.sh`  and update it 

4. Re-run the `sunbird-devops/deploy/deploy-core.sh`  


## Taking a Back Up of Database Servers

1. ssh to database server on which you want to take backup.

2. git clone https://github.com/project-sunbird/sunbird-devops

3. cd sunbird-devops/deploy/

### Cassandra

**Backup:** 
	
   Take a snapshot of Cassandara database using 
	
	`nodetool snapshot -t my_backup`
   
  Copy the snapshot to your backup directory using

	./cassandra_backup.py --datadir /var/lib/cassandra/data --snapshotname my_backup --targetdir /backup/folder/$(date +%Y-%m-%d)

**Restore:**

Restore Cassandra database using
	           
	./cassandra_restore.py --cassandra_host ip_address --snapshotdir /backups/cassandra/$(date +%Y-%m-%d)

### Postgres

**Backup:** 

Run the script
	
	./backup_postgres.sh

**Restore:**

Copy the backup file from the `/tmp/postgresql-backup/<backup_file>`

Run

	psql -f <backup_file> postgres

### Elasticsearch 

**Backup:**

Run the script 

	./backup_elasticsearch.sh

**Restore:**

Copy the backup file from the `/tmp/elasticsearch-backup/<backup_file>`

Run
	
	./restore_elasticsearch.sh <path/to/the/restore_file>	
	
**Note:** Install Python on the Cassandra machine, if you use our scripts to backup or restore the Cassandra database.



