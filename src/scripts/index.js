import {app} from "./App";
// app.renderer.backgroundColor = 0x23395D;
app.renderer.autoDensity = true;
app.renderer.resize(1920,1080)
//document.body.appendChild(app.view);
document.getElementById('game-div').appendChild(app.view);