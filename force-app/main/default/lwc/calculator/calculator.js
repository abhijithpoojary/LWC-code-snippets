import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    number1;
    number2;

  handleChangeEvent(event){
        const val = event.target.value;
        const name = event.target.name;
        if(name === 'number1'){
            this.number1 = val;
        }else{
            this.number2 = val;
        }
    }

    doSum(){
        const sum = parseInt(this.number1) + parseInt(this.number2);
        alert(sum);
    }
    doSubs(){
        const subs = parseInt(this.number1) - parseInt(this.number2);
        alert(subs);
    }

    doDiv(){
        const divOut = parseInt(this.number1) / parseInt(this.number2);
        alert(divOut);
    }

    doMulti(){
        const multiPli = parseInt(this.number1) * parseInt(this.number2);
        alert(multiPli);
    }
}