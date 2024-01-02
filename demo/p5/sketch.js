let xval;
let yval;
let angle = 0;
let angleEarth = 0;

function setup() {
  createCanvas( 2000, 1000, WEBGL);
  xval = 32;
  yval = 300;

  pointLight(255, 255, 255, 0, 0, 0);

  specularMaterial(250);

}

function draw() {
  let x = cos(angle) * 180;
  let z = sin(angle) * 75;

  let earthX = cos(angleEarth) * 140;
  let earthZ = sin(angleEarth) * 140;
  angleMode(DEGREES);
  background("#142230");

  push();

  {
    translate((earthX + 0), 0, (earthZ + 0));
    sphere(20);
    noStroke();
    rotateY(frameCount * 0.01);
    angleEarth += 1.8;
  }
  pop();
  push();
  {
    translate(x, 0, z);
    specularMaterial(100);
    noStroke();
    sphere(10);
    angle += 1.8;
  }
  pop();
  push();

  {
    translate(0, 0, 0);
    sphere(42);
    noStroke();
  }

  pop();
  push();

  if (yval) camera(0, 300, 100, 0, 0, 0, 0, -1, 0);
  if (xval) camera(0, 0, 400, 0, 0, 0, 0, -1, 0);

}

