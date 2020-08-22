$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resource/Insights.feature");
formatter.feature({
  "line": 1,
  "name": "Insight Page Functionalities",
  "description": "",
  "id": "insight-page-functionalities",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Search functionality with valid or invalid input",
  "description": "",
  "id": "insight-page-functionalities;search-functionality-with-valid-or-invalid-input",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on the Insights Page of Octopus Group",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on the Search icon",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user types valid or invalid \"\u003cinput\u003e\" in the search box",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user should be able to see relevant searched result or an error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "insight-page-functionalities;search-functionality-with-valid-or-invalid-input;",
  "rows": [
    {
      "cells": [
        "input"
      ],
      "line": 9,
      "id": "insight-page-functionalities;search-functionality-with-valid-or-invalid-input;;1"
    },
    {
      "cells": [
        "Octopus Real Estate"
      ],
      "line": 10,
      "id": "insight-page-functionalities;search-functionality-with-valid-or-invalid-input;;2"
    },
    {
      "cells": [
        "Java"
      ],
      "line": 11,
      "id": "insight-page-functionalities;search-functionality-with-valid-or-invalid-input;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 24725702422,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Search functionality with valid or invalid input",
  "description": "",
  "id": "insight-page-functionalities;search-functionality-with-valid-or-invalid-input;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on the Insights Page of Octopus Group",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on the Search icon",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user types valid or invalid \"Octopus Real Estate\" in the search box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user should be able to see relevant searched result or an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "InsightsPageSteps.user_is_on_the_Insights_Page_of_Octopus_Group()"
});
formatter.result({
  "duration": 1761938239,
  "status": "passed"
});
formatter.match({
  "location": "InsightsPageSteps.user_clicks_on_the_Search_icon()"
});
formatter.result({
  "duration": 109256088,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Octopus Real Estate",
      "offset": 29
    }
  ],
  "location": "InsightsPageSteps.user_types_valid_or_invalid_in_the_search_box(String)"
});
formatter.result({
  "duration": 2194360952,
  "status": "passed"
});
formatter.match({
  "location": "InsightsPageSteps.user_should_be_able_to_see_relevant_searched_result_or_an_error_message()"
});
formatter.result({
  "duration": 2054215176,
  "status": "passed"
});
formatter.after({
  "duration": 5696883278,
  "status": "passed"
});
formatter.before({
  "duration": 10121703303,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Search functionality with valid or invalid input",
  "description": "",
  "id": "insight-page-functionalities;search-functionality-with-valid-or-invalid-input;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on the Insights Page of Octopus Group",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on the Search icon",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user types valid or invalid \"Java\" in the search box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user should be able to see relevant searched result or an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "InsightsPageSteps.user_is_on_the_Insights_Page_of_Octopus_Group()"
});
formatter.result({
  "duration": 1149116426,
  "status": "passed"
});
formatter.match({
  "location": "InsightsPageSteps.user_clicks_on_the_Search_icon()"
});
formatter.result({
  "duration": 122823672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Java",
      "offset": 29
    }
  ],
  "location": "InsightsPageSteps.user_types_valid_or_invalid_in_the_search_box(String)"
});
formatter.result({
  "duration": 2097279256,
  "status": "passed"
});
formatter.match({
  "location": "InsightsPageSteps.user_should_be_able_to_see_relevant_searched_result_or_an_error_message()"
});
formatter.result({
  "duration": 2071928126,
  "status": "passed"
});
formatter.after({
  "duration": 4756618624,
  "status": "passed"
});
formatter.before({
  "duration": 12062691066,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 12,
      "value": "#  line number 10 - Octopus Real Estate is an example of valid input"
    },
    {
      "line": 13,
      "value": "#  line number 11 - Java is an example of invalid input"
    }
  ],
  "line": 16,
  "name": "\u0027About\u0027 Feature - Simon Rogerson",
  "description": "",
  "id": "insight-page-functionalities;\u0027about\u0027-feature---simon-rogerson",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is on the Insights Page of Octopus Group",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user clicks on \u0027About\u0027 icon",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user clicks on \u0027Simon Rogerson\u0027 from dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user should be able to see \u0027About Simon Rogerson\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "InsightsPageSteps.user_is_on_the_Insights_Page_of_Octopus_Group()"
});
formatter.result({
  "duration": 1283851931,
  "status": "passed"
});
formatter.match({
  "location": "InsightsPageSteps.user_clicks_on_About_icon()"
});
formatter.result({
  "duration": 162057973,
  "status": "passed"
});
formatter.match({
  "location": "InsightsPageSteps.userClicksOnSimonRogersonFromDropdownList()"
});
formatter.result({
  "duration": 4031765885,
  "status": "passed"
});
formatter.match({
  "location": "InsightsPageSteps.userShouldBeAbleToSeeAboutSimonRogersonPage()"
});
formatter.result({
  "duration": 2047610129,
  "status": "passed"
});
formatter.after({
  "duration": 4800063716,
  "status": "passed"
});
formatter.before({
  "duration": 9782452112,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Filter by Business",
  "description": "",
  "id": "insight-page-functionalities;filter-by-business",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user is on the Insights Page of Octopus Group",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user selects any option from Filter by Business dropdown list",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user should be able to see all posts from selected business",
  "keyword": "Then "
});
formatter.match({
  "location": "InsightsPageSteps.user_is_on_the_Insights_Page_of_Octopus_Group()"
});
formatter.result({
  "duration": 1163980133,
  "status": "passed"
});
formatter.match({
  "location": "InsightsPageSteps.user_selects_any_option_from_Filter_by_Business_dropdown_list()"
});
formatter.result({
  "duration": 9217742029,
  "status": "passed"
});
formatter.match({
  "location": "InsightsPageSteps.user_should_be_able_to_see_all_posts_from_selected_business()"
});
formatter.result({
  "duration": 22236,
  "status": "passed"
});
formatter.after({
  "duration": 5150439916,
  "status": "passed"
});
formatter.before({
  "duration": 7297315177,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Navigate back to previous/Insights Page from Businesses page",
  "description": "",
  "id": "insight-page-functionalities;navigate-back-to-previous/insights-page-from-businesses-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "user is on the Insights Page of Octopus Group",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "user clicks on \u0027Businesses\u0027 icon",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user clicks on \u0027back arrow\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user should be able to navigate back to previous/Insights page",
  "keyword": "Then "
});
formatter.match({
  "location": "InsightsPageSteps.user_is_on_the_Insights_Page_of_Octopus_Group()"
});
formatter.result({
  "duration": 1181230397,
  "status": "passed"
});
formatter.match({
  "location": "InsightsPageSteps.user_clicks_on_Businesses_icon()"
});
formatter.result({
  "duration": 4964356439,
  "status": "passed"
});
formatter.match({
  "location": "InsightsPageSteps.user_clicks_on_back_arrow()"
});
formatter.result({
  "duration": 2729903806,
  "status": "passed"
});
formatter.match({
  "location": "InsightsPageSteps.user_should_be_able_to_navigate_back_to_previous_Insights_page()"
});
formatter.result({
  "duration": 23520,
  "status": "passed"
});
formatter.after({
  "duration": 4771419470,
  "status": "passed"
});
formatter.before({
  "duration": 9474033307,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Click on page number \u00272\u0027",
  "description": "",
  "id": "insight-page-functionalities;click-on-page-number-\u00272\u0027",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "user is on the Insights Page of Octopus Group",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "user scroll down the page",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "user clicks on \u00272\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user should be able to see all the post from page \u00272\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "InsightsPageSteps.user_is_on_the_Insights_Page_of_Octopus_Group()"
});
formatter.result({
  "duration": 1160338078,
  "status": "passed"
});
formatter.match({
  "location": "InsightsPageSteps.user_scroll_down_the_page()"
});
formatter.result({
  "duration": 2012013179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "InsightsPageSteps.user_clicks_on(int)"
});
formatter.result({
  "duration": 9344598602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 51
    }
  ],
  "location": "InsightsPageSteps.user_should_be_able_to_see_all_the_post_from_page(int)"
});
formatter.result({
  "duration": 917575470,
  "status": "passed"
});
formatter.after({
  "duration": 5382869043,
  "status": "passed"
});
});