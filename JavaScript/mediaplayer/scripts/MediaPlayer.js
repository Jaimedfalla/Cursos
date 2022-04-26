//Definimos un objeto Media Player
function MediaPlayer(config){
    this.media = config.el;
    this.plugins = config.plugins || [];

    this.initPlugins();
}

MediaPlayer.prototype.togglePlay = function(){
    if(this.media.paused){
        this.play();
    }
    else{
        this.pause();
    }
}

MediaPlayer.prototype.play = function(){
    this.media.play();
}

MediaPlayer.prototype.pause = function(){
    this.media.pause();
}

MediaPlayer.prototype.mute = function(){
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function(){
    this.media.muted = false;
}

MediaPlayer.prototype.initPlugins = function(){
    //Se crea un objeto player para controlar los objetos a los que tiene acceso el plugin
    const player = {
        play:()=>this.play(),
        pause: () => this.pause(),
        media: this.media,
        //get
        get muted(){
            return this.media.muted;
        },
        //set
        set muted(value){
            this.media.muted = value;
        }
    };

    this.plugins.forEach(plugin => {
        plugin.run(player);
    });
}

//El default indica el nombre de la variable por defecto
export default MediaPlayer;