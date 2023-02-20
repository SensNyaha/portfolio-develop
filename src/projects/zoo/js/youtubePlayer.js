let camerasWrapper = document.querySelector('.zoos__cameras');

let ready = false;

function openVideo(e) {
    let prevID = player.getVideoUrl().slice(-11);
    if (e.target.dataset.videoid !== prevID) {
        currentVideoId = e.target.dataset.videoid;
        if (ready) {
            player.loadVideoById(e.target.dataset.videoid);
        };
    }
}

camerasWrapper.addEventListener('click', (e) => {
    if (e.target.getAttribute('data-action')) {
        openVideo(e);
    }
})

// Old code was replaced by EVENT DELEGATION
// let playTriggers = Array.from(document.querySelectorAll('[data-action="openVideo"]'));
// playTriggers.forEach(item => item.addEventListener('click', openVideo))


const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;


function onYouTubeIframeAPIReady() {
    if ((document.querySelector('.zoos__cameras .swiper-slide:not(.swiper-slide-duplicate) img').getAttribute('data-videoId'))) {
        player = new YT.Player('player', {
            videoId: document.querySelector('.zoos__cameras .swiper-slide:not(.swiper-slide-duplicate) img').getAttribute('data-videoId'),
            playerVars: {
                autoplay: 0,
                controls: 1,
                showinfo: 0,
                rel: 0,
            },
            events: {
                'onReady': onPlayerReady,
            }
        });
    }
    else {
        setTimeout(
            onYouTubeIframeAPIReady, 2000
        )
    }

}

function onPlayerReady() {
    ready = true;
}
