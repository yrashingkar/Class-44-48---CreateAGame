class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    fill(yellow)
    shooter1 = createSprite(100,200,100,100);
    shooter2 = createSprite(700,200,100,100);
    shooters = [shooter1, shooter2];
    /* bullet1 = createSprite(10,10,5,10)
    bullet2 = createSprite(100,10,5,10)
    bullets = [bullet1, bullet2]  */
   }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    player.getShootersAtEnd()
    if(allPlayers !== undefined){
      background(rgb(0,0,0));
      
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the shooters
      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the shooters a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the shooters in y direction
        y = displayHeight - allPlayers[plr].distance;
        shooters[index-1].x = x;
        shooters[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          shooters[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = shooters[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }


   
/* 
    if(player.distance > 3860){
      gameState = 2;
      player.rank+=1;
      Player.updateshootersAtEnd(player.rank)
    } */
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank)
  }
}
