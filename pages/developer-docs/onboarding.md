---
type: landing
directory: developer-docs
title: Onboarding API Consumers
page_title: Onboarding API Consumers
description: Onboarding API Consumers
keywords: Onboarding process, Onboarding API Consumers, Onboarding
published: true
allowSearch: true
---
## Overview

Sunbird has the provision to register and provide user credentials (user ID and password) to organizations, such as states, NGO, corporates and other institutes or organizations.

The organizations take a policy decision to allow or disallow registering single individual users. Contact your organization administrator for details.


### Onboarding New API Consumer

1.Open `sunbird-devops/ansible/roles/kong-consumer/defaults/main.yml`

2.Add a new object in kong_consumers variable. 

**Example**
-  username: api-management-test #change this according to API consumer
   groups: "{{ kong_all_consumer_groups }}"  # or array of groups needed for API consumer
   state: present

3.For the term `groups` in the above example, use the list of whitelisted groups from the following table to decide API consumer access:

| Mobile Administrator Group | Mobile App Group | Mobile Device Group   | Integration Partner Groups | Implementation User Groups |
|----------------------------|------------------|-----------------------|----------------------------|----------------------------|
| Mobile Administrator       | Mobile App       | Content User          | Echo User                  | Content Administrator      |
|                            |                  | Course User           | Org Administrator          | Content User               |
|                            |                  | App Administrator     | Org User                   | User Adminidtrator         |
|                            |                  | Config User           | User Administrator         | Public User                |
|                            |                  | Public User           | Public User                | Org Administrator          |
|                            |                  | User Administrator    | Data Admin                 | Org User                   |
|                            |                  | Content Administrator | Domain User                |                            |
|                            |                  |                       | DIAL Code Administrator    |                            |
|                            |                  |                       | App Administrator          |                            |


4.Run `sudo ./sunbird-install.sh -s apis`  
  
**Note:** The **jwt_token.txt** file is in the location home directory of the administration server. This file contains the jwt tokens for all the services. 


### Recreating JWT Tokens 

If you forget or lose the JWT token, you can retrieve it from the **jwt_token.txt** file that is in the home directory of the adminstration server. 


### Removing API Consumer from Sunbird

1.Open sunbird-devops/ansible/roles/kong-consumer/defaults/main.yml
2.Search for the user in the kong_consumers array
3.Change the state to absent. 

**Example**
 - username: <consumer-to-be-removed>
    	   state: absent

4.Run `sudo ./sunbird-install.sh -s apis` 


