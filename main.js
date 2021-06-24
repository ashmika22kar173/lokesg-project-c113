function preload() {
}

function setup() {
    canvas = createCanvas(650, 500);
    canvas.position(100, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,170, 90, 320, 300);

fill(255,0,0);
stroke(255,0,0);
circle(50,50,80);
circle(50,428,80);
circle(589,50,80);
circle(589,428,80);



fill(0,128,0);
stroke(0,128,0);
rect(90,40,460,20);
rect(90,420,460,20);
rect(40,90,20,300);
rect(580,90,20,300);
}

function take_snapshot() {
    save('Photo.png')

}