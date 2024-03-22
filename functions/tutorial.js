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