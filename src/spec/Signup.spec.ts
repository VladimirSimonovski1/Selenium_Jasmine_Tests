import { HomePage } from "../page-object/implementation/HomePage";
import { ChaiAssertions } from "../assertion/ChaiAssertions";
import * as Data from "../resources/Data";
import { SignUpPage } from "../page-object/implementation/SignUpPage";

describe("Miro Sign Up Page", () => {
    const homePage = new HomePage();
    const signUpPage = new SignUpPage();

    beforeEach(async (): Promise<void> => {
        await homePage.navigateToMiro();
        await homePage.navigateToSignUpForm();
        const actualTitle = await homePage.getSignUpTitle();
        ChaiAssertions.checkIfActualValueIsTrue(actualTitle);
    });

    afterAll(async (): Promise<void> => {
        await homePage.closeBrowserAndQuiteDriver();
    });

    it("Should successfully sign up to Miro", async (): Promise<void> => {
        await signUpPage.signUpToMiro();
        const actualEmailConfirmationTitle =
            await signUpPage.getEmailCheckTitle();
        ChaiAssertions.checkIfActualEqualsExpected(
            actualEmailConfirmationTitle,
            Data.expectedEmailConfirmationTitle,
        );
    });

    it("Should see sign up errors for not populated fields", async (): Promise<void> => {
        await signUpPage.getStarted();
        for (let index = 0; index < 4; index++) {
            const actualAlertMessage = await signUpPage.getAlertMessage(
                Data.formNames[index],
            );
            ChaiAssertions.checkIfActualEqualsExpected(
                actualAlertMessage,
                Data.alertMessages[index],
            );
        }
    });

    it("Should fail signing up to Miro for unsecured password", async (): Promise<void> => {
        await signUpPage.fillOutPwdField("test");
        const actualPwdAlertMessage =
            await signUpPage.getPwdNotSecureAlertMsg();
        ChaiAssertions.checkIfActualEqualsExpected(
            actualPwdAlertMessage,
            Data.expectedPwdAlertMessage,
        );
    });
});
