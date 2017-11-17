---
type: Content
directory: app/resourcebundles
title: Resource Bundles
page_title: resourceBundles
description: The ResourceBundle class is used to show messages or content in multiple languages. In other words, we can say that it provides a mechanism to globalize the messages.

---
Rendering sunbird portal pages in multiple languages , user can view page elements in their preferred language.

## How Resource Bundle Work

The Resource Bundle reads a property file based on the locale and name suffix used in the naming of the property. For example, consider a label file named en.properties. This file is read by ResourceBundle helper(app/helpers/resourceBundlesHelper.js) and it will generate js file in app/common folder .
Locale represents a region or location with its attributes. Locale is generally used to maintain details about the client using our application. Locale contains attributes of location and language to be used for the respective location. Thus, a Locale assists ResourceBundle to pick the right label file by determining the location to which the user belongs.

### How to add resource element for existing languages in resource bundles

There are two sections,
1. **Form elements(app/reosurcebundles/data/formElements/en.Properties)**
2. **Messages(app/reosurcebundles/data/messages/en.Properties)**

      * While adding new resource element(like if we want to add text for a label or for button or add new success/error messages) first add in en.properties file.
      
      * en.properties file is a primary bundle, if any resorce elements not available in other language bundle files it gets copied from en.properties file.
      
### How to add a resource bundle for a new language


   * To add a new language,  create a property file for respective language under formElements and messsages folder and copy the resource elements from primary language bundle(en.properties) to target language properties file and then replace the translation of the values in the new language.
   
   * Finally run the server.js file of app folder to complie the resource bundle properties file and verify the new generated/updated js files under app/common folder.

 
