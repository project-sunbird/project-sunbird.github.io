---
type: landing
directory: developer-docs/installation
title: Migrate User Data 
page_title: Migrate User Data 
description: Migrate user data from one Sunbird instance to another 
published: true
allowSearch: true
---

## Overview

Sunbird provides support for multiple external IDs for a user. In release 1.8, the table name and schema used to store user external IDs has changed. 

The purpose of this document is to describe the steps for migration of user external IDs from old "user_external_identity" table to new "usr_external_identity" table format.

Following are the changes:
* The table name changed from "user_external_identity" to "usr_external_identity". 
* A new column "idtype" is introduced in "usr_external_identity" table for storing external ID type. e.g. UIDAI is provider of Aadhaar (ID type).
* In release 1.7, the external ID was unencrypted. In release 1.8, encryption of external ID is also performed to ensure privacy of user external ID information.

**Note:** This migration of data needs to be performed after deploying Sunbird learner service release version 1.8. 

## Prerequisites

Following are the pre-requisites before running the migration script:

1. Define a mapping file which specifies ID type for each unique external ID provider available in "user_external_identity" table.
    A. Get list of all providers using CQL query: select provider from user_external_identity;

    B. Create a CSV file (e.g. mapping.csv) which maps each **unique** external ID to desired ID type.
    e.g.
    ```
    provider,idType
    ka,kaIdType
    ap,apIdType
    ```

2. Before performing any migration take a backup of data in sunbird keyspace within Cassandra DB.

## Configuration Parameters
   The following are the configuration parameters:   

| S.No. | Configuration parameter | Description |
| 1 | cassandra_server | Cassandra DB IP Address|
| 2 | cassandra_port | Cassandra DB Port Number |
| 3 | keyspace_name  | Cassandra DB Keyspace Name|
| 4 | encryption_key | Key used in Sunbird for encryption of private user information |
| 5 | provider_idtype_mapping_file_path | Path to CSV file which defines mapping between external ID provider and type |

## Running Migration Script

In order to migrate the user external ID data, follow below mentioned steps:

1. Extract archive file (sunbird-utils/cassandra-migration-etl/r1.8/UserExternalIdentityMigrationBin.zip) which contains script for user external identity table migration.

2. Based on OS, run the corresponding script for performing the migration.
 
    - For Linux, run the following command:
    ```
    UserExternalIdentityMigration_run.sh --context_param cassandra_server="{cassandra_server}" --context_param cassandra_port="{cassandra_port}" --context_param cassandra_keyspace="{keyspace_name}" --context_param sunbird_encryption_key="{encryption_key}" --context_param provider_idtype_mapping_file_path="{provider_idtype_mapping_file_path}"
    ```

- For Windows, run the following command:

    ```
    UserExternalIdentityMigration_run.bat --context_param cassandra_server="{cassandra_server}" --context_param cassandra_port="{cassandra_port}" --context_param cassandra_keyspace="{keyspace_name}" --context_param sunbird_encryption_key="{encryption_key}" --context_param provider_idtype_mapping_file_path="{provider_idtype_mapping_file_path}"
    ```

3. Verify that external IDs are updated in usr_external_identity table with desired ID type and provider using CQL query: select * from usr_external_identity;


## Table Details

The schema of the existing table is as follows: 

```
user_external_identity (
    id text PRIMARY KEY,
    createdby text,
    createdon timestamp,
    externalid text,
    lastupdatedby text,
    lastupdatedon timestamp,
    provider text,
    userid text
)
```

The schema of the new table is as follows: 

```
usr_external_identity (
    provider text,
    idtype text,
    externalid text,
    createdby text,
    createdon timestamp,
    lastupdatedby text,
    lastupdatedon timestamp,
    userid text,
    PRIMARY KEY (provider, idtype, externalid)
)
```
