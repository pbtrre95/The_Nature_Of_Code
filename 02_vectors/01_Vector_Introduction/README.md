# What are Vectors?

Definition: An entity that has both magnitude and direction.
Typically drawn as an arrow, the direction is indicated by where the arrow is pointing and the magnitude by the length of the arrow itself. Drawn from point A to point B, serving as an instruction on how to travel from A to B. 

To demonstrate how vectors can be utilised in programming consider the following code. 

``` js

var x = 320;
var y = 180;
var xspeed = 2;
var yspeed = 2.5;
```

A simple programme of a bouncing ball will code as follows. The location of the ball is stored in the x and y variables, and the speed is stored in the xspeed and yspeed variables. However, what if we have a lot more variables which can change the direction and speed of the ball. Eg. x or y acceleration, x or y wind, x or y friction etc. We'll need two variables for every concept that may affect change. This is where vectors come into play. They are used to simplify the code and create fewer variables.


So instead of the previous code, we could have:
``` js

Vector location;
Vector speed;
```