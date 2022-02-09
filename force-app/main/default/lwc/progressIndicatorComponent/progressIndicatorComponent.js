import { LightningElement,api } from 'lwc';

export default class ProgressIndicatorComponent extends LightningElement {
    @api currentStep = 'Account';

    @api stepValue = [
        {label : 'Account', value : 'Account'},
        {label : 'Contact', value : 'Contact'},
        {label : 'Opportunity', value : 'Opportunity'},
    ]
}