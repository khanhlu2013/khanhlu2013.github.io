
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player) after the API code downloads.
var player;var cur_vid;
var is_youtube_iframe_ready = false;

// //kendama
// var sweet_pro_pink_vid = 'ozuZSPQIsrU';
// var black_and_yellow_cracked_vid = 'xAFylJSAzRk';
// var dark_metalic_vid = 'kWrJp1P9Or0';

// //yoyo
// var black_yoyo_vid = 'stUDEebazKs';

function onYouTubeIframeAPIReady() {
    is_youtube_iframe_ready = true;
    var introduction_vid = 'iFiiXkonsXY';    
    loadVideo(introduction_vid,false);
}
function loadVideo(id,is_play) {
    if(is_play === undefined){
        is_play = true;//default
    }
    if(!is_youtube_iframe_ready)return;
    if(!player){
        player = new YT.Player('video_div', {
            video_id:null,
            events:{
                'onReady':function(evt){
                    if(is_play){
                        evt.target.loadVideoById(id);  
                    }else{
                        evt.target.cueVideoById(id);
                    }
                }
            }                    
        });                                
    }else{
        if(cur_vid === undefined || cur_vid !== id){
            cur_vid = id;
            if(is_play){
                player.loadVideoById(id);  
            }else{
                player.cueVideoById(id);
            }
        }else{
            if(is_play){
                if(player.getPlayerState() === 1/*if it is playing*/){
                    player.pauseVideo();
                }else{
                    player.playVideo();
                }

            }
        }
    }
}

