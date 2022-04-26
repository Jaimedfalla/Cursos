import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector("video");
const btnPlay = document.getElementById("btnPlay");
const btnUnmute = document.getElementById("btnUnmute");

//Se instancia el objeto
const player = new MediaPlayer({
    el:video,
    plugins:[new AutoPlay(),new AutoPause()]
});

btnPlay.onclick = () => player.togglePlay();
btnUnmute.onclick = () => {
    if(player.media.muted){
        player.unmute();
    }
    else{
        player.mute();
    }
}

//Se valida si el browser soporta los service workers
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('../sw.js').catch(error =>{
        console.log(error);
    });
}