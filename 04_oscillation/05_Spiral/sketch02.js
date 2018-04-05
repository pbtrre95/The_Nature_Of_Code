var r = 1;
var theta = 0;
 
function setup () {
  createCanvas(640,360);
  background(255);
}
 
function draw () {
  var x = r * cos(theta);
  var y = r * sin(theta);

  r += 0.3;
 
  noStroke();
  fill(0);
  ellipse(width/2+x, height/2+y, 16, 16);
 
  theta += 0.1;
}