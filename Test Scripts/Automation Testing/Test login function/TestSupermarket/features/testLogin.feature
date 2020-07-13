Feature: test login function
#This is how background can be used to eliminate duplicate steps
  Background:
    Given I am on Supermarket login page

  Scenario Outline:
    When I enter username as "<username>"
    And I enter password as "<password>"
    And I click login
    Then Should be <status>

    Examples:
    |  username |  password  |  status  |
    |  abcde    | abc123456  |  fail    |
    |           | abc123456@ |  fail    |
    |  abcde    |            |  fail    |
    |  tmpdat   | abc123456@ |  success |