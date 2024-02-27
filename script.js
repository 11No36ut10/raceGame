
/*
 * Settings to make your code better
 */
///<reference path="p5.global-mode.d.ts" />
"use strict"

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

//players
var maxvelocity = 5;
var velocityIncreas = 0.1;
    //player 1
    var player1X = 255;
    var player1Y = 500;
    var velocity1 = 0;
    var rotationP1 = 0;

    //player 2
    var player2X = 0;
    var player2Y = 0;
    var velocity2 = 0;
    var rotationP2 = 0;

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

/* ********************************************* */
/* Game functions                                */
/* ********************************************* */

/*
 * Testing for x and y
 */

var mouseXY = function() {
  if(keyIsDown(88)) {
    let x = round(mouseX, 0);
    let y = round(mouseY, 0);
    let xPos = round(mouseX, 0);
    let yPos = round(mouseY, 0);
    if(xPos > 1164) {
      xPos = x - 200;
    }else{
      xPos = x;
    }
    if(yPos < 50) {
      yPos = y + 60;
    }

    if(x > 1344) {
      x = 1344;
    }
    if(x < 0) {
      x = 0;
    }
    if(y > 960) {
      y = 960;
    }

    text(x + ', ' + y, xPos+20, yPos - 20);
    stroke('white');
    strokeWeight(5);
    point(x, y);
    strokeWeight(0);
  }
}

/*
 * Starting Menu Screen
 */
var startMenu = function() {
  let currentString = stringMenu.substring(0, currentCharacter);

  // typing animation 'welcome . . .'
  image(imgStartMenu1, 0, 0, 1344, 960);
  text(currentString, 572, 380);
  if (currentCharacter < 14) {
    currentCharacter += 0.07;
  }else{
    placeButtons = true;
    currentCharacter -= 7;
  }
  //

  // play, and tutorial button
  if (placeButtons === true) {
    let heightPlayButton = 455;
    let heightTutorialButton = 620;

    if (mouseX > 472 && mouseX < 872) {
      if (mouseY > 455 && mouseY < 555) {
        heightPlayButton = 450;
        if (mouseIsPressed) {
          heightPlayButton = 455;
        }else{
          heightPlayButton = 450;
        }
      }else{
        heightPlayButton = 455;
      }
      if (mouseY > 620 && mouseY < 720) {
        heightTutorialButton = 615;
        if (mouseIsPressed) {
          heightTutorialButton = 620;
          
          gameStatus = TUTORIAL;
        }else{
          heightTutorialButton = 615;
        }
      }else{
        heightTutorialButton = 620;
      }
    }

    image(imgStartMenuButtonLine, 472, 540, 400, 15);
    image(imgStartMenuButton, 472, heightPlayButton, 400, 100);
    text('Play', 635, heightPlayButton+60);

    image(imgStartMenuButtonLine, 472, 705, 400, 15);
    image(imgStartMenuButton, 472, heightTutorialButton, 400, 100);
    text('Tutorial', 605, heightTutorialButton+60);
    //
  }
}

/*
 * Tutorial screen
 */
var tutorial = function() {
  let buttonheight = 850;
  if (mouseX > 1000 && mouseX < 1256 && mouseY > 850 && mouseY < 914) {
    if (mouseIsPressed) {
      buttonheight = 850;
      if(currentLine < 10) {
        typingSpeed = 7;
      }else{
        
        if(wait < 4) {
          wait++;
        }else{
          wait = 0;
          gameStatus = PLAY;
          mapStatus = TUTORIALMAP;
        }
        
      }
    }else{
      buttonheight = 845;
    }
  }else{
    buttonheight = 850;
  }
  
  image(imgStartMenuButtonLine, 1000, 903);
  image(imgStartMenuButton, 1000, buttonheight);


  if (currentLine < 10) {
    text('Skip >', 1090, buttonheight + 45);
  }else{
    text('Continue >', 1040, buttonheight + 45);
  }

  let currentString1 = stringTutorial[0].substring(0, currentCharacterTut[0]);

  text(currentString1, 100, 100);
  if (currentCharacterTut[0] < stringTutorial[0].length) {
    currentCharacterTut[0] += typingSpeed;
  }else{
    currentLine = 2;
  }
  

  if (currentLine >= 2) {
    let currentString2 = stringTutorial[1].substring(0, currentCharacterTut[1]);

    text(currentString2, 100, 150);
    if (currentCharacterTut[1] < stringTutorial[1].length) {
      currentCharacterTut[1] += typingSpeed;
    }else{
      currentLine = 3;
    }
  }

  if (currentLine >= 3) {
    let currentString3 = stringTutorial[2].substring(0, currentCharacterTut[2]);

    text(currentString3, 100, 250);
    if (currentCharacterTut[2] < stringTutorial[2].length) {
      currentCharacterTut[2] += typingSpeed;
    }else{
      currentLine = 4;
    }
    if (currentCharacterTut[2] > 29) {
      image(imgArrowUp, 587, 223, 32, 32);
    }
  }

  if (currentLine >= 4) {
    let currentString4 = stringTutorial[3].substring(0, currentCharacterTut[3]);

    text(currentString4, 100, 300);
    if (currentCharacterTut[3] < stringTutorial[3].length) {
      currentCharacterTut[3] += typingSpeed;
    }else{
      currentLine = 5;
    }
    if (currentCharacterTut[3] > 40) {
      image(imgArrowDown, 801, 273, 32, 32);
    }
  }

  if (currentLine >= 5) {
    let currentString5 = stringTutorial[4].substring(0, currentCharacterTut[4]);

    text(currentString5, 100, 350);
    if (currentCharacterTut[4] < stringTutorial[4].length) {
      currentCharacterTut[4] += typingSpeed;
    }else{
      currentLine = 6;
    }
    if (currentCharacterTut[4] > 32) {
      image(imgArrowLeft, 611, 323, 32, 32);
    }
  }

  if (currentLine >= 6) {
    let currentString6 = stringTutorial[5].substring(0, currentCharacterTut[5]);

    text(currentString6, 100, 400);
    if (currentCharacterTut[5] < stringTutorial[5].length) {
      currentCharacterTut[5] += typingSpeed;
    }else{
      currentLine = 7;
    }
    if (currentCharacterTut[5] > 32) {
      image(imgArrowRight, 597, 373, 32, 32);
    }
  }

  if (currentLine >= 7) {
    let currentString7 = stringTutorial[6].substring(0, currentCharacterTut[6]);

    text(currentString7, 100, 500);
    if (currentCharacterTut[6] < stringTutorial[6].length) {
      currentCharacterTut[6] += typingSpeed;
    }else{
      currentLine = 8;
    }
  }

  if (currentLine >= 8) {
    let currentString8 = stringTutorial[7].substring(0, currentCharacterTut[7]);

    text(currentString8, 100, 550);
    if (currentCharacterTut[7] < stringTutorial[7].length) {
      currentCharacterTut[7] += typingSpeed;
    }else{
      currentLine = 9;
    }
  }
  
  if (currentLine >= 9) {
    let currentString9 = stringTutorial[8].substring(0, currentCharacterTut[8]);

    text(currentString9, 100, 700);
    if (currentCharacterTut[8] < stringTutorial[8].length) {
      currentCharacterTut[8] += typingSpeed;
    }else{
      currentLine = 10;
    }
  }
}
  

var beweegAlles = function() {
  if(racing === true) {
    if(keyIsDown(87)){
      if(velocity1 < maxvelocity) {
        velocity1 += velocityIncreas*2;
      }
    }
    if(velocity1 > 0) {
      velocity1 -= velocityIncreas;
    }
    
    
    player1Y -= velocity1;
  }

  
}

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function() {
  // botsing speler tegen vijand
  

  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  //map1 Tutorial + player1

  if(mapStatus === TUTORIALMAP) {
    

    //make the map
    for(let i = 0; i < map1.length; i++) {
      for(let t = 0; t < map1[i].length; t++){
        image(map1[i][t], 192*t, 192*i, 192, 192);
      }
    }

    if (racing === false) {
      racingTimer();
    }

    if (racing === true) {
      push();
      translate(player1X, player1Y);
      rotate(rotationP1);
      image(imgRaceCarGreenWhite, -28, -36, 52, 88);
      pop();
      text(mouseX, mouseX, mouseY);
    }else{
      image(imgRaceCarGreenWhite, player1X-28, player1Y-36, 52, 88);
    }
  
    
    
  }
}

var racingTimer = function() {
  if(timer > 0) {
    image(imgCountdownSquare, 642-48, 70, 96, 96);
    textSize(60);
    var x = 625;
    if (timer === 3) {
      x = 629;
    }
    if (timer === 2) {
      x = 629;
    }
    if (timer === 1) {
      x = 633;
    }
    text(timer, x, 140);
    if( frameCount % 60 == 0) {
      timer--;
    }
  }else{
    textSize(36)
    timer = 5;
    racing = true;
  }
}

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

function preload() {

  //start menu images
  imgStartMenu1 = loadImage('images/menu/backgroundMenu.png');
  imgStartMenuButton = loadImage('images/menu/MenuButton.png');
  imgStartMenuButtonLine = loadImage('images/menu/MenuButtonLine.png');
  imgArrowUp = loadImage('images/menu/arrowUp.png');
  imgArrowDown = loadImage('images/menu/arrowDown.png');
  imgArrowLeft = loadImage('images/menu/arrowLeft.png');
  imgArrowRight = loadImage('images/menu/arrowRight.png');

  imgCountdownSquare = loadImage('images/menu/countdownSquare.png');

  //racetrack map 1
  imgRaceTrackGrass = loadImage('images/racetrack/raceTrackGrass.png');
  imgRaceTrackFinishUp = loadImage('images/racetrack/raceTrackFinishUp.png');
  imgRaceTrackDown = loadImage('images/racetrack/raceTrackDown.png');
  imgRaceTrackUp = loadImage('images/racetrack/raceTrackUp.png');
  imgRaceTrackLeft = loadImage('images/racetrack/raceTrackLeft.png');
  imgRaceTrackRight = loadImage('images/racetrack/raceTrackRight.png');
  imgRaceTrackCorner1 = loadImage('images/racetrack/raceTrackCorner1.png');
  imgRaceTrackCorner2 = loadImage('images/racetrack/raceTrackCorner2.png');
  imgRaceTrackCorner3 = loadImage('images/racetrack/raceTrackCorner3.png');
  imgRaceTrackCorner4 = loadImage('images/racetrack/raceTrackCorner4.png');
  imgRaceTrackCorner5 = loadImage('images/racetrack/raceTrackCorner5.png');
  imgRaceTrackCorner6 = loadImage('images/racetrack/raceTrackCorner6.png');
  imgRaceTrackCorner7 = loadImage('images/racetrack/raceTrackCorner7.png');
  imgRaceTrackCorner8 = loadImage('images/racetrack/raceTrackCorner8.png');

  //race cars
  imgRaceCarGreenWhite = loadImage('images/raceCars/raceCarGreenWhite.png');
}
/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() { 
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  map1[0] = [imgRaceTrackGrass, imgRaceTrackGrass, imgRaceTrackGrass, imgRaceTrackGrass, imgRaceTrackGrass, imgRaceTrackGrass, imgRaceTrackGrass];
  map1[1] = [imgRaceTrackGrass, imgRaceTrackCorner1, imgRaceTrackRight, imgRaceTrackRight, imgRaceTrackRight, imgRaceTrackCorner2, imgRaceTrackGrass];
  map1[2] = [imgRaceTrackGrass, imgRaceTrackFinishUp, imgRaceTrackGrass, imgRaceTrackGrass, imgRaceTrackGrass, imgRaceTrackDown, imgRaceTrackGrass];
  map1[3] = [imgRaceTrackGrass, imgRaceTrackCorner4, imgRaceTrackLeft, imgRaceTrackLeft, imgRaceTrackLeft, imgRaceTrackCorner3, imgRaceTrackGrass];
  map1[4] = [imgRaceTrackGrass, imgRaceTrackGrass, imgRaceTrackGrass, imgRaceTrackGrass, imgRaceTrackGrass, imgRaceTrackGrass, imgRaceTrackGrass];

  angleMode(DEGREES);

  loadFont('Minecraft.ttf', pixelFont => {
    fill('white');
    textFont(pixelFont);
    textSize(36);
  })

  createCanvas(1344, 960);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background(220);
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  background(220);
  image(imgStartMenu1, 0, 0, 1536, 960);
  if (gameStatus === MENU) {
    startMenu();
  }

  if (gameStatus === TUTORIAL) {
    tutorial();
  }

  if (gameStatus === PLAY) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
  }
  if (gameStatus === GAMEOVER) {
    // teken game-over scherm
  }

  mouseXY();
}