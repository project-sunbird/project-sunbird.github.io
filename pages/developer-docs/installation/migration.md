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

In Release-1.8 sunbird decide to support for multiple externalIds of a user.TO support multiple externalIds ,we design new table usr_external_identity.Now old table user_external_identity data need to be moved to new table.This activity need to be done after server setup.

## Prerequisites

To configure domains to host external links, ensure the following:
- Caller should have the access of cassandra db , to read the records.
- get all unique provider value stored under user_external_identity table
- Run this cql:  select provider from user_external_identity;
- create a csv file as follow 
-  provider,idType
   ka,kaIdType
   ap,apIdType
- no need to repeat same provider again inside file.   
- Save this as {someName}.csv

## Configuration Parameters

- encryption_key (used to encrypt the data)
- keyspace_name  (cassandra keyspace name)
- cassandra_port (cassandra port)
- cassandra_server_ip (cassandra ip)
- provider_idtype_mapping_file_path (created .csv file path)

## Migrating User Data
Step 1: Download https://github.com/project-sunbird/sunbird-utils/tree/data-migration-etl/cassandra-migration-etl/r1.8 - UserExternalIdentityMigrationBin.zip 

Step2: unzip UserExternalIdentityMigrationBin.zip
step3: run below command 
 
### For windows : 

ExternalIdentityTableMigrationExtension_run.bat --context_param sunbird_encryption_key="{encryption_key}" --context_param cassandra_keyspace="{keyspace_name}" --context_param cassandra_port="{cassandra_port}" --context_param cassandra_server="{cassandra_server_ip}" --context_param provider_idtype_mapping_file_path="{provider_idtype_mapping_file_path}"

## For Linux :

ExternalIdentityTableMigrationExtension_run.sh --context_param sunbird_encryption_key="{encryption_key}" --context_param cassandra_keyspace="{keyspace_name}" --context_param cassandra_port="{cassandra_port}" --context_param cassandra_server="{cassandra_server_ip}" --context_param provider_idtype_mapping_file_path="{provider_idtype_mapping_file_path}"


## Table Details
Old Table (user_external_identity) structure:
   - id text PRIMARY KEY,
   - createdby text,
   - createdon timestamp,
   - externalid text,
   - lastupdatedby text,
   - lastupdatedon timestamp,
   - provider text,
   - userid text

 New Table (usr_external_identity) structure:
   - provider text,
   - idtype text,
   - externalid text,
   - createdby text,
   - createdon timestamp,
   - lastupdatedby text,
   - lastupdatedon timestamp,
   - userid text,
   - PRIMARY KEY (provider, idtype, externalid)