import { LightningElement, wire } from 'lwc';
import getCases from '@salesforce/apex/wired.getCases';

export default class WiredMethod extends LightningElement {
    @wire(getCases) Case;
}