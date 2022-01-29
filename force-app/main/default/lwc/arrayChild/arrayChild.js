import { LightningElement,track,api } from 'lwc';

export default class ArrayChild extends LightningElement {
    // Default list of Contacts.
@track lstContacts = ["Abhijith", "crypto"];

// This method will add new Contact into Contact list.
@api
addContactToList(strContactName){
this.lstContacts.push(strContactName);
}
}
