---
type: landing
directory: contributions
title: Guidelines for filing a bug
page_title: Guidelines for filing a bug
description: How to file an effective bug report? 
keywords: Sunbird,bug, bugs, bug report, filing bug
published: true
allowSearch: true
---
## Overview
You can write effective bug reports in no time using few techniques.
It is worth noting that there are a few alternative options for support:

1. Check the [Sunbird troubleshooting](http://www.sunbird.org/developer-docs/troubleshooting/){:target="_blank"} page for a solution. If there is no solution for your issue, the following process will guide you in figuring out what to do.
2. The bug you have experienced might be faced by others also, it is recommended to check the [Sunbird issue tracker](https://project-sunbird.atlassian.net/){:target="_blank"}
3. If the bug report exists, you may click "subscribe" to follow any developments.

To file a bug report that is effective, ensure the following: 

- Separate out the bug
- Single issue for a single bug
- Writing an effective bug report
- Submit
- Follow up

## Separate out the bug
The first step in writing an effective bug report is to find:

- **What is the problem?**
  
  Clearly and precisely state what is wrong?

- **How to reproduce it?**

    - You can report a bug with appropriate steps if you have an explicit understanding about the issue.

## Single issue for a single bug

Since Sunbird is open source, there is always a possibility that you encounter more than one bug, Incase, if you have multiple issues, it is better to file them separately, so that they can be tracked more effectively.

## Writing an effective bug report

Before you raise an issue, make sure to check the following questions that are used for filing a bug report, answering to these questions allows you to file a bug reports efficiently.

### Issue Title

Everything starts with a title. It must be clear and descriptive so that you can get an idea of what the report is about at a glance. It also has to be clearly differentiated from all other existing bug reports. A good way to think about bug titles is that your bug report should atleast answer the following questions:

  1. What is the problem?
  2. Where does the problem occur?
  3. What action must the user perform to trigger the problem?
  4. What is the expected output?
 
Ensure these questions must be answered in less than 140 characters!

The title should describe the problem as best as possible. 

After submitting the issue, you can modify the title if required.

### A concise issue description

A good bug report has a clear and concise description. This is an opportunity to explain the defect and put across all the relevant details.Describing something accurately and concisely is best way to help and fix the bug. Also,remember that the person reading your description has not seen the bug, so avoid assumptions.

### Sequence of steps to reproduce bug

One of the most important steps in a good bug report is providing a step-by-step account of exactly what you did to find the defect. You can use software tools that catch your key strokes, or record screenshots or video files as you test. Make sure that you test the steps again before submitting the bug.

Ensure the following:
- A bug report needs clear instructions, so that others can understand and reproduce it
- Include good set of instructions i.e a numbered list that details each button press or menu selection

### Actual behavior

- In contrast to the expected behavior, describe what currently happens when the bug is present.

### Expected behavior

- Describe the correct workflow and outcome post fixing the issue.

### Environment in which the issue is encountered

- Name the operating system and version you are using, such as "Windows 7", or "Mac OS X 10.7.5" etc.
- Name the browser and version which you are using, such as "Chrome 63" or "Firefox Quantum" or "Microsoft Edge"

### Supporting files

Supporting material is always gratefully received by those assigned Developers. Usually the files can be screenshots, audio and video files. Annotate your screenshots to highlight problems.

The visuals are always looked prior to reading the description. 

Ensure to supplement your bug report with an image, audio, or crash log that helps others reproduce the issue, attach these files.

### Sunbird Version

If you are able to replicate the issue on different version then update the details with the different version numbers.

### Issue Category

A "bug report" is usually filed when there is any deviation from actual behaviour. An example of a bug could be __ a link to a page, instead of opening it shows an error.

Tasks, feature requests and support requests are beyond the scope of this article.

### Type and severity

Every bug will have a different type and severity.These fields go hand-in-hand. A functional bug will generally be treated more seriously than a suggestion. No product ships with zero defects, so having bugs categorized correctly in terms of type and severity helps the decision-making process with regards to what gets fixed and what doesn’t. If you don’t understand these fields, ask for instruction.

You can use the following tags in your bug reports:

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

## Submit

Click **Submit button** to submit your bug report to the issue tracker.

## Following up

Once a developer marks a bug as fixed, Cross verify the fix is 'working as expected' by downloading the latest build.  
