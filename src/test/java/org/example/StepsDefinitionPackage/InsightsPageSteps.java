package org.example.StepsDefinitionPackage;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.example.PageObjectPackage.InsightsPage;

public class InsightsPageSteps {
    InsightsPage insightsPage = new InsightsPage();
    @Given("^user is on the Insights Page of Octopus Group$")
    public void user_is_on_the_Insights_Page_of_Octopus_Group() throws Throwable {
        insightsPage.cookieMethod();
    }

    @When("^user clicks on the Search icon$")
    public void user_clicks_on_the_Search_icon() throws Throwable {
        insightsPage.searchIconMethod();
    }

    @When("^user types valid or invalid \"([^\"]*)\" in the search box$")
    public void user_types_valid_or_invalid_in_the_search_box(String input) throws Throwable {
        insightsPage.searchBoxMethod(input);
    }

    @Then("^user should be able to see relevant searched result or an error message$")
    public void user_should_be_able_to_see_relevant_searched_result_or_an_error_message() throws Throwable {
        insightsPage.assertionMethod();
    }

    @When("^user clicks on 'About' icon$")
    public void user_clicks_on_About_icon() throws Throwable {
        insightsPage.aboutClickMethod();
    }

    @And("^user clicks on 'Simon Rogerson' from dropdown list$")
    public void userClicksOnSimonRogersonFromDropdownList() throws InterruptedException {
        insightsPage.simonRogersonMethod();
    }

    @Then("^user should be able to see 'About Simon Rogerson' page$")
    public void userShouldBeAbleToSeeAboutSimonRogersonPage() throws InterruptedException {
        insightsPage.simonRogersonAssertion();
    }


    @When("^user selects any option from Filter by Business dropdown list$")
    public void user_selects_any_option_from_Filter_by_Business_dropdown_list() throws Throwable {
        insightsPage.filterByBusinessMethod();
    }

    @Then("^user should be able to see all posts from selected business$")
    public void user_should_be_able_to_see_all_posts_from_selected_business() throws Throwable {
    }

    @And("^user clicks on 'Businesses' icon$")
    public void user_clicks_on_Businesses_icon() throws Throwable {
        insightsPage.businessesIconMethod();
    }

    @When("^user clicks on 'back arrow'$")
    public void user_clicks_on_back_arrow() throws Throwable {
        insightsPage.navigatePreviousMethod();
    }

    @Then("^user should be able to navigate back to previous/Insights page$")
    public void user_should_be_able_to_navigate_back_to_previous_Insights_page() throws Throwable {
    }

    @When("^user scroll down the page$")
    public void user_scroll_down_the_page() throws Throwable {
        insightsPage.scrollDownMethod();
    }

    @When("^user clicks on '(\\d+)'$")
    public void user_clicks_on(int arg1) throws Throwable {
        insightsPage.page2Method();
    }

    @Then("^user should be able to see all the post from page '(\\d+)'$")
    public void user_should_be_able_to_see_all_the_post_from_page(int arg1) throws Throwable {
        insightsPage.urlAssetionMethod();
        insightsPage.screenShotMethod();
    }

}
