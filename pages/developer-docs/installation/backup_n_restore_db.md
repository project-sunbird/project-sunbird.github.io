---
type: landing
directory: developer-docs/installation/
title: Check Installation
page_title: Check Installation
description: About Installation
allowSearch: true
---
#  Backup and Restore Databases

## Cassandra

1. Take a snapshot of the Cassandara database using the command:

`nodetool snapshot -t my_backup`

2. Copy the snapshot to your backup directory using the following commands:

`./cassandra_backup.py --datadir /var/lib/cassandra/data \
                      --snapshotname my_backup \
                      --targetdir /backups/cassandra/$(date +%Y-%m-%d)`

3. Restore tha Cassandra database using the following commands:

`./cassandra_restore.py --cassandra_host ip_address
                       --snapshotdir /backups/cassandra/$(date +%Y-%m-%d)`
