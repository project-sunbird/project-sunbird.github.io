### Sunbird Platform

The Sunbird platform essentially embeds Service Oriented Architecture, which is a loosely-coupled architecture designed to meet the business needs of the organization.

These form the core of Sunbird:

+ **Functional Entities**
+ **Service Entities**

The platform offers and facilitates these functional entities:

1. Organisation
1. Course
1. Resources
1. Community 

For functional entities description, refer to conceptual view. The service entities along with functional entities form the core or platform of Sunbird.

**API Gateways:** Sunbird uses modern micro service architecture form which provides an intuitive way to hide the services behind a new service layer and provide APIs which are tailored to each client. This aggregator service layer is also known as API Gateway. API gateway permits orchestration, which enables micro services to arrange how the requests are being processed by the architecture.

**Restful APIs:** Sunbird deploys RESTful APIs. The stateless nature of RESTful Sunbird APIs can freely be re-deployed if something fails. Principally, Sunbird establishes a one-to-one mapping between create, read, update, and delete (CRUD) operations and HTTP methods. Sunbird ideally capitalizes on to keep the interface generalized and allows users to be explicit about the operations they invoke. Also, Sunbird uses Wrapper APIs to expose an API in a much flexible and friendlier way. These wrapper APIs makes it easy to handle requests and provide a simple set of methods that can be called in wrapper code.

**Single Sign on Service(SSO):** With single sign-on service, Sunbird users only have to enter one set of credentials to access their web apps in the cloud and behind the firewall – via desktops, smartphones and tablets. This greatly increases productivity while keeping data secure.

**Elastic search:** Sunbird platform provides distributed “Elastic search”. As the heart of the Elastic Stack, data is centrally stored to discover the expected and uncover the unexpected.

**Rich Analytics, Insights & Telemetry:** Sunbird has rich analytic mechanism with telemetric approach. It has powerful tools to analyze how users engage with the content. Real-time reports uncover insights into user online behavior that helps to deliver better content which users want to interact with.
