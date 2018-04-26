---
type: landing
directory: 
title: Metadata Driven forms
page_title: Metadata Driven forms
description: Instructional guide on configuring the metadata driven forms 
keywords: 'Metadata, framework, Sunbird, Create form, update form, read form'
published: true
allowSearch: true
---

## Overview

Metadata is absolutely essential in the digital environment. It is the fulcrum for content discoverability.

Whenever you create and submit content on Sunbird, you have to enter a form with details about the submitted content, like its title, description, etc. The details entered is the metadata of the submitted content.

In order to take customization and flexibility to a different level, the framework offers metadata driven forms. The form fields such as labels, text, number, value, etc. are defined as metadata in a database rather than being hard-coded. As a result, administrators can:

* Customize form templates

* Rearrange fields in the form

* Modify values and attributes of each form field

Currently,the administrators configure forms. However, it is possible to provide these privileges to any trusted user of the organization. The form metadata configuration and rendering is done for a specific channel using form API resources. 

This page describes how to configure the metadata forms.Ensure that the following prerequisites are met:

### Prerequisites

* Understanding of the following:

    * Content model

    * Content lifecycle

    * Content types

    * Default configuration

* Ensure availability of:

    * Administrator access

    * Form APIs

    * API access token

    * User authentication token

### Configurations

1. You can configure the following forms:

   * Start create
   * Edit details (save)
   * Submit content for review
   * Question details

2. For each form  you can decide:

    * Sequence of fields

    * Layout / template

3. For each form field, you can configure:

    * To show (view only) or allow editing or keep hidden

    * To make it mandatory or optional

    * Data type of that field

    * Default value

    * Validations

    * Display name (Name of the field)

### Operations on Metadata driven Forms

To Create, update or read a metadata form:

1. Check the prerequisites

2. Get the Form API resources

3. Use the [Form API](http://www.sunbird.org/apis/form/){:target=_"blank"} endpoints for either creating, updating or reading a form. For each of the operations, it is mandatory to provide the input for the required  fields of the request object payload

4. You can  [refer](http://www.sunbird.org/apis/form/){:target=_"blank"} to the Form API  for more information about the request object payload

You can configure only one form field and its attribute or value at a time. Repeat the process to configure other form fields.

**Note:** All the parameters that are bold are mandatory as a part of request body for create and update.
