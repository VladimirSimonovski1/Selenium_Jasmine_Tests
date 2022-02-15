import { WebElement, until } from "selenium-webdriver";
import { Driver } from "./Driver";

const Logger = require("bunyan");
const log = Logger.createLogger({ name: "Element Wait Log" });

export class ElementWait extends Driver {
    public static async waitForElementToBeClickable(
        element: WebElement,
        timeout?: number,
    ): Promise<boolean> {
        let maxTimeout = timeout === undefined ? 5000 : timeout;
        log.info("Waiting for element to be enabled for clicking...");
        await this.driver.wait(until.elementIsEnabled(element), maxTimeout);
        if (element.isEnabled()) {
            log.info("Element is ready to be clicked!");
            return true;
        } else {
            log.error("Element is still not ready to be clicked!");
            return false;
        }
    }

    public static async waitForElementToBeVisible(
        element: WebElement,
        timeout?: number,
    ): Promise<boolean> {
        let maxTimeout = timeout === undefined ? 5000 : timeout;
        log.info("Waiting for element to become visible...");
        await this.driver.wait(until.elementIsVisible(element), maxTimeout);
        if (element.isDisplayed()) {
            log.info("Element is visible!");
            return true;
        } else {
            log.error("Element is not visible!");
            return false;
        }
    }
}
