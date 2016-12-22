let player = document.querySelector("video");
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let stream = null;

let cameraSetting = {
  video: true, 
  audio: false
};

function playVideo(){
  player.play();
}

function capture(){
  ctx.drawImage(player, 0, 0);
}

function stopVideo(){
  if(stream != null){
    player.pause();
    stream.stop();
  }
}

function whenCameraAcquired(input){
  stream = input;
  let url = window.URL.createObjectURL(input);
  player.src = url;
}

player.addEventListener("loadedmetadata", playVideo);
let result = navigator.mediaDevices.getUserMedia(cameraSetting);
result.then(whenCameraAcquired);

window.addEventListener("unload", stopVideo);
