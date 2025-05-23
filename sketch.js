let rotation = 0;
let rotating = true;
let pauseTime = 0;
let paused = false;
let boxSize = 200;
let animate = false;

function setup() {
  createCanvas(1024, 768, WEBGL);
}

function mouseClicked() {
  if (animate)
	  return;
  boxSize = 100;
  animate = true;
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
  
	if (animate) {
	  boxSize += 10;
	  if (boxSize >= 200) {
		animate = false;
		boxSize = 200;
		setTimeout(() => {
		window.location.href = "portfolio.html";
	}, 500);
	  }
	}
  
  noFill();
  stroke(0);
  strokeWeight(1);
  box(boxSize);
  pop();
}
