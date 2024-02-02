let earth;
let moon;

function preload() {
  earth = loadImage('image/earth.jpg');
  moon = loadImage('image/moon.jpg');
}

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
    texture(earth);
    // rotateY(millis() / 3);
    sphere(20);

    // angleEarth += .45;
    {
      translate(x, 0, z);
      texture(moon);
      // ambientLight(60);
      // pointLight(255, 255, 255, 255, 255, 50);
      noStroke();
      rotateY(frameCount * -20);
      sphere(10);
      

      // angle += 5;
    }
  }
  pop();
  push();

  {
  pointLight(255, 255, 0, 0, 0, 200);
  ambientLight(100);


  stroke('black');
  fill("#f49e12");
  rotateY(frameCount * -0.5);
  
  sphere(42);
   
  }

  pop();
  push();

  if (yval) camera(0, 300, 100, 0, 0, 0, 0, -1, 0);
  if (xval) camera(0, 0, 400, 0, 0, 0, 0, -1, 0);

}