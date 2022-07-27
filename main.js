function preload() {

}

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(500, 500);
    canvas.position(600, 175);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background("#79cfd4");
}

function modelLoaded() {
    console.log('PoseNet is loaded.');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}