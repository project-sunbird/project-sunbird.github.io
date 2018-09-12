---
type: landing
directory: developer-docs/configuring_sunbird/
title: User channel migration
page_title: User channel migration
description: User channel migration
published: true
allowSearch: true
---

## Overview
Sunbird, from its release version 1.7 onwards, captures the channel details of the tenant organization for all users in the channel column of user table in cassandra database. Users onboarded prior to this release version will not have channel values, and thus to ensure data consistency across users, this migration has to be done to set the channel value for all the existing users based on their root organisation ID.

## Prerequisites

To run the migration script, ensure you have:

1. Access to cassandra database
2. A backup of sunbird keyspace in Cassandra DB.

## Configuration Parameters
The following parameters needs to be passed as arguments for the channel value migration job

 S.No. | Parameter | Description | Example 
-------|-----------|-------------|---------
1 | sunbird_cassandra_server | Cassandra DB IP Address| 198.168.1.1
2 | sunbird_cassandra_port | Cassandra DB Port Number | 9042 
3 | sunbird_cassandra_username* | Cassandra DB User Name | username 
4 | sunbird_cassandra_password* | Cassandra DB Password | password 
5 | sunbird_cassandra_keyspace  | Cassandra DB Keyspace Name | demodb 
6 | sunbird_channel_migration_log_file | Path to CSV file where migration logs are stored | \home\channel_migration_log.csv 

> Note: If authentication is not required, pass `""` for parameters, username, and password

## Migration Script

To migrate channel value for the users:

1. Extract the archive file (sunbird-utils/cassandra-migration-etl/r1.7/UserMigrationUpdateChannelBin.zip) that contains the script for channel value migration

2. Run the following command to migrate the data
<pre> 
UserMigrationUpdateChannel_run.sh --context_param sunbird_cassandra_server="{sunbird_cassandra_server}" 0--context_param sunbird_cassandra_port="{sunbird_cassandra_port}" --context_param sunbird_cassandra_username="{sunbird_cassandra_username}" --context_param sunbird_cassandra_password="{sunbird_cassandra_password}" --context_param sunbird_cassandra_keyspace="{sunbird_cassandra_keyspace}" --context_param sunbird_channel_migration_log_file="{sunbird_channel_migration_log_file}"
</pre>
3. On successful migration, the log is available in the configured file {sunbird_channel_migration_log_file}

4. To cross-check whether all users have channel value, the following queries can be used

 - Query to fetch number of users
     ```select count(*) from user;```
 - Query to fetch number of users with channel value
     ```select count(channel) from user;```
   
