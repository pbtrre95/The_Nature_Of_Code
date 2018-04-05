# Spiral

We start our spiral off at the center of the canvas. The length of our radius begins at one and our angle starts at zero.

``` js
var r = 1;
var theta = 0;
```

We draw our ellipse at the center of the canvas getting our x and y coordinates from the Cartesian conversions. Our angle increments by 0.1 each frame as does the radius by 0.3. The angle will go from 0 - 360 and then start atcount 360 - 720 and so on but will begin the circle again. The radius enlarging pushes the spiral out each frame.

``` js
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