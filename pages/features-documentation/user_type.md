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

Given below are the various user types and their assocated responsibilites on Sunbird:

## Course Mentor
A Course Mentor guides and instructs learners on how to undertake a course. They create batches of users to enrol for a course. Mentors also ensure completion of a course within a stipulated time.

<b>User Role Matrix for a Course Mentor</b>

|  Functionality    | Create & Edit Batch | Delete Batch | Add Mentor | Add participants | Remove participants | View Batch Progress | 
|-------------------|---------------------|---------------------|-------------------------|-----------------|---------------------|--------------|
| **Course Mentor** |       Yes       |       Yes       |       Yes       |         Yes        |      No       |      Yes    | 

## Content Reviewer
A Content Reviewer accesses the created courses or content within prescribed guidelines. Sunbird has defined review guidelines. Reviewers assess content based on these guidelines. Reviewers have the right to reject or publish content based on these guidelines.

<b>User Role Matrix for a Content Reviewer</b>
  
|  Functionality       | Create Content | Upload Content | Review Content | Reject & Publish Content | Review Flagged Content | Delete Content | Update User Profile |
|----------------------|----------------|----------------|----------------|----------------|------------------------|----------------|---------------------|
| **Content Reviewer** |       No       |       Yes      |       Yes      |       Yes      |           No          |       No     |         Yes         |

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

|  Functionality       | Create Book | Upload Book | Review Book | Reject Book | Publish Book | Delete Book | Update User Profile |
|----------------------|----------------|----------------|----------------|----------------|------------------------|----------------|---------------------|
| **Book Creator** |       Yes       |       No      |       No      |       No      |           No           |       Yes      |         Yes         |

## Book Reviewer
A Book Reviewer assesses books within defined and prescribed guidelines. A book reviewer has the right to reject or publish the content based on these guidelines.       

<b>User Role Matrix for a Book Reviewer</b>

|  Functionality       | Create Book | Upload Book | Review Book | Reject Book | Publish Book | Delete Book | Update User Profile |
|----------------------|----------------|----------------|----------------|----------------|------------------------|----------------|---------------------|
| **Book Reviewer** |       No       |       No      |       Yes      |       Yes      |           Yes          |       No      |         Yes         |

## Public      
A Public User is any user who is registered with their credentials on Sunbird. They have permissions to view and use content, and manage their own profile on the Sunbird platform. For example: a learner or an instructor. 

<b>User Role Matrix for a Public User</b>

|  Functionality       | To Do Notification | Assigned Badges | Latest & Popular Courses | Library & My Courses | Update User Profile | Content Creation and Management | 
|----------------------|----------------|----------------|----------------|----------------|------------------------|----------------|
| **Public** |       Yes      |       Yes      |       Yes      |       Yes           |      Yes       |         No         |

## Announcement Sender          
The Announcement feature allows you to send system wide messages to a target audience. This feature helps in swift communication of urgent information, such as Orders or Circulars. 

An Announcement Sender creates and sends announcements. The organization administrator can assign the role to one or more members.

<b>User Role Matrix for an Announcement Sender</b>

Functionality|Create Content|Upload Content|Review Content|Reject Content and Publish Content|Delete Content|Update User Profile|Create Announcements|Send Announcements
-------------|--------------|--------------|--------------|----------------------------------|--------------|-------------------|--------------------|--------------------
**Announcement Sender**|No| No| No| No| No| Yes| Yes| Yes|

## Content Creator 
A Content Creator is a registered user with permission to create content on Sunbird. They can curate content such as Collection, Lesson Plan, Course, and Study Material. A content creator cannot delete content created by others.

<b>User Role Matrix for a Content Creator</b>

|  Functionality      | Create Content | Upload Content | Review Content | Reject Content | Publish Content | Delete Content | Update User Profile |
|---------------------|----------------|----------------|----------------|----------------|-----------------|----------------|---------------------|
| **Content Creator** |       Yes      |       Yes      |       No       |       No       |        No       |       Yes      |         Yes         |

## Flag Reviewer                          
On Sunbird any user can flag content for inappropriateness, copyright or privacy violations, and others. A Flag Reviewer assesses flagged content within prescribed guidelines to either reject or accept. 

The content accepted as inappropriate is pulled back for relevant modifications. The flag is removed if the content abides by the guidelines.

<b>User Role Matrix for a Flag Reviewer</b>

|  Functionality    | Create Content | Upload Content | Review Content | Accept and Reject Flag | Review Flagged Content | Delete Content | Update User Profile |
|-------------------|----------------|----------------|----------------|----------------------------|------------------------|----------------|---------------------|
| **Flag Reviewer** |       No       |       No      |       No      |             Yes            |           No          |       No      | Yes                 |
  
<b>Note</b>: Organization administrators can assign multiple roles to individual users. For example; a user can be a course mentor, course creator and announcement sender. The organization decides how many roles one individual should handle. 

## User Interface for Different User Roles

The User Interface (UI) differs for each Sunbird user role. Based on the role’s rights and permissions elements of the portal may not be available.

<b>User Role And User Interface Matrix</b>


|User Role |Profile|Workspace|To Do (Home Page)|Courses |Library|
|-------------------|----------------|----------------|----------------|----------------------------|------------------------|----------------|
|Content Creator, Content Reviewer, Flag Reviewer & Course Mentor |Yes|Yes|Yes|Yes |Yes|
|Book Creator & Book Reviewer |Yes|Yes|Yes|Yes |Yes|
|Teacher Badge Issuer |Yes|No|Yes|Yes |Yes|
|Announcement Sender|Yes|No|No|No |No|
|Public |Yes|No|Yes|Yes |Yes|




