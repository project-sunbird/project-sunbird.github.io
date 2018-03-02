---
type: landing
directory: developer-docs/installation/
title: Upgrading the Cassandra Database
page_title: Upgrading the Cassandra Database
description: Upgrading Cassandra Database
keywords: Upgrade Databases, Cassandra, Upgrade instructions 
published: true
allowSearch: true
---
## Overview

Using an obsolete version of a database comes with disadvantages like missed opportunities for enhanced features, lack of technical support, incompatibility with software and hardware, and many others. Upgrading your database periodically, therefore is a necessity.    While upgrading, a careful review of the upgrade instructions will make a difference. By understanding what to do beforehand, you can ensure a smooth upgrade and avoid pitfalls and frustrations.
Read and understand the instructions on this page to plan and execute the upgrade of your Apache Cassandra database.

## Upgrading your Cassandra installation

To upgrade your Cassandra installation, abide by the following sequence:

1. Check upgrade scenarios
2. Execute the build
3. Deploy the build

## Check Upgrade Scenarios

Sunbird offers the Cassandra upgrade option from version 1.4.

- If you are on a Sunbird release version lower than version 1.4, ensure that your schemas and tables are not below Sunbird version 1.3 

- Start your upgrade process with information about the version of the Sunbird you are currently running

- Before you run the upgrade script, check if the release version is lower than, greater than or equal to version 1.4  

### Running a release version lower than 1.4

If you are running a version lesser than 1.4, execute the following command:

- Run **cassandra.cql** file  

This command creates the schema and tables until release-1.3, ensuring that your schemas and tables fall in line with upgrade requirements.

**Note:** Ignore any errors encountered while executing the command. The errors are fixed in later releases.

### Running a release version greater than or equal to release 1.4

If you are on Sunbird release 1.4 or greater, the schemas and tables meet upgrade requirements. Proceed to the next steps of the upgrade process.

## Build

- Create a **Cassandra_Build** Jenkins job.
- Navigate to **sunbird-utils/cassandra-migration** directory and run `mvn clean install -DskipTests`
- The **cassandra-migration-0.0.1-SNAPSHOT-jar-with-dependencies.jar** is created within the **sunbird-utils/cassandra-migration/target**   directory.

## Deploy

- Create a **Cassandra_Deploy** Jenkins job
- Copy the artifact **cassandra-migration-0.0.1-SNAPSHOT-jar-with-dependencies.jar** from **Cassandra_Build** to **Cassandra_Deploy**
Jenkins job
- Copy the .jar file to the remote Cassandra machine.
- Set the following enivronment variables on the Cassandra host:
   
   a. **sunbird_cassandra_host:** In case of multiple hosts, provide each value separated by a comma  
   b. **sunbird_cassandra_port:** 
   c. **sunbird_cassandra_username:** Optional 
   d. **sunbird_cassandra_password:** Optional 
   e. **sunbird_cassandra_keyspace:** for example: sunbird

- Ensure that the Cassandra keyspace is created. If not, execute the following command: 

   ``CREATE KEYSPACE IF NOT EXISTS sunbird WITH replication = {'class':'SimpleStrategy','replication_factor':1};``

- While you ensure the availability of keyspaces, proceed to run the following command on your remote cassandra machine:

``Run java -cp "cassandra-migration-0.0.1-SNAPSHOT-jar-with-dependencies.jar com.contrastsecurity.cassandra.migration.utils.MigrationScriptEntryPoint`` 

 Add any new database change as a file to the following location in your codebase:

- **resources/db/migration/cassandra**
- The inclusion criteria of files is based on the file naming convention.
- The files should essentially follow this convention.
- **V{major_version_no}.{minor_version_no}_{filename}.cql** 

**For example:**
   
- V1.0_cassandra.cql    -  correct file format
- V1.0.1_cassandra.cql  - incorrect file format

In case a file fails to execute, the script will not execute further until you fix the issue. After fixing the file, delete the corresponding wrong entry within the cassandra_migration_version table. This table is auto-generated during the upgrade process.
   

**Sample table structure**

- version text (PRIMARY KEY)
- checksum (int)
- description (text)
- execution_time (int)
- installed_by (text)
- installed_on (timestamp)
- installed_rank (int)
- script (text)
- success (boolean)
- type (text)
- version_rank (int)

