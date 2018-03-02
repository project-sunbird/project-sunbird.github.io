---
type: landing
directory: developer-docs/installation/
title: Actor System
page_title: Actor System
description: Sunbird Akka Actor System enables concurrency, scalability
allowSearch: true
---
### Overview

**Sunbird Akka Actor System**

Akka can work with several containers called actor systems. An actor system manages the resources it is configured to use in order to run the actors which it contains. Actor Model on Sunbird enables the abstraction level and provides a better platform to build concurrent and scalable applications. For more details about Akka refer to the official [website](https://doc.akka.io/docs/akka/current/general/actor-systems.html){:target="_blank"}.

To run the Actor systems, follow these steps:

- Check for the Pre-requisites
- Implementing Actor System
- Scenarios 

## Prerequisites

You must ensure that:

- Your machine has the ability to run the Akka actor in local, remote or mixed mode

- Running Akka actor either in local or remote mode depends on setting keys in configuration file. Similarly, the background job actor can also be executed using any of the modes

### Implementing Actor System

In order to implement actor system, you need to configure various values/keys in the configuration file. The configuration keys are configured in **externalresource.properties** file or in environment variables.

The configuration is as follows:

1. api_actor_provider ```{'**remote**','**local**'}``` Default value will be 'local' means normal actors will run locally

2. background_actor_provider ```{'**remote**','**local**'}``` Default value will be 'remote' means all background job actor will run remotely

3. sunbird_actor_system_name ```{'**RemoteMiddlewareActorSystem**','**BackGroundRemoteMiddlewareActorSystem**'}```

**NOTE:** **sunbird_actor_system_name** value is the actor system name.

   - To run normal actor system on a machine, set the value to **RemoteMiddlewareActorSystem**
   - To run background actors on the same  machine, set the value to **BackGroundRemoteMiddlewareActorSystem** this property is used         when you need to run an actor remotely.

## Use cases of running Actor system

The following are some scenarios while running the Actor services:

- Scenario #1
  - Running both the actor systems locally on single machine
- Scenario #2
  - Running normal actor system locally and background actor system remotely
- Scenario #3
  - Running both actor systems remotely

### Scenario #1

- **Running both the actor systems locally**
 
 You can run normal actor system and background actor system on the same machine by the following procedure:   
    
   - To run both normal and background actor systems on a single machine with **sunbird-lms-service**. Set the values of '**api_actor_provider**' and '**background_actor_provider**' properties as **local** in the environment variables

   - To start the application, make the builds in the following sequence:
   
      1. sunbird-utils
      2. sunbird-lms-mw
      3. sunbird-lms-service

 Then, run the **sunbird-lms-service** by executing the ```mvn play2:run``` command. Executing this command ensures that the Sunbird application is started.
 
 **Note:** Both the actor systems will now run on the same machine.

### Scenario #2

- **Running normal actor system locally and background actor system remotely**

You can run normal actor system locally and background actor system remotely by following procedure:

   - To run the normal actor system locally with **sunbird-lms-service**, set the value of 'api_actor_provider' properties in environment variable to **local**

   - To run the background actor system remotely, set the value of **background_actor_provider** property to **remote** in environment variable along with **sunbird_actor_system_name** property value to **BackGroundRemoteMiddlewareActorSystem**

   - To start the application, make the builds in the following sequence:
  
     1. sunbird-utils
     2. sunbird-lms-mw
     3. sunbird-lms-service

Then, you can run the **sunbird-lms-service** by executing ```mvn play2:run```command .And to start **sunbird-lms-mw** execute ```mvn exec:java``` command.

**Note:** the normal actor will now run locally and background actor will run remotely.

### Scenario #3

- **Running both actor systems remotely**

You can run both the actor system remotely by following procedure:

- To run normal actor system on one machine and background actor system on another remotely and also, to run  **sunbird-lms-service** on different machines

 -  Assuming you are using machine m1 to run normal actor system remotely
 
    -  Set the value of **api_actor_provider** property value to **remote**  in environment variable along with **sunbird_actor_system_name** property value as **RemoteMiddlewareActorSystem** on machine m1.

 - Assuming you are using machine m2 to run background actor system remotely
  
    - Set the value of **background_actor_provider** property to **remote**  in environment variables along with **sunbird_actor_system_name** property value to **BackGroundRemoteMiddlewareActorSystem** on machine m2.

- To start the application, make the builds in following sequence:
      
     1. sunbird-utils 
     2. sunbird-lms-mw
     3. sunbird-lms-service

Then, run  **sunbird-lms-service** by executing ```mvn play2:run``` command.And to start **sunbird-lms-mw** by executing ```mvn exec:java``` command.

**Note:** Both the normal actor as well as background actor will run remotely.
