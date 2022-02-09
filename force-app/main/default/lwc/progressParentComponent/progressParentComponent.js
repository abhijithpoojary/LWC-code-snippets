import { LightningElement } from 'lwc';

export default class ProgressParentComponent extends LightningElement {
    cuurentStep = 'Account';
    showContact = false;
    showAccount = true;
    showOpportunity = false;
    stepValues = [
        {label : 'Account', value: 'Account'},
        {label : 'Contact', value: 'Contact'},
        {label : 'Opportunity', value: 'Opportunity'},
        {label : 'Map', value: 'Map'}
    ]

    handleNext(event){
        event.preventDefault();
        this.prepareCurrentStep(event);
    }

    handleBack(event){
        event.preventDefault();
        this.prepareCurrentStep(event);
    }

    prepareCurrentStep(event){
        this.showAccount = event.detail.showAccount;
        this.showContact = event.detail.showContact;
        this.showOpportunity = event.detail.showOpportunity;
        this.showMap = event.detail.showMap;

        if(this.showContact){
            this.cuurentStep = 'Contact';
        }else if(this.showAccount){
            this.cuurentStep = 'Account';
        }else if(this.showMap){
            this.cuurentStep = 'Map';
        }else {
            this.cuurentStep = 'Opportunity';
        }
}
}