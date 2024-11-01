//package StepDefinitions;
//
//import java.time.Duration;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.testng.Assert;
//
//import io.cucumber.java.en.*;
//
//public class SourceDemoLogin {
//	static WebDriver driver;
//	@Given("User is on Login Page")
//	public void user_is_on_Login_Page() {
//		driver=new ChromeDriver();
//		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
//		driver.get("https://www.saucedemo.com/");
//	 
//	}
//
//	//@When("User enters username and Password")
//	@When("User enters {string} and {string}")
//	//public void user_enters_username_and_Password() {
//		public void user_enters_and(String username, String Password) {
//		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
//		driver.findElement(By.id("user-name")).sendKeys(username);
//		driver.findElement(By.id("password")).sendKeys(Password);
//	   
//	}
//
//	@And("User clicks on login button")
//	public void user_clicks_on_login_button() {
//		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
//		driver.findElement(By.id("login-button")).click();
//	    
//	}
//
//	@Then("user is navigated to home page")
//	public void user_is_navigated_to_home_page() {
//		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
//		String textonhomepage=driver.findElement(By.xpath("//div[text()='Sauce Labs Backpack']")).getText();
//	   Assert.assertTrue(textonhomepage.equals("Sauce Labs Backpack"));
//	}
//
//	@And("user closes the browser")
//	public void user_closes_the_browser() {
//		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
//	   driver.close();
//	}
//
//
//}
