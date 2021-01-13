class Game{
    constructor(){}
    
    //read the gameState value from the database
    getState(){
        database.ref("gameState").on("value",function(data){
            gameState = data.val()
        })
    }

    //write the gameState value to the database
    updateState(state){
        database.ref("/").update({
            gameState : state
        })
    }

    async start(){
        if (gameState === 0){
            player = new Player()
            var playerCountref = await database.ref("playerCount").once("value")
            if (playerCountref.exists()){
                playerCount = playerCountref.val()
                player.getCount()
            }
            form = new Form()
            form.display()
        }
        car1 = createSprite(100,200)
        car2 = createSprite(300,200)
        car3 = createSprite(500,200)
        car4 = createSprite(700,200)
        car1.addImage(carImg1)
        car2.addImage(carImg2)
        car3.addImage(carImg3)
        car4.addImage(carImg4)
        cars = [car1,car2,car3,car4]

    }

    play(){
        form.hide()
        Player.getPlayerInfo()
        //!== not equal
        if (players!== undefined){
            background("black")
            image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5)
            var index = 0 
            var x = 175
            var y 
            for(var i in players ){
                index = index+1
                x = x+200
                y = displayHeight-players[i].distance - 50
                cars [index-1].x = x 
                cars [index-1].y = y
                if (index === player.index){
                    fill("green")
                    ellipse(x,y,60)
                    camera.position.x = displayWidth/2
                    camera.position.y = cars[index-1].y
                }
            }

            if (player.distance>3500){
                gameState = 2
            }
        }
        if (keyDown("up")&&player.index !== null){
            player.distance = player.distance+10
            player.updateInfo()
        }
        drawSprites()
    }

    end(){
        console.log("You Ended")
    }
}