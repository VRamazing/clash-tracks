const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;
const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;
const SPACE_BAR = 32;
const KEY_O = 79;
const KEY_R = 82;
const KEY_L = 76;
const KEY_U = 85;
const KEY_I = 73;
const KEY_P = 80;
const KEY_H = 72;
const KEY_C = 67;
const KEY_M = 77;
const KEY_SHIFT = 16;
const KEY_ENTER = 13;
const KEY_0 = 48;
const KEY_1 = 49;
const KEY_2 = 50;
const KEY_3 = 51;
const KEY_4 = 52;
const KEY_5 = 53;


var mouseX = 0;
var mouseY = 0;

function setupInput() {
	// canvas.addEventListener('mousemove', updateMousePos);
	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);
}

// function updateMousePos(evt) {
// 	var rect = canvas.getBoundingClientRect();
// 	var root = document.documentElement;

// 	mouseX = evt.clientX - rect.left - root.scrollLeft;
// 	mouseY = evt.clientY - rect.top - root.scrollTop;

// 	// cheat / hack to test car in any position
// 	/*carX = mouseX;
// 	carY = mouseY;
// 	carSpeedX = 4;
// 	carSpeedY = -4;*/
// }

function keySet(evt, setTo)
{
	switch(evt.keyCode){
		case KEY_UP_ARROW:
		case KEY_W:
			playerCar.keyHeld_Gas = setTo;
      evt.preventDefault();
			break;
		case KEY_DOWN_ARROW:
		case KEY_S:
			if(isPlaying){
				playerCar.keyHeld_Reverse = setTo;
				evt.preventDefault();
			}
			else{
				if(menuState.isPlayMenuDiv){
					menuLevel(0);
				}
			}
			break;
		case KEY_LEFT_ARROW:
		case KEY_A:
			playerCar.keyHeld_TurnLeft = setTo;
      evt.preventDefault();
			break;
		case KEY_RIGHT_ARROW:
		case KEY_D:
			playerCar.keyHeld_TurnRight = setTo;
      evt.preventDefault();
			break;
		// case SPACE_BAR:
		// 	playerCar.keyHeld_Shooting = setTo;
    //   evt.preventDefault();
			break;
		case KEY_SHIFT:
			playerCar.keyHeld_Nos = setTo;
      evt.preventDefault();
			break;
	}
}

function keyPressed(evt) {
	// console.log(evt.keyCode);
	if (isPlaying) {
		keySet(evt, true);
  }
	switch(evt.keyCode){
		case KEY_R:
			if (isPlaying) {
				resetCheckPoint();
      }
      evt.preventDefault();
      break;
		case KEY_L:
			if (isPlaying) {
				playerCar.autoShoot = !playerCar.autoShoot;
      }
			else{
				if(menuState.isMenuDiv){
					console.log('going to leaderboards');
				}
			}
      evt.preventDefault();
			break;
		case KEY_I:
			if (debug && isPlaying) {
				playerCar.isInvincible = !playerCar.isInvincible;
        evt.preventDefault();
      }
			break;
		case KEY_U:
			toggleScreenShake();
      evt.preventDefault();
			break;
		case KEY_ENTER:
			if (isPlaying) {
				loadNextLevel();
      }
      evt.preventDefault();
			break;
		case SPACE_BAR:
			if (startTimeout) {
        skipStory();
			}
      evt.preventDefault();
			break;
		case KEY_P:
			if(isPlaying){
				//Puase screen function
			}
			else{
				if(menuState.isMenuDiv){
					menuPlay();
				}
			}
			break;
		case KEY_H:
			if(isPlaying){
				//Puase screen function
			}
			else{
				if(menuState.isMenuDiv){
					menuHelp();
				}
				if(menuState.isPlayMenuDiv){
					highScoreModePlay();
				}
			}
			break;
		case KEY_O:
			if(isPlaying){
				debug = !debug;
				evt.preventDefault();
			}
			else{
				if(menuState.isMenuDiv){
					menuOptions();
				}
			}
			break;
		case KEY_C:
			if(isPlaying){
			}
			else{
				if(menuState.isMenuDiv){
					menuCredits();
				}
			}
			break;
		case KEY_S:
			if(isPlaying){
			}
			else{
				if(menuState.isPlayMenuDiv){
					menuLevel(0)
				}
			}
			break;
		case KEY_0:
			if(isPlaying){
			}
			else{
				if(menuState.isLevelDiv){
					menuLevel(0)
				}
			}
			break;
		case KEY_1:
			if(isPlaying){
			}
			else{
				if(menuState.isLevelDiv){
					menuLevel(1)
				}
			}
			break;
		case KEY_2:
			if(isPlaying){
			}
			else{
				if(menuState.isLevelDiv){
					menuLevel(2)
				}
			}
			break;
		case KEY_3:
			if(isPlaying){
			}
			else{
				if(menuState.isLevelDiv){
					menuLevel(3)
				}
			}
			break;
		case KEY_4:
			if(isPlaying){
			}
			else{
				if(menuState.isLevelDiv){
					menuLevel(4)
				}
			}
			break;
		case KEY_5:
			if(isPlaying){
			}
			else{
				if(menuState.isLevelDiv){
					menuLevel(5)
				}
			}
			break;
		case KEY_M:
			if(isPlaying){
			}
			else{
					mainMenu();
			}
			break;
	}
}

function keyReleased(evt) {
	if (isPlaying) {
		keySet(evt, false);
  }
}
