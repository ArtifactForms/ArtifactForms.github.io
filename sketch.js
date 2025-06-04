let canvas;
let rotation = 0;
let rotating = true;
let pauseTime = 0;
let paused = false;
let boxSize = 200;
let animate = false;

function setup() {
  const container = document.getElementById("p5-container");
  const w = 400;
  const h = 400;

  canvas = createCanvas(w, h, WEBGL, { antialias: true });
  canvas.parent("p5-container");

  background(255);
}

function mouseClicked() {
  if (animate) return;

  boxSize = 50;
  animate = true;
}

function draw() {
  if (!paused) {
    rotation += radians(2);
  }

  if (rotation >= PI && !paused) {
    rotation = PI;
    rotating = false;
    paused = true;
    pauseTime = 60 * 2;
  }

  if (paused) {
    if (pauseTime <= 0) {
      rotation = 0;
      paused = false;
      rotating = true;
    }
    pauseTime -= 1;
  }

  rotateZ(radians(45));

  if (rotating) {
    rotateY(rotation);
  }

  if (animate) {
    boxSize += 10;
    if (boxSize >= 200) {
      animate = false;
      boxSize = 200;
    }
  }

  background(255);
  noFill();
  stroke(0);
  strokeWeight(2);
  box(boxSize);
}