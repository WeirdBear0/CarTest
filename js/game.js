class Game {
    constructor(){
        
    }
    getGameState(){
        var gameStateRef = firebaseDB.ref("gameState");
        gameStateRef.on("value", function(data){
        gameState = data.val();
        });

    }
    start(){
        if(gameState === 0){
            player = new Player();
            player.getPlayerCount();
            form = new Form();
            form.display();
            background(bg)
        }
        car1 = createSprite(200,200)
        car2 = createSprite(400,200)
        car3 = createSprite(600,200)
        car4 = createSprite(800,200)
        car1.addImage(car1Img)
        car2.addImage(car2Img)
        car3.addImage(car3Img)
        car4.addImage(car4Img)
        cars= [car1, car2, car3, car4]

    }
    update(state){
        var ref = firebaseDB.ref("/");
        ref.update({
            gameState: state
        })
    }
    play(){
        form.hide();
        Player.getPlayerInfo();
        console.log(allPlayers);
        
        // var index = 0;
        // var carX = 200;
        // var carY
        // for (var i in allPlayers) {
        //     carX = carX+200;
        //     carY  = windowHeight - allPlayers[i].distance;
        //     cars[index].x = carX;
        //     cars[index].y = carY;
        //     if(player.index === index+1) {
        //         ellipse(carX, carY, 50,50);
        //         camera.position.x = displayWidth / 2;
        //         camera.position.y = cars[index].y;
        //     }
        //     index = index+1
        // }

        background("black")
        image(trackImg, 0, -windowHeight*4, windowWidth, windowHeight*5)
    }
}