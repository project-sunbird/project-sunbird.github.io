Steps requird to create user and org during System setup.

   * User does not required any "x-authenticated-user-token" , so first create the user . Organisation required "x-authenticated-user-token" header , so used that user to get the token value from Keycloak.
   
  *  For any sunbird api call user need to pass the Authorization header with "Bearer {{api-key}}"

 Step 1: 
       a. Create a user from postman or curl command using sunbird.org api doc reference.
               Ref : http://www.sunbird.org/apis/userapi/#operation/Create%20User
       b. once user is created save the provided userId.
       
 Step 2 :
       a. now create an organisation using the api ref doc : http://www.sunbird.org/apis/orgapi/#operation/Organisation%20Create
       
         Note : if you want to create rootOrg then pass following extra attribute.
                "isRootOrg" : ture
                "channel" : "a string value  and is unique inside system.This channel you can used for filtering the data."
       b. Once organisation is created save the organisation Id
      
      
      Note to create an organisation you required "x-authenticated-user-token" header with User JWT token.
        
        To generate the JWT token used below curl command.
        
  curl -X POST \
  {{base-url}}/auth/realms/{{realms-name}}/protocol/openid-connect/token \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -H 'postman-token: 077d71ce-aac9-862e-9200-f67505d979a6' \
  -d 'client_id=admin-cli&username={{user-name}}&password={{password}}&grant_type=password'
  
  
  From  this resposne get the value of "access_token" and put it inside create org api call for "x-authenticated-user-token" . 
        
       
  Step 3:  Now user and org both are created but there is no association between user and org , so to do the association 
         use add user to organisation api call . Ref : http://www.sunbird.org/apis/orgapi/#operation/Organisation%20Add%20User
         Here you need to pass userId, organisaitonId and roles as list of String. (It will accept only valid role inside system)
         
        After making this call your user is associated with org with provided roles.
        
        
  Now you can use the System.
  
   Some time you may want to assign some more roles to user or want to remove some of the roles . Then use  "Assign role to a user" api.
    Ref : http://www.sunbird.org/apis/userapi/#operation/OrgV1RoleAssignPost
    
    
    
   Once organisation is created and you want to created some new user , whose rootOrg should equal to already created rootOrg then in 
    "create user api" request pass "regOrgId" key with value as "your created rootOrgId".
      
    then you can call "assign role to a user" api to provide different roles.
    
    
    Current possible roles in side Sunbird :
    
     *  COURSE_MENTOR
     *  CONTENT_CREATION
     *  CONTENT_CURATION
     *  CONTENT_REVIEW
     *  CONTENT_REVIEWER
     *  TEACHER_BADGE_ISSUER
     *  ORG_MANAGEMENT
     *  MEMBERSHIP_MANAGEMENT
     *  ORG_ADMIN
     *  BOOK_CREATOR
     *  BOOK_REVIEWER
     *  OFFICIAL_TEXTBOOK_BADGE_ISSUER
     *  PUBLIC
     *  ANNOUNCEMENT_SENDER
     *  CONTENT_CREATION
     *  FLAG_REVIEWER
