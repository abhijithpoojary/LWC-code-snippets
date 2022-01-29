import { LightningElement, track, api} from 'lwc';

export default class ReactiveTrack extends LightningElement {
    message;

   // @track message1 = 'Reactive Property using @api decorators';

    handleChange(event){
        this.message = event.target.value;
        console.log(' Updated Message is ', this.message);
}  
}