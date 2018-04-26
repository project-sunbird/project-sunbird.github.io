---
type: landing
directory: features-documentation
title: Exploring TOC Structure
page_title: Exploring TOC Structure
description: Details on how to add resource, edit and delete nodes in the TOC pane of the content editor
keywords: 'add child, add sibling, parent node, adding content, adding resource, node definition, node exploration'
published: true
allowSearch: true
---
## Introduction

The Table of Contents (TOC) is a tree structure that is a relational hierarchy with three nodes: 

**Title Node:** The highest node in the TOC pane that represents the entire compilation. Typically, this is the name of the Textbook, Course, Collection or Lesson Plan.

**Sibling Node:** Represent nodes that are at the same hierarchy within the compilation. Typically, these are the topic headings within a Textbook, Course, Collection or Lesson Plan.

**Child Node:** Represent nodes that have at least one node higher in the hierarchy of the compilation. The node of at the higher level is the parent of the child. Typically, the child nodes are sub-headings in a topic. 

However, when you create the first node after adding the title node, you need to add a child node and not
a sibling node. For example, for the English textbook of class V, the title of the book becomes the title node. Each unit
heading within the book is the child node. Subsequent chapters becomes sibling nodes. Let us consider the example of a class V English textbook. 

Heading Type  | Corresponding Node  | Node Name
--------------|---------------------|-----------
Textbook Name | Title Node  | Great Fun With Grammar
1st Chapter Name  |Child Node | Nouns
Activity in Chapter 1 |Child Node |Fun Task
2nd Chapter Name  |Sibling Node | More Nouns
Activity in Chapter 2 | Child Node  | My Fun Corner

## Prerequisites
<table>
  <tr>
    <th style="width:35%;">Step</th>
    <th style="width:65%;">Screen</th>
  </tr>
  <tr>
    <td>1. You are logged in <br>2. You are currently on <b>My Workspace</b> page <br>3. You have clicked on any one of the following: <br>&emsp;a)<b>Book</b> <br>&emsp;b)<b>Course</b> <br>&emsp;c)<b>Collection</b> <br>&emsp;d)<b>Lesson Plan</b> <br> <b>Note:</b> The images used to explain the node structure in this section correspond to adding nodes in collection. This is used for reference purpose. Screens vary slightly for each content type, viz., book, collection, course, lesson plan
    </td>
    <td><img src="pages/features-documentation/images/toc_workspce.png"></td>
  </tr>
    </table>

## Adding Child Node

<table>
  <tr>
    <th style="width:35%;">Step</th>
    <th style="width:65%;">Screen</th>
  </tr>
  <tr>
    <td>1. To add a child node, you can either <br>&emsp;a) Click <b>New child</b> from the burger menu &npsp;associated with the required node in the left navigation pane, <b>OR</b> <br>&emsp;b) Right-click on the node name and select <b>New sibling</b>, <b>OR</b> <br>&emsp;c) Use the keyboard shortcut <b>Ctrl+Alt+N</b> <br> <b>Note</b>: The metadata for sibling and child nodes is the same. For details on the metadata, refer <a href="features-documentation/treestructure_toc/#node-metadata"> Node Metadata</a>
    </td>
    <td><img src="pages/features-documentation/images/addingchild1.png"></td>
  </tr>
    </table>
 
## Adding Sibling Node
<table>
  <tr>
    <th style="width:35%;">Step</th>
    <th style="width:65%;">Screen</th>
  </tr>
  <tr>
    <td>1. To add a sibling node, you can either <br>&emsp;a) Click <b>New sibling</b> from the burger menu associated with the required node in the left navigation pane, OR <br>&emsp;b)  Right-click on the node name and select <b>New sibling</b>, OR <br>&emsp;c) Use the keyboard shortcut <b>Ctrl+Alt+Shift+N</b> <br> <b>Note</b>: The metadata for sibling and child nodes is the same. For details on the metadata, refer <a href="features-documentation/treestructure_toc/#node-metadata"> Node Metadata</a>
    </td>
    <td><img src="pages/features-documentation/images/addingchild2.png"></td>
  </tr>
    </table>

## Node Metadata
On clicking <b> New Sibling</b> or <b>New Child</b>, the metadata is displayed on the right
<table>
  <tr>
    <th style="width:35%;">Step</th>
    <th style="width:65%;">Screen</th>
  </tr>
  <tr>
    <td>1. Enter <b>Content Title</b> <br>2. Enter <b>Description</b> <br>3. Enter <b>Keywords</b> <br>4. Click <b>Save</b> to save the metadata <br>5. Click <b>Image</b> icon to add image to the metadata. For details on the metadata, refer <a href="features-documentation/metadata_addingimages" target="_blank">Adding Image to Metadata</a>
    </td>
    <td><img src="pages/features-documentation/images/addchild_metadata2.png"></td>
  </tr>
    </table>
  
## Deleting a Node
<table>
  <tr>
    <th style="width:35%;">Step</th>
    <th style="width:65%;">Screen</th>
  </tr>
  <tr>
    <td>1. Click <b>Delete</b> icon on the burger menu associated with the node<br>2. Click <b>Yes</b> to delete the node
      <br><b>Note</b>: You can alternatively delete nodes by clicking <b>Delete</b> in the burger menu drop-down. If there are child or siblings in the node, then they too are deleted.
      </td>
      <td><img src="pages/features-documentation/images/book/book_unit_delete.png"></td>
  </tr>
    </table>
