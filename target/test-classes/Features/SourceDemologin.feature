Feature: As User should be able to login in sourcedemo site

Scenario Outline: Check that user should be able to login with valid creds
Given User is on Login Page
When User enters "<username>" and "<Password>"
And User clicks on login button
Then user is navigated to home page
And user closes the browser

Examples:
| username | Password |
|standard_user|secret_sauce|
|locked_out_user|secret_sauce|
|problem_user|secret_sauce|
|performance_glitch_user|secret_sauce|
|error_user|secret_sauce|
|visual_user|secret_sauce|
