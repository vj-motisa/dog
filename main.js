var img = "";



function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}


function preload() {
    img = loadImage("studyroom.jpg");
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("black");
    text("Desktop", 160, 170);
    stroke("red");
    textSize(14);
    noFill();
    rect(140, 150, 100, 100);
}