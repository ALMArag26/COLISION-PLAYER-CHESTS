var player, playerImg, chestImg, bgImg;
var allWalls = [];
var allChests = [];
var numOfChests = 0;

var walls = [
    {x:10, y:20, w:1700, h:40}, //Ladrillo superior
    {x:10, y:450, w:1700, h:40},
    {x:10, y:450,w: 40, h: 900 }, // Ladrillo izquierdo
    {x:600,y:50 , w: 250, h: 40}, // Escalera inversa
    {x:600,y:90 , w: 150, h: 40}, // Escalera inversa
    {x:600,y:130 , w: 80, h: 40}, // Escalera inversa
    {x:700, y:300, w:250, h:40}, // L inversa
    {x:800,y:370, w:50, h:120}, // L inversa
    {x:300, y:300, w:250, h:40}, // L inversa
    {x:200,y:370, w:50, h:120}, // L inversa
    
  { x: 1000, y: 20, w: 2000, h:40 }, // Ladrillo superior
  { x: 1000, y: 450, w: 2000, h: 40 }, // Ladrillo inferior 1
  { x: 900, y: 450, w: 40, h: 700 }, // Ladrillo izquierdo
  { x: 1100, y: 165, w: 200, h: 250 }, // Gran bloque
  { x: 1250, y: 420, w: 50, h: 25 }, // Escaleras
  { x: 1300, y: 395, w: 50, h: 25 }, // Escaleras
  { x: 1350, y: 370, w: 50, h: 25 }, // Escaleras
  { x: 1500, y: 370, w: 50, h: 25 }, // Escalera inversa
  { x: 1550, y: 395, w: 50, h: 25 }, // Escalera inversa
  { x: 1600, y: 420, w: 50, h: 25 }, // Escalera inversa
  { x: 1760, y: 150, w: 250, h: 40 },
  { x: 1900, y: 105, w: 40, h: 130 },
  { x: 1950, y: 350, w: 100, h: 250 }
    
];

var chests = [
  { x: 300, y: 380, isCollected: false },
  // PASO 1 completa la matriz

];




function preload() {
  //PASO 2 agrega las imagenes para 
  //PLAYER
  //COFRES

}



function setup(){
  createCanvas(950, 470);
  
 player = createSprite(40, height / 2, 50);
 player.addImage("player-image", playerImg);
 player.scale = 0.05

  
  for (var i in walls) {
    var brick = createSprite( walls[i].x, walls[i].y, walls[i].w, walls[i].h);
    allWalls.push(brick);
  }
  
  
  for(var j in chests){
    var chest = createSprite(chests[j].x, chests[j].y, chests[j].w, chests[j].h)
    chest.addImage("chest-image", chestImg)
    chest.scale = 0.09
    allChests.push(chest)    
  }
  
}


function draw(){
  background("lightblue");

  textSize(33);
  stroke(15);
  fill("white"); 
  text(numOfChests, 105, 93);
  
  // PASO 3 agrega el bucle FOR para hacer Colisi??n con todos los muros
  

  
  // Recolectando cofres
  for(var j in allChests){
    if(player.collide(allChests[j]))
    {
      allChests[j].visible = false
      allChests[j].destroy()
      numOfChests +=1
    }
  }
  
  
    
    if (keyDown("right")){
         player.x +=10
        }

    if (keyDown("left")){
         player.x -=10
        }

    if (keyDown("up")){
        player.y -=10
    }
    
    if (keyDown("down")){
        player.y +=10
    }
 
 
  drawSprites();
  
}




