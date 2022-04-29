import MediaPlayer from "../MediaPlayer";

class AutoPause{
    private threshold:number;
    private player:MediaPlayer;

    constructor(){
        this.threshold = 0.25;
        //Se indica que el objeto this no estará asignado al observer sino al plugin Autopause
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }

    run(player:MediaPlayer){
        this.player = player;

        //handleIntersection es la función que se ejecutará cuando el evento se cumpla
        const observer = new IntersectionObserver(this.handleIntersection,{
            threshold:this.threshold
        });

        //Se asigna el objeto observado
        observer.observe(this.player.media);

        document.addEventListener('visibilitychange',this.handleVisibilityChange);
    }

    /*Esta es la función que el observer invocará cuando la visibilidad del video sea menor o mayor al 25%
    * Se es mayor al 25% se reproducirá de lo contrario se pausará.
    */
    private handleIntersection(entries:IntersectionObserverEntry[]){
        //entries es un arreglo que contiene todos los objetos observados
        const entry = entries[0];
        const isVisible = entry.intersectionRatio >= this.threshold;
        if(isVisible){
            this.player.play();
        }
        else{
            this.player.pause();
        }
    }

    private handleVisibilityChange(){
        const isVisible = document.visibilityState==='visible';
        if(isVisible){
            this.player.play();
        }
        else{
            this.player.pause();
        }
    }
}

export default AutoPause;