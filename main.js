noseX=0;
noseY=0;
function preload() {
clown_nose = loadImage("https://drive.google.com/file/d/1CW0SBWi9iH7QEV7Pai3rThy4sowv3Wcq/view");
}

function setup() {
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet (video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{if(results.length > 0)
{
console.log(results);
noseX = results[0].pose.nose.x -15;
noseY = results[0].pose.nose.y -15;
console,log("nose x = " + noseX);
console,log("nose y = " + noseY);
   

}
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
   
}

function draw( ) {
image(video, 0, 0, 300, 300);
image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png')
}