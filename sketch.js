var game, form, player;
var gameState = 0, playerCount = 0;
var firebaseDB;
var dbReference;
var allPlayers;
var cars = [];
function preload() {
    bg = loadImage("images/background.png")
    car1Img = loadImage("images/car1.png")
    car2Img = loadImage("images/car2.png")
    car3Img = loadImage("images/car3.png")
    car4Img = loadImage("images/car4.png")
    trackImg = loadImage("images/track.jpg")
}
function setup(){
    firebaseDB = firebase.database();
    console.log(firebaseDB);
    createCanvas(windowWidth,windowHeight);
    game = new Game();
    game.getGameState();
    game.start();
}

function draw(){
    console.log(playerCount)
    if(playerCount === 4){
        game.update(1)
    }
    if(gameState === 1){
        clear();
        game.play();
    }
}



