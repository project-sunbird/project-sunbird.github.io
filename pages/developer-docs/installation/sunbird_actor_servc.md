
## Prerequisites

- Ensure that the system has the ability to run the akka actor in local ,remote or mixed mode
- Based on the configuration values, system can run akka actor either in local or remote mode in similarly background job actor can also be run by any one of the modes. 

### Implementation : 
   
  The configuration keys will be set under **externalresource.properties** file or in environment variable.
     
   1.  api_actor_provider {'**remote**','**local**'} [Default value will be 'local' means normal actors will run locally]
   2.  background_actor_provider {'**remote**','**local**'} [Default value will be 'remote' means all backgroundjob actor will run remotely.]
   3. sunbird_actor_system_name {'**RemoteMiddlewareActorSystem**','**BackGroundRemoteMiddlewareActorSystem**'} 

        **NOTE:** - **sunbird_actor_system_name** value is the actor system name which you want to run on a machine.
        - To run normal actor system on a machine, the value is **RemoteMiddlewareActorSystem** 
        - To run background actors on the same  machine, the value is **BackGroundRemoteMiddlewareActorSystem** this property is used              when you are running a actor remotely.

## Scenario 1:
   * Running both the actor systems locally

        To run both actor system locally means that both normal and background actor system are running on the same machine with **sunbird-lms-service**. Set values of these '**api_actor_provider**' and '**background_actor_provider**' properties as **local** in the environment variable.

To start the application, first make a build of **sunbird-utils** , followed by **sunbird-lms-mw** and lastly **sunbird-lms-service** 
and run the **sunbird-lms-service** using mvn play2:run command to start the sunbird application , it will start both the actor systems on same machine.


## Scenario 2:
   * Running normal actor system locally and background actor system remotely

     To run the normal actor system locally means running normal actor system with **sunbird-lms-service** , change the value of '**api_actor_provider**' properties in environment variable to **local**.

     To run background actor system remotely means running only background actors on different machine, set the value of **background_actor_provider** properties value to **remote**  in environment variable along with **sunbird_actor_system_name** properties value in environment variable as **BackGroundRemoteMiddlewareActorSystem**.

To start the application, first make a build of **sunbird-utils** , followed by **sunbird-lms-mw** and lastly **sunbird-lms-service** 
and run the **sunbird-lms-service** using mvn play2:run command and to start **sunbird-lms-mw** using mvn exec:java.


## Scenario 3:
   * Running both actor systems remotely

      To run both actor system remotely means running normal actor system on one machine and running background actor system on another and running **sunbird-lms-service** on different machine.

      To run normal actor system remotely ,suppose running on machine m1 , set the value of **api_actor_provider** properties value to **remote**  in environment variable along with **sunbird_actor_system_name** properties value in environment variable as **RemoteMiddlewareActorSystem** on machine m1.

      To run background actor system remotely , suppose running on machine m2 ,set the value of **background_actor_provider** properties value to **remote**  in environment variable along with **sunbird_actor_system_name** properties value in environment variable as **BackGroundRemoteMiddlewareActorSystem** on machine m2. 

      To start the application, first make build of **sunbird-utils** , followed by **sunbird-lms-mw** and lastly **sunbird-lms-service** and run the **sunbird-lms-service** using mvn play2:run command and to start **sunbird-lms-mw** using mvn exec:java.
