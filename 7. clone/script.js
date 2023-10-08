const videos = document.querySelectorAll('#video');



videos.forEach(function(video){
    video.addEventListener('mouseenter',() => {
        video.play();
    })

    video.addEventListener('mouseleave',()=>{
        video.pause();
        video.currentTime = 0;
    })
});