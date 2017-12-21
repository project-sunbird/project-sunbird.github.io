The technical stack of Sunbird is evolutionary and modern in nature. Effortless maintainability, seamless portability, enhanced reusability, and easy testability makes Sunbird easy to use and deploy. Sunbird is built on Ekstep Infra Layer with additional RESTful APIs and related contextual data to build a rich learning management system for teachers/students and is implemented using the following modern technologies:

### Apache Cassandra 

It’s a NoSQL database management system designed to handle large amounts of data across many commodity servers, providing high availability with no single point of failure. It holds all the contextual data of Sunbird like organization, user, course, community, forums etc.

### Elastic Search

It provides a distributed, multi-tenant-capable full-text search with an HTTP web interface and schema-free JSON documents. It helps indexing courses for easy look-up against teacher, region, organization, time-line etc. It alos provides community tracking capabilities.  

### Kafka & Kibana

Kafka enables Sunbird platform to stream content in real-time using data pipelines. An amalgamation of various data related tools in Sunbird provide an intuitive way to get insights about various functional entities of Sunbird. For instance, using various other data tools the Sunbird admin can get better understanding of content and its usage. It generates reports on users, content consumption, courses etc. The data related tools provide flexibility in viewing the analytics in different forms like line and scatter plots, or pie charts and maps.
 
### Play Framework

Sunbird uses play framework with Kafka to present content to its users, wherein the underlying framework provides predictable and minimal resource consumption.

### Akka

Akka is used as base for play framework, which provides powerful reactive, concurrent, and distributed application framework.

### Angular and Node.js

It provides an environment to Sunbird which is extraordinarily expressive, readable, and quick to develop. It is fully extensible and works well with other libraries. It maximizes scalability and provides seamless extensibility.

### Android

Sunbird can be viewed on mobile using android platform. An Android Sunbird app can be developed to make Sunbird mobile and enable anywhere and anytime use.
