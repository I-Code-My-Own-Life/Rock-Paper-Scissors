// Let's draw the button :
resize();
let playButton = new PIXI.Graphics();
playButton.beginFill(0x3e494b);
playButton.lineStyle(4, 0x0, .3);
playButton.drawRoundedRect(
    playButtonX,
    playButtonY,
    buttonWidth,
    buttonHeight,
    buttonRadius
);
playButton.endFill();

// The text in the button :
const text2 = new PIXI.Text("SELECT HAND", style1)
text2.x = playButtonX + buttonWidth/2 - text2.width/2+5;
text2.y = playButtonY + buttonHeight/2 - text2.height/2;
app.stage.addChild(playButton);
app.stage.addChild(text2);

  function createHandOptions()
  {
    var cX = centerX;
    var ypos = centerY+10;
    var dx = 400;

    // Let's make our three sprites here :
    // Rock :
    rockOption = PIXI.Sprite.from('../src/sprites/rock.png');
    rockOption.anchor.set(0.5);
    app.stage.addChild(rockOption);
    rockOption.width = 80;
    rockOption.height = 150;
    rockOption.position.set(cX-dx,ypos);
    rockOption.alpha = 0;

    // Paper :
    paperOption = PIXI.Sprite.from('../src/sprites/paper.png');
    paperOption.anchor.set(0.5);
    app.stage.addChild(paperOption);
    paperOption.width = 80;
    paperOption.height = 150;
    paperOption.position.set(cX,ypos);
    paperOption.alpha = 0;

    // Scissors :
    scissorsOption = PIXI.Sprite.from('../src/sprites/scissors.png');
    scissorsOption.anchor.set(0.5);
    app.stage.addChild(scissorsOption);
    scissorsOption.width = 80;
    scissorsOption.height = 150;
    scissorsOption.position.set(cX+dx,ypos);
    scissorsOption.alpha = 0;

  }

  function resize()
{
  if (window.innerWidth / window.innerHeight >= ratio) {
      var w = window.innerHeight * ratio;
      var h = window.innerHeight;
  } else {
      var w = window.innerWidth;
      var h = window.innerWidth / ratio;
  }

  app.renderer.view.style.width = w + 'px';
  app.renderer.view.style.height = h + 'px';

  let hGap = window.innerHeight - h;
  app.renderer.view.style.marginTop = hGap/2 + 'px';

}
