---
type: landing
directory: contributions
title: Filing a Bug
page_title: Filing a Bug
description: How to file a bug
keywords: 'Contribute, Code, Code contribution'
published: true
allowSearch: true
---
Submitting a bug report: A complete walkthrough

## Overview

This document describes how to file an effective Sunbird bug report. Before filing a bug report, check the troubleshooting page [here]([http://www.sunbird.org/developer-docs/troubleshooting/](http://www.sunbird.org/developer-docs/troubleshooting/)) for a solution. If there is no solution for your issue, the following process will guide you in figuring out what to do?

## Introduction

To report a bug in the Sunbird bug trackers, you need to create a tracker item. Add a tracker item. Once added, the Sunbird Developer team will check the validity of the issue raised and act accordingly.

## Prerequisites

- An Account on GIT, since the Sunbird repository lives in GitHub.
    
    - If you already have a GIT account, login with your credentials

    - If you do not have a GIT account, register for an account at GitHub [here](https://github.com/)

    - The Sunbird Issue Tracker uses GitHub accounts for authentication

- Use the latest version of Sunbird

   - If you are using an out-of-date version of Sunbird, please update to the latest version.
   - 
After Prerequisites, follow these guidelines to ensure that your Bug report is clear and effective:

## Separate out the bug

The first step in in writing an effective bug report is to find exactly:

- **What the problem is?**
    - Clearly and precisely state what exactly is wrong?
- **How to reproduce it?**
    - If you have an explicit understanding about what exactly is wrong, you can reproduce an example of the problem        	
    - If you can answer both the questions and reliably reproduce an example of the problem, you are successful in distinctly separating out the bug.

## Check whether bug already stands reported

The bug you have experienced might already have a fix and you can check the related documentation. If not, it is a recommended to check the Sunbird [issue tracker](https://github.com/project-sunbird/project-sunbird.github.io/issues)

- Check, If the bug report exists, you may click "subscribe" to follow any developments.
- If your bug is different than any others recorded in the issue tracker, then proceed with "Create a new issue"

## Single issue for a single bug

- Since Sunbird is open source, there is always a possibility that you encounter more than one bug, Incase, if you have multiple issues, it is better to file them separately, so that they can be tracked more effectively

## Create a new issue

You can create a new issue as follows:

- Visit the official Sunbird website [here](www.sunbird.org){:target="_blank"})

- Navigate to [documentation](http://www.sunbird.org/docs/){:target="_blank"} section found on horizontal top menu of the website

- Click any of the tiles (Architecture, Developer docs etc.) on the page

- Click [Report issue](https://github.com/project-sunbird/project-sunbird.github.io/issues){:target="_blank"} (a link found on the right side of every page)

- Click [Create a new issue](https://github.com/project-sunbird/project-sunbird.github.io/issues/new){:target="_blank"}

Before you raise an issue, make sure to check the following questions that are used for filing a bug report, answers to these allows you to file an efficient and clear in the process of filing bug reports.

## When filing a new bug, it is compulsory to include:

### Sunbird Version

The version of Sunbird in which you discovered the bug (e.g., 1.3). If you can reproduce the problem in more than one version, write down the earliest.

### Issue Category

A "bug report" is usually for when Sunbird does something which is not what it is expected to. An example of a bug could be: a link to a page, instead of opening it shows an error.

Tasks, feature requests and support requests are beyond the scope of this article.

### Issue Priority

Every bug will have a different priority.

**Use "Critical" in case:**

- Encounter Data loss
- Data Corruption
- Inability to save work
- Hangs and crashes

**Use "Major" in case:**

- A Common feature is incorrectly/not functioning
- Otherwise critical issues, if they happen only in some very rare cases.
- All other bugs excluding the specified ones are as **normal** if the priority is not set.

**Note:** While a bug that you are experiencing is important to you, developers balance it with all the other known bugs.

### Issue Title

The title should describe the problem as best as possible. Remember that the title read more often than any other part of the bug report.

After submitting the issue, you can modify the title.

## Issue Description

**Sequence of Steps to reproduce bug**

- A bug report needs clear instructions, so that others can understand and exclusively reproduce it

- Include good set of instructions i.e a numbered list that details each button press, or menu selection

**Actual behavior**

- In contrast to the expected behavior, describe what currently happens when the bug is present.

**Expected behavior**

- Describe what actually is correct workflow or exactly should happen if the bug was fixed.

**Environment in which the Issue Encountered**

- Name the operating system and version you are using, such as "Windows 7", or "Mac OS X 10.7.5" etc.

**Supporting Files**

- If you can supplement your bug report with an image, audio, or crash log that helps others reproduce the issue, attach these files.

## Submit

Click **Submit button** to submit your bug report to the issue tracker.

## Following up

Once a developer marks a bug as fixed, it is a good idea to ensure that it is completely fixed. To test, download the latest build.


