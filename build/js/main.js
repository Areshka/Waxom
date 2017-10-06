var videoElm = document.getElementById("VideoPlayer");
var videoDescr = document.getElementById("video-description");
var playElm = document.getElementById("play");

$(playElm).on("click", function(){
	(videoElm.paused == true) ? videoElm.play() : videoElm.pause();
});

$(videoElm).on("click", function(){
	(videoElm.paused == true) ? videoElm.play() : videoElm.pause();
});

videoElm.onplay  = function(){
	videoDescr.style.display = "none";
};
//подія встановлення паузи при відтворенні треку
videoElm.onpause  = function(){
	videoDescr.style.display = "block";
};
