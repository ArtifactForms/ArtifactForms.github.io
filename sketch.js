let rotation = 0;
let rotating = true;
let pauseTime = 0;
let paused = false;

function setup() {
  createCanvas(800, 400, WEBGL)
}

function draw() {
  if (!paused)
    rotation += radians(2);
  
  if (rotation >= PI && !paused) {
    rotation = PI;
    rotating = false;
    paused = true;
    pauseTime = 60 * 3;
  }
  
  if (paused) {
    if (pauseTime <= 0) {
        rotation = 0;
        paused = false;
        rotating = true;
    }
    pauseTime -= 1;
  }
  
  smooth(8);
  background(255);
  
  push();
  rotateZ(radians(45));
  
  if (rotating)
    rotateY(rotation);
  
  noFill();
  stroke(0);
  strokeWeight(1);
  box(200);
  pop();
}
