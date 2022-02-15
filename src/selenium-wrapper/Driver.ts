import { WebDriver } from "selenium-webdriver";

const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");
const webdriver = require("selenium-webdriver");
const Logger = require("bunyan");
const log = Logger.createLogger({ name: "Browser Log" });

export abstract class Driver {
    public static driver: WebDriver = Driver.buildDriver();

    private static buildDriver() {
        log.info("Starting chrome driver...");
        chrome.setDefaultService(
            new chrome.ServiceBuilder(chromedriver.path).build(),
        );
        return new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();
    }
}
