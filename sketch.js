const {Engine, World, Body, Bodies} = Matter; 

//Creating variables
var engine, world;

var thunder, thunderImg1, thunderImg2, thunderImg3, thunderImg4;
var thunderCreatedAt;

var Obj;
var drops = [];
var maxDrops = 100;

var walkImg = [];
var walkImg1, walkImg2, walkImg3, walkImg4, walkImg5, walkImg6, walkImg7;

var mode;
var leftMode = 0;
var rightMode = 6;

function preload(){
    thunderImg1 = loadImage("1.png");
    thunderImg2 = loadImage("2.png");
    thunderImg3 = loadImage("3.png");
    thunderImg4 = loadImage("4.png");

    walkImg1 = loadImage("walking_1.png");
    walkImg2 = loadImage("walking_2.png");
    walkImg3 = loadImage("walking_3.png");
    walkImg4 = loadImage("walking_4.png");
    walkImg5 = loadImage("walking_5.png");
    walkImg6 = loadImage("walking_6.png");
    walkImg7 = loadImage("walking_7.png");
}

function setup(){
  canvas = createCanvas(700, 800); 

  engine = Engine.create();
  world = engine.world;

  Obj = new Umbrella(100, 530);

  //To create rain drops
  if(frameCount % 200 === 0) {
    for (let i = 0; i < maxDrops; i++) {
        drops.push(new RainDrop(random(0, 700), random(0, 800)));
    }
  }   
}

function draw(){
  background(40, 40, 40);  

  Engine.update(engine);

  //To create thunder
  var rand = Math.round(random(1, 4));

  if(frameCount % 80 === 0){

    randX = random(100, 700);
    randY = random(50, 70);

    thunder = createSprite(randX, randY);

    thunderCreatedAt = frameCount;
    
    switch(rand) {
        case 1: thunder.addImage(thunderImg1);
                break;
        case 2: thunder.addImage(thunderImg2);
                break;
        case 3: thunder.addImage(thunderImg3);
                break;
        case 4: thunder.addImage(thunderImg4);
                break;
        default: break;
    }

    thunder.scale = random(0.4, 0.6);

  }

  if (thunderCreatedAt + 15 === frameCount) {
    thunder.destroy();
  }

  Obj.showWalkingMan();

  for (let j = 0; j < maxDrops; j++) {
      drops[j].updatePos();
      drops[j].showRainDrop();
  }

  drawSprites();

}   

function keyPressed(){

    var objPos = Obj.body.position;

    if (objPos.x >= 100 || objPos.x <= 700) {

        if(keyCode === RIGHT_ARROW){
            if (leftMode === 0 || leftMode <= 6){
                leftMode = leftMode + 1;
                Body.setPosition(Obj.body, {x: objPos.x+100, y: 530});
                mode = leftMode;    
            }else{
                leftMode = 0;
            }
        }

        if(keyCode === LEFT_ARROW){
            if (rightMode > 0 || rightMode <= 6){
                rightMode = rightMode - 1;
                Body.setPosition(Obj.body, {x: objPos.x-100, y: 530});
                mode = rightMode;
            }else{
                rightMode = 6;    
            }    
        }

        switch(mode){
            case 1: Obj.changeImg(walkImg1);
                    break;
            case 2: Obj.changeImg(walkImg2);
                    break;
            case 3: Obj.changeImg(walkImg3);
                    break;
            case 4: Obj.changeImg(walkImg4);
                    break;
            case 5: Obj.changeImg(walkImg5);
                    break;
            case 6: Obj.changeImg(walkImg6);
                    break;
            case 7: Obj.changeImg(walkImg7);
            break;
            default: break;
        }
    }
}