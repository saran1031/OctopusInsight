package org.example.PageObjectPackage;

import org.apache.commons.io.FileUtils;
import org.example.BaseClassPackage.DriverFactory;
import org.hamcrest.Matchers;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

import java.io.File;
import java.io.IOException;
import java.util.List;

public class InsightsPage extends DriverFactory {
    @FindBy(xpath = "//button[@id='ccc-notify-accept']")
    WebElement acceptCookie;
    @FindBy(xpath = "//span[contains(text(),'Search')]")
    WebElement searchIcon;
    @FindBy(xpath = "//input[@id='input-focus']")
    WebElement searchBox;
    @FindBy(xpath = "/html[1]/body[1]/div[2]/div[2]/div[1]/div[1]/div[2]/section[1]/div[1]/div[1]/div[2]/h3[1]")
    WebElement searchedTitle;
    @FindBy(xpath = "//ul[@id='menu-primary']//li[@id='menu-item-127']")
    WebElement aboutElement;
    @FindBy(xpath = "//div[@class='sub-menu-wrap isActive']//a[contains(text(),'Simon Rogerson')]")
    WebElement simonRogerson;
    @FindBy(xpath = "//select[@name='business_cat']")
    WebElement filterByBusiness;
    @FindBy(xpath = "//ul[@id='menu-primary']//a[contains(text(),'Businesses')]")
    WebElement businessesIcon;
    @FindBy(xpath = "//div[@class='pagination']//a[1]")
    WebElement page2;
    @FindBy(xpath = "//h1[contains(text(),'About Simon Rogerson')]")
    WebElement aboutSimonRogerson;

    public void cookieMethod() throws InterruptedException {
        acceptCookie.click();
        Thread.sleep(1000);
    }
    public void searchIconMethod() throws InterruptedException {
        searchIcon.click();
    }
    public void searchBoxMethod(String input) throws InterruptedException {
        Thread.sleep(2000);
        searchBox.sendKeys(input);
    }
    public void assertionMethod() throws InterruptedException {
        Thread.sleep(2000);
        String actual = searchedTitle.getText();                                    //Assertion
        Assert.assertThat(actual, Matchers.containsString("results"));
    }
//End of Search Functionality


    public void aboutClickMethod() {
        aboutElement.click();
    }
    public void simonRogersonMethod() throws InterruptedException {
        Thread.sleep(3000);
        simonRogerson.click();
    }
    public void simonRogersonAssertion() throws InterruptedException {
        Thread.sleep(2000);
        String actual = aboutSimonRogerson.getText();
        Assert.assertThat(actual, Matchers.containsString("About Simon Rogerson"));
    }
//End of 'About' Feature - Simon Rogerson

    public void filterByBusinessMethod() throws InterruptedException {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,500);");            //to scroll down the page
        Thread.sleep(3000);

        Select sel = new Select(filterByBusiness);                 //Select Method
        sel.selectByVisibleText("Octopus Investments");            //Selecting one option from dropdown

        List<WebElement> options = sel.getOptions();               //List Method
        for (WebElement option : options){
            System.out.println(option.getText());                 //to print list of FilterByBusiness in Console
        }
        Thread.sleep(2000);
        js.executeScript("window.scrollBy(0,700);");           //to scroll down the page
    }
//End of Filter by Business


    public void businessesIconMethod() throws InterruptedException {
        Thread.sleep(2000);
        businessesIcon.click();
        Thread.sleep(2000);
    }

    public void navigatePreviousMethod(){
        driver.navigate().back();
    }
// End of Navigate back to previous/Insights Page from Businesses page


    public void scrollDownMethod() throws InterruptedException {
        Thread.sleep(2000);
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,2800);");           //scrolling down to page numbers
    }
    public void page2Method() throws InterruptedException {
        Thread.sleep(3000);
        page2.click();
        Thread.sleep(2000);
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,800);");

    }
    public void urlAssetionMethod() throws InterruptedException {
        String actual = driver.getCurrentUrl();                     //URL Assertion
        Assert.assertThat(actual, Matchers.containsString("https://octopusgroup.com/insights/page/2/"));
    }

    public void screenShotMethod() throws IOException {
        TakesScreenshot screenshot =((TakesScreenshot) driver);
        File sourcefile = screenshot.getScreenshotAs(OutputType.FILE);
        File destinationfile = new File("C:\\ScreenShotFile.png");
        FileUtils.copyFile(sourcefile,destinationfile);
    }
//End of Click on page number '2'
}
