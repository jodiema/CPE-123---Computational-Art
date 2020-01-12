//Example of very simple particle systems - inroduction to objects in javascript

//define a single particle
function Particle(x , y, r, g, b) 
{
   //the data associated with a particle
   this.accelY = 0.05; //gravity
   this.velX = random(-1, 1);
   this.velY = random(0.5, 2);
   //note this particle only can vary its blue color - change this to include red and green
   this.pcolorR = r;
   this.pcolorG = g;
   this.pcolorB = b;
   
   this.locX = x;
   this.locY = y;
   this.rX = 2.0;
   this.rY = 8.0;
   this.life = 100;
  
   //a function to update the particle each frame
   this.updateP = function()
   {
      this.velY += this.accelY;
      this.locX += this.velX;
      this.locY += this.velY;
      this.life -= 1;
      this.rX += 0.1;
      this.rY += random(0.1,0.2);
   };
  
   //function to draw a particle
   this.renderP = function() 
   {
      //noStroke();
      push();
         ellipseMode(CENTER);
         //very simple coloring
         stroke(this.pcolorR, this.pcolorG,this.pcolorB, this.life)
         fill(this.pcolorR, this.pcolorG,this.pcolorB, this.life);
         translate(this.locX, this.locY);
         ellipse(0, 0, this.rX, this.rY);
      pop();
   };
} //end of particle object definition


//define a group of particles as a particleSys
function PSys(sX, sY, num, r, g, b)
{
    //the data - lots of particles
   this.particles = [];
   for (var i=0; i < num; i++) 
   {
      this.particles.push(new Particle(sX, sY, r, g, b));
   }
  
    //function defining what to do each frame
   this.run = function() 
   {
      for (var i=0; i < this.particles.length; i++) //number of particles
      {
         //update each particle per frame
         this.particles[i].updateP();
         this.particles[i].renderP();
      }
   }
}

//declare of a variable to represent a particle system
var fireW1 = []; 

function setup() 
{
   createCanvas(500, 500);
   colorMode(RGB, 255, 255, 255, 100);
   frameRate(40);

   //start a new particle system
   
   fireW1.push(new PSys(200, 200, 20, random(255), random(255), random(255)));
   
}


function draw() 
{
   background(0);

   //run the particle system
   for (var i=0; i< fireW1.length;i++){

   fireW1[i].run(); 
   }

}

function mouseClicked(){

   fireW1.push(new PSys(mouseX, mouseY, 40, random(255), random(255), random(255)))

}