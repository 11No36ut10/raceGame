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