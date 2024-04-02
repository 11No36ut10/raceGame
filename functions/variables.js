/* ********************************************* */
/* global variables                              */
/* ********************************************* */

// game status
const PLAY = 1;
const GAMEOVER = 2;
const MENU = 3;
const TUTORIAL = 4;
const TUTORIALMAP = 5;
var gameStatus = MENU;
var mapStatus = PLAY;
var testing = false;

//players
var startMax = 10;
var maxvelocity = startMax;
var grassSpeed = 5;
var wallSpeed = 1;
var velocityIncreas = 0.1;
    //player 1
    var player1X = 255;
    var player1Y = 500;
    var velocity1 = 0;
    var rotationP1 = 0;
    var directionP1 = 0;

    //player 2
    var player2X = 0;
    var player2Y = 0;
    var velocity2 = 0;
    var rotationP2 = 0;
    var directionP2 = 0;

// timers
var timer = 5;
var racing = false;
var wait = 0;

// menu variables
var imgCountdownSquare;
var imgStartMenu1;
var imgStartMenuButton;
var imgStartMenuButtonLine;
var imgArrowUp;
var imgArrowDown;
var imgArrowLeft;
var imgArrowRight;
let stringMenu = 'Welcome . . .';
let currentCharacter = 0;
var placeButtons = false;

// tutorial variables
let stringTutorial = [
  'When playing singleplayer, the goal is to beat your highscore!', 
  'If you are playing 1v1 you must beat your opponent!',
  'To go forward press [W] or [  ]',
  'To go backwards or brake press [S] or [  ]',
  'Stear left by pressing [A] or [   ],',
  'and to go right, press [D] or [   ]',
  'If you are playing 1v1, one player uses [WASD]',
  'and the other the arrow keys.',
  'Good luck and have fun!'];
let currentCharacterTut = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let typingSpeed = 0.5;
let currentLine = 1;

// racetrack map 1
var imgRaceTrackGrass;
var imgRaceTrackFinishUp;
var imgRaceTrackFinishDown;
var imgRaceTrackFinishLeft;
var imgRaceTrackFinishRight;
var imgRaceTrackDown;
var imgRaceTrackUp;
var imgRaceTrackRight;
var imgRaceTrackLeft;
var imgRaceTrackCorner1;
var imgRaceTrackCorner2;
var imgRaceTrackCorner3;
var imgRaceTrackCorner4;
var imgRaceTrackCorner5;
var imgRaceTrackCorner6;
var imgRaceTrackCorner7;
var imgRaceTrackCorner8;
var map1 = [];

//race cars
var imgRaceCarGreenWhite;