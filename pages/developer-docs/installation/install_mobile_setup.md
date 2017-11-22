---
type: landing
directory: developer-docs/installation/
title: Mobile app installation
page_title: Mobile app installation
description: About mobile app
allowSearch: true
---

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


