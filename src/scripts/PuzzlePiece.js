function addPlayerHand(str)
{
  let playerHand = PIXI.Sprite.from(str);
  playerHand.anchor.set(0.5);
  playerHand.width = 150;
  playerHand.height = 80;
  // playerHand.d = true;
  playerHand.position.set(-100,centerY);
  // playerHand.rotation -= 10.5;
  // To move the player sprite :
  playerChosen.push(playerHand);

  for(let i = 0; i < previousChosenPlayer.length; i++){
      app.stage.removeChild(previousChosenPlayer[i]);
      // previousChosenPlayer[i].destroy(true);
  }

  previousChosenPlayer.push(playerHand);
  return playerHand;
}
function addComputerOption(randomOption)
{
  computerChosen.push(randomOption);
  // Displaying what our computer chose :
  let comOption = PIXI.Sprite.from(`../src/sprites/Computer/${randomOption}-computer.png`);
  comOption.anchor.set(0.5);
  comOption.width = 150;
  comOption.height = 80
  comOption.position.set(gameWidth + 100,centerY);
  // For moving the computer computerSprites;
  computerSprites.push(comOption);
  app.stage.addChild(comOption);

  for(let i = 0; i < previousChosenComputer.length; i++){
      app.stage.removeChild(previousChosenComputer[i]);
  }

  previousChosenComputer.push(comOption);

  return comOption;
}

function addResultTxt(str,winType='')
{
  console.log(str);

  for(let i = 0; i < textsArr.length; i++) {
      app.stage.removeChild(textsArr[i]);
  }

  resultElem = new PIXI.Text(str, style3);
  resultElem.anchor.set(0.5);
  resultElem.x = centerX;
  resultElem.y = centerY-150;
  textsArr.push(resultElem);
  app.stage.addChild(resultElem);

  resultElem.visible = false;

  if(winType === 'won') {

    PIXI.sound.play('won');
    score++;
    scoreElem.text = `Your Score : ${score}`;
  }
  else if(winType === 'lost') {

    PIXI.sound.play('lost');
    scoreCom++;
    scoreComputer.text = `AI Score : ${scoreCom}`;
  }

}
function showResult()
{
  resultElem.visible = true;
  resultElem.scale.x = 0.5;
  resultElem.scale.y = 0.5;
}
function showRestartButton()
{
  app.stage.addChild(restartButton);
  app.stage.addChild(text3);
}
function addHandEvents()
{
  rockOption.interactive = true;
  paperOption.interactive = true;
  scissorsOption.interactive = true;

  rockOption.cursor = 'pointer';
  paperOption.cursor = 'pointer';
  scissorsOption.cursor = 'pointer';

  rockOption.on("pointerdown",onRockClick);
  paperOption.on("pointerdown",onPaperClick);
  scissorsOption.on("pointerdown",onScissorsClick);
}
function hideHandOptions()
{
  textChoose.visible = false;
  optionSelected = true;

  rockOption.interactive = false;
  paperOption.interactive =  false;
  scissorsOption.interactive = false;

  //rockOption.visible = false;
  //paperOption.visible = false;
  //scissorsOption.visible = false;
}

window.addEventListener('resize', resize); 