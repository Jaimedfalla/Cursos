import MediaPlayer from '../../MediaPlayer'
import Ads,{ Ad } from './Ads'

class AdsPlugin{
    private player:MediaPlayer;
    private media:HTMLMediaElement;
    private ads:Ads;
    private adsContainer:HTMLElement;
    private currentAd:Ad;

    constructor(){
        this.ads = Ads.getInstance();
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
        this.adsContainer = document.createElement('div');
    }

    run(player:MediaPlayer){
        this.player = player;
        this.player.container.appendChild(this.adsContainer);
        this.media = player.Media;
        this.media.addEventListener('timeupdate',this.handleTimeUpdate);
    }

    private handleTimeUpdate(){
        const currentTime = Math.floor(this.media.currentTime);//Math.floor convierte un valor decimal en un entero
        if(currentTime%30===0){
            this.renderAd();
        }
    }

    private renderAd(){
        if(this.currentAd){
            return;
        }

        const ad = this.ads.getAd();
        this.currentAd = ad;
        this.adsContainer.innerHTML =` <div class="ads">
        <a  class="ads__link" href="${this.currentAd.url}" target="_blank">
          <img class="ads__img" src="${this.currentAd.imageUrl}" />
          <div class="ads__info">
            <h5 class="ads__title">${this.currentAd.title}</h5>
            <p class="ads__body">${this.currentAd.body}</p>
          </div>
        </a>
      </div>`;

      setTimeout(()=>{
          this.currentAd = null;
          this.adsContainer.innerHTML='';
      },10000);
    }
}

export default AdsPlugin;