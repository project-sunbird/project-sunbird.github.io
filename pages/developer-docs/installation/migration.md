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

Sunbird supports multiple external IDs for a user. An external ID is the user's identity outside the Sunbird system. For example; John is an employee of **XYZ Corporation**.  In **XYZ Corporation**, his identity(ID) is **jo_123** and ID Type is **employeeId**. 
When he registers with Sunbird, he can specify his external ID as  **jo_123**, provider as **XYZ Corporation** and ID Type as **employeeId**. Similarly, John, being part of multiple organizations, (like also being an account holder in **ABC bank**), has a separate identity in each organization. The ID provided by that organization identifies and recognises John as being part of that particular organization. When John is registered in Sunbird, using the create or update user API, he can specify all the external IDs, providers and ID types as values in the associated parameters.

As part of Sunbird release version 1.8, the table holding user external ID data is modified as follows:  

* The table name is modified from **user_external_identity** to **usr_external_identity**. 
* A new column **idtype** is introduced in the **usr_external_identity** table to store external ID type. For example, UIDAI is the provider for ID type Aadhaar.
* In Sunbird release version 1.7, the external ID was unencrypted. In release 1.8, the external ID is encrypted to ensure privacy of user external ID information.

**Note:** This data migration should be done after deploying Sunbird learner service release version 1.8. 

## Prerequisites

To run the migration script:

1.Define a mapping file that specifies the ID type for each unique external ID provider available in the **user_external_identity** table.
    a.Get a list of all providers using CQL query: `select provider from user_external_identity`
    b.Create a CSV file (mapping.csv) that maps each unique external ID to its associated ID type
    For example;
    ```
    provider,idType
    ka,kaIdType
    ap,apIdType
    ```

2. Before migrating any data, take a backup in Sunbird keyspace within the Cassandra DB.

## Configuration Parameters
The following parameters need to be configured for migrating user data:   

| S.No. | Parameter | Description | Example |
| 1 | cassandra_server | Cassandra DB IP Address| 50.34.16.33|
| 2 | cassandra_port | Cassandra DB Port Number | 9145 |
| 3 | keyspace_name  | Cassandra DB Keyspace Name| demodb |
| 4 | encryption_key | Key used in Sunbird for encryption of private user information | 60B568970ASDFer321 |
| 5 | provider_idtype_mapping_file_path | Path to CSV file which defines mapping between external ID provider and type | \john\mapfile.csv |

## Run the Migration Script

To migrate user external ID data: 

1.Extract the archive file (sunbird-utils/cassandra-migration-etl/r1.8/UserExternalIdentityMigrationBin.zip) that contains the script for user external identity table migration

2.Based on the OS, run the corresponding script to migrate the data
 
- For Linux, run the following command:
    ```
    UserExternalIdentityMigration_run.sh --context_param cassandra_server="{cassandra_server}" --context_param cassandra_port="{cassandra_port}" --context_param cassandra_keyspace="{keyspace_name}" --context_param sunbird_encryption_key="{encryption_key}" --context_param provider_idtype_mapping_file_path="{provider_idtype_mapping_file_path}"
    ```

- For Windows, run the following command:

    ```
    UserExternalIdentityMigration_run.bat --context_param cassandra_server="{cassandra_server}" --context_param cassandra_port="{cassandra_port}" --context_param cassandra_keyspace="{keyspace_name}" --context_param sunbird_encryption_key="{encryption_key}" --context_param provider_idtype_mapping_file_path="{provider_idtype_mapping_file_path}"
    ```

3. Verify that the external IDs are updated in the **usr_external_identity** table with the desired ID type and provider using CQL query: `select * from usr_external_identity;`


## user_external_identity Table Details

**Note** The **user_external_identity** table is used prior to Sunbird release version 1.8

| S.No. | Field | Description |
| 1 | id | Identity of the record. This is the primary key|
| 2 | createdby | The User ID of the person who created the record |
| 3 | createdon  | The date and time when the record was inserted into the database|
| 4 | externalid | The user's identity apart from the Sunbird system. This field allows other systems fetch records from Sunbird and co-relate the user within their system using a combination of the externalid and provider |
| 5 | provider | The provider of the external ID. This can be any organisation|
| 6 | lastupdatedon | The date on which the record was last updated|
| 7 | userid | The User's identity within Sunbird|

### user_external_identity Table Schema 

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

### usr_external_identity Table Details

**Note** The **usr_external_identity** table is used from Sunbird release version 1.8

| S.No. | Field | Description |
| 1 | provider | The provider of the external ID. This can be any organisation|
| 2 | idtype | The type of ID for example; employee ID, student ID, etc. |
| 3 | externalid  | The user's identity apart from the Sunbird system. This field allows other systems fetch records from Sunbird and co-relate the user within their system using a combination of the externalid and provider |
| 4 | createdby | The User ID of the person who created the record |
| 5 | createdon | The date and time when the record was inserted into the database |
| 6 | lastupdatedon | The date on which the record was last updated |
| 7 | userid | The User's identity within Sunbird|

**Note:** The combination of provider, idtype and externalid must be unique. The system uses this combination as a primary Key.


### usr_external_identity Table Schema 

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
