var dog, happyDog, database, foodS, foodStock;
var database;

function preload()
{
	dog = loadImage('images/doglmg.png');
  happyDog = loadImage('images/doglmg1.png');
}

function setup() {
	database = firebase.database();
  createCanvas(500, 500);
foodStock = database.ref('Food')
foodStock.on("value,readStack")
 
  
}


function draw() {  
  background(46, 139, 87)
  dog = createSprite(250,250,20,20);
  dog.addImage(doglmg.png)
  
  if(keyWentdown(UP_ARROW))
  {
  dog.addImage(doglmg.png)
     dogisVisbile = false
  }
  drawSprites();
  //add styles here
Text("Note:Press UP_ARROW Key To Feed The Dog Milk")   
TextSize(10)
fill(green)
strokeWieght(0)
}
function readStock(data)
{
  foodS = data.val();

}
function writeStock(x)
{
database.ref('/').update(
  {
    Food:x
  }
)
}


