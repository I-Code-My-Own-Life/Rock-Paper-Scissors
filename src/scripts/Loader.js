function setScreen()
{
  let bg = PIXI.Sprite.from('../src/sprites/bg.png');
  bg.position.set(0,0);
  app.stage.addChild(bg);
}

async function addSounds()
{
  const bgmusic = await PIXI.sound.Sound.from({
    url: '../src/sounds/african.mp3',
    loop : true,
  });
  bgmusic.play();

  PIXI.sound.add('lost', '../src/sounds/gamelost.mp3');
  PIXI.sound.add('won', '../src/sounds/winner.mp3');
}

// addSounds();

setScreen();

