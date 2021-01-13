class Form {
    constructor(){
        this.title = createElement("h2")
        this.input = createInput("Name")
        this.halfButton = createButton("Start")
        this.greeting = createElement("h3")
        this.reset =  createButton("reset")
    }

    hide(){
        this.title.hide()
        this.input.hide()
        this.halfButton.hide()
        this.greeting.hide()
    }
    display(){
        this.title.html("CarRace")
        this.title.position(displayWidth/2-50,0)
        this.reset.position(displayWidth-100,20)
        this.input.position(displayWidth/2-40,displayHeight/2-80)
        this.halfButton.position(displayWidth/2+30,displayHeight/2)
        this.halfButton.mousePressed(()=>{
            this.input.hide()
            this.halfButton.hide()
            player.name = this.input.value()
            playerCount++
            player.index = playerCount
            player.updateInfo()
            player.updateCount(playerCount)
        this.greeting.html("Why are you even here? " + player.name)
        this.greeting.position(displayWidth/2-70,displayHeight/4)
        })

        this.reset.mousePressed(()=>{
            player.updateCount(0)
            game.updateState(0)
        })     
    }
}