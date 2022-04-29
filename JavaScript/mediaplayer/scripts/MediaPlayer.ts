//Definimos un objeto Media Player
class MediaPlayer {    
    private media:HTMLMediaElement;//Las etiquetas video y audio de html herenda de HTMLMediaElement
    private plugins:Array<any>;
    container:HTMLElement;

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }

    private initPlayer(){
        this.container = document.createElement('div');
        this.container.style.position='relative';
        this.media.parentNode.insertBefore(this.container,this.media);
        this.container.appendChild(this.media); 
    }

    togglePlay() {
        if (this.media.paused) {
            this.play();
        }
        else {
            this.pause();
        }
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }

    public get Media(){
        return this.media;
    }

    private initPlugins() {
        //Se crea un objeto player para controlar los objetos a los que tiene acceso el plugin
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
}

//El default indica el nombre de la variable por defecto
export default MediaPlayer;