import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import ACCOUNTID_FIELD from '@salesforce/schema/Opportunity.AccountId';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import STAGENAME_FIELD from '@salesforce/schema/Opportunity.StageName';
import AMOUNT_FIELD  from '@salesforce/schema/Opportunity.Amount';
import CLOSEDATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';


export default class NewOpportunityComponent extends LightningElement {

    objectApiName = OPPORTUNITY_OBJECT;
    fields = [ACCOUNTID_FIELD,AMOUNT_FIELD,CLOSEDATE_FIELD,NAME_FIELD,STAGENAME_FIELD];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Opportunity created",
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
                showOpportunity : false,
                showMap : true
            }
        });
        this.dispatchEvent(eventNext);
    }

    handleBack(event){
        event.preventDefault();
        const eventNext = new CustomEvent('previous', {
            detail:{
                showContact : true,
                showAccount : false,
                showOpportunity : false,
               // showProduct : false
            }
        });
        this.dispatchEvent(eventNext);
    }
}