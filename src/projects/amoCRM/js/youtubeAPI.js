let playTriggers = Array.from(document.querySelectorAll('[data-action="openVideo"]'));
let playerWrapper = document.querySelector('.player');
let close = document.querySelector('.player__close');
let ready = false;

let currentVideoId = 'JqSJaqySbKI';

function openVideoModal(e) {
    let prevID = player.getVideoUrl().slice(-11);
    if (e.target.dataset.videoid !== prevID) {
        currentVideoId = e.target.dataset.videoid;
        if (ready) {
            player.loadVideoById(e.target.dataset.videoid);
        };
    }
    document.body.style.overflow = 'hidden';
    playerWrapper.classList.remove('hide')
}

function closeVideoModal() {
    document.body.style.overflow = 'auto';
    playerWrapper.classList.add('hide')
    player.pauseVideo();
}

playTriggers.forEach(item => item.addEventListener('click', openVideoModal))
close.addEventListener('click', closeVideoModal)




const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: currentVideoId,
        playerVars: {
            autoplay: 0,
            controls: 1,
            showinfo: 0,
            rel: 0,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        closeVideoModal();
        player.stopVideo();
    }
}
function onPlayerReady() {
    ready = true;
}
