Feature: Login Tests

    Scenario Outline:  Login with credentials - Case 05
        Given go to the web page
        When click to the sign in link
        And entered "<email>" in email field
        And entered "<password>" in password field
        And click to the Login button
        Then verify that logged in

        Examples:
            | email                                 | password  |
            | customer@practicesoftwaretesting.com  | welcome01 |
            | customer2@practicesoftwaretesting.com | welcome01 |