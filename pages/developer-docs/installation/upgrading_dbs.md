---
type: landing
directory: developer-docs/installation/
title: Upgrading Databases
page_title: Upgrading Databases
description: Upgrading Databases
keywords: Upgrading Databases
published: true
allowSearch: true
---
## Overview

This section guides you through the process of planning and executing Sunbird Database upgrades. 

## Upgrading your Cassandra installation

For upgrading your Cassandra installation, follow these steps:

1. Upgrade Scenarios
2. Build Process
3. Deployment Process

## Upgrade Scenarios

The Cassandra upgrade option is officially implemented in version 1.4.

- If you are running a release version lesser then 1.4, you need to ensure that your schemas and tables are as per version 1.3 atleast. - Start your upgrade process with information about the version of the Sunbird you are running.
- It is recommended to check the following scenarios before you proceed with running the upgrade script.  

### Running a release version lesser than 1.4

In case you are running a version lesser than 1.4, ensure that you execute the following command:

- Run `cassandra.cql` file  \\ Creates schema and tables until release-1.3. 

Executing the command, ensures that your schemas and tables fall in line with upgradation requirements.

**Note:** Ignore the errors, if you encounter any while executing the command, These errors are fixed in later releases.

### Running a release version greater than or equal to release 1.4

If you are already running the Sunbird release 1.4 and onwards, the schemas and tables fall inline with the upgrade requirements. You can proceed with the following upgrade process:

- Build 
- Deploy 

## Build

- Create a `Cassandra_Build` Jenkins job.
- Navigate to `sunbird-utils/cassandra-migration` directory and run `mvn clean install -DskipTests`
- Artifact `cassandra-migration-0.0.1-SNAPSHOT-jar-with-dependencies.jar` gets created inside `sunbird-utils/cassandra-migration/target`   directory.

## Deploy

- Create a `Cassandra_Deploy` Jenkins job.
- Copy the artifact `cassandra-migration-0.0.1-SNAPSHOT-jar-with-dependencies.jar` from `Cassandra_Build` to `Cassandra_Deploy`
Jenkins job.
- Copy the .jar file to the remote Cassandra machine.

Set the following enivronment variables on the Cassandra host:

<pre>
a. sunbird_cassandra_host: (in case of multiple host provide the value comma separated) 
b. sunbird_cassandra_port: 
c. sunbird_cassandra_username: (Optional) 
d. sunbird_cassandra_password: (optional) 
e. sunbird_cassandra_keyspace: (for ex: sunbird)
</pre>

- Ensure that the Cassandra keyspace is already created; if not, executing the following command will create Cassandra Keyspaces:

   ``CREATE KEYSPACE IF NOT EXISTS sunbird WITH replication = {'class':'SimpleStrategy','replication_factor':1};``

While you ensure the availability of keyspaces, let us proceed further with running the following command:

``Run java -cp "cassandra-migration-0.0.1-SNAPSHOT-jar-with-dependencies.jar com.contrastsecurity.cassandra.migration.utils.MigrationScriptEntryPoint`` on your remote cassandra machine.

- The command includes all those files from this location of your codebase `**resources/db/migration/cassandra**`, which have filenames as  per the following naming convention:

**V{major_version_no}.{minor_version_no}_{filename}.cql** 

The example ofthe file naming convention is as follows:
   
       - V1.0_cassandra.cql    // correct file format
       - V1.0.1_cassandra.cql  // incorrect file format

While execution the script includes all the files with the following naming convention from **resources/db/migration/cassandra** location.

   **V{major_version_no}.{minor_version_no}_{filename}.cql**

- In case, if any of the files fails to get included, the script execution will break unless the issue is fixed.
- After fixing the file ,you need to delete the corresponding false entry under cassandra_migration_version table which is auto  
  generated during the upgrade process.
   
<pre>
Table structure ----
version text PRIMARY KEY,
checksum int,
description text,
execution_time int,
installed_by text
installed_on timestamp,
installed_rank int,
script text,
success boolean,
type text,
version_rank int
</pre>
