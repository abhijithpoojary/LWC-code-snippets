import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD  from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

export default class NewContactComponent extends LightningElement {

    objectApiName = CONTACT_OBJECT;
    fields = [FIRSTNAME_FIELD,LASTNAME_FIELD,EMAIL_FIELD];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Contact created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }


    handleNext(event){
        event.preventDefault();
        const eventNext = new CustomEvent('next', {
            detail:{
                showContact : false,
                showAccount : false,
                showOpportunity : true,
                showMap : false
            }
        });
        this.dispatchEvent(eventNext);
    }

    handleBack(event){
        event.preventDefault();
        const eventNext = new CustomEvent('previous', {
            detail:{
                showContact : false,
                showAccount : true,
                showOpportunity : false,
                showMap : false
            }
        });
        this.dispatchEvent(eventNext);
    }
}