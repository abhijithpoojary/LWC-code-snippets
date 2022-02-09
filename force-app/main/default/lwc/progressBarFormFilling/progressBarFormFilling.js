import { LightningElement,track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import  ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNTNUMBER_FIELD  from '@salesforce/schema/Account.AccountNumber';
import SHIPPINGCITY_FIELD from '@salesforce/schema/Account.ShippingCity';
import SHIPPINGCOUNTRY_FIELD from '@salesforce/schema/Account.ShippingCountry';
import SHIPPINGPOSTALCODE_FIELD from '@salesforce/schema/Account.ShippingPostalCode';
import SHIPPINGSTATE_FIELD from '@salesforce/schema/Account.ShippingState';
import SHIPPINGSTREET_FIELD from '@salesforce/schema/Account.ShippingStreet';




export default class ProgressBarFormFilling extends LightningElement {
    @track selectedStep = 'Step1';
 
    //contact form fields
    objectApiName = ACCOUNT_OBJECT;
    fields = [NAME_FIELD,ACCOUNTNUMBER_FIELD,SHIPPINGCITY_FIELD,SHIPPINGCOUNTRY_FIELD,SHIPPINGPOSTALCODE_FIELD,SHIPPINGSTATE_FIELD,SHIPPINGSTREET_FIELD];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Account created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }



    handleNext() {
        var getselectedStep = this.selectedStep;
        if(getselectedStep === 'Step1'){
            this.selectedStep = 'Step2';
        }
        else if(getselectedStep === 'Step2'){
            this.selectedStep = 'Step3';
        }
        else if(getselectedStep === 'Step3'){
            this.selectedStep = 'Step4';
        }
    }
 
    handlePrev() {
        var getselectedStep = this.selectedStep;
        if(getselectedStep === 'Step2'){
            this.selectedStep = 'Step1';
        }
        else if(getselectedStep === 'Step3'){
            this.selectedStep = 'Step2';
        }
        else if(getselectedStep === 'Step4'){
            this.selectedStep = 'Step3';
        }
    }
      
    handleFinish() {
        alert('Finished...');
        this.selectedStep = 'Step1';
    }
      
    selectStep1() {
        this.selectedStep = 'Step1';
    }
 
    selectStep2() {
        this.selectedStep = 'Step2';
    }
 
    selectStep3() {
        this.selectedStep = 'Step3';
    }
 
    selectStep4() {
        this.selectedStep = 'Step4';
    }
 
    get isSelectStep4() {
        return this.selectedStep === "Step4";
    }
}