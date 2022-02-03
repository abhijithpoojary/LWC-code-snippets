import { LightningElement,track,wire } from 'lwc';

import getAccountList from '@salesforce/apex/googleMapController.getAccountList';

export default class GoogleMapInLwc extends LightningElement {
   
    @track mapMarkers;

    @wire(getAccountList)
    wiredData({ error, data }) {
      if (data) {
        console.log('Data', data);
        data.forEach(account => {
           let mapObj = {
            
                location: {
                    // Location Information
                    City: account.ShippingCity,
                    Country: account.ShippingCountry,
                    PostalCode: account.ShippingPostalCode,
                    State: account.ShippingState,
                    Street: account.ShippingStreet
                },
    
                // For onmarkerselect
                value: account.Name,
                title: account.Name,
                description: account.Description,
                icon: 'standard:account'
            }
            if(!this.mapMarkers){
                this.mapMarkers = [];
            }
            this.mapMarkers.push(mapObj);
        });
      } else if (error) {
        console.error('Error:', error);
      }
    }

    /*selectedMarkerValue = 'SF1';

    handleMarkerSelect(event) {
        this.selectedMarkerValue = event.target.selectedMarkerValue;
    }*/
}