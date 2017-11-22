---
type: landing
directory: developer-docs/installation/
title: Server Automation via Azure
page_title: Server Automation via Azure
description: Provisioning server
allowSearch: true
---

The automated provisioning of servers is done via Automation for Azure.
Estimated run time: 30 mins for the fresh  time. Scripts can be re-tried and will not create a new set of servers every time. Some configurations cannot be changed, for instance, the server type. However, it’s possible to add or reduce the number of servers and re-run the automation process ,if you plan for scaling up or down.
Run the following steps from a machine which is connected to the internet:

1. Clone the sunbird-devops repo using `git clone https://github.com/project-sunbird/sunbird-devops.git`
2. Run `./sunbird-devops/deploy/generate-config.sh mysb production cloud` This will create config files for you in `./mysb-devops/test/azure`. 
3. Here, `mysb` is the **implementation-name** and `production` is the **environment-name**.
4. Edit both the new config files `azuredeploy.parameters.json` and `env.sh` as per your requirements for the app.
5. Edit the new config files `azuredeploy.parameters.json` and `env.sh` as per your requirements for the db.
6. Run `export APP_DEPLOYMENT_JSON_PATH=<absolute path of azuredeploy.parameters.json>`. For instance, on my laptop it is `export DEPLOYMENT_JSON_PATH=/Users/shashankt/code2/sunbird/mysb-devops/production/azure/app`
7. Run `export DB_DEPLOYMENT_JSON_PATH=<absolute path of azuredeploy.parameters.json>`. For instance, on my laptop it is `export DEPLOYMENT_JSON_PATH=/Users/shashankt/code2/sunbird/mysb-devops/production/azure/db`
8. Run `cd sunbird-devops/deploy`
9. Run `./provision-servers.sh`
10. Login to Azure when CLI instructs to
11. Wait for deployment to complete
12.	Check on Azure portal: Resource Group -> Deployments -> Click on deployment to see deployment details
13. Try to SSH. If your `masterFQDN` from deployment details was `production-1a.centralindia.cloudapp.azure.com` you can ssh using `ssh -A ops@production-1a.centralindia.cloudapp.azure.com`
14. If you could SSH, you have successfully created the server platform.
