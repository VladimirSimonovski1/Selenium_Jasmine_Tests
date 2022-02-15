import { IBasePage } from "./IBasePage";

export interface ISignUpPage extends IBasePage {
    /**
     * Sign up to Miro
     */
    signUpToMiro(): Promise<void>;

    /**
     * Fills out the sign up form
     */
    fillOutForm(): Promise<void>;

    /**
     * Agrees to Miro terms
     */
    agreeToTerms(): Promise<void>;

    /**
     * Clicks on get started button
     */
    getStarted(): Promise<void>;

    /**
     * Gets the email check title
     * @returns {string} The check email title
     */
    getEmailCheckTitle(): Promise<string>;

    /**
     * Gets the alert message for the respective field
     * @param field The field name
     * @returns {string} The alert message
     */
    getAlertMessage(field: string): Promise<string>;

    /**
     * Fills out the password field
     * @param value The password field name
     */
    fillOutPwdField(value: string): Promise<void>;

    /**
     * Gets the password alert message
     * @returns {string} The alert message
     */
    getPwdNotSecureAlertMsg(): Promise<string>;
}
