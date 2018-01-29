## Sunbird installation simplified

Sunbird installation is a hefty process, at-least for starters. If you want to do all the heavy lifting by your self, just go on and skip this page.

Else, let us do all the heavy lifting, and the downside is you won't have a fine grained control over all those process, even though we tried this to be
generalized as much as we could.

Prerequisites

- this script should run in the application server
- single ssh key for both application server and db server
- 2 servers [ app <=> db ] should able to ping each other
- port 80, 443 accessible from internet for app_server


sunbird installation simplified steps:

- git clone https://project-sunbird/sunbird-devops

- cd sunbird-devops/deploy

- edit the config file

- run ./sunbird_install.sh

**90% is done.** 

just go over to https://dns-name/auth

and plese complete the [keycloak configs](keycloak_realm_configuration.md).

just copy the **jwt token for player** from your home directory (~/jwt_token.txt) 

`JWT token for player is : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3TRlZmNlYzc0NY0NjBhYzQzNCJ9.VCf69`

and **key, which you got from ekstep** and  update the config file.


- ./sunbird_installation.sh -s core

now please go to 

https://dns-name

Enjoy!!!
