---
type: landing
directory: developer-docs
title: Onboarding
page_title: Onboarding
description: Onboarding
keywords: Onboarding process and features on Sunbird
published: true
allowSearch: true
---
Sunbird has the provision to register and provide user credentials (user ID and password) to organizations, such as states, NGO, corporates and other institutes or organizations.

The states and organizations make a policy decision to allow / disallow registering single individual users. Contact your organization administrator for details.


## Steps for onboarding new consumer

* Open `sunbird-devops/ansible/roles/kong-consumer/defaults/main.yml`

* Add a new object in kong_consumers variable. 

```
Example
-  username: api-management-test #change this according to consumer
   groups: "{{ kong_all_consumer_groups }}"  # or array of groups needed for consumer
   state: present
```

* Term `groups` in above example, you can find the list of whitelist group you want to give the access to consumer. 

* Refer the document to know more about groups it’s access: https://docs.google.com/spreadsheets/d/15fQRG1D8D214XhbLh-RKv078SJ2Au1_nXDMbsbUnpLc/edit#gid=1610309049
  	
* Run `sudo ./sunbird-install.sh -s apis` Note: 
  
**NOTE:** We can find the jwt_token.txt in the location home directory of admintration server. This file will contain all jwt token for all the services. 


## JWT Token Recreation: 

If you lost the JWT token then you can get it from jwt_token.txt file. This file you can find on home directory of admintration server. 


## Steps for removing consumer
Open sunbird-devops/ansible/roles/kong-consumer/defaults/main.yml
Search for consumer to remove in kong_consumers array
Change the state to absent. Example
 - username: <consumer-to-be-removed>
    	   state: absent
Run `sudo ./sunbird-install.sh -s apis` 


