# Overview

This document describes how to file an effective Sunbird bug report. 

## Getting More Information

For issues, you can check troubleshooting page [here](http://www.sunbird.org/developer-docs/troubleshooting/)

This may help you resolve the issue as it might have already been solved. Even if it doesn't, the following process can help you figure out and resolve your issue.

# Introduction

To report a bug in the Sunbird bug trackers, you need to create a tracker item. Once the tracker item is created, the developers will check the validity of it and act accordingly. 

# Guidelines to file a bug

The following are the steps to file a bug:

## Prerequisites:

* Register an Account at GitHub

You will need to [register for an account](https://github.com/) at GitHub; the Sunbird Issue Tracker uses GitHub accounts for authentication.


* Check to see if the bug you want to report is already reported

A series of filters display the tracker items and can be accessed by clicking the "Search Tools" button at the top of the list in Sunbird GitHub Repo. Mouse hover the title of the tracker items to check their contents. If the issue you are experiencing is not already reported, click on the "New Item" button in the main navigation area.

A new screen will display and there, the more information you give, the easier it is for the developers. Fill in as much information as you can. You can enable tips for each field by switching the "View Mode" toggle on the right side of the screen from Pro to Help.

## How to file a bug

- Go to the issue tracker on GitHub [here](https://github.com/project-sunbird/project-sunbird.github.io/issues)

- Search for existing issues using the search field at the top of the page
-  Make sure no one else is already working on it. If the bug has a milestone assigned or is tagged 'fix in progress', then it's already under way. Otherwise, post a comment on the bug to let others know you're starting to work on it.
- For posting a new bug report,file a new issue and include the information listed in next section

### When filing a new bug, it is mandatory to include:

* Descriptive title - use keywords so others can find your bug (avoiding duplicates)

* Steps to trigger the problem that are specific, and repeatable

* What happens when you follow the steps, and what you expected to happen instead.
Include the exact text of any error messages if applicable (or upload screenshots).

* Sunbird version (or if you're pulling directly from Git, your current commit SHA - use git rev-parse HEAD)

* Did this work in a previous version? If so, also provide the version that it worked in.

* Operating system version

# What happens after a bug is filed?

## Bug life cycle

* New bug is filed; awaiting review

* Triaged in bug review ; see ('last reviewed' tag)

* Developer begins working on it; bug is tagged 'fix in progress'

* Developer opens pull request with a fix, which must be reviewed; a link to the pull request appears in the bug's activity stream

* Pull request is merged, and the bug's filer is notified to verify that it's fixed; bug is tagged 'Resolved but not closed' 

* Filer agrees that it's fixed; bug is closed, and its milestone is set to the release the fix

## Bug review

The Sunbird team reviews all new issues on a regular basis. Several things typically happen as part of review:

* The filer is notified for clarification if needed.

* If the issue is a feature request, we'll tag it 'move to backlog'; the issue will be migrated to our feature backlog at a later date.

* Add priority labels (high, medium, low, or none)

* Release milestone updated- typically only if a bug is a "release blocker" or related to features still in progress.

* Depending on priority, milestone, and other workload, a developer may or may not begin working on the bug soon.

# Some bugs may be closed without fixing, here is why:

There are many reasons an issue might get closed without being fixed:

* Tagged 'move to backlog' - It's not forgotten! Look for a link in the comment thread to our feature backlog. 

* Tagged 'resolved but not closed' - We think it's fixed. Make sure you have a Sunbird build containing the fix (check the milestone assigned to the bug). If you're still seeing it, let us know.

* Tagged ‘Duplicate’ - There's already a bug for this.

* Tagged ‘Unable to reproduce’ - We're unable to reproduce the result described in the bug report. If you're still seeing it, please reply with more detailed steps to trigger the bug.

* Tagged ‘Out of scope / extension idea’ - This change probably doesn't belong in Sunbird core, but it could still make for a great extension!

* Tagged ‘Not a bug’ - This is the intended behavior. If it feels wrong, we should discuss how to improve the usability of the feature.

If you disagree with a bug being closed, feel free to post a comment asking for clarification or re-evaluation. The more new/updated info you can provide, the better.

# Understanding issue labels

We use labels/tags for many purposes:

<table>
  <tr>
    <td></td>
    <td>label</td>
    <td>meaning</td>
  </tr>
  <tr>
    <td>Process </td>
    <td>fix in progress</td>
    <td>Someone has started work on a fix (or the fix is ready but still undergoing code review - not merged yet).</td>
  </tr>
  <tr>
    <td></td>
    <td>fixed but not closed</td>
    <td>Fix has been merged. Waiting for the original bug reporter to verify that it's fixed.</td>
  </tr>
  <tr>
    <td></td>
    <td>last reviewed</td>
    <td>Last reviewed/triaged bug. See "Bug review" in bug review section.</td>
  </tr>
  <tr>
    <td></td>
    <td>move to backlog</td>
    <td>Feature/enhancement request rather than a bug. Will be moved to the feature backlog.</td>
  </tr>
  <tr>
    <td>Priority</td>
    <td>high priority</td>
    <td>High impact bug many users will hit (e.g. crash/data loss). We aim for zero high-priority bugs before each release.</td>
  </tr>
  <tr>
    <td></td>
    <td>medium priority</td>
    <td>At least somewhat severe and a significant number of users will hit.</td>
  </tr>
  <tr>
    <td></td>
    <td>low priority</td>
    <td>Low severity (e.g. small cosmetic issue) and/or few users will hit.</td>
  </tr>
  <tr>
    <td></td>
    <td>no priority</td>
    <td>We don't plan to spend time fixing the bug - but we would accept a fix if someone offers a pull request.</td>
  </tr>
  <tr>
    <td>Feature area</td>
    <td>F ...</td>
    <td>Labels starting with "F" categorize bugs by feature area.</td>
  </tr>
  <tr>
    <td></td>
    <td>Extension Idea</td>
    <td>May be out of scope for Sunbird core, but is a great idea for a Sunbird extension.</td>
  </tr>
  <tr>
    <td>Architecturally-focused</td>
    <td>architecture</td>
    <td>Requires significant architectural changes - needs longer discussion.</td>
  </tr>
  <tr>
    <td></td>
    <td>performance</td>
    <td>Perceived or measurable performance issue.</td>
  </tr>
  <tr>
    <td></td>
    <td>code cleanup</td>
    <td>The fix improves code maintainability without changing Sunbird’s functionality.</td>
  </tr>
</table>


# Other bug-related terminology

Acronyms the team uses frequently in bug comments:

* "Resolved but not closed": See bug life cycle

* "Unable to Reproduce": Someone tried to follow the steps in the bug, but everything seemed to work fine.

* "Not a bug": The behavior described in the bug is actually how it's supposed to work. This may indicate a usability or documentation problem.

