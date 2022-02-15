import { By, Locator } from "selenium-webdriver";

export class HomePageLocators {
    public static signUpBtn = By.css("ul li [href='/signup/']");
    public static getStartedTitle = By.css("h1");
}

export class SignUpPageLocators {
    public static fields = [By.id("name"), By.id("email"), By.id("password")];
    public static agreeTermsCheck = By.css("[for='signup-terms']");
    public static confirmSignUpTitle = By.css("h1.signup__title-form");
    public static submit = By.css("[type='submit']");
    public static pwdError = By.css(
        "[data-autotest-id='please-enter-your-password-1']",
    );
    public static errors(field: string): Locator {
        return By.id(`${field}Error`);
    }
    public static pwdNotSecureError = By.id("signup-form-password");
}
