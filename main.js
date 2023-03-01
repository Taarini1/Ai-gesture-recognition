noseX = 0;
noseY = 0;
LeftWristX = 0;
RightWristX = 0;
difference=0;


function preload(){

}

function setup(){
canvas=createCanvas(600,450)
canvas.position(700,150);

video=createCapture(VIDEO)


posenet=ml5.poseNet(video,modelLoaded);

posenet.on("pose",gotPoses);

}

function modelLoaded(){
console.log("Model Loaded ");

}

function gotPoses(results){

    if(results.length>0){
       console.log(results);
       noseX=results[0].pose.nose.x
       noseY=results[0].pose.nose.y
       LeftWristX = results[0].pose.leftWrist.x
       RightWristX = results[0].pose.rightWrist.x
       difference=floor(LeftWristX-RightWristX);

       console.log("nose x = "+noseX+"nose Y = "+noseY+"difference= "+difference);
       

    }

}


function draw(){

    background("#f09cd1");
    stroke("#5d35f0");
    fill('#89d8f0')
    square(noseX,noseY,difference)
    document.getElementById("side_of_square").innerHTML="The side of the square measures= "+difference+"px";
}


