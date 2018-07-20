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

From release-1.8, Sunbird provides support for multiple external IDs for a user. To add multiple external IDs, an administrator of any sunbird instance needs to design a new table with name "usr_external_identity"
This table must be seeded with the data from the existing table "user_external_identity.

**Note:** This is a post server setup task.

## Prerequisites

To configure your domain to host external links, ensure that the following prerequisites are met:

1. Administrator access to read the record sets from Cassandra DB
2. Ensure to store all unique provider values under user_external_identity table, to do so, execute the following command: 

    A. Run this cql:  select provider from user_external_identity;

    B. create a csv file as follow 
    - provider,idType
    - ka,kaIdType
    - ap,apIdType

    Note: You do not need to repeat same provider again inside the file   

    C.  Save this as file as {typeyouename}.csv

## Configuration Parameters

The following are the configuration parameters: 

|Sno.|Configuration parameter| Usage|
| 1 | encryption_key | It is used to encrypt the data |
| 2 | keyspace_name  | It is the cassandra keyspace name |
| 3 | cassandra_port | It is the port number for Cassandra |
| 4 | cassandra_server_ip | It is the IP address for Cassandra |
| 5 |provider_idtype_mapping_file_path | It is the .csv file path (which is created) |

## Migrating User Data

In order to migrate the user data, follow these steps:

1. Download the code from [here] https://github.com/project-sunbird/sunbird-utils/tree/data-migration-etl/cassandra-migration-etl/r1.8 - UserExternalIdentityMigrationBin.zip 

2. Unzip the UserExternalIdentityMigrationBin.zip file

3. Run the following commands based on the operating systems you are using: 
 
    - For Windows, run the following command:

    `ExternalIdentityTableMigrationExtension_run.bat --context_param sunbird_encryption_key="{encryption_key}" --context_param cassandra_keyspace="{keyspace_name}" --context_param cassandra_port="{cassandra_port}" --context_param cassandra_server="{cassandra_server_ip}" --context_param provider_idtype_mapping_file_path="{provider_idtype_mapping_file_path}"`

    - For Linux, run the following command:

    `ExternalIdentityTableMigrationExtension_run.sh --context_param sunbird_encryption_key="{encryption_key}" --context_param cassandra_keyspace="{keyspace_name}" --context_param cassandra_port="{cassandra_port}" --context_param cassandra_server="{cassandra_server_ip}" --context_param provider_idtype_mapping_file_path="{provider_idtype_mapping_file_path}"`


## Table Details

The details of the existing table are as follows: 

user_external_identity structure:
   - id text PRIMARY KEY,
   - createdby text,
   - createdon timestamp,
   - externalid text,
   - lastupdatedby text,
   - lastupdatedon timestamp,
   - provider text,
   - userid text

The details of the new table are as follows: 

usr_external_identity structure:
   - provider text,
   - idtype text,
   - externalid text,
   - createdby text,
   - createdon timestamp,
   - lastupdatedby text,
   - lastupdatedon timestamp,
   - userid text,
   - PRIMARY KEY (provider, idtype, externalid)