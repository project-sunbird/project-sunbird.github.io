### Generate key and secrets for mobile app

This section details the sequence of steps required if you plan to release your own mobile app using the Sunbird mobile app codebase.

* Execute & run `sudo ./deploy-apis.sh <implementation-name>-devops/ansible/inventories/<environment-name>`

* In console output of script, copy the JWT token printed for `mobile_admin` user

* Run it.

	<pre>

		curl -X POST \

		  (sunbird-base-url)/api/api-manager/v1/consumer/mobile_app/credential/register \

		  -H 'authorization: Bearer (mobile_admin_jwt_token)' \

		  -H 'content-type: application/json' \

		  -d '{

		  "request": {

			"key": "(implementation-name)-mobile-app-(version-number)"

		  }'

		}

	</pre>

The result output will be:

	<pre>

		{"result":{"key":"(implementation-name)-mobile-app-(version-number)","secret":"(secret)"}}

	</pre>

*  Use the value of "key" and "secret" from the response above for `MOBILE_APP_KEY` and `MOBILE_APP_SECRET` configuration in mobile app.

## Upgrade to a new version of Sunbird

Sunbird updates are released on a regular basis. For upgrading to the latest version of Sunbird .

To update/redeploy sunbird please follow these steps:

1. Update the Sunbird image versions to latest gold version (e.g. `PLAYER_VERSION`).

2. Update the configuration as per Sunbird release notes.

3. Run `cd sunbird-devops/deploy`

#4.Executing the following command will onboard various APIs and consumer groups.

4. Run `sudo ./deploy-apis.sh /ansible/inventoriesRun `

#5.Executing the following command will setup all the sunbird core services.

5. sudo ./deploy-core.sh /ansible/inventories/`. 

#6.Executing the following command will setup sunbird proxy services.

6. Run `sudo ./deploy-proxy.sh /ansible/inventories/`. 

