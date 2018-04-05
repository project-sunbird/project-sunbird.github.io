---
type: landing
directory: features-documentation
title: Types of Users
page_title: Types of Users
description: User Roles and Permission
keywords: 'Admin, System Admin, Org Admin, Instructor, Student, Roles, Permissions'
published: true
allowSearch: true
---
On Sunbird, each user type is associated with a user role. The permissions and responsibilities vary for each user role.  
Before users are assigned with appropriate roles, it is important to understand the: <br>1. Responsibilities of a each user role <br>2. Features accessible to each user role

On Sunbird there are ten user types:

## Course Mentor
A Course Mentor guides and instructs learners on how to undertake a course. They create batches of users to enrol for a course. Mentors also ensure completion of a course within a stipulated time.

<b>User Role Matrix for a Course Mentor</b>

|  Functionality    | Create Content | Upload Content | Review Content | Reject and Publish Content | Delete Content | Create Batch | Add Other Mentors |
|-------------------|----------------|----------------|----------------|----------------------------|----------------|--------------|-------------------|
| **Course Mentor** |       No       |       No       |       No       |             No             |       No       |      Yes     | Yes               |

## Content Reviewer
A Content Reviewer accesses the created courses or content within prescribed guidelines. Sunbird has defined review guidelines. Reviewers assess content based on these guidelines. Reviewers have the right to reject or publish content based on these guidelines.

<b>User Role Matrix for a Content Reviewer</b>
  
|  Functionality       | Create Content | Upload Content | Review Content | Reject and Publish Content | Review Flagged Content | Delete Content | Update User Profile |
|----------------------|----------------|----------------|----------------|----------------|------------------------|----------------|---------------------|
| **Content Reviewer** |       No       |       Yes      |       Yes      |       Yes      |           No           |       Yes      |         Yes         |

<b>Note:</b> Reviewers can also have creation rights, but they cannot review courses or content created by themselves. Reviewers can only review courses or content created by others.

## Teacher Badge Issuer
A Teacher Badge Issuer is responsible for assigning badges to teachers based on the discretion of the concerned organization.

<b>User Role Matrix for a Teacher Badge Issuer</b>

|  Functionality       | Create Content | Upload Content | Review Content | Reject and Publish Content | Assign Badges | Delete Content | Update User Profile |
|----------------------|----------------|----------------|----------------|----------------|------------------------|----------------|---------------------|
| **Teacher Badge Issuer** |       No       |       No      |       No      |       No      |           Yes           |       No      |         Yes         |

## Book Creator
A Book Creator is an individual who curate and compiles books. The registered users become book creators when book creation rights are assigned to them.

<b>User Role Matrix for a Book Creator</b>

|  Functionality       | Create Book | Upload Book | Review Book | Reject and Publish Book | Review Flagged Content | Delete Content | Update User Profile |
|----------------------|----------------|----------------|----------------|----------------|------------------------|----------------|---------------------|
| **Book Creator** |       Yes       |       Yes      |       No      |       No      |           No           |       No      |         Yes         |

## Book Reviewer
A Book Reviewer assesses books within defined and prescribed guidelines. A book reviewer has the right to reject or publish the content based on these guidelines.       

<b>User Role Matrix for a Book Reviewer</b>

|  Functionality       | Create Book | Upload Book | Review Book | Reject and Publish Book | Review Flagged Content | Delete Content | Update User Profile |
|----------------------|----------------|----------------|----------------|----------------|------------------------|----------------|---------------------|
| **Book Reviewer** |       No       |       No      |       Yes      |       Yes      |           No           |       No      |         Yes         |

## Official Textbook Badge Issuer  
An Official Textbook Badge Issuer is an individual who  assigns badges to books. Currently, only one badge can be assigned on Sunbird titled as Official

<b>User Role Matrix for an Official Textbook Badge Issuer</b>

|  Functionality       | Create Book | Upload Book | Review Book | Reject and Publish Book | Assign Badge | Delete Content | Update User Profile |
|----------------------|----------------|----------------|----------------|----------------|------------------------|----------------|---------------------|
| **Official Textbook Badge Issuer** |       No       |       No      |       No      |       No      |          Yes           |       No      |         Yes         |


## Public      
A user having registered credentials on Sunbird. A registered user can be a learner or an instructor. To consume any content on Sunbird, the user must be registered on the portal by their respective org admins 

<b>User Role Matrix for a Public User</b>

|  Functionality       | Create Book | Upload Book | Review Book | Reject and Publish Book | View Content | Delete Content | Update User Profile |
|----------------------|----------------|----------------|----------------|----------------|------------------------|----------------|---------------------|
| **Public** |       No       |       No      |       No      |       No      |           Yes           |       No      |         Yes         |

## Announcement Sender          
A person who send a formal declaration to various registered users on the portal. On Sunbird, every organization can have one or more announcement sender who are responsible for informing important dates, announcements and other information to all the registered users of that organization.  
<b>User Role Matrix for an Announcement Sender</b>

Functionality|Create Content|Upload Content|Review Content|Reject Content and Publish Content|Delete Content|Update User Profile|Create Announcements|Send Announcements
-------------|--------------|--------------|--------------|----------------------------------|--------------|-------------------|--------------------|--------------------
**Announcement Sender**|Yes| Yes| No| No| No| No| Yes| Yes|

## Content Creator 
A content creator can curate content such as Collection, Lesson Plan and Study Material. On Sunbird, registered users become content creators when content creation rights are assigned to them.

<b>User Role Matrix for a Content Creator</b>

|  Functionality      | Create Content | Upload Content | Review Content | Reject Content | Publish Content | Delete Content | Update User Profile |
|---------------------|----------------|----------------|----------------|----------------|-----------------|----------------|---------------------|
| **Content Creator** |       Yes      |       Yes      |       No       |       No       |        No       |       Yes      |         Yes         |

## Flag Reviewer                          
A flag reviewer assesses the content that is marked as inappropriate by any user. The flag reviewer reviews and rejects the inappropriatethe content. The flag is removed if the content abides by the guidelines.

<b>User Role Matrix for a Flag Reviewer</b>

|  Functionality    | Create Content | Upload Content | Review Content | Reject and Publish Content | Review Flagged Content | Delete Content | Update User Profile |
|-------------------|----------------|----------------|----------------|----------------------------|------------------------|----------------|---------------------|
| **Flag Reviewer** |       No       |       Yes      |       Yes      |             Yes            |           Yes          |       Yes      | Yes                 |
  
<b>Note</b>: Organization administrators can assign multiple roles to individual users. For example; a user can be a course mentor, course creator and announcement sender. The organization decides how many roles one individual should handle. 

