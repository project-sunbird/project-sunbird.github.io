#  Database backup and restore

## Cassandra

1. Take snapshot of cassandara db

`nodetool snapshot -t my_backup`

2. copying the snapshot to your backup directory

./cassandra_backup.py --datadir /var/lib/cassandra/data \
                      --snapshotname my_backup \
                      --targetdir /backups/cassandra/$(date +%Y-%m-%d)

3. restore cassandra database

./cassandra_restore.py --cassandra_host ip_address
                       --snapshotdir /backups/cassandra/$(date +%Y-%m-%d)
