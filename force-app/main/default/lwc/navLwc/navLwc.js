import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavLwc extends NavigationMixin(LightningElement) {
        // Navigate to New Account Page
        navigateToNewAccountPage() {
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Account',
                    actionName: 'new'
                },
            });
        }
}