---
type: landing
directory: developer-docs/installation/
title: Customizing Assets
page_title: Customizing Assets
description: customize sunbird assets
allowSearch: true
---
## Configuration to customize Sunbird Assets

This section will explain how to give a custom look and feel for Sunbird. Sunbird supports customization of home page, logo, and icon for the portal. 
These customizations can be loaded by mounting the volume containing the customizations into the docker container.For loading the volume containing the customizations to docker container follow these steps:

Uncomment and set the value for 
<pre>
variable player_tenant_dir in {implementation-name}-devops/ansible/inventories/{environment-name}/group_vars/
{environment-name>}

For example, player_tenant_dir: /data/extensions/tenant``
</pre>

**NOTE**: If the variable `player_tenant_dir` is commented, the volume will not be mounted, and customizations will not be loaded.

- Create the above folder (e.g. /data/extensions/tenant) on all the docker swarm nodes 
- Set the permissions for the folder to `mode=0775`,`user=root` and `group=root`

## Changing Themes

Sample themes directory of sunbird can be  found [here](https://github.com/project-sunbird/sunbird-devops/tree/master/ansible/artifacts){:target="_blank"}

Run `sudo ./deploy-keycloak-vm.sh <implementation-name>-devops/ansible/inventories/<environment-name>`
