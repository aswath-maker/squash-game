var gameState,first,second1;
var ball1,img,paddle1;
var ball;
var paddle;
var restart;
function preload() {
  ball1 = loadImage("ball.png");
  paddle1 = loadImage("paddle.png");
  
  
}
function setup() {
  createCanvas(400, 400);
   
   ball = createSprite(10,200,10,10);
  ball.addImage("ball",ball1);
  
   paddle =createSprite(380,200,10,10);
  paddle.addImage("paddle",paddle1);
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 0;
  ball.velocityY = 0;
  restart = createSprite(200,200,400,400);
  restart.visible = false;
}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  gameState = first;
 
  if(gameState === first){
  edges = createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  ball.bounceOff(paddle);

  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  if(ball.x > 400){
   ball.x = 10; 
   ball.y = 200;
       ball.velocityX = 0;
  ball.velocityY = 0;
    gameState = second1;
  }
  
    if(keyDown("enter") && gameState === second1){
       ball.velocityX = 9;
  ball.velocityY = 4;
    }
    
    if(keyDown("enter") ){
       ball.velocityX = 9;
  ball.velocityY = 4;
    }
    
    
    
  /* Prevent the paddle from going out of the edges */ 
   paddle.collide(edges[2]);
  paddle.collide(edges[3]);  
  
  if(keyDown(UP_ARROW))
  
  {
     paddle.y = paddle.y-20;  
     /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW))
  { paddle.y = paddle.y+20;
    /* what should happen when you press the UP Arrow Key */
  }
 
   
    
  drawSprites();
  
    text("press enter to play",200,20);
 
    if(gameState === second){
       ball.velocityY = 0;
    ball.velocityX = 0;
    
   
      
    }   
   
  }


}