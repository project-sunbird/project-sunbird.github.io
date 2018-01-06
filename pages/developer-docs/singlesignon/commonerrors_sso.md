---
type: landing
directory: developer-docs/singlesignon
title: Common errors and solutions
page_title: Common Errors and Solutions
description: Brief description of common errors during single sign on process and their respective solutions
published: true
allowSearch: true
---



## Common Errors and Solutions

<table>
  <tr>
    <td>Common Errors</td>
    <td>Cause</td>
    <td>Solutions</td>
  </tr>
  <tr>
    <td>Issue while generating JWT Token</td>
    <td>Private Key was generated with des3 algorithm</td>
    <td>Private Key should be generated without mentioning any algorithm</td>
  </tr>
  <tr>
    <td>Issue while creating bulk orgs - ‘API rate limit exceeded’
</td>
    <td>There is a limit on number of calls (1000) that can be made within one hour by using a single API key</td>
    <td>Development team can increase the limit when necessary</td>
  </tr>
</table>
