var movers = [];
var numberOfMovers = 10;

function setup () {
  createCanvas(600, 600);
  for (var i=0; i < numberOfMovers; i++) {
    movers[i] = new Mover(random(10, 100));
  }
}

function draw() {
  background(125);

  for (var i = 0; i < numberOfMovers; i++) {
    this.wind = createVector(0, 0.1);
    this.gravity = createVector(0, 0.1 * movers[i].mass);

    var c = 0.5;
    var normal = 1;
    //var frictionMag = c * normal;
    //var friction = p5.Vector.mult(movers[i].velocity, -1);
    //friction.normalize();
    //friction.mult(frictionMag);


    //movers[i].applyForce(friction);
    movers[i].applyForce(wind);
    movers[i].applyForce(gravity);
    movers[i].checkEdges();
    movers[i].update();
    movers[i].display();
  }
}
