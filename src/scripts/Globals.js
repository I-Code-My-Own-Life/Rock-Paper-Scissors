let gameWidth = app.screen.width;
let gameHeight = app.screen.height;
let centerX = app.screen.width/2;
let centerY = app.screen.height/2;

let moveButton = false;

// title
let style = new PIXI.TextStyle({
    fontFamily: "ARCO",
    fill: "#FFFFFF",
    fontSize: 80,
    fontWeight: "bold",
    align:"center",
    dropShadow:true,
    dropShadowBlur:0,
    stroke:"#FFFFFF",
    strokeThickness:0,
});

// buttons text
let style1 = new PIXI.TextStyle({
    fontFamily: "ARCO",
    fill: "#FFFFFF",
    fontSize: 40,
    fontWeight: "bold",
    align:"center",
    dropShadow:true,
    dropShadowBlur:0,
    stroke:"#FFFFFF",
    strokeThickness:0,
});

//player and ai score
let style2 = new PIXI.TextStyle({
    fontFamily: "Roboto-Regular",
    fill: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    align:"center",
    dropShadow:true,
    dropShadowBlur:0,
    stroke:"#FFFFFF",
    strokeThickness:0,
});

// won lost draw
let style3 = new PIXI.TextStyle({
    fontFamily: "ARCO",
    fill: "#FF3611",
    fontSize: 60,
    fontWeight: "bold",
    align:"center",
    dropShadow:true,
    dropShadowBlur:0,
    stroke:"#2F40F3",
    strokeThickness:2,
});

let buttonWidth = 350;
let buttonHeight  = 120;
let buttonRadius = 30;

let playButtonX = centerX - buttonWidth/2;
let playButtonY = centerY + 150;

let bWidth = buttonWidth;
let bHeight  = buttonHeight;
let bRadius = buttonRadius;

let bX = playButtonX;
let bY = playButtonY;

let previousChosenPlayer = [];
let previousChosenComputer = [];
let playerChosen = [];
let options = ["rock","paper","scissors"];
let computerChosen = [];
let computerSprites = [];

let rockOption;
let paperOption;
let scissorsOption;

let handSpeed = 8;
let gravity = 0.1; //0.1
let r = 0.1;
let score = 0;
let scoreCom = 0;

let textsArr = [];

let textChoose = undefined;
let resultElem = undefined;
let optionSelected = false;

let isPlayButtonRemoved = false;
let isHandsMoved = false;
let shakeSpeed = -20;
let shakeDistance = 150;
let shakeCount = 0;
let maxShakes = 2;
let stopShake = false;
