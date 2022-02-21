noseX=0;
noseY=0;
difference=0;
rX=0;
lX=0;


 function setup() {
     canvas = createCanvas(550, 550);
     canvas.position(560,150);
video=createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);
 }

 function modelLoaded() {
console.log("PoseNet is Initialized");
 }

function gotPoses(results) {
    if(results.length>0)
    {
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        rX=results[0].pose.rightWrist.x;
        lX=results[0].pose.leftWrist.x;
        difference = floor(lX-rX);
    }
} 

 function draw() {
background('#1EE7F8');

document.getElementById("square_side").innerHTML = "Width and Hight of a square will be = " + difference +"px";
fill('red');
stroke('red');
square(noseX,noseY,difference);
 }

 