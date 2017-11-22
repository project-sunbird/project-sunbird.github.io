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

4. Executing the following command will onboard various APIs and consumer groups.

Run `sudo ./deploy-apis.sh /ansible/inventoriesRun `

5. Executing the following command will setup all the sunbird core services.

Run `sudo ./deploy-core.sh /ansible/inventories/`.

6. Executing the following command will setup sunbird proxy services.

Run `sudo ./deploy-proxy.sh /ansible/inventories/`. 

