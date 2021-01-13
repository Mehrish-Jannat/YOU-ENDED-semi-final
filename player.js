class Player{
    constructor(){
            this.index = null
            this.name = null
            this.distance = 0 
    }
    
    //read the playerCount value from the database
    getCount(){
        database.ref("playerCount").on("value",function(data){
            playerCount = data.val()
        })
    }

    //write the playerCount value to the database
    updateCount(count){
        database.ref("/").update({
            playerCount : count
        })
    } 
    
    //write the name and distance value to the database
    updateInfo(){
        database.ref("players/player"+this.index).set({
            name : this.name,
            distance: this.distance
        })
    }

    //reads all the players information
    static getPlayerInfo(){
        database.ref("players").on("value",(data)=>{
            players = data.val()
        })
    }

}