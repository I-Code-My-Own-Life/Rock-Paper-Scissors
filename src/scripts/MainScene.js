const gameTitle = new PIXI.Text(" JACK EN POY ! ", style);
gameTitle.anchor.set(0.5);
gameTitle.x = centerX;
gameTitle.y = 50;
app.stage.addChild(gameTitle);

gameTitle.scale.x = 0.5;
gameTitle.scale.y = 0.5;

// Our score :
let scoreElem = new PIXI.Text(`Your Score : ${score}`, style2);
scoreElem.x = 10;
scoreElem.y = 10;
app.stage.addChild(scoreElem);

// Computer's score :
let scoreComputer = new PIXI.Text(`AI Score : ${scoreCom}`, style2);
scoreComputer.x = gameWidth - scoreComputer.width - 10;
scoreComputer.y = 10;
app.stage.addChild(scoreComputer);

// Let's draw our restart button :
// Let's draw the button :

let restartButton = new PIXI.Graphics();
restartButton.beginFill(0x3e494b);
restartButton.lineStyle(4, 0x0, .3);
restartButton.drawRoundedRect(
    bX,
    bY,
    bWidth,
    bHeight,
    bRadius
);
restartButton.endFill();
// The text in the button :
const text3 = new PIXI.Text("Restart", style1);
text3.x  = bX + bWidth/2 - text3.width/2;
text3.y  = bY + bHeight/2 - text3.height/2;

  // Our animation loop :
  app.ticker.add((delta) => {

      if(gameTitle !== undefined) {

        if(gameTitle.scale.x < 1)
        {
          gameTitle.scale.x += 0.02;
          gameTitle.scale.y += 0.02;
          gameTitle.y += 0.5;
        }

      }

      if(resultElem !== undefined && resultElem.visible === true)
      {
        if(resultElem.scale.x < 1)
        {
          resultElem.scale.x += 0.05;
          resultElem.scale.y += 0.05;
          resultElem.y -= 0.2;
        }
      }

      if(moveButton){

          if(isPlayButtonRemoved === false)
          {
            playButton.y += gravity;
            text2.y += gravity;
            gravity += 0.5;
          }

          if(optionSelected === true)
          {
            if(rockOption.alpha > 0) {
              rockOption.alpha -= 0.05;
              rockOption.y += 1;
            }
            if(paperOption.alpha > 0) {
              paperOption.alpha -= 0.05;
              paperOption.y += 1;
            }
            if(scissorsOption.alpha > 0) {
              scissorsOption.alpha -= 0.05;
              scissorsOption.y += 1;
            }

          }
          else {

            if(rockOption && rockOption.alpha < 1) {
              rockOption.alpha += 0.05;
              rockOption.y -= 1;
            }
            if(paperOption && paperOption.alpha < 1) {
              paperOption.alpha += 0.05;
              paperOption.y -= 1;
            }
            if(scissorsOption && scissorsOption.alpha < 1) {
              scissorsOption.alpha += 0.05;
              scissorsOption.y -= 1;
            }

          }
      }
      // When the button gets below the canvas remove it from the screen :
      if(playButton.y >= gameHeight && isPlayButtonRemoved === false) {

        isPlayButtonRemoved = true;

          app.stage.removeChild(playButton);

          textChoose = new PIXI.Text("Choose one !", style1)
          textChoose.x = centerX-textChoose.width/2;
          textChoose.y = playButtonY;
          app.stage.addChild(textChoose);
      }
      for(let everyObj of playerChosen){
          app.stage.addChild(everyObj);
          if((everyObj.rotation > 1.8 || everyObj.rotation < -0.2 )){
              r = -r;
          }
      }
      if(isHandsMoved === false)
      {
        for(let i = 0; i < computerSprites.length; i++){
            if(computerSprites[i].x > centerX+300){
                computerSprites[i].x -= handSpeed;
            }
            if(computerSprites[i].x <= centerX+300) {
              isHandsMoved = true;
            }
        }

        for(let i = 0; i < playerChosen.length; i++){
            if(playerChosen[i].x < centerX-300){
                playerChosen[i].x += handSpeed;
            }
            if(playerChosen[i].x >= centerX-300) {
              isHandsMoved = true;

            }

            if(isHandsMoved === true)
            {
              showRestartButton();
              showResult();
            }
        }

        handSpeed += 0.05;

      }

      if(isHandsMoved === true)
      {

        for(let i = 0; i < computerSprites.length; i++)
        {
            let c_hand = computerSprites[i];
            let p_hand = playerChosen[i];

            if(Math.round(c_hand.y) <= centerY-shakeDistance) {
              shakeSpeed = Math.abs(shakeSpeed);
              shakeCount++;
            }
            else if(Math.round(c_hand.y) >= centerY+shakeDistance) {
              shakeSpeed = -Math.abs(shakeSpeed);
            }

            c_hand.y += shakeSpeed;
            p_hand.y += shakeSpeed;

            if(shakeCount >= maxShakes)
            {
              stopShake = true;
              shakeSpeed = 0;
            }

            if(stopShake === true)
            {
              if(c_hand.y < centerY)
              {
                c_hand.y += 20;
                p_hand.y += 20;
              }

            }

        }

      }
      app.stage.children.forEach(function(child){
          if(child.d){
              child.destroy(true);
          }
      });
  });
