$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/SourceDemologin.feature");
formatter.feature({
  "name": "As User should be able to login in sourcedemo site",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Check that user should be able to login with valid creds",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "user is navigated to home page",
  "keyword": "Then "
});
formatter.step({
  "name": "user closes the browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "error_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "visual_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check that user should be able to login with valid creds",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_is_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"standard_user\" and \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_is_navigated_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_closes_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check that user should be able to login with valid creds",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_is_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"locked_out_user\" and \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_is_navigated_to_home_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@data-test\u003d\u0027active-option\u0027]\"}\n  (Session info: chrome\u003d130.0.6723.71)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.25.0\u0027, revision: \u00278a8aea2337\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002722.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [5dc40495cc7ee399152d4629a8933368, findElement {using\u003dxpath, value\u003d//span[@data-test\u003d\u0027active-option\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 130.0.6723.71, chrome: {chromedriverVersion: 130.0.6723.91 (53ac07678369..., userDataDir: C:\\Users\\KISHOR~1\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:49938}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:49938/devtoo..., se:cdpVersion: 130.0.6723.71, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 5dc40495cc7ee399152d4629a8933368\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:62)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:502)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:486)\r\n\tat org.openqa.selenium.remote.ErrorCodec.decode(ErrorCodec.java:167)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:138)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:50)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:190)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:216)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:174)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy23.isDisplayed(Unknown Source)\r\n\tat PageFactory.HomePageFactory.isCartDisplayed(HomePageFactory.java:14)\r\n\tat StepDefinitions.LoginPageFactoryStepDefinitions.user_is_navigated_to_home_page(LoginPageFactoryStepDefinitions.java:53)\r\n\tat ✽.user is navigated to home page(file:///C:/Users/Kishor%20Kunal/eclipse-workspace/BDDFrameworkNewwithTestNG/src/test/resources/Features/SourceDemologin.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_closes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Check that user should be able to login with valid creds",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_is_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"problem_user\" and \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_is_navigated_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_closes_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check that user should be able to login with valid creds",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_is_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"performance_glitch_user\" and \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_is_navigated_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_closes_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check that user should be able to login with valid creds",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_is_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"error_user\" and \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_is_navigated_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_closes_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check that user should be able to login with valid creds",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_is_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"visual_user\" and \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_is_navigated_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginPageFactoryStepDefinitions.user_closes_the_browser()"
});
formatter.result({
  "status": "passed"
});
});