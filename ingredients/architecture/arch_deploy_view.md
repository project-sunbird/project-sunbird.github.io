**Infrastructure**

Sunbird can run on Virtual Machines (VMs) using various Cloud providers or even bare metal. 
Cloud Infrastructure automation process will be updated soon on the website. 

**Stable Builds Registry**

- Sunbird builds are available at a [Image Registry](https://hub.docker.com/u/sunbird){:target="_blank"}
- These builds are in the form of a [Dockerfile](https://docs.docker.com/engine/reference/builder/){:target="_blank"} 
- Sunbird stable releases are tagged as ```gold```. While as Deployment scripts pull the ```gold``` images for production deployment
- The ```gold``` images are also versioned to allow release management and upgrade paths

**Software Runtime**

Most runtimes in Sunbird are containerized as [Docker containers](https://www.docker.com/what-container){:target="_blank"} for: 
- Portability
- Process isolation
- Standardization.  
For container orchestration, this repo contains scripts to run Sunbird on [Docker Swarm](https://docs.docker.com/engine/swarm/){:target="_blank"}. Most of the cloud providers provide these container services. In our repo, we are using [ACS-Engine](https://github.com/Azure/acs-engine){:target="_blank"}.

**Logging, Monitoring and Operational dashboards**

Sunbird comes with log aggregation and metrics reporting out of the box. For log aggregation, Sunbird is using a combination of 

- [cAdvisor](https://github.com/google/cadvisor){:target="_blank"}
- [ELK stack](https://www.elastic.co/webinars/introduction-elk-stack){:target="_blank"}
- [Prometheus](https://prometheus.io/){:target="_blank"} and their plugin ecosystem.

Ops dashboards are built using: [Grafana](https://grafana.com/){:target="_blank"}.

**Custom builds**

Sunbird enables its users to feature of extendibility.A user can take as a base image with custom implementation of public interfaces and rebuild it for deployment. Scripts are available for ramping up of complex deployments with support to run local build promotions and deployments.

**License**

The code in this repository is licensed under MIT unless otherwise noted. <!--Please see the [LICENSE](https://github.com/project-sunbird/sunbird-devops/blob/master/LICENSE){:target="_blank"} file for details.-->
