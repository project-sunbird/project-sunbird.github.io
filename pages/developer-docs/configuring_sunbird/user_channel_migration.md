---
type: landing
directory: developer-docs/configuring_sunbird/
title: User channel migration
page_title: User channel migration
description: User channel migration
allowSearch: false
---

## Overview

Since Sunbird release-1.7, channel of the tenant organisation is being captured for all users in channel column of user table. As of now, the channel value is empty for the users who were onboarded before release-1.7. To ensure data consistency across users, this migration needs to be done where channel value will be set for the existing users based on their root organisation ID.

## Prerequisites

To run the migration script:

1. Access to cassandra database
2. Before migrating any data, take a backup of sunbird keyspace in Cassandra DB.

## Configuration Parameters
The following parameters needs to be passed as arguments for the channel value migration job

| S.No. | Parameter | Description | Example |
| 1 | sunbird_cassandra_server | Cassandra DB IP Address| 198.168.1.1|
| 2 | sunbird_cassandra_port | Cassandra DB Port Number | 9042 |
| 3 | sunbird_cassandra_username* | Cassandra DB User Name | username |
| 4 | sunbird_cassandra_password* | Cassandra DB Password | password |
| 5 | sunbird_cassandra_keyspace  | Cassandra DB Keyspace Name | demodb |
| 6 | sunbird_channel_migration_log_file | Path to CSV file where migration logs are stored | \home\channel_migration_log.csv |

*if authentication is not required, pass `""` in this parameter

## Run the Migration Script

To migrate channel value for the users:

1.Extract the archive file (sunbird-utils/cassandra-migration-etl/r1.7/UserMigrationUpdateChannelBin.zip) that contains the script for channel value migration

2.Run the corresponding script to migrate the data
 
 - Run the following command:
     ```
     UserMigrationUpdateChannel_run.sh --context_param sunbird_cassandra_server="{sunbird_cassandra_server}" --context_param sunbird_cassandra_port="{sunbird_cassandra_port}" --context_param sunbird_cassandra_username="{sunbird_cassandra_username}" --context_param sunbird_cassandra_password="{sunbird_cassandra_password}" --context_param sunbird_cassandra_keyspace="{sunbird_cassandra_keyspace}" --context_param sunbird_channel_migration_log_file="{sunbird_channel_migration_log_file}"
     ```

3. Migration log will be available in the configured file {sunbird_channel_migration_log_file}

4. To cross-check whether all users have channel value, the following queries can be used.

 - Query to fetch number of users
     ```
     select count(*) from user;
     ```

 - Query to fetch number of users with channel value
     ```
     select count(channel) from user;
     ```
