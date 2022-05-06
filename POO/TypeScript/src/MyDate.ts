export class MyDate{

    constructor(
        private _year:number = 1984,
        private _month:number =10,
        //Cuando el atributo tiene un get y set, al nombre del atributo se le agrega "_"
        private _day:number = 11){} //Esta es una forma simplificada de declarar los atributos y asignarles valor en el constructor

    //Es muy importante asignar el restrictor private|public, de lo contrario no tomará el parámetro también como un atributo

    printFormat(): string{
        return `${this._day}/${this._month}/${this._year}`;
    }

    add(amount:number,type:'days'|'months'|'years'){//type es un literal type donde se indican los valores que toma ese parámetro
        switch(type){
            case 'years':
                this._year += amount;
                break;
            case 'months':
                this._month += amount;
                break;
            default:
                this._day += amount;
                break;
        }
    }

    get day():number{
        return this._day;
    }

    get isLeapYear():boolean{
        if(this._year % 400===0) return true;
        if(this._year % 100===0) return false;
        return this._year % 4 ===0;
    }

    get month():number{
        return this._month;
    }

    set month(value:number){
        if(value>=1 && value<=12){
            this._month = value;
        }
        else{
            throw new Error('invalid month value');
        }
    }

    set year(value:number){
        if(value>0){
            this._year=value;
        }
    }
}

const myDate = new MyDate();
console.log(myDate.printFormat());
console.log(myDate.day);
console.log("(1984)=>",myDate.isLeapYear);

myDate.year =2000;
console.log("(2000)=>",myDate.isLeapYear);

myDate.year = 2001;
console.log("(2001)=>",myDate.isLeapYear);

myDate.year = 2004;
console.log("(2004)=>",myDate.isLeapYear);

myDate.month = 594;