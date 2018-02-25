
// stub file - work in progress

var menuDiv = document.getElementById('Menu');
var helpDiv = document.getElementById('Help');
var creditsDiv = document.getElementById('Credits');
var optionsDiv = document.getElementById('Options');
var levelDiv = document.getElementById('Levels');
var playMenuDiv = document.getElementById('Play-Menu');
var leaderBoardDiv = document.getElementById('leaderBoardDiv')

function mainMenu() {
    console.log('Main menu...');
    menuDiv.style.display = 'block';
    helpDiv.style.display = 'none';
    creditsDiv.style.display = 'none';
    optionsDiv.style.display = 'none';
    levelDiv.style.display = 'none';
    playMenuDiv.style.display = 'none';

}

function menuPlay() {
    console.log('Main menu: PLAY');
    levelDiv.style.display = 'none';
    menuDiv.style.display = 'none';
    helpDiv.style.display = 'none';
    creditsDiv.style.display = 'none';
    optionsDiv.style.display = 'none';
    playMenuDiv.style.display = 'block'

}

// Over-rides default race against time and you instead set the best time for particular level.
function highScoreModePlay() {
    console.log('High Score mode: PLAY');
    levelDiv.style.display = 'block';
    menuDiv.style.display = 'none';
    helpDiv.style.display = 'none';
    creditsDiv.style.display = 'none';
    optionsDiv.style.display = 'none';
}

function menuLevel(num) {
    console.log('Main menu: PLAY LEVEL ' + num);
    levelDiv.style.display = 'none';
    menuDiv.style.display = 'none';
    helpDiv.style.display = 'none';
    creditsDiv.style.display = 'none';
    optionsDiv.style.display = 'none';
    playMenuDiv.style.display = 'none'
    window.level = num; // set the global
    fadeInIntroThenStartGame();
}

function menuLeaderboard(){
  levelDiv.style.display = 'none';
  menuDiv.style.display = 'none';
  helpDiv.style.display = 'none';
  creditsDiv.style.display = 'none';
  optionsDiv.style.display = 'none';
  playMenuDiv.style.display = 'none'
  menu
}

function menuHelp() {
    console.log('Main menu: HELP');
    levelDiv.style.display = 'none';
    menuDiv.style.display = 'none';
    helpDiv.style.display = 'block';
    creditsDiv.style.display = 'none';
    optionsDiv.style.display = 'none';
}

function menuCredits() {
    console.log('Main menu: CREDITS');
    levelDiv.style.display = 'none';
    menuDiv.style.display = 'none';
    helpDiv.style.display = 'none';
    creditsDiv.style.display = 'block';
    optionsDiv.style.display = 'none';
}

function menuOptions() {
    console.log('Main menu: OPTIONS');
    levelDiv.style.display = 'none';
    menuDiv.style.display = 'none';
    helpDiv.style.display = 'none';
    creditsDiv.style.display = 'none';
    optionsDiv.style.display = 'block';
}
