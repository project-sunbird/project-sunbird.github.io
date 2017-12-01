---
type: landing
directory: developer-docs/installation/
title: Setup Database
page_title: Setup Database
description: About setting up DB
allowSearch: true
---
You can either use existing databases, create them manually or run the automation scripts provided to create them. Sunbird uses the following databases:

   - Cassandra
   - Postgres
   - Mongo
   - Elasticsearch
   
## Preparation to Setup Databases

Run the following steps from your local machine:

+ Configuring the database servers

SSH into the `db-server`. If you have not edited the default configuration, then the name of the DB VM should be `db-1`. Automated setup does not expose the DB to the Internet, so for SSH to access the DB, it’s important to set SSH to `vm-1` (check out `master FQDN` above) with `ssh -A` (key forwarding) and then SSH to `db-1`.

+ Cloning the repository

Clone the sunbird-devops repo using `git clone [https://github.com/project-sunbird/sunbird-devops.git`](https://github.com/project-sunbird/sunbird-devops.git){:target="_blank"} in the console.

+ Configuring environment

Run `./sunbird-devops/deploy/generate-config.sh <implementation-name> <environment-name>`. 

  E.g. `./sunbird-devops/deploy/generate-config.sh mysb production deploy`. 

This creates `mysb-devops` directory with *incomplete* configurations. 
The missing configuration needs to be done afterwards.

+ Modifying configurations

Modify all the configurations under `# DB CONFIGURATION` block in `<implementation-name>-devops/ansible/inventories/<environment-name>/group_vars/<environment-name>`

The estimated  run time for  preparation to Set up Databases is 15-30mins and another 30 mins to complete complete the process.

### Creating Databases using automation

Estimated elapsed time is 10-15 mins (in an environment with fast internet).

Following is a set of scripts which installs the Databases into the `db-server` and copies over the `master` data.

  - Run `cd sunbird-devops/deploy`

  - Run `sudo ./install-dbs.sh <implementation-name>-devops/ansible/inventories/<environment-name>`. 

+ Automation Walkthrough

[Part 4](https://sunbirdpublic.blob.core.windows.net/installation/demo/demo-4.gif){:target="_blank"}

### Create Databases Manually

To create the databases manually, refer to the corresponding database user guides from their respective websites.

### Initialize Databases

Initialize the databases after they are installed using the following the procedure:

Run `sudo ./init-dbs.sh <implementation-name>-devops/ansible/inventories/<environment-name>`

***Note:*** The automation walk-through provided (PART 4), shows you the creation of databases and the initialization process.
