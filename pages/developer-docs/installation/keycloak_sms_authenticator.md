---
type: landing
directory: developer-docs/installation
title: Authentication
page_title: IUser Authentication via OTP
description: Authenticating user based on OTP
published: true
allowSearch: true
---
On Sunbird, if a user forgets the password , generally the reset password link is sent on users registered email but in certain cases where users have registered with phone numbers instead of email address, the SMS based verification is done to authenticate the legitimacy of the user. The reset process is started by sending an One Time Password (OTP) as a SMS to the users registered mobile number. This One Time Password (OTP) is used by the user to validate and reset the password.

Implementation of Keycloak authenticator is rather simple. A user with pre-knowledge about various terms used while implementation process makes the whole process quite simple. For further assistance in setting up Keycloak resource ,[visit](http://www.keycloak.org/docs/latest/server_development/index.html#_auth_spi){:target="_blank"}.Also to get a clear understanding about role of  Authentication SPI and Service Provider Interfaces(SPI) in implementation[visit](http://www.keycloak.org/docs/latest/server_development/index.html#_providers){:target="_blank"} 

Meanwhile, a thorough understanding of Authentication SPI i.e., authenticating the user with a "Secret Question", will help in easy implementation of SMS(OTP) authenticatorIts recommended to check the example give in the previous link by importing it into Intellij/Eclipse IDE as an Maven Project and understand what interfaces are to be implemented when developing a custom authenticator.

 Once the understanding is clear about how an authenticator is implemented, you can proceed to SMS Authenticator code which can be accessed [here](https://github.com/project-sunbird/sunbird-auth/tree/master/keycloak){:target="_blank"},its located in the folder "sms-provider". This code needs to be imported to Intellij/Eclipse IDE as an Maven Project to start building the authenticator.

###  Build Process for Keycloak SMS Based Authenticator

 To build the complete project and check the working of the SMS Authenticator follow the steps.

 - Import the project from [here](https://github.com/project-sunbird/sunbird-auth/tree/master/keycloak){:target="_blank"}  
   to Intellij/Eclipse as Maven project (preference should be given to Intellij Community Edition) to make the process easy .
 - Build the artifact(jar) using the command ```mvn clean package``` from the SMS-provider path in the terminal.
 - The generated artifact will be in the "target" folder in the project, with the same name as project. (ex - keycloak-email-phone-  
   authenticator-1.0-SNAPSHOT.jar)
 - Add the jar to the Keycloak server: ("providers" folder will be created in the Keycloak home path if it does not exist)

      <pre>$ cp target/keycloak-sms-authenticator-sns-*.jar _KEYCLOAK_HOME_/providers/</pre>

 -  Add three templates to the Keycloak server:
<pre>
           $ cp templates/password-reset-email.ftl _KEYCLOAK_HOME_/themes/base/login/
           $ cp templates/sms-validation.ftl _KEYCLOAK_HOME_/themes/base/login/
           $ cp templates/sms-validation-error.ftl _KEYCLOAK_HOME_/themes/base/login/
</pre>
 - Place the credentials file in the "sms-provider" folder within "bin" folder of the ```_KEYCLOAK_HOME_```with the relevant name.

 - The same path has to be provided in the ```KeycloakSmsAuthenticatorConstants``` file with the proper name (ex - 
   MSG91_SMS_PROVIDER_CONFIGURATIONS_PATH = "sms-provider/Msg91Creds.json")

Template of the credentials file will look like , which can be extended to add all the parameters needed for any specific provider.

<pre> {

        	"auth_key": "XXXXXXXXXXXXXX",

        	"sender": "XXXXXX",

        	"country": "XX",

        	"route": "X",

        	"sms_method_type": "XXXX"

  }</pre>

 - Configure your REALM to use the SMS Authentication. First create a new REALM (or select a previously created REALM).

 - Under Authentication > Flows:

     - Copy 'Browse' flow to 'Browser with SMS' flow

     - Click on 'Actions > Add execution on the 'Browser with SMS Forms' line and add the 'SMS Authentication'

     - Set 'SMS Authentication' to 'REQUIRED' or 'ALTERNATIVE'

     - To configure the SMS Authenticator, click on Actions Config and fill in the attributes.

- Under Authentication > Bindings:

     - Select 'Browser with SMS' as the 'Browser Flow' for the REALM.

 The current SMS Authenticator is forked from the github repo [visit](https://github.com/nickpack/keycloak-sms-authenticator-sns)
