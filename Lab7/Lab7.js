var numFlowers = 40;
var numButterfly = 6; 
var flowerX = [];
var flowerY = [];
var rotateS = [];
var petalW = [];
var petalH = [];
var petalColor = [];


var dx = [];
var dy = [];
var dfX = [];
var dfY = [];
var dfScale = [];
var dfColor = [];

function setup() 
{
   createCanvas(600, 480);


   // set up flower variables
   for (var i=0; i < numFlowers; i++)
   {
      flowerX.push(random(width));
      flowerY.push(random(2*height/5,4*height/5));
      rotateS.push(random(-PI/40,PI/40));
      petalW.push(random(30,45));
      petalH.push(random(40,90));
      petalColor.push(color(219, random(10,150), random(255), random(210,255)));

   }

   // set up butterfly variables 
   for (var i=0; i < numButterfly; i++) {
      dx.push(random(-3, 3));
      dy.push(random(-3, 3));
      dfX.push(random(500));
      dfY.push(random(500));
      dfColor.push(color(219, random(10,200), random(255), random(240,255)));
      dfScale.push(random(.5, 1.3));
   }



   //drawButterfly();
}

function draw()
{
   var r, g, b, position;
   // sky
   background(44,242,255);

 strokeWeight(6);

 position = 0;
  r = 100;
  g = 220;
  
  for(count = 0; count < 150; count ++)
  {
    stroke(r, g, 230);
    line (0, position, 750, position);
    position += 5;
    r += 2;
    g += 1;
  }
    


   /*
   fill(247,210,82,150);
   rect(0,height/2,width/7,height/2);
   fill(201,171,66,150);
   rect(width/7,200,width/7,500);
   noFill();

   */
   noStroke();

   // flower
   for (var i=0; i < numFlowers; i++)
   {
      drawFlower(flowerX[i], flowerY[i], random(4*height/5, height),rotateS[i],petalW[i],petalH[i],petalColor[i]);
   }

   for (var i=0; i < numButterfly; i++) 
   {
      // draw butterfly
      drawButterfly(dfX[i], dfY[i], dx[i], dy[i], dfColor[i], dfScale[i]);
      
      // updates the butterfly's location
      dfX[i] += dx[i];
      dfY[i] += dy[i];
      
      // bounces the butterfly
      if (dfX[i] >= width || dfX[i] <= 0) 
         dx[i] = -dx[i];

      if (dfY[i] <= 0 || dfY[i] >= height) 
         dy[i] = -dy[i];
   }

}


function drawFlower(center_x, center_y, stalk_y, rot_stalk, rand_w, rand_h, petal_col)
{
   //var cx, cy, t;

   // draw the stalk
   push();
   translate(center_x, center_y-100)
   rotate(rot_stalk);
   stroke(120,108,51);
   strokeWeight(3);
   rect(0,0, 1, stalk_y+100);
   pop();
   
   
   // flower things 
   noStroke();
   fill(200,200,200);
   rect(center_x,center_y-130,1,40);
   push();
   translate(center_x+10, center_y-130);
   rotate(PI/8);
   rect(0,0,1,40);
   pop();
   push();
   translate(center_x-10, center_y-130);
   rotate(-PI/8);
   rect(0,0,1,40);
   pop();
   ellipse(center_x+1,center_y-130,5);
   ellipse(center_x+10, center_y-130,5);
   ellipse(center_x-10, center_y-130,5);

   noFill();


   //draw the flower petals 
   noStroke();
   fill(petal_col);

   push();
   translate(center_x+16, center_y-100)
   rotate(PI/3);
   ellipse(0,0, rand_w, rand_h);
   pop();

   push();
   translate(center_x-15, center_y-100)
   rotate(-PI/3);
   ellipse(0,0,rand_w,rand_h);
   pop();

}

function drawButterfly(x, y, dx, dy, col, sc){

push();
   // butterfly things
   translate(x,y);
   rotate(atan2(dy, dx)+PI/2);
   scale(sc);
   fill(col);
   push();
      translate(25, -70);
      rotate(PI/8);
      rect(0,0,1,30);
   pop();
   push();
      translate(3,-70);
      rotate(-PI/8);
      rect(0,0,1,30);
   pop();
   // butterfly
   fill(col);
   push();
      translate(0,0);
      rotate(PI/4);
      ellipse(0,0,25,45);
      ellipse(0,-45,45,65)
   pop();
   push();
      translate(0,0);
      rotate(-PI/4);
      ellipse(20,20,25,45);
      ellipse(20,-25,45,65);
   pop(); 
   
   // body
   fill(255);
   ellipse(15,-15,10,45); 
   ellipse(15,-40,10);

pop(); 
   }




