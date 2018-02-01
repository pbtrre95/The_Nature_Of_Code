var x = 320;
var y = 180;
var xspeed = 2;
var yspeed = 2.5;

function setup () {
	createCanvas(640, 360);
}

function draw() {
  background(51);
 	
  // Add the current speed to the position
  x = x + xspeed;
  y = y + yspeed;
 
  // If the ball hits the walls, it turns around
  if ((x > width) || (x < 0)) {
    xspeed = xspeed * -1;
  }
  if ((y > height) || (y < 0)) {
    yspeed = yspeed * -1;
  }
 
  // Display the circle at x  and y position
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(x, y, 48, 48);
}