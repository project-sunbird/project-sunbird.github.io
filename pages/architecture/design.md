---
type: landing
directory: architecture
title: Design
page_title: Design
description: Architecture Design
keywords: Architecture Design
published: true
allowSearch: true
---
With a multi-tenant and robust framework, Sunbird architectural design is resilient, flexible and agile. The  micro-service pattern enhances the overall structure and functionality of Sunbird. 
The Sunbird architectural design is an amalgamation of layered architecture and service-oriented architecture.
It follows the design principles that maximizes on:

- Abstraction and security
- Portability
- Testing
- Seamless maintainability
- Scalability
- Availability
- Interoperability and rationalization

## Architectural Design Principles

- **Avoid Duplication of Effort via Shared Infrastructure**

    This shared infrastructure model allows organizations to participate in a larger movement for learning and democratize the creation and consumption of the content on the platform.
    Shared infrastructure includes the underlying technology infrastructure as well as content and metadata that gets co-created on the platform by participating organizations. This approach avoids duplication of effort by organizations, brings down development costs and creates a shared knowledge base.

- **Allow Interoperability via Open-ness and Use of Open Standards**

    Open and seamless interoperability is an absolute requirement for the wide adoption of an open learning platform on which many applications can be built. Therefore, Sunbird is built using open standards and technologies, without affinity to specific platforms, programming languages or network technologies. In addition, all components within the platform are loosely coupled using open interfaces (APIs) ensuring interoperability.

- **Enable Extensibility via Layers and Modular Design**

    The system design and architecture of Sunbird is modular with clear separation of concerns for data storage, service and API layers. All components of the infrastructure are independently replaceable and extensible. This enables diverse use cases by allowing the creation of contextual solutions to suit specific purposes.

- **Allow Configurable Design with Plug-n-Play Capabilities**

    The modular design of the platform allows organizations to configure, adapt the platform and use plug-n-play components depending on their requirements. Decoupling of business parameters, rules, master data from the rest of the solution architecture allows for a great deal of flexibility by allowing organizations to define what modules and features to enable based on their contextual use cases.

- **Build Diverse Solutions via Open Application Program Interfaces**

    Adopting open standards with an API-driven architecture is important to ensure that the platform doesn’t hold monolithic solutions and that the latest technologies can be integrated with the platform at a later date. 
    
    Open APIs allow innovative contextual solutions to be built on top of the platform, thereby amplifying existing resources and enabling new innovations for the ecosystem. Third parties can also build custom applications for the platform such as attendance trackers, translation modules, etc. to significantly extend the capabilities exposed to end users.

- **Create Common Public Good via Open Source**

    Sunbird takes advantage of available open source resources, open infrastructures and core web-scale services. Using open source allows flexibility in feature enhancements, gives full code control, avoids lock-in to proprietary systems, and allows any adopter to build solutions on top of Sunbird. Building the platform using open source tools and OER strengthens and amplifies the pool of common public resources and solutions available to the platform and ecosystem.

- **Create Transparency and Accountability via Open Data**

    Sunbird enables capture and measurements of data at a high degree of granularity. Well-defined metrics, and feedback loops for insights and learnings can be shared with the ecosystem for continuous improvement. Data is openly available via APIs for transparency and accountability. Access to data ensures that the quality of content and tools on the platform is measured systematically and enable quicker responsiveness to user needs and shorter improvement cycles.

- **Permits Distributed Access via Multiple Delivery Channels**

    Sunbird provides multiple channels/interfaces to its users for interactions. With high penetration of mobile devices and internet usage through mobile devices, an important consideration is that end-user devices and their screen capabilities (including browser variations) are numerous and are constantly evolving. Hence, Sunbird is designed to enable an ecosystem of delivery applications to evolve including desktop access, offline & online mobile access, and TVs.

- **Designed to Scale via Commodity Computing**

    The Sunbird platform is architected to scale horizontally to millions of users and can reliably handle data records in billions. All components including computer, network and storage will scale horizontally to ensure that additional resources can be added as and when needed to achieve the required scale. Being cloud-ready and using commodity hardware will ensure that capital investments will be made only when required. Using commodity hardware also gives a choice of infrastructure and allows heterogeneous infrastructures to co-exist.

- **Data Security and Privacy by Design**

   Managing security and privacy of data is a critical part of the design of Sunbird. Data is digitally signed to ensure privacy and all data access is through API calls to ensure centralized management of security controls. Direct access is prohibited for internal data access (access between various modules) and use of APIs is highly encouraged. Encapsulating access controls, auditing, confidentiality (via encryption), and integrity (via signatures) is enabled via common APIs. No application accesses data directly from the data storage. This ensures privacy and data integrity and will disseminate data to be authenticated and authorized users only (both internal and external).

