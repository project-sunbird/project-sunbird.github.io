---
type: landing
directory: developer-docs/installation/
title: Upgrading to new version of Sunbird
page_title: upgrading Sunbird
description: upgrading Sunbird
allowSearch: true
---
Sunbird updates are released on a regular basis. For upgrading to the latest version of Sunbird .
To update/redeploy sunbird please follow these steps:
1. Update the Sunbird image versions to latest gold version (e.g. `PLAYER_VERSION`).

2. Update the configuration as per Sunbird release notes.

3. Run `cd sunbird-devops/deploy`

Executing the following command will onboard various APIs and consumer groups.

4. Run `sudo ./deploy-apis.sh /ansible/inventoriesRun `

Executing the following command will setup all the sunbird core services.

5. Run `sudo ./deploy-core.sh /ansible/inventories/`.

Executing the following command will setup sunbird proxy services.

6. Run `sudo ./deploy-proxy.sh /ansible/inventories/`. 

