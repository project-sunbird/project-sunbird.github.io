---
type: landing
directory: developer-docs
title: Upgrading
page_title: Upgrading
description: Upgradation of services, dataset etc in Sunbird
published: true
allowSearch: true
---
This page is coming soon...


### Upgrading sunbird:

1. Pull the latest code of `project-sunbird/sunbird-devops`from the master branch 

2. Take the backup of all the databases. Follow steps here for taking backup. 

3. Run the script `./sunbird_upgrade.sh`  in `sunbird-devops/deploy`

**NOTE:** All the core services latest images versions are already updated in th master branch . If sunbird release any hotfix with a new image, goto to `sunbird-devops/deploy/deploy-core.sh`  & update. 

4. Re-run the `sunbird-devops/deploy/deploy-core.sh`  



# Steps to take backup 

* ssh to database server on which you want to take backup.

* git clone https://github.com/project-sunbird/sunbird-devops

* cd sunbird-devops/deploy/

### Cassandra :

**Backup:** 
	
   Take snapshot of cassandara db 
	
	`nodetool snapshot -t my_backup`
   
  Copying the snapshot to your backup directory

	./cassandra_backup.py --datadir /var/lib/cassandra/data --snapshotname my_backup --targetdir /backup/folder/$(date +%Y-%m-%d)

**Restore:**

Restore cassandra database
	           
	./cassandra_restore.py --cassandra_host ip_address --snapshotdir /backups/cassandra/$(date +%Y-%m-%d)

### Postgres :

**Backup:** 

Run the script
	
	./backup_postgres.sh

**Restore:**

Copy the backup file from the `/tmp/postgresql-backup/<backup_file>`

Run

	psql -f <backup_file> postgres

## Elasticsearch :

**Backup:**

Run script 

	./backup_elasticsearch.sh

**Restore:**

Copy the backup file from the `/tmp/elasticsearch-backup/<backup_file>`

Run
	
	./restore_elasticsearch.sh <path/to/the/restore_file>	
	
NOTE: If you are using our scripts to backup or restore cassandra, python should be installed on cassandra machine.



