import { LightningElement,wire } from 'lwc';
import getContactList from '@salesforce/apex/DataTableController.getContactList';

const actions = [
    { label: 'Show details', name: 'show_details' },
    { label: 'Delete', name: 'delete' }
];

const columns = [
    { label: 'Name', fieldName: 'nameUrl', type: 'url', sortable: true ,
          typeAttributes: { label: {
              fieldName: 'Name' }, 
              target: '_blank' } 
    },
    { label: 'Title', fieldName: 'Title', type: 'text' , sortable: true},
    { label: 'Phone', fieldName: 'Phone', type: 'Phone' , sortable: true},
    { label: 'Email', fieldName: 'Email', type: 'Email', sortable: true },
    { label: 'AccountId', fieldName: 'AccountId', type: 'text' , sortable: true},
    { label: 'Account Name', fieldName: 'accountUrl',type: 'url',sortable: true,
        typeAttributes: { label: {
             fieldName: 'Name' }, 
            target: '_blank' } 
    },
    { type: 'action', typeAttributes: { rowActions: actions } }
];

export default class DataTable extends LightningElement {
    contactData;
    columnList = columns;
    error;
    //data = [];
    sortBy = 'Phone';
    sortDirection = 'asc';

    @wire(getContactList)
    wiredData({error,data}){
        if(data){
            console.log('data',data);
            let baseURl = 'https://'+location.host+'/';//URL to our salesforce org
            let parseData = JSON.parse(JSON.stringify(data));
            parseData.forEach(contact => {
                if(contact.AccountId){
                    contact.ACCOUNT_NAME = contact.Account.Name;
                    contact.nameUrl = baseURl+contact.Id;//URL to the contact
                    contact.accountUrl = baseURl+contact.AccountId;//URL to the account
                }
            });
            console.log('parseData',parseData);

            this.contactData = parseData;
            this.error = undefined;
        }else if(error){
            console.log('error',error);
            this.error = error;
            this.contactData = undefined;
        }
}       
               doSorting(event) {
                     this.sortBy = event.detail.fieldName;
                      this.sortDirection = event.detail.sortDirection;
                     //this.sortData(this.sortBy, this.sortDirection);
                     this.sortData(event.detail.fieldName, event.detail.sortDirection);
                    }

                    sortData(fieldname, direction) {
                        let parseData = JSON.parse(JSON.stringify(this.contactData));
                        // Return the value stored in the field
                        let keyValue = (a) => {
                            return a[fieldname];
                        };
                        // cheking reverse direction
                        let isReverse = direction === 'asc' ? 1: -1;
                        // sorting data
                        parseData.sort((x, y) => {
                            x = keyValue(x) ? keyValue(x) : ''; // handling null values
                            y = keyValue(y) ? keyValue(y) : '';
                            // sorting values based on direction
                            return isReverse * ((x > y) - (y > x));
                        });
                        this.contactData = parseData;
                    }   
        

        //Row level actions in datatable(show details,delete)
        handleRowAction(event) {
             const action = event.detail.action;
            const row = event.detail.row;
            switch (action.name) {
                 case 'show_details':
                        alert('Showing Details: ' + JSON.stringify(row));
                      break;
                case 'delete':
                     const rows = this.data;
                     const rowIndex = rows.indexOf(row);
                     rows.splice(rowIndex, 1);
                     this.data = rows;
                     break;
}
}
}