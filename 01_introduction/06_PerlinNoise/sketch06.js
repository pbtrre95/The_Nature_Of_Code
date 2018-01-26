var walker;

function setup() {
	createCanvas(1200, 1000);
	walker = new Walker();
	background(127);
}

function draw() {
	fill(0, 15); //draws black rectangle with 15% opacity every frame, creating trail effect
	rect(0, 0, width, height);
	walker.step();
	walker.render();
}

function Walker() {
	this.x = width/2; //starts in middle of canvas
	this.xOff = random(1000); //random number between 0 and 1000, represents time
	//calling the noise function returns a value between 0 and 1

	this.render = function() { //no stroke pen with a 50% opacity
		noStroke();
		fill(255, 45, 0, 50);
		ellipse(this.x, 500, 40, 40);
	}

	this.step = function() {
		this.x = map(noise(this.xOff), 0, 1, 0, width); //noise value for current moment in time (xOff)
		//maps it to between 0 and the width
		this.xOff += 0.005; //increment time xOff
	}
}