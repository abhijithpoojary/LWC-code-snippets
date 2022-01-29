import { LightningElement, track } from 'lwc';

export default class CalculatorAssignment extends LightningElement {
    area;
    number1;
    number2;
    diagonal1;
    diagonal2;
    @track val1;
    @track rect1;
    @track rhom;


    squareChange(event){
        const val = event.target.value;
        const name = event.target.name;
        if(name === 'square'){
            this.area = val;
        }/*else if(name === 'rect'){
            this.number1 = val;
        }else{
            this.number2 = val;
        }*/
    }

   rectangleChange(event){
        const val = event.target.value;
        const name = event.target.name;
        if(name === 'number1'){
            this.number1 = val;
        }else{
            this.number2 = val;
        }
    }

    diagonalChange(event){
        const val = event.target.value;
        const name = event.target.name;
        if(name === 'diagonal1'){
            this.diagonal1 = val;
        }else{
            this.diagonal2 = val;
        }
    }

    sqr(){
        this.val1 = parseInt(this.area) * parseInt(this.area);
        alert(val1);
    }

    rect(){
        this.rect1 = parseInt(this.number1) * parseInt(this.number2);
        alert(rect1);
    }

    rhombus(){
        this.rhom = (parseInt(this.diagonal1) * parseInt(this.diagonal2))/2;
        alert(rhom);
    }
}