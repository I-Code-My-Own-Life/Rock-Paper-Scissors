                          // Interactiveness here :

  let i = 0;
  let j = 0;
  let k = 0;
  function addButtonEvents()
{
  playButton.interactive = true;
  playButton.cursor = 'pointer';
  playButton.on("pointerdown",function () {

      moveButton = true;
      createHandOptions();
      addHandEvents();
  });

  // Restarting the game :
  // First the making the restart button interactive :
  restartButton.interactive = true;
  restartButton.cursor = 'pointer';
  restartButton.on("pointerdown",function (){
      console.log("Reload the game !!!")
      location.reload();
  });
  }
  function onRockClick()
  {
    hideHandOptions();

    // Chossing a random option for our computer :
    let randomOption = options[Math.floor(Math.random() * options.length)];
    let comOption = addComputerOption(randomOption);

    // Displaying what our player chose :
    let rock = addPlayerHand('../src/sprites/Player/rock-player.png');

    if(randomOption == "rock") {
      console.log("This is draw !!!");
      addResultTxt("Draw",'draw');
    }
    else if(randomOption == "scissors"){
        addResultTxt("You Won !!!",'won');
    }
    else if(randomOption == "paper"){
        addResultTxt("You Lost !!!",'lost');
    }
    j++;
  }
  function onPaperClick()
  {
    hideHandOptions();

    // Chossing a random option for our computer :
    let randomOption = options[Math.floor(Math.random() * options.length)];
    let comOption = addComputerOption(randomOption);
    let paper = addPlayerHand('../src/sprites/Player/paper-player.png');

    if(randomOption == "rock") {
        addResultTxt("You Won !!!",'won');
    }
    else if(randomOption == "scissors") {
        addResultTxt("You Lost !!!",'lost');
    }
    else if(randomOption == "paper") {
        app.stage.addChild(text2);
        console.log("This is draw !!!");
        addResultTxt("Draw",'draw');
    }
    j++;

    //app.stage.addChild(paper);
  }
  function onScissorsClick()
  {
    hideHandOptions();

    // Chossing a random option for our computer :
    let randomOption = options[Math.floor(Math.random() * options.length)];
    let comOption = addComputerOption(randomOption);
    let scissors = addPlayerHand('../src/sprites/Player/scissors-player.png');

    if(randomOption == "rock") {
        addResultTxt("You Lost !!!",'lost');
    }
    else if(randomOption == "scissors") {
        app.stage.addChild(text2);
        console.log("This is draw !!!");
        addResultTxt("Draw",'draw');
    }
    else if(randomOption == "paper") {
        addResultTxt("You Won !!!",'won');
    }
    if(k > 0){
        // previousChosenPlayer.push(scissors);
        // previousChosenComputer.push(comOption);
    }

    if(k <= 0){
    }

    k++;
  }

  /*----------------------------------------------------------------------------*/

  addButtonEvents();