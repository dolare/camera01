var video = document.querySelector('vedio');

//if (navigator.getUserMedia) {
  //  console.log('get user media implemented')
    //navigator.getUserMedia({
     //   video: true
   // }, handleVideo, console.log.bind(console));
//}

//function handleVideo(stream) {
  //  console.log(stream, video);
   // video.src = window.URL.createObjectUrl(stream);
//}
//
//
//

var getUserMedia = (navigator.getUserMeida ||
        navigator.mozGetUserMedia);
    getUserMedia.call(navigator,{
        audio:true,
        video:true
    },function(stream){
        video.src = window.URL.createObjectURL(stream);
        video.onloadedmetadata = function(){
            video.play();
        }
    }.console.log.bind(console));
