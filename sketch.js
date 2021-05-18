const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var backgroundImg;
var eleven;
var mike;


function preload(){
backgroundImg = loadImage("background.png");

}

function setup(){
    var canvas = createCanvas(displayWidth - 20, displayHeight - 30);

    engine = Engine.create();
    world = engine.world;
    eleven = new Eleven(displayWidth/2 - 100, displayHeight/2 + 200, 500, 500);
    mike = new Mike(displayWidth/2 - 200, displayHeight/2 + 200, 500, 500);

    
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    eleven.display();
    mike.display();
    
}