let font;
let particles = [];
let textPoints = [];
let textToShow = "CODE";

function preload() {
  font = loadFont('https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Regular.otf');
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('particle-container');
  generateTextPoints();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  generateTextPoints();
}

function getFontSize() {
  return windowWidth * 0.3;
}

function generateTextPoints() {
  particles = [];
  let fontSize = getFontSize();

  let bounds = font.textBounds(textToShow, 0, 0, fontSize);

  let x = (width - bounds.w) * 0.5 - bounds.x; 
  let y = (height / 2) + (bounds.h / 2);

  textPoints = font.textToPoints(textToShow, x, y, fontSize, {
    sampleFactor: 0.2
  });

  for (let pt of textPoints) {
    particles.push(new Particle(pt.x, pt.y));
  }
}

function draw() {
  clear();
  background(40);
  for (let p of particles) {
    p.behaviors();
    p.update();
    p.show();
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(random(width), random(height));
    this.target = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.r = 2.5;
    this.maxSpeed = 10;
    this.maxForce = 1;
  }

  behaviors() {
    let arrive = this.arrive(this.target);
    let mouse = createVector(mouseX, mouseY);
    let flee = this.flee(mouse);

    arrive.mult(1);
    flee.mult(5);

    this.applyForce(arrive);
    this.applyForce(flee);
  }

  applyForce(f) {
    this.acc.add(f);
  }

  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
  }

  show() {
    stroke(255);
    strokeWeight(this.r);
    point(this.pos.x, this.pos.y);
  }

  arrive(target) {
    let desired = p5.Vector.sub(target, this.pos);
    let d = desired.mag();
    let speed = this.maxSpeed;
    if (d < 100) {
      speed = map(d, 0, 100, 0, this.maxSpeed);
    }
    desired.setMag(speed);
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);
    return steer;
  }

  flee(target) {
    let desired = p5.Vector.sub(target, this.pos);
    let d = desired.mag();
    if (d < 50) {
      desired.setMag(this.maxSpeed);
      desired.mult(-1);
      let steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxForce);
      return steer;
    } else {
      return createVector(0, 0);
    }
  }
}