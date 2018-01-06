---
type: landing
directory: developer-docs/singlesignon
title: Master Data Exchange
page_title: Master Data Exchange
description: Details of master data exchange during single sign on
published: true
allowSearch: true
---


## Master Data Interchange
There are some data presently residing in the external SSO systems which are needed on Sunbird to provide functionality to the users who sign in to the platform. The data needed are about organisations (teacher education/training Institutes) and the members of the organisations. Within Sunbird, a user is not granted permissions system wide. Instead, a user has permissions defined at the level of the organisation which they are a part of. This allows a user to be a part of many organisations and have different permissions for each organisation.

For example:

- There are two users, Anita and Bishan. Anita is a student at Acme Institute for Teacher Education. Bishan is a Teacher at the same institute.

- On Sunbird, Anita and Bishan will have different levels of access to resources available within the Acme Institute. Anita will be a member and Bishan will be an organisation content creator.

- A third user, Chandra who is not registered as a member of the Acme Institute for Teacher Education will have no access to the resources of the Institute. 

- A fourth user, Deepti who is registered as an admin of the Acme Institute for Teacher Education will be able to administer the organisation and its resources.

### Data Requirements
To make this feasible, Sunbird will require three items of information from the integrating party

- List of organisations, their names and any unique identifier for them in external system

- List of members for each organisation containing the username, full name and verified email address

- List of roles of each member in the organisation. Available roles are member, content creator and admin.
