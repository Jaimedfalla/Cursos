import MediaPlayer from "../MediaPlayer";

class AutoPlay {
    constructor() { }
    run(player:MediaPlayer) {
        if (!player.Media.muted) {
            player.Media.muted = true;
        }
        player.play();
    }
}

export default AutoPlay;