Feature: Login Tests

    Scenario: Login with credentials - Case 01
        Given go to the web page
        When click to the sign in link
        And entered "customer@practicesoftwaretesting.com" in email field
        And entered "welcome01" in password field
        And click to the Login button
        Then verify that logged in

    Scenario: Login with credentials - Case 02
        Given go to the web page
        When click to the sign in link
        And entered "customer2@practicesoftwaretesting.com" in email field
        And entered "welcome01" in password field
        And click to the Login button
        Then verify that logged in