const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var drops;
var maxDrops = 100;
var bg1,bg2,bg3

function preload(){
      backgroundImg1 = loadImage("3.jpg");
      backgroundImg2 = loadImage("2.jpg");
      backgroundImg3 = loadImage("1.jpg");
}

function setup(){
  createCanvas(800,800)  
  for(var i=0; i<maxDrops; i++){
      drops.push(new createDrop(random(0,400), random(0,400)))
              }
    
}

function draw(){
      if(frameCount%20===0){
background(random(  backgroundImg1,  backgroundImg3,  backgroundImg2))
      }


      if(frameCount%60===0){
            drops.push(new Drops(random(width/2-30,width/2+30),10,10))
          }
        
   drops.display();
      drawSprites();

}   

