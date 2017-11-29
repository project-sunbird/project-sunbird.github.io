## Overview
## Introduction on Local Proxy for Sunbird portal 
Local proxy is used to connect sunbird portal to the local server. Currently portal is connected to the remote server. If we want to connect portal to the local server. Then we have to used local proxy.

## How we will do:
Currently portal has two services.
1. Learner service
2. Content service
If we want to connect learner service to the local server then we have to set the env. variable to
**sunbird_learner_player_url** = http://localhost:3000/localproxy/learner/.
Similarly, If we want to connect content service to the local server then we have to set the env. variable to **sunbird_content_player_url** = http://localhost:3000/localproxy/content/.

**Note**: Default portal running on 3000 port number. If we are running portal on different port number,
then **sunbird_learner_player_url** = http://localhost: + (port number) + /localproxy/learner/ and 
**sunbird_content_player_url** = http://localhost: + (port number) + /localproxy/content/.

**Note**: We assumed that content service and learner service are running on the same server.
If anyone running on the different server, we have to give that server URL.
Ex: Learner service is running on the different local server(IP is 10.0.1.121).
Then we have to set the env. variable to **sunbird_learner_service_upstream_url** = http://10.0.1.121:9000/
Similarly, Content service is running on the different local server(IP is 10.0.1.121).
Then we have to set the env. variable to **sunbird_learner_service_upstream_url** = http://10.0.1.121:5000/

**Note**: 
We have API mapping for both services.
If we want to add any new API. we have to follow below steps
1. Open the file - proxy/localProxy.js
2. If API related to content service add API in  **contentServiceApi**, 
if API related to learner service add API in **learnerServiceApi**.
