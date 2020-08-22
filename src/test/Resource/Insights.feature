Feature: Insight Page Functionalities
  @Test
  Scenario Outline: Search functionality with valid or invalid input
    Given user is on the Insights Page of Octopus Group
    When user clicks on the Search icon
    And user types valid or invalid "<input>" in the search box
    Then user should be able to see relevant searched result or an error message
    Examples:
      |input|
      |Octopus Real Estate|
      |Java               |
#  line number 10 - Octopus Real Estate is an example of valid input
#  line number 11 - Java is an example of invalid input

  @Test
  Scenario: 'About' Feature - Simon Rogerson
    Given user is on the Insights Page of Octopus Group
    When user clicks on 'About' icon
    And user clicks on 'Simon Rogerson' from dropdown list
    Then user should be able to see 'About Simon Rogerson' page

  @Test
  Scenario: Filter by Business
    Given user is on the Insights Page of Octopus Group
    When user selects any option from Filter by Business dropdown list
    Then user should be able to see all posts from selected business

  @Test
  Scenario: Navigate back to previous/Insights Page from Businesses page
    Given user is on the Insights Page of Octopus Group
    And user clicks on 'Businesses' icon
    When user clicks on 'back arrow'
    Then user should be able to navigate back to previous/Insights page

  @Test
  Scenario: Click on page number '2'
    Given user is on the Insights Page of Octopus Group
    When user scroll down the page
    And user clicks on '2'
    Then user should be able to see all the post from page '2'

  Scenario: Careers Icon
    Given user is on the Insights Page of Octopus Group
    When user clicks on 'Careers' icon from header
    And user clicks on 'Search jobs' from dropdown list
    Then user should be able to see 'Find your role' page

  Scenario: Insights - Visions
    Given user is on the Insights Page of Octopus Group
    When user clicks on 'Insights' icon from header
    And user clicks on 'Vision' from dropdown list
    Then user should be able to see 'Vision' page

  Scenario: Contact Icon
    Given user is on the Insights Page of Octopus Group
    When user clicks on 'Contact' icon from header
    Then user should be able to see 'Contact us' detail

  Scenario Outline: Search Box for post
    Given user is on the Insights Page of Octopus Group
    When user types valid or invalid "<post>" in the search box for post
    Then user should be able to see relevant searched posts
    Examples:
      | post |
      | Simon Rogerson|
      | Saran         |

  Scenario: Octopus Responsible Investment Policy
    Given user is on the Insights Page of Octopus Group
    When user clicks on 'Octopus Responsible Investment Policy'
    Then user should be able to see 'Policies' page
