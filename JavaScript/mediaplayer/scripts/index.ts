import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import AdsPlugin from './plugins/Ads';

const video = document.querySelector("video");
const btnPlay:HTMLElement = document.getElementById("btnPlay");
const btnUnmute:HTMLElement = document.getElementById("btnUnmute");

//Se instancia el objeto
const player = new MediaPlayer({
    el:video,
    plugins:[new AutoPlay(),new AutoPause(), new AdsPlugin() ]
});

btnPlay.onclick = () => player.togglePlay();
btnUnmute.onclick = () => {
    if(player.Media.muted){
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