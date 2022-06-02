noseX = 0;
noseY = 0;

function preload() {
    clown_nose = loadImage("https://i.postimg.cc/QNSsMGFp/download-removebg-preview.png");
}
function setup(){
    canvas = createCanvas(500,500);
    canvas.position(600,200);

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
poseNet.on('pose',gotposes)
        }

function modelloaded(){
    console.log('posnet is initialized');
}

function gotposes(results){
    if(results.length>0)
    {
        noseX = results[0].pose.nose.x+100;
        noseY = results[0].pose.nose.y+100;
        console.log(results);
        console.log("nose x =" + results[0].pose.nose.x)
        console.log("nose y =" + results[0].pose.nose.y)
    }
}

function draw(){
image(video , 0 , 0 , 500 , 500);
// fill(255,0,0);
// stroke(255,0,0); 
// circle(noseX, noseY,20);
image(clown_nose , noseX ,noseY , 30 , 30);
}

function take() {
    save("filter") 
}