var cat,catImg,catImg2,catImg3;
var mouse,mouseImg,mouseImg2,mouseImg3;
var garden,gardenImg;
function preload() {
    //load the images here
  gardenImg=loadImage("images/garden.png");
  catImg=loadAnimation("images/cat1.png");
  catImg2=loadAnimation("images/cat2.png","images/cat3.png")
  catImg3=loadAnimation("images/cat4.png");
  mouseImg=loadAnimation("images/mouse1.png");
  mouseImg2=loadAnimation("images/mouse2.png","images/mouse2.png","images/mouse3.png","images/mouse3.png");
  mouseImg3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(500,400);
    garden.addImage("gardenImg1",gardenImg)

    cat=createSprite(800,650,20,20);
    cat.addAnimation("catI",catImg)
    cat.scale=0.2;

    mouse=createSprite(200,650,20,20);
    mouse.addAnimation("mouseI",mouseImg)
    mouse.scale=0.2;

}

function draw() {

    background(255);
    if(cat.x-mouse.x<(cat.width-mouse.width)/2)
    {
        cat.addAnimation("cat",catImg3);
        cat.changeAnimation("cat",catImg3)
        cat.x=290;
        cat.velocityX=0;
        mouse.addAnimation("mouseI3",mouseImg3);
        mouse.changeAnimation("mouseI3",mouseImg3)
    }
    keyPressed();
    drawSprites();
    text(mouseX+','+mouseY,10,45)
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW)
{
    cat.velocityX=-5
    cat.addAnimation("catLastImage",catImg2);
    cat.changeAnimation("catLastImage",catImg2);
    mouse.addAnimation("mouseI2",mouseImg2)
    mouse.changeAnimation("mouseI2",mouseImg2);
}
}