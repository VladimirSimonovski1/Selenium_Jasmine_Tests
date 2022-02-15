import { IBasePage } from "./IBasePage";

export interface IHomePage extends IBasePage {
    /**
     * Navigates to the sign up page
     */
    navigateToSignUpForm(): Promise<void>;

    /**
     * Checks if the sign up title is visible
     * @returns {boolean} True if the title is visible, false if it's not
     */
    getSignUpTitle(): Promise<boolean>;
}
