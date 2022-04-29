interface Observer{
    update:(data:any) => void;
}

//Es el que define el objeto que enviará las notificaciones del evento a los observadores
interface Subject{
    suscribe:(observer:Observer) => void;
    unsuscribe:(observer:Observer) => void;
}

class BitCoinPrice implements Subject{
    private observers:Array<Observer> = new Array<Observer>();
    
    constructor(){
        const el:HTMLInputElement = document.querySelector("#value");
        el.addEventListener('input',()=>{
            this.notify(el.value);
        })
    }

    suscribe(observer: Observer){
        this.observers.push(observer);
    };

    unsuscribe(observer:Observer){
        const index = this.observers.findIndex(o=> {
            return o === observer;
        });

        //Se elimina el observador de la lista de observers
        this.observers.splice(index,1);
    }

    notify(data:any){
        this.observers.forEach(o => o.update(data));
    }
}

class PriceDisplay implements Observer{
    private el:HTMLElement;

    constructor(){
        this.el = document.querySelector("#price");

    }
    update(data: any){
        this.el.innerText = data;
    }
}

const value = new BitCoinPrice();
const display = new PriceDisplay();

value.suscribe(display);