//starting menu with 

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