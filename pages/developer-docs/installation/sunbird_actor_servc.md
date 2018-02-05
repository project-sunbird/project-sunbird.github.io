---
type: landing
directory: developer-docs/installation/
title: Actor System
page_title: Actor System
description: Sunbird Akka Actor System enables concurrency, scalibility
allowSearch: true
---
### Overview

**Sunbird Akka Actor System**

Akka can work with several containers called actor systems. An actor system manages the resources it is configured to use in order to run the actors which it contains. Actor Model on Sunbird enables the abstraction level and provides a better platform to build concurrent and scalable applications. For more details about AKKA refer to the official [website](https://doc.akka.io/docs/akka/current/general/actor-systems.html){:target="_blank"}.

To run the Actor systems, follow these steps:

- Check for the Pre-requisites
- Implementating Actor System
- Usecases

## Prerequisites

You must ensure that:

- your machine has the ability to run the Akka actor in local,remote or mixed mode

Running Akka actor either in local or remote mode depends on setting keys in configuration file, similarly background job actor can also be executed using any of the modes.

### Implementing Actor System

In order to implement actor system, you need to configure various values/keys in the configuration file. The configuration keys are configured in **externalresource.properties** file or in environment variables.

The configuration is as follows:

1. api_actor_provider ```{'**remote**','**local**'}``` [Default value will be 'local' means normal actors will run locally]

2. background_actor_provider ```{'**remote**','**local**'}```[Default value will be 'remote' means all backgroundjob actor will run remotely.]

3. sunbird_actor_system_name ```{'**RemoteMiddlewareActorSystem**','**BackGroundRemoteMiddlewareActorSystem**'}```

**NOTE:** **sunbird_actor_system_name** value is the actor system name.

- To run normal actor system on a machine, set the value to **RemoteMiddlewareActorSystem**
- To run background actors on the same  machine, set the value to **BackGroundRemoteMiddlewareActorSystem** this property is used         when you need to run an actor remotely.

## Use cases of running Actor system

The following are some scenarios while running the Actor services:

- Running both the actor systems locally
- Running normal actor system locally and background actor system remotely
- Running both actor systems remotely

### Scenario 1

- **Running both the actor systems locally**

  - To run both actor system locally, implies that both the normal and background actor systems are running on the same machine with **sunbird-lms-service**. 
  - Set values of '**api_actor_provider**' and '**background_actor_provider**' properties as **local** in the environment variable.

  - To start the application, make the builds in following sequence
    - **sunbird-utils**
    - **sunbird-lms-mw**
    - **sunbird-lms-service**

 Then, run the **sunbird-lms-service** 
 ```mvn play2:run``` command to start the sunbird application, executing this will start both the actor systems on same machine.

### Scenario 2

- **Running normal actor system locally and background actor system remotely**

  - To run the normal actor system locally, for normal actor system with **sunbird-lms-service**, change the value of '**api_actor_provider**' properties in environment variable to **local**.

  - To run background actor system remotely, for running background actor on different machine, set the value of **background_actor_provider** properties value to **remote**  in environment variable along with **sunbird_actor_system_name** properties value in environment variable as **BackGroundRemoteMiddlewareActorSystem**.

- To start the application, make the builds in following sequence
  - **sunbird-utils**
  - **sunbird-lms-mw**
  - **sunbird-lms-service**

Then, run the **sunbird-lms-service** by executing ```mvn play2:run```.And to start **sunbird-lms-mw** execute ```mvn exec:java``` command.

### Scenario 3

- **Running both actor systems remotely**

  - To run both actor systems remotely, running normal actor system on one machine and background actor system on another and also to run  **sunbird-lms-service** on different machine.

  - Run normal actor system remotely ,suppose you are running it on machine m1
  - set the value of **api_actor_provider** properties value to **remote**  in environment variable along with **sunbird_actor_system_name** properties value in environment variable as **RemoteMiddlewareActorSystem** on machine m1.

  - To run background actor system remotely , suppose you are running  it on machine m2 ,set the value of **background_actor_provider** properties value to **remote**  in environment variable along with **sunbird_actor_system_name** properties value in environment variable as **BackGroundRemoteMiddlewareActorSystem** on machine m2.

- To start the application, make the builds in following sequence
  **sunbird-utils** \
  **sunbird-lms-mw**
  **sunbird-lms-service**
Then, run  **sunbird-lms-service** by executing ```mvn play2:run``` command.And to start **sunbird-lms-mw** by executing ```mvn exec:java``` command.
