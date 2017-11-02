
**Organization**

In Sunbird, the user base is not just limited to individuals but it spans across organizations like schools, colleges, education boards & departments, etc. In broader terms, Sunbird architecture defines users as Organizations.

Following is the hierarchical structure of organization, the basic entity is a Member, where in a member can play following roles:

+ **Admin:** In Sunbird, the Admin has capabilities of adding or removing, changing the roles of other members. Also, an Admin can add or remove sub-hierarchical organizations.
+ **Member:** A member can be a part of an organization also a member can view other members of an organization too.

The Organization in Sunbird is designed around the following objects with following attributes:

+ **Organization:** Organization Id, Name, Description ,Parent Organization Id etc.
+ **Organization Members:** Organization Id,Member Id,Role,Date Joined etc.
+ **Organization Hierarchy:** Organization Id,Parent Organization Id,Relation.

**Users**

User Model contains the identity information that is required to uniquely identify the user and the static profile of the user and its demographic information, etc. A user can be a member of one or more organizations.
Typically, a user can be a member of one or more organizations. User Model in Sunbird contains the identity information that is required to uniquely identify the user and the static profile of the user like demographic information, etc. In addition, a user will have a profile that gets refined as users interact with Sunbird platform.
