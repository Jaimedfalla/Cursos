export class MyService{

    private static instance:MyService|null=null;

    private constructor(private _name:string){}

    get name():string{
        return this._name;
    }

    static create(name:string):MyService{
        if(MyService.instance===null){
            MyService.instance = new MyService(name);
        }

        return MyService.instance;
    }
}

const service1 = MyService.create('service1');
console.log(service1.name);

const service2 = MyService.create('service2');
console.log(service2.name);