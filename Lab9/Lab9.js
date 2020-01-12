//To start the animation click anywhere in the window
var Dlocx;
var Dlocy;
var dirX, dirY;
var neckR, wingR, time, FlegR, feetR, feet2R, beakR;

var neckDown = true;
var wingDown = false;
var animate = false;
var legDown = false;
var feetDown = false;
var feetDown2 = false;
var beakDown = false;
var beakDown2 = false;

//normal set up
function setup() 
{
   createCanvas(460, 400);


   neckR = 0;
   wingR =-.2;
   feetR = 0;
   feet2R = 0;
   beakR = 0;
   Dlocx = width*.9;
   Dlocy = height/2;
   dirX = -1;
   dirY = 0;
   time = 1.5;
   FlegR = 0;


}



//normal draw
function draw() 
{

   background(12, 245, 216);
   drawFlower(10,10);

   noStroke();
   
   var x = 10;
   var x1 = 10;
   var x2 = 40;
   var x3 = 25;

   //foreground
   fill(79, 191, 49);
   rect(0, height/2, width, height/2);
   fill(60,60,229);
   stroke(76,187,196);
   strokeWeight(4);
   ellipse(380,260,350,100);
   noStroke();
   fill(173,89,26);
   rect(0,175,460,15);
   rect(0,100,460,15);
   rect(x,85,30,115);
   triangle(x1,85,x2,85,x3,70);


   while (x < width){
      rect(x,85,30,115);
      x += 40;
   }

   while (x1<width){
      triangle(x1,85,x2,85,x3,70);
      x1 += 40;
      x2 += 40;
      x3 += 40;
   }

   var x4 = 25;
   var x5 = 25;

   fill(70);

   while (x4 < width){
      ellipse(x4,107,6);
      x4 += 40;

   }

   while (x5 < width){
      ellipse(x5,182,6);
      x5 += 40;

   }

   drawDuck();

   if (animate) 
   {
     moveDuck();
   }


}

//method to control starting the duck over again and control animation on and off
function mousePressed() 
{
   Dlocx = width*.9;
   animate = !animate;
}

//code to draw the duck with animation parameters neckR and wingR - other transforms align
//the peices to the correct pivot points
//Be very careful modifying this code - the structure of the push and pops are what builds
//the hierarchical relationships
function drawDuck() 
{
   noStroke();

   push();

      //move the entire duck
      translate(Dlocx, Dlocy);
      scale(2); //scale the entire duck
      // one foot
      fill(255,140,32);
      push();
         translate(0,10);
         rotate(feet2R);
         rect(0,0,3,12);
         ellipse(-1.7,12,9,3);
      pop();
      // draw body
      fill(245, 226, 12);
      ellipse(0, 0, 40, 30); 

      //draw neck and head with possible animation transforms
      push();
         translate(-16, 0); //move into pivot position
         rotate(neckR);  //rotate by neckR parameter
         ellipse(0, -10, 10, 18); //neck
         ellipse(0, -17, 14, 14); //head
         fill(0);
         ellipse(0, -19, 4, 4);  //eye
      
         push();
            translate(-4,-18);
            fill(255,140,32);
            //triangle(-12, -18, -4, -21, -4, -15);
            //triangle(-4,-18,-4,-21,-10,-18);
            triangle(0,0,0,-3,-6,0);
            rotate(beakR);
            //triangle(-4,-18,-4,-15,-10,-18);
            triangle(0,0,0,3,-6,0);

   
         pop();
        
      
      pop();

   
      

      //draw wing with possible animation transforms
      fill(227, 208, 66);
      push();
         translate(-8, -5); //move into pivot position
         rotate(wingR); //animtion parameter to control wing flap
         ellipse(14, 0, 34, 20); //wing
      pop();


      //TODO - this is where you will add the code to animation the legs - follow
      //the examples for the wings and neck
      // other foot 
      fill(255,140,32);
      push();
         translate(-10,10);
         rotate(feetR);
         rect(0,0,3,12);
         ellipse(-1.7,12,9,3);
      pop();
      /*
      // example
      fill(0);
      push();
         translate(-25, -18); 
         rotate(wingR);
         ellipse(1, 0, 8, 2); 
      pop();
   */

   pop();
}

//function to update all animation parameters - very simple scripted animation
function moveDuck() 
{
   //update the ducks global location
   Dlocx = Dlocx + dirX*time;
   Dlocy = Dlocy + dirY*time;

   if (FlegR > radians(45)) 
   {
      legDown = false;
   }
   if (FlegR < radians(-45)) 
   {
     legDown = true;
   }

   if (legDown) 
   {
      FlegR += 0.05;
   } 
   else 
   {
      FlegR -= 0.05;
   }


  //find out how much the neck is rotated to decide which way to rotate
  //these constrain how much the neck moves up and down
   if (neckR < -1) 
   {
      neckDown = false;
   } 
   if (neckR > 0.2) 
   {
      neckDown = true;
   }

   // depending on which way we need to rotate, do so
   if (neckDown == true) 
   {
      neckR -= .02;
   } 
   else 
   {
      neckR += .02;
   }

   //find out how much the wing is rotated to decide which way to rotate
   //these constrain how much the wing moves up and down
   if (wingR < -1.1) 
   {
      wingDown = true;
   } 
   if (wingR > 0.3) 
   {
      wingDown = false;
   }

   // depending on which way we need to rotate, do so
   if (wingDown == false) 
   {
      wingR -= .03;
   } 
   else 
   {
      wingR += .03;
   }
   // ______________________
   // one foot
   if (feetR < -.9) 
   {
      feetDown = true;
   } 
   if (feetR > 0.5) 
   {
      feetDown = false;
   }

   if (feetDown == false) 
   {
      feetR -= .08;
   } 
   else 
   {
      feetR += .08;
   }
   // ______________________
   // other foot
   if (feet2R < -.9) 
   {
      feetDown2 = false;
   } 
   if (feet2R > 0.5) 
   {
      feetDown2 = true;
   }


   if (feetDown2 == true) 
   {
      feet2R -= .08;
   } 
   else 
   {
      feet2R += .08;
   }

   // top beak

   if (beakDown == true) 
   {
      beakR -= .05;
   } 
   else 
   {
      beakR += .05;
   }

   if (beakR < -.7) 
   {
      beakDown = false;
   } 
   if (beakR > 0) 
   {
      beakDown = true;
   }
}


function drawFlower(center_x, center_y)
{
   var cx, cy, cx2, cy2, t;
   
   //draw the center of the sun
   fill(255, 255, 0);
   noStroke();
   ellipse(center_x, center_y, 100, 100);

   //pick the flame color
   stroke(255, 255, 0);
   strokeWeight(4);

   //draw each flame around the sun
   t=0;
   for (var i=0; i<13; i ++) {
      t = t + 2*PI/13;
      cx = center_x + 65* cos(t);
      cy = center_y + 65 * sin(t);
      cx2 = center_x + 120* cos(t);
      cy2 = center_y + 120 * sin(t);
      line(cx, cy, cx2, cy2);
   }
}



