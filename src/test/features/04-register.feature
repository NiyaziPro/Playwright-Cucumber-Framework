@test
Feature: Registration Testing

  @register
  Scenario: Register Page - Case 01
    Given go to the web page
    When click to the sign in link
    When click to the Register your account link
    Then verify that  is Customer registration page

  @smoke
  Scenario: Register Page - Case 02
    Given go to the web page
    When click to the sign in link
    When click to the Register your account link
    Then verify that  is Customer registration page
