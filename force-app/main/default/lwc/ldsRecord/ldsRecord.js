import { LightningElement,api } from 'lwc';

export default class LdsRecord extends LightningElement {

    @api recordId;
    @api objectApiName;

    handleSuccess() {
        alert('Success');
}
}