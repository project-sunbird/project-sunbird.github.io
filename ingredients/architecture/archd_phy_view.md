The technical stack of Sunbird is evolutionary and modern in nature with easy maintainability, seamless portability, enhanced reusability, and maximizes on testability. Sunbird is built on Ekstep Infra Layer with additional RESTful APIs and related contextual data to build a rich Learning Management System for teachers/students and is implemented using the following modern technologies:

**Apache Cassandra** 

It’s a NoSQL database management system designed to handle large amounts of data across many commodity servers, providing high availability with no single point of failure. It holds all the contextual data of Sunbird like Organization, User, Course, Community, Forums etc.

**Elastic Search**

It provides a distributed, multitenant-capable full-text search with an HTTP web interface and schema-free JSON documents. It helps indexing courses for easy look-up against teacher, region, organization, time-line etc. Also, it provides Community tracking capabilities.  

**Kafka & Kibana**

Kafka enables Sunbird platform to stream content in real-time using data pipelines. While, using various other data tools, Sunbird admin is enabled to get better understanding of content and its usage. This amalgam of various data related tools in Sunbird provide an intuitive way to get insights about various functional entities of Sunbird. It provides the visualizations report on insights of users, content consumption, courses etc. The data related tools provide flexibility in viewing the analytics in different forms like line and scatter plots, or pie charts and maps.
 
**Play Framework**

Sunbird uses play framework with Kafka to present content to its users, wherein the underlying framework provides predictable and minimal resource consumption.

**Akka**

Akka is used as base for play framework, which provides powerful reactive, concurrent, and distributed application framework.

**Angular and Node.js**

It provides an environment to Sunbird which is extraordinarily expressive, readable, and quick to develop. It is fully extensible and works well with other libraries. It maximizes scalability and provides seamless extensibility.

**Android**

Sunbird can be viewed on mobile using android platform. An Android Sunbird app is developed to make Sunbird mobile and enable anywhere and anytime use.
