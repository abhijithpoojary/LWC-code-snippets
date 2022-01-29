import { LightningElement,api } from 'lwc';

export default class ParentLwc extends LightningElement {
    val
    childVal
    userDetails = [
        {
            name: 'John Doe',
        },
        {
            name: 'Steve Smith',
        },
        {
            name: 'David Warner',
        },
        {
            name: 'Peter Parker',
        }

    ]

    //store input data in a variable
    handleChange(event) {
        this.val = event.detail.value;
    }


   //add new user
    addUser(){
        this.userDetails.push({
           //name: event.target.value
           //name: 'New User'
           name: this.val
        })
        this.childVal = this.userDetails
        console.log(this.userDetails)
        console.log(this.childVal)
        alert('successfully added: '+this.val)
    }
}