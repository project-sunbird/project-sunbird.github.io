---
type: landing
directory: faqs
title: Application Area
page_title: Application Area
description: FAQ
keywords: 'FAQ, questions'
published: true
---

Q: How do I test if the apis are working ? (To see the list of apis, I am using https://hostname/apis?size=200)

A:  Once sunbird installation is completed , use this GET api https://hostname/health .
    To check more api check routes file under below location :
     https://github.com/project-sunbird/sunbird-lms-service/tree/master/service/conf
     This file will have list of Urls.

 
 Q: What is the Authorization header that should be used to access these API ?

A:  Api request will have following headers.
    Authorization : this will have service access key . value should be like this : Bearer {{key}}
    x-authenticated-user-token : if particular api required user auth token
    X-msgid : unique message id for each request.
    
 Q: How do I register my own application with keycloak for development (I want to create new APIs as extension of the existing sunbird api.   Can I register to keycloak and allow communication between them securely?)   
 
 A:  You need to install the keycloak , once keycloak is installed you need to set following details under System Env or sso.properites file.
 a. sso.url 
 b. sso.realm
 c. sso.username
 d. sso.password 
 e. sso.client.id
 g. sso.client.secret // optional
 h. sunbird_sso_publickey // it will always read from System ENV
 after doing above setting your application will be able to communicate with keycloak.
 
 
 Q: What are the creds for super user? (The user who creates the organizations and grants the existing uses permissions. Is this the same user-manager created while creating the realm on keycloak?) 
 
 A: 
