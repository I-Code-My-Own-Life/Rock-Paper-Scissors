let ratio = 1920 / 1080;

// const Application = new PIXI.Application;
let app = new PIXI.Application({
    resize:window,
    width:1920,
    height:1080,
    transparent:false,
    antialias: true,
    autoResize: true,
    //resolution: window.devicePixelRatio,
    resolution:1,
    willReadFrequently:true
});

module.exports = {ratio,app}