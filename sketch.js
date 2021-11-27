var backImg,tom,jerry,tomimg1,tomimg2,tomimg3,tomimg4,jerryimg1,jerryimg2,jerryimg3,jerryimg4;


function preload() {
    //load the images here
    backImg = loadImage("images/garden.png");
    //load all the images of cat and mouse 
    tomimg1 = loadAnimation("cat1.png");
    tomimg2 = loadAnimation("images/cat2.png");
    tomimg3 = loadAnimation("images/cat3.png");
    tomimg4 = loadAnimation("images/cat4.png");
    jerryimg1 = loadAnimation("images/mouse1.png");
    jerryimg2 = loadAnimation("images/mouse2.png");
    jerryimg3 = loadAnimation("images/mouse3.png");
    jerryimg4 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(850,600);
    tom.addAnimation("tom",tomimg1);
    tom.scale = 0.2;

    jerry = createSprite(200,600);
    jerry.addAnimation("jerry standing",jerryimg1);
    jerry.scale = 0.15;
}

function draw() {

    background(backImg);
    //Write condition here to evalute if tom and jerry collide
  if(tom.x-jerry.x < (tom.width-jerry.width)/2){
   tom.velocityX = 0;
   tom.addAnimation("catlastimage",tomimg4);
   tom.changeAnimation("catlastimage");
   tom.x = 300;
   tom.scale = 0.2;
  }

    drawSprites();
}
 

function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    jerry.addAnimation("mouseteasing", jerryimg3);
    jerry.changeAnimation("mouseteasing");
    jerry.frameDelay = 25;

    tom.velocityX = -5;
  }

//change animation for tom

}
