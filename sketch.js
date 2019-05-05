//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
	button = createButton('Refresh');
	button.position(410, 450);
	button.mousePressed(onTryAgaineClick);
}


var GAME_OVER = false;
var WIN = false;
var diam = 30;
var position = [250, 25];
var x = (Math.random() * 420);
var y = (Math.random() * 420);
var millisec = 0;
var sec = 0;

function draw() {

	if (!GAME_OVER) background('#333');

	if (!GAME_OVER) timer();

	if (ifWin()) {
		GAME_OVER = true;
		WIN = true;
	}

	if (GAME_OVER) {
		gameOver();
		strokeWeight(8);
		stroke('lightpink');
		line(x, y, x, y + 80);
		line(x, y, x + 80, y);
		line(x + 80, y, x + 80, y + 80);

		strokeWeight(0);
		fill('green');
		ellipse(position[0], position[1], 50);
		line(50, 300, 50, 400);
	} else {
		strokeWeight(8);
		stroke('white');
		line(x, y, x, y + 80);
		line(x, y, x + 80, y);
		line(x + 80, y, x + 80, y + 80);

		strokeWeight(0);
		fill('lightblue');
		ellipse(position[0], position[1], 50);
		line(50, 300, 50, 400);
		keyDir();
	}
}

function ifWin() {
	return position[0] >= x + 30 && position[0] <= x + 55 && position[1] >= y + 30 && position[1] <= y + 50
}

function gameOver() {
	if (WIN) {
		background('#333');
		background('rgba(255,255,255,.5)')
		textSize(32);
		fill('yellow');
		textAlign(CENTER, TOP);
		text('You win', 0, 150, width);
		text(`Your timer is: ${sec < 10 ? '0' : ''}${sec}:${millisec < 10 ? '0' : ''}${millisec}`, 0, 180, width);
	} else {
		background('#333');
		background('rgba(255,255,255,.5)')
		fill('red');
		textSize(32);
		textAlign(CENTER, TOP);
		text('Time is up', 0, 150, width);
		text('You lose', 0, 180, width);
	}
}

function onTryAgaineClick() {
	clear();
	GAME_OVER = false;
	WIN = false;
	diam = 30;
	position = [250, 25];
	x = (Math.random() * 420);
	y = (Math.random() * 420);
	millisec = 0;
 	sec = 0;
}

function timer() {
	textSize(24);
	textAlign(CENTER);
	fill('lightblue');
	millisec++;
	if ( millisec == 60 ) {
		millisec = 0;
		sec++;
	}
	if (sec == 8) {
		GAME_OVER = true;
		WIN = false;
	}
	text(`${sec < 10 ? '0' : ''}${sec}:${millisec < 10 ? '0' : ''}${millisec}`, 50, 40);
}
function keyDir() {
	if (GAME_OVER) return;
	if (keyIsDown(RIGHT_ARROW)) {
		position[0] += 5;
	} else if (keyIsDown(LEFT_ARROW)) {
		position[0] -= 5;
	} else if (keyIsDown(DOWN_ARROW)) {
		position[1] += 5;
	} else if (keyIsDown(UP_ARROW)) {
		position[1] -= 5;
	}
}

function randomBlock() {
	strokeWeight(5);
	line(x, y, x+40, y+40);
}
