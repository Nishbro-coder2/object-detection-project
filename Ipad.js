img = "";
status = ""; 

function preload(){
    img = loadImage("Ipad.jpeg"); 
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',ModelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw(){
    image(img ,0,0 ,640,420 );
}
function ModelLoaded(){
    console.log("Model loaded!");
    status = true;
    objectDetector.detect(img , gotResults);
}
function gotResults(error , results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);

    }
}