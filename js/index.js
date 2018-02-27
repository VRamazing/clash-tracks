

// const TIME_TO_FINISH_LVL_1 = 2 * 60 * framesPerSecond; // 2 minutes
// const TIME_TO_FINISH_LVL_1 = 1 * 50 * framesPerSecond;

var canvas, canvasContext;
var debug = false;
var gameHasStarted = false;
var isPlaying = false;
var gameLoop = false;
var playerCar = new carClass();
//Used for testing bullet Collisions. Includes all cars.
var carList = [playerCar];
var enemyShip = new shipOverheadClass();
var timeToFinishLevel;
var level;
var playerLives = 3;
var backgroundMusicArray;
var powerupText = "";
// var numOfEnemiesCars = 0;
var musicIndex = 0;

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	canvas.width = 700;
	canvas.height = 525;
	canvasContext.font = "04b30";
	colorRect(0,0, canvas.width,canvas.height, 'black');
	colorText("LOADING IMAGES", canvas.width/2, canvas.height/2, 'white');
	level = 0;
	playerLives = 3;
	loadImages();
	setupInput();
	mainMenu();
	menuMusic.loopSong();
	backgroundMusicArray = [trancyMusic, draftMonkMusic, varyzeMusic];
	window.addEventListener('blur', pauseGame);
	window.addEventListener('focus', continueGame);
};

// used to be called imageLoadingDoneSoStart but now we run the main menu first
function startGame() {
  	gameHasStarted = true;
	loadLevel(level);
	isPlaying = true;
    gameLoop = setInterval(updateAll, msPerFrame);
}

function pauseGame() {
	if (isPlaying && gameLoop) {
    console.log('Pause game');
    isPlaying = false;
    clearInterval(gameLoop);
    gameLoop = false;
    colorText('Game paused!', canvas.width / 2, canvas.height / 2, 'white', 'center', "40px '04b30'");
    currentBackgroundMusic.pauseSound();
    menuMusic.loopSong();
  }
}

function slowSpeedGame(){
	if(isPlaying && gameLoop){
		console.log('slowing game - game feel ;)');
		clearInterval(gameLoop);
		framesPerSecond = 15;
		msPerFrame = 1000 / framesPerSecond;
		gameLoop = setInterval(updateAll, msPerFrame);
	}
}

function normalSpeedGame(){
	if(isPlaying && gameLoop){
		console.log('slowing game - game feel ;)');
		clearInterval(gameLoop);
		framesPerSecond = DEFAULT_FRAME_PER_SEC;
		msPerFrame = 1000 / framesPerSecond;
		gameLoop = setInterval(updateAll, msPerFrame);
	}
}


function continueGame() {
	if (gameHasStarted && !gameLoop) {
    console.log('Continue game');
    isPlaying = true;
    gameLoop = setInterval(updateAll, msPerFrame);
    menuMusic.pauseSound();
    currentBackgroundMusic.startOrStopMusic();
  }
}

function togglePause() {
	if (isPlaying) {
		pauseGame();
	}
	else {
		continueGame();
	}
}

function introDone() {
	console.log('Intro complete. Starting game!');
	startGame();
}

function loadLevel(whichLevel) {
	//clearing previously saved objects and data
	menuMusic.startOrStopMusic();
	levelDataReset();
	playerLives = 3;
	//loading level data to current level
	levelData = levels[whichLevel];
	trackGrid = levelData.trackLayout.slice();
	trackGridCopy = trackGrid.slice();
	track_cols = levelData.cols;
	track_rows = levelData.rows;
	timeToFinishLevel = levelData.timeLimit;
	numOfEnemiesCars = levelData.enemyCars;
	carsReset();
	console.log(gameHasStarted);
	// console.log(currentBackgroundMusic);
	// if(currentBackgroundMusic != undefined)
	// 		currentBackgroundMusic.pauseSound();
	// backgroundMusicArray[musicIndex].pauseSound();
	musicIndex = Math.floor(Math.random()*backgroundMusicArray.length);
	currentBackgroundMusic = backgroundMusicArray[musicIndex];
	currentBackgroundMusic.loopSong();

}

function resetLevel() {
    loadLevel(level);
}

function levelDataReset(){
	enemyCars = [];
	while(carList.length > 1){
		carList.pop();
	}
	bullets = [];
	particles.clear();
	ai_distance = 250;
}

function resetCheckPoint() {
	levelDataReset();
	levelData = levels[level];
	trackGrid = trackGridCopy.slice();
	track_cols = levelData.cols;
	track_rows = levelData.rows;
	numOfEnemiesCars = levelData.enemyCars;
	carsReset();
}

function carsReset(){
	playerCar.reset(playerCarPic, "Player");
	for(var i = 0; i < numOfEnemiesCars; i++){
		var enemyCar = new carClass();
		enemyCar.reset(enemyCarPic, "Enemy");
		enemyCars.push(enemyCar);
		carList.push(enemyCar);
	}
	enemyShip.reset();
}


function updateLevelCounter() {
    timeToFinishLevel--;
}

var delayedCallbacks = [];

function addDelayedCall(callback, timeout) {
	delayedCallbacks.push({
		callback: callback,
		timeout: timeout
	});
}

function updateAll() {
    if (timeToFinishLevel > 0) {
        updateLevelCounter();
	} else {
    	resetLevel();
	}
	moveAll();
	drawAll();
	particles.update();
	updateScreenshake();

	for (var i = delayedCallbacks.length - 1; 0 <= i; i--) {
		if (delayedCallbacks[i].timeout < 0) {
	      delayedCallbacks[i].callback();
	      delayedCallbacks.splice(i, 1);
		}
		else {
      	  delayedCallbacks[i].timeout -= msPerFrame;
		}
	}
}

function moveAll() {
	playerCar.move();
	enemyShip.move();
	// enemyCar.move();
	// enemyCar2.move();
	for(var i = 0; i < enemyCars.length; i++){
		enemyCars[i].move();
	}

	updateBullets();
	cameraFollow();
}

function drawAll() {
	canvasContext.save(); // needed to undo this .translate() used for scroll
    // this next line is like subtracting camPanX and camPanY from every
    // canvasContext draw operation up until we call canvasContext.restore
    // this way we can just draw them at their "actual" position coordinates
  canvasContext.translate(-camPanX,-camPanY);
	drawTracks();
	playerCar.drawShadow(playerCar.shadowColor);
	//To draw shadow underneath particles
	for(var i = 0; i < enemyCars.length; i++){
		enemyCars[i].drawShadow(enemyCars[i].shadowColor)
	}
	particles.draw();

	playerCar.draw();
	for(i = 0; i < enemyCars.length; i++){
		if(!enemyCars[i].remove){
			enemyCars[i].draw();
		}
	}
	// for(i = 0; i < enemyCars.length; i++){
	// 	if(enemyCars[i].remove){
	// 		enemyCars.slice(i,1);
	// 	}
	// }
	drawBullets();

	enemyShip.draw();
	// anyWallsBetweenTwoPoints(playerCar.x, playerCar.y, enemyCar.x, enemyCar.y);
	canvasContext.restore(); // undoes the .translate() used for cam scroll
	colorText("TIME: " , 30, 30, 'white');
	colorText(Math.ceil(timeToFinishLevel / framesPerSecond), canvasContext.measureText("TIME: ").width + 20, 30, 'cyan');
	if(powerupText != ""){
		colorText(powerupText,30, 60, '#acacac');
	}
	colorText("HP: " , canvas.width  - canvasContext.measureText(playerCar.health).width- 30, 60, 'white', 'right');
	colorText(playerCar.health, canvas.width - 30, 60, 'cyan', 'right');
  	colorText("LIVES: ", canvas.width - canvasContext.measureText(playerLives).width - 30, 30, 'white', 'right');
	colorText( playerLives,canvas.width - 30,30,'cyan','right' )

}
