
## Requirement

  System should have the ability to run the akka actor in local ,remote or mixed mode. Based on the configuration values 
 system can run akka actor either in local or remote mode in similar way background job actor can also be run any one of the mode. 
#

### Implementation : 
   
  These configuration key will be set under **externalresource.properties** file or in environment variable.
     
   1.  api_actor_provider {'**remote**','**local**'} [Default value will be 'local' means normal actors will run locally]
   2.  background_actor_provider {'**remote**','**local**'} [Default value will be 'remote' means all backgroundjob actor will run remotely.]
   3. sunbird_actor_system_name {'**RemoteMiddlewareActorSystem**','**BackGroundRemoteMiddlewareActorSystem**'} 

        **NOTE:**  **sunbird_actor_system_name** value is the actor system name which you want to run on a machine, if you want to run normal actor system on a machine then its value will be **RemoteMiddlewareActorSystem** or if you want to run background actors on that machine then its value will be **BackGroundRemoteMiddlewareActorSystem**, this properties is used when you are running a actor remotely.

## Scenario 1:
   * Run Both actor system locally

        To run both actor system locally means both normal and background actor system running on same machine with **sunbird-lms-service**, you need to set value of these '**api_actor_provider**' and '**background_actor_provider**' properties as **local** in environment variable.

To start the application, first make build of **sunbird-utils** , then **sunbird-lms-mw** and then **sunbird-lms-service** 
 and run the **sunbird-lms-service** using mvn play2:run command to start the sunbird application , it will start both actor system on same machine.


## Scenario 2:
   * Run Normal Actor system locally and background actor system remotely

     To run normal actor system locally means running normal actor system with **sunbird-lms-service** , change the value of '**api_actor_provider**' properties in environment variable to **local**.

     To run background actor system remotely means running only background actors on different machine, set the value of **background_actor_provider** properties value to **remote**  in environment variable along with **sunbird_actor_system_name** properties value in environment variable as **BackGroundRemoteMiddlewareActorSystem**.



To start the application, first make build of **sunbird-utils** , then **sunbird-lms-mw** and then **sunbird-lms-service** 
 and run the **sunbird-lms-service** using mvn play2:run command and to start **sunbird-lms-mw** using mvn exec:java.


## Scenario 3:
   * Run both actor system remotely

      To run both actor system remotely means running normal actor system on one machine and running background actor system on another and running **sunbird-lms-service** on different machine.

      To run normal actor system remotely ,suppose running on machine m1 , set the value of **api_actor_provider** properties value to **remote**  in environment variable along with **sunbird_actor_system_name** properties value in environment variable as **RemoteMiddlewareActorSystem** on machine m1.

      To run background actor system remotely , suppose running on machine m2 ,set the value of **background_actor_provider** properties value to **remote**  in environment variable along with **sunbird_actor_system_name** properties value in environment variable as **BackGroundRemoteMiddlewareActorSystem** on machine m2. 

To start the application, first make build of **sunbird-utils** , then **sunbird-lms-mw** and then **sunbird-lms-service** 
 and run the **sunbird-lms-service** using mvn play2:run command and to start **sunbird-lms-mw** using mvn exec:java.
