Feature: Login Tests

    Background:
        Given go to the web page
        When click to the sign in link

    Scenario: Login with credentials - Case 03

        And entered "customer@practicesoftwaretesting.com" in email field
        And entered "welcome01" in password field
        And click to the Login button
        Then verify that logged in

    Scenario: Login with credentials - Case 04

        And entered "customer2@practicesoftwaretesting.com" in email field
        And entered "welcome01" in password field
        And click to the Login button
        Then verify that logged in