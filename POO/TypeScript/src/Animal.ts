export abstract class Animal{

    constructor(protected name:string){}

    move(){}

    greeting(){}
}

export class Dog extends Animal{

    constructor(name:string,private owner:string) {
        super(name);//Invocación del constructor de la clase padre
    }

    woof(times:number):void{
        for (let index = 0; index < times; index++) {
            console.log('wof!');
        }
    }
}

const sally = new Dog('Sally','Jaime');
sally.woof(5);