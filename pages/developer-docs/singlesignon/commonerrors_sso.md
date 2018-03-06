---
type: landing
directory: developer-docs/singlesignon
title: Common Errors and Solutions
page_title: Common Errors and Solutions
description: Brief description of common errors ensountered during single sign on process and their respective solutions
published: true
allowSearch: true
---

<table>
  <tr>
    <th>Error</th>
    <th>Cause</th>
    <th>Solution</th>
  </tr>
  <tr>
    <td>Issue while generating JWT Token</td>
    <td>Private Key was generated with des3 algorithm</td>
    <td>Private Key should be generated without mentioning any algorithm</td>
  </tr>
  <tr>
    <td>Issue while creating bulk organizations - ‘API rate limit exceeded’
</td>
    <td>There is a limit on the number of calls that can be made within an hour by using a single API key. The current limit is 1000</td>
    <td> The development team can increase the limit, if necessary</td>
  </tr>
</table>
 
