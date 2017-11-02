**Assessment**

In addition to the learning content, a course also encompasses assessments. Sunbird content containing ItemSets are used to deliver assessments in a course. An ItemSet is a collection of assessment items and configuration to be used by player to play it.

The assessment is based on the following:

+ **Release Criteria:** The criteria for releasing assessment depends on course completion and or duration (i.e. they have a start and/or end date).

+ **Evaluation Rubric:** Rubric is the scoring guide to evaluate the assessment and generate a grade.

The content player uses ItemSet and its configuration to show the assessment and the course player uses the release criteria & rubric to release and evaluate the assessment. The Assessment entity in Sunbird is designed around the following objects:

- **AssessmentId**: Identifier of the Sunbird content which contains the assessment,other attributes
- **ReleaseCriteria**
- **Rubric**

Sunbird ItemSets and content is flexible and reusable in multiple contexts. This data is stored within the Sunbird infrastructure.
 
User Assessment Items contains the details of each attempt of all assessment items by the user are stored in User Assessment Items model. User Assessment Items entity in Sunbird is designed around the following objects:

- **User assessment:** User Id, Course Id, Assessment Id, Assessment Item Id, Score, Result, Attempt Number, Last Attempted On
