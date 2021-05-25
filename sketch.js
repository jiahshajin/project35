 
var  dog,dogImg,happyDog,database,foodS,foodStock
function preload()
{
  //load images here

  dogImg=loadImage("images/dogImg.png")
  happyDog=loadImage("images/happydog.png")
  
}

function setup() {
  
  createCanvas(500,500);

  database = firebase.database();

dog=createSprite(250,280,20,20)
dog.addImage(dogImg)
dog.scale=0.2

  foodStock=database.ref('Food');
 foodStock.on("value",readStock);
  
}


function draw() { 
  background(46,139,87) 
  
  
  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDog)
    
  }
   


  drawSprites();
  //add styles here

  textSize(21)
  fill("white")
  text("press up_arrow key to feed drago milk!",100,30)
  text("food remaining =" + foodS,100,76)

}

 function  readStock(data) {
   foodS=data.val();
   
 }

 function  writeStock(x) {

  if (x<=0) {
    x=0;
  }else{
    x=x-1
  } 
  

  database.ref('/').update({

    Food:x

  })
   
 }
 



 
 