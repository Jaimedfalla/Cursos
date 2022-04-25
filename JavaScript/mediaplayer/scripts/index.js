import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const btnPlay = document.getElementById("btnPlay");
const btnUnmute = document.getElementById("btnUnmute");

//Se instancia el objeto
const player = new MediaPlayer({el:video,plugins:[
    new AutoPlay()
]});

btnPlay.onclick = () => player.togglePlay();
btnUnmute.onclick = () => player.unmute();