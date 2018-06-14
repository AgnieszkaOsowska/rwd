var _btn = document.querySelector('[data-js=\'navbtn\']');

_btn.addEventListener('click', function() {
    document.body.classList.toggle('nav-open');
});

var _videoCont = document.querySelector('[data-js=\'videoCont\']'),
    _videoElem = document.querySelector('[data-js=\'videoElem\']'),
    _videoPlay = document.querySelector('[data-js=\'videoPlay\']'),
    _videoPause = document.querySelector('[data-js=\'videoPause\']');
    _videoProgr = document.querySelector('[data-js=\'videoProgr\']');


_videoPlay.addEventListener('click', function(){
    _videoElem.play();
	_videoCont.classList.add('is-playing');


});

_videoPause.addEventListener('click', pause);



_videoElem.addEventListener('ended', function(){
    pause();
    _videoElem.currentTime = 0;
});

function pause() {
    _videoElem.pause();
    _videoCont.classList.remove('is-playing');
}
   
_videoElem.addEventListener('timeupdate', function(){
    //_videoProgr.style.width = Math.ceil(_videoElem.currentTime / _videoElem.duration * 100) + '%';

    _videoProgr.style.transform = 'scaleX('+ _videoElem.currentTime / _videoElem.duration + ')';
});


//header animation

var hdrData = {
    element: document.querySelector('[data-js=header]'),
    scrollPosition: 0,
    ticking: false,
    state: 'top'
};

if( hdrData.element ){
    window.addEventListener('scroll', function onScroll(){

        hdrData.scrollPosition = window.pageYOffset;

        if (!hdrData.ticking) {
            window.requestAnimationFrame(function() {
                scrollCallback(hdrData.scrollPosition);
                hdrData.ticking = false;
            });
            hdrData.ticking = true;
        }
    });
}

function scrollCallback(position){
    //console.log("scrollCallback:", position);
    if( position > 1 ){
        if( hdrData.state !== 'moving' ){
            hdrData.state = 'moving';
            hdrData.element.classList.add('compact');
        }
    }
    else {
        if( hdrData.state !== 'top' ){
            hdrData.state = 'top';
            hdrData.element.classList.remove('compact');
        }
    }
}