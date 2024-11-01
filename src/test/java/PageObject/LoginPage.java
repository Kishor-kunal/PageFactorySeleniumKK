package PageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoginPage {
	WebDriver driver;
	By txt_username=By.id("user-name");
	By txt_password=By.id("password");
	By btn_login=By.id("login-button");
	By linktext_homepage=By.xpath("//div[text()='Sauce Labs Backpack']");
	public LoginPage(WebDriver driver) {
		this.driver=driver;
	}
	public void enterusername(String username) {
		driver.findElement(txt_username).sendKeys(username);
	}
	public void enterpassword(String password) {
		driver.findElement(txt_password).sendKeys(password);
	}
	public void clickonlogin() {
		driver.findElement(btn_login).click();
	}
	public void userlogin(String username,String password) {
		driver.findElement(txt_username).sendKeys(username);
		driver.findElement(txt_password).sendKeys(password);
		driver.findElement(btn_login).click();
	}
	public void isHomepagelinktextdisplayed() {
		driver.findElement(linktext_homepage).isDisplayed();
	}
}
