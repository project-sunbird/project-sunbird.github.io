---
type: landing
directory: developer-docs/installation/
title: Upgrading to new version of Sunbird
page_title: upgrading Sunbird
description: upgrading Sunbird
allowSearch: true
---
## Upgrade with a new version of Sunbird
To update/redeploy sunbird please follow these steps:

- Update the Sunbird image versions to latest gold version (e.g. `PLAYER_VERSION`).
- Update the configuration as per Sunbird release notes.
- Run `cd sunbird-devops/deploy`
- Run `sudo ./deploy-apis.sh /ansible/inventories/`. This will onboard various APIs and consumer groups.
- Run `sudo ./deploy-core.sh /ansible/inventories/`. This will setup all the sunbird core services.
- Run `sudo ./deploy-proxy.sh /ansible/inventories/`. This will setup sunbird proxy services.
