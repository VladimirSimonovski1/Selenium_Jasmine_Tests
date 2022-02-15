import { Locator } from "selenium-webdriver";

export interface IBasePage {
    baseURL: string;

    /**
     * Navigate to QAMIND home page
     */
    navigateToMiro(): Promise<void>;

    /**
     * Deletes the browser cookies and maximizes the window
     */
    deleteCookiesAndMaximizeWindow(): Promise<void>;

    /**
     * Clears the input field and enters value
     * @param locator The locator passed as an argument
     * @param text The text that is send in the input field
     */
    clearInputFieldAndEnterText(locator: Locator, text: string): Promise<void>;

    /**
     * Waits for element to be enabled for clicking and clicks it
     * @param locator The locator passed as an argument
     */
    waitForElementToBeClickableAndClick(locator: Locator): Promise<void>;

    /**
     * Gets the text of an element after displaying
     * @param locator The locator passed as an argument
     * @returns {string} The element text
     */
    returnElementValueIfDisplayed(locator: Locator): Promise<string>;

    /**
     * Closes the browser and quits the driver
     */
    closeBrowserAndQuiteDriver(): Promise<void>;
}
