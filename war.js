var img = "";



function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}


function preload() {
    img = loadImage("war.webp");
}

function draw() {
    image(img, 0, 0, 640, 420);
}