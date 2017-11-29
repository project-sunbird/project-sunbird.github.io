
Getting Started - 

Getting started with keycloak is easy and neatly explained in the link http://www.keycloak.org/docs/latest/getting_started/index.html, it has step-by-step process to run and up the keycloak server locally.
Whoever is new to Keycloak, should get started from here and its good to run and up the server locally and play around with it and understand the system. 

Keycloak SMS(OTP) Authenticator -

SMS authenticator flow is used, when a user has forgotten the password and user has only phone number associated does not have email id to send the password reset link, in this use case SMS authentication flow is used, where an OTP can be sent to the user and this will help to reset the password based on the OTP entered is right or wrong.

SMS authentication flow can be used anywhere a SMS(OTP) based authentication is required.

To implement the authenticator, one should know the terms used in implementation. And keycloak has well documented it in the given link http://www.keycloak.org/docs/latest/server_development/index.html#_auth_spi regarding the Authentication SPI, and understanding what Service Provider Interfaces(SPI) are will also help in easy implementation, which is again well documented in the given link http://www.keycloak.org/docs/latest/server_development/index.html#_providers .

As explained in the Authentication SPI with an example of authenticating the user with "Secret Question", a thorough understanding of this example will help in easy implemtation of SMS(OTP) authenticator. A best advice is to check this example by importing it in to Intellij/Eclipse IDE as an Maven Project and understand what interfaces are to be implemented when develping a custom authenticator.

Once the example is understood in regards to how a authenticator is implemented, now the SMS Authenticator code can be checked out from the link https://github.com/project-sunbird/sunbird-auth/tree/master/keycloak which resides in the folder "sms-provider", this code should be imported in to Intellij/Eclipse IDE as an Maven Project and understand the implemtation of SMS Authenicator.

To build the project and check the working of the SMS Authenticator one can follow below steps.
1. Import the project from https://github.com/project-sunbird/sunbird-auth/tree/master/keycloak in to Intellij/Eclipse as Maven project (my preference was Intellij Community Edition)
2. Build the artifact(jar) using the command "mvn clean package" from the sms-provider path in the terminal.
3. The generated artifact will be in the "target" folder in the project, with the same name as project. (ex - keycloak-email-phone-autthenticator-1.0-SNAPSHOT.jar)
4. Add the jar to the Keycloak server: ("providers" folder will be created in the Keyclaok home path if does not exist)
	$ cp target/keycloak-sms-authenticator-sns-*.jar _KEYCLOAK_HOME_/providers/
5. Add three templates to the Keycloak server:
	$ cp templates/password-reset-email.ftl _KEYCLOAK_HOME_/themes/base/login/
	$ cp templates/sms-validation.ftl _KEYCLOAK_HOME_/themes/base/login/
	$ cp templates/sms-validation-error.ftl _KEYCLOAK_HOME_/themes/base/login/
6. Place the credentials file in the "sms-provider" folder within "bin" folder of the "_KEYCLOAK_HOME_" with the relevant name.
7. The same path has to be provided in the "KeycloakSmsAuthenticatorConstants" file with the proper name (ex - MSG91_SMS_PROVIDER_CONFIGURATIONS_PATH = "sms-provider/Msg91Creds.json")
   Template of the credentials file will look like below, which can be extended to add all the parameters needed for any specific provider.
   {
  	"auth_key": "XXXXXXXXXXXXXX",
  	"sender": "XXXXXX",
  	"country": "XX",
  	"route": "X",
  	"sms_method_type": "XXXX"
   }  

8. Configure your REALM to use the SMS Authentication. First create a new REALM (or select a previously created REALM).
9. Under Authentication > Flows:
	- Copy 'Browse' flow to 'Browser with SMS' flow
	- Click on 'Actions > Add execution on the 'Browser with SMS Forms' line and add the 'SMS Authentication'
	- Set 'SMS Authentication' to 'REQUIRED' or 'ALTERNATIVE'
	- To configure the SMS Authenticator, click on Actions Config and fill in the attributes.
10. Under Authentication > Bindings:
	- Select 'Browser with SMS' as the 'Browser Flow' for the REALM.

The current SMS Authenticator is forked from the github repo https://github.com/nickpack/keycloak-sms-authenticator-sns
