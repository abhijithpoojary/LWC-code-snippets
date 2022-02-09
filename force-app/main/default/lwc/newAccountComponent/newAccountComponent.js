import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import  ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNTNUMBER_FIELD  from '@salesforce/schema/Account.AccountNumber';
import SHIPPINGCITY_FIELD from '@salesforce/schema/Account.ShippingCity';
import SHIPPINGCOUNTRY_FIELD from '@salesforce/schema/Account.ShippingCountry';
import SHIPPINGPOSTALCODE_FIELD from '@salesforce/schema/Account.ShippingPostalCode';
import SHIPPINGSTATE_FIELD from '@salesforce/schema/Account.ShippingState';
import SHIPPINGSTREET_FIELD from '@salesforce/schema/Account.ShippingStreet';

export default class NewAccountComponent extends LightningElement {



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
 

    handleNext(event){
        event.preventDefault();
        const eventNext = new CustomEvent('next', {
            detail:{
                showContact : true,
                showAccount : false,
                showOpportunity : false,
                showMap : false
            }
        });
        this.dispatchEvent(eventNext);
    }
}

