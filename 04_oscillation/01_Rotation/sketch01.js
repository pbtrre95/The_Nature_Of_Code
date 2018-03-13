var angle = 0;
var aVelocity = 0; 
var aAcceleration = 0.02;

function setup () {
  createCanvas(640, 480);
}

function draw () {
  background(220);

  stroke(0);
  fill(127);

  push();
    translate(width/2, height/2)
    rotate(angle);
    line(-60, 0, 60, 0);
    ellipse(60, 0, 16, 16);
    ellipse(-60, 0, 16, 16);
  pop();

  aVelocity = aVelocity + aAcceleration;
  aVelocity = constrain(aVelocity, 0, 0.1); 
  //0.1 is six degrees, six degrees is the max it can move in one frame 
  angle = angle + aVelocity;
}