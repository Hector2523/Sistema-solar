let xval;
let yval;
let angle = 0;
let angleEarth = 0;

function setup() {
  createCanvas(900, 900, WEBGL);
  xval = 32;
  yval = 300;

}

function draw() {
  let x = cos(angle) * 40;
  let z = sin(angle) * 40;

  let earthX = cos(angleEarth) * 140;
  let earthZ = sin(angleEarth) * 140;
  angleMode(DEGREES);
  background("#142230");

  push();

  {
    translate(earthX, 0, earthZ);
    rotateY(millis() / -8);
    sphere(20);

    noStroke();

    angleEarth += .45;
    {
      translate(x, 0, z);
      ambientLight(60);
      pointLight(255, 255, 255, 255, 255, 50);
      noStroke();
      sphere(10);
      rotateY(millis() / 1);
      specularColor(255, 0, 0);
      shininess(50);
      

      angle += 5;
    }
  }
  pop();
  push();

  {
    sphere(42);
    rotateY(millis() / -10);
    noStroke();
    translate(0, 0, 0);
    box();
  }

  pop();
  push();

  if (yval) camera(0, 300, 100, 0, 0, 0, 0, -1, 0);
  if (xval) camera(0, 0, 400, 0, 0, 0, 0, -1, 0);

}

