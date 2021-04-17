function preload(){
}
function setup(){
    Canvas = createCanvas(300, 300);
    Canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300, 300);
}
function draw(){
    image(video, 0, 0, 300, 300);
}
function save_image(){
}