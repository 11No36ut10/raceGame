
/*
 * Settings to make your code better
 */
///<reference path="p5.global-mode.d.ts" />
"use strict"



/* ********************************************* */
/* Game functions                                */
/* ********************************************* */

  

var beweegAlles = function() {
  if(racing === true) {
    if(keyIsDown(87) || keyIsDown(38)){
      if(directionP1 === -1){
        if(velocity1 < maxvelocity) {
          velocity1 += velocityIncreas*2;
        }
      }else if(directionP1 === 1) {
        if(velocity1 > 0) {
          velocity1 -= velocityIncreas;
        }else{
          directionP1 = -1;
        }
      }else{
        directionP1 = -1;
      }
    }
    if(keyIsDown(83) || keyIsDown(40)){
      if(directionP1 === 1){
        if(velocity1 < maxvelocity) {
          velocity1 += velocityIncreas*2;
        }
      }else if(directionP1 === -1) {
        if(velocity1 > 0) {
          velocity1 -= velocityIncreas;
        }else{
          directionP1 = 1;
        }
      }else{
        directionP1 = 1;
      }
    }

    if(keyIsDown(68) || keyIsDown(39)) {
      if(velocity1 > 0) {
        if(directionP1 === -1) {
          rotationP1 += 1.75-0.75*(velocity1/maxvelocity);
        }
      }
    }
    if(keyIsDown(65) || keyIsDown(37)) {
      if(velocity1 > 0) {
        if(directionP1 === -1) {
          rotationP1 -= 1.75-0.75*(velocity1/maxvelocity);
        }
      }
    }
    if(keyIsDown(68) || keyIsDown(39)) {
      if(velocity1 > 0) {
        if(directionP1 === 1) {
          rotationP1 -= 1.75-0.75*(velocity1/maxvelocity);
        }
      }
    }
    if(keyIsDown(65) || keyIsDown(37)) {
      if(velocity1 > 0) {
        if(directionP1 === 1) {
          rotationP1 += 1.75-0.75*(velocity1/maxvelocity);
        }
      }
    }
   
    if(velocity1 > 0) {
      velocity1 -= velocityIncreas;
    }
    if(velocity1 < 0) {
      velocity1 = 0;
    }
    if(velocity1 > maxvelocity) {
      velocity1 -= velocityIncreas;
    }

    while(rotationP1 > 360) {
      rotationP1 -= 360;
    }
    while(rotationP1 < 0) {
      rotationP1 += 360;
    }


    player1Y -= cos(rotationP1) * velocity1;
    player1X += sin(rotationP1) * velocity1;
  }

  
}

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function() {
  // car with border
  push();
  translate(player1X, player1Y);
  let topLeft = [
    [-26, -44],
    [-26-18*(rotationP1/90), -44+18*(rotationP1/90)],
    [-26-18*((180-rotationP1)/90), -44+18*((180-rotationP1)/90)],
    [-26-18*((rotationP1-180)/90), -44+18*((rotationP1-180)/90)],
    [-26-18*((360-rotationP1)/90), -44+18*((360-rotationP1)/90)]
  ];
  let topRight = [
    [26, -44],
    [26+18*(rotationP1/90), -44+18*(rotationP1/90)],
    [26+18*((180-rotationP1)/90), -44+18*((180-rotationP1)/90)],
    [26+18*((rotationP1-180)/90), -44+18*((rotationP1-180)/90)],
    [26+18*((360-rotationP1)/90), -44+18*((360-rotationP1)/90)]
  ];
  let bottomLeft = [
    [-26, 44],
    [-26-18*(rotationP1/90), 44-18*(rotationP1/90)],
    [-26-18*((180-rotationP1)/90), 44-18*((180-rotationP1)/90)],
    [-26-18*((rotationP1-180)/90), 44-18*((rotationP1-180)/90)],
    [-26-18*((360-rotationP1)/90), 44-18*((360-rotationP1)/90)]
  ];
  let bottomRight = [
    [26, 44],
    [26+18*(rotationP1/90), 44-18*(rotationP1/90)],
    [26+18*((180-rotationP1)/90), 44-18*((180-rotationP1)/90)],
    [26+18*((rotationP1-180)/90), 44-18*((rotationP1-180)/90)],
    [26+18*((360-rotationP1)/90), 44-18*((360-rotationP1)/90)]
  ];

  stroke('magenta');
  strokeWeight(3);

  if(rotationP1 === 0) {
    // line(topRight[0][0], topRight[0][1], bottomRight[0][0], bottomRight[0][1]);
    // line(topLeft[0][0], topLeft[0][1], bottomLeft[0][0], bottomLeft[0][1]);
    if(player1Y+topLeft[0][1] < 0) {
      maxvelocity = wallSpeed;
      velocity1 = maxvelocity;
      player1Y = -topLeft[0][1];
    }else if(player1Y-bottomRight[0][1] > 960) {
      maxvelocity = wallSpeed;
      velocity1 = maxvelocity;
      player1Y = bottomRight[0][1];
    }else if(player1X+bottomLeft[0][0] < 0) {
      maxvelocity = wallSpeed;
      velocity1 = maxvelocity;
      player1X = -bottomLeft[0][0]
    }else if(player1X+topRight[0][0] > 1344) {
      maxvelocity = wallSpeed;
      velocity1 = maxvelocity;
      player1X = 1344-topRight[0][0];
    }else{
      maxvelocity = startMax;
    }
  }else if(rotationP1 <= 90){
    if(player1Y+topLeft[1][1] < 0) {
      maxvelocity = wallSpeed;
      velocity1 = maxvelocity;
      player1Y = -topLeft[1][1];
    }else if(player1Y+bottomRight[1][1] > 960) {
      maxvelocity = wallSpeed;
      velocity1 = maxvelocity;
      player1Y = 960-bottomRight[1][1];
    }else if(player1X+bottomLeft[1][0] < 0) {
      maxvelocity = wallSpeed;
      velocity1 = maxvelocity;
      player1X = -bottomLeft[1][0];
    }else if(player1X+topRight[1][0] > 1344) {
      maxvelocity = wallSpeed;
      velocity1 = maxvelocity;
      player1X = 1344-topRight[1][0];
    }else{
      maxvelocity = startMax;
    }
  }else if(rotationP1 <= 180 && rotationP1 > 90) {
    // line (topRight[2][0], topRight[2][1], bottomRight[2][0], bottomRight[2][1]);
    // line (topLeft[2][0], topLeft[2][1], bottomLeft[2][0], bottomLeft[2][1]);
    if(player1Y+topLeft[2][1] < 0) {
      maxvelocity = wallSpeed;
      velocity1 = maxvelocity;
      player1Y = -topLeft[2][1];
    }else if(player1Y+bottomRight[2][1] > 960) {
      maxvelocity = wallSpeed;
      velocity1 = maxvelocity;
      player1Y = 960-bottomRight[2][1];
    }else if(player1X+bottomLeft[2][0] < 0) {
      maxvelocity = wallSpeed;
      velocity1 = maxvelocity;
      player1X = -bottomLeft[2][0];
    }else if(player1X+topRight[2][0] > 1344) {
      maxvelocity = wallSpeed;
      velocity1 = maxvelocity;
      player1X = 1344-topRight[2][0];
    }else{
      maxvelocity = startMax;
    }
  }else if(rotationP1 <= 270 && rotationP1 > 180) {
    if(player1Y+topLeft[3][1] < 0) {
      maxvelocity = wallSpeed;
      velocity1 = maxvelocity;
      player1Y = -topLeft[3][1];
    }else if(player1Y+bottomRight[3][1] > 960) {
      maxvelocity = wallSpeed;
      velocity1 = maxvelocity;
      player1Y = 960-bottomRight[3][1];
    }else if(player1X+bottomLeft[3][0] < 0) {
      maxvelocity = wallSpeed;
      velocity1 = maxvelocity;
      player1X = -bottomLeft[3][0];
    }else if(player1X+topRight[3][0] > 1344) {
      maxvelocity = wallSpeed;
      velocity1 = maxvelocity;
      player1X = 1344-topRight[3][0];
    }else{
      maxvelocity = startMax;
    }
  }else{
    if(player1Y+topLeft[4][1] < 0) {
      maxvelocity = wallSpeed;
      velocity1 = maxvelocity;
      player1Y = -topLeft[4][1];
    }else if(player1Y+bottomRight[4][1] > 960) {
      maxvelocity = wallSpeed;
      velocity1 = maxvelocity;
      player1Y = 960-bottomRight[4][1];
    }else if(player1X+bottomLeft[4][0] < 0) {
      maxvelocity = wallSpeed;
      velocity1 = maxvelocity;
      player1X = -bottomLeft[4][0];
    }else if(player1X+topRight[4][0] > 1344) {
      maxvelocity = wallSpeed;
      velocity1 = maxvelocity;
      player1X = 1344-topRight[4][0];
    }else{
      maxvelocity = startMax;
    }
  }
  pop();

  
  

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
      image(imgRaceCarGreenWhite, -26, -44, 52, 88);
      pop();
      
    }else{
      image(imgRaceCarGreenWhite, player1X-26, player1Y-44, 52, 88);
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
  if(testing === true) {
    gameStatus = PLAY;
    mapStatus = TUTORIALMAP;
    racing = true;
  }
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
    verwerkBotsing();
  }
  if (gameStatus === GAMEOVER) {
    // teken game-over scherm
  }

  mouseXY();
}