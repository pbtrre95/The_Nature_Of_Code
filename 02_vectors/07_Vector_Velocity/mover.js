
function Mover () {
  this.position = createVector(Math.floor(random(0, width)), Math.floor(random(0, height)));
  this.velocity = createVector(0.0000001, 0.000005);
  this.acceleration = p5.Vector.random2D();
  this.acceleration.mult(5);

  this.render = function () {
    ellipse(this.position.x, this.position.y, 1, 1);
    // fill(random(0, 100), random(0, 100), random(0, 100));
    
    // rect(this.position.x-10, this.position.y+20, 20, 10);
    fill(random(250, 255), random(250, 255), random(250, 255));
    noStroke();
  }

  this.update = function () {
    this.velocity.add(this.acceleration); 
    this.velocity.limit(0.25);  
    this.position.add(this.velocity);
    
    this.mouse = createVector(mouseX, mouseY);
    
    this.acceleration = p5.Vector.sub(this.mouse, this.position);
    this.acceleration.normalize();
  }

  this.checkLimits = function () {
    if (this.position.x > width || this.position.x < 0) {
      this.velocity.x = this.velocity.x * -1;
    }
    if (this.position.y > height || this.position.y < 0) {
      this.velocity.y = this.velocity.y * -1;
    }
  }
}