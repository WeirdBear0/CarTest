class Player {
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
        this.rank = null;

    }
    getPlayerCount(){
        var playerCountRef = firebaseDB.ref("playerCount");
        playerCountRef.on("value", function(data){
            playerCount = data.val();
        });

    }
    updatePlayerCount(count){
        var ref = firebaseDB.ref("/");
        ref.update({
            playerCount : count
        })
    }
    update(){
        var playerIndex = "players/player" + player.index;
        firebaseDB.ref(playerIndex).update({
            index : player.index,
            name: player.name,
            distance : player.distance,
            rank: "None"
        });
    }
    static getPlayerInfo(){
        var ref = firebaseDB.ref("players");
        ref.on("value", (data) => {
            allPlayers = data.val()
        })
    }
}