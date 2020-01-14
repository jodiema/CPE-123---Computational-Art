var ballX = 350;
var ballY = 350;
// clear = 146;
var x = 455;
var y = 168;
var drawOn = false;
var faceValue = 0;
var eyeY = 150;
var mouthY = 240; 

var grow_bubble; 

function setup () {
	createCanvas(700,800);
	move_bubble = false;
}

function drawBubble(x,y){
	push();
		noStroke();
		translate(x,y);
//		fill(128,0,255,100);
		fill(75,110,186);
		ellipse(0,0,ballX,ballY);
	pop();
}

function drawFace(x,y){
	fill(0,0,0,faceValue);
	ellipse(370,150,50,50);
	ellipse(540,150,50,50);
//	fill(241,225,96);
	ellipse(455,240,50,70);

	faceValue += .05 && faceValue <= 180;

	// drops 
 	fill(242,250,96);

	ellipse(370,eyeY,50,50);
	ellipse(540,eyeY,50,50);
	ellipse(455,mouthY,50,70);



	eyeY += 2;
	mouthY += 6;

}


function draw(){
	background(84,145,232);

	drawBubble(x,y);
	
/*	// reference lines
	strokeWeight(0.2);
	line(0,291,700,291)
	line(0,605,700,605)
	line(0,459,700,459)
	line(0,451,700,451)
	strokeWeight(.8) */

	//ears 
	fill(84,145,232)
	ellipse(300,80,80,80)
	ellipse(610,80,80,80)

	// part of balloon 
	noStroke();
	push();
	fill(236,247,186);
	translate(300,420)
	scale(0.3)
	rotate(-PI/1.5)
	triangle(350,150,330,300,380,300);
	fill(255)
	pop();
	stroke(0)

	// head 

	fill(255,190,185)
	push();
	translate(280,305);
	rotate(-PI/6);
	ellipse(0,0,40,50);
	pop();
	fill(255)


	strokeWeight(0.1);
	// left leg
	fill(255,190,185)

	beginShape();
	curveVertex(293,458);
	curveVertex(293,458);
	curveVertex(293,495);
	curveVertex(288,510);
	curveVertex(265,580);
	curveVertex(275,590);
	curveVertex(315,505);
	curveVertex(320,460);
	curveVertex(293,458);
	curveVertex(293,458);
	endShape();

    //right leg
	beginShape();
	curveVertex(315,460);
	curveVertex(315,460);
	curveVertex(320,505);
	curveVertex(322,515);
	curveVertex(321,530);
	curveVertex(320,590);
	curveVertex(320,600);
	curveVertex(332,600);
	curveVertex(346,520);
	curveVertex(348,510);
	curveVertex(350,495);
	curveVertex(349,485)
	curveVertex(348,480)
	curveVertex(343,460)
	curveVertex(343,460);
	endShape();
	fill(255)

	// dress
	noStroke();
	beginShape();
	fill(140,0,0) 
	curveVertex(275,341);
	curveVertex(275,341);
	curveVertex(292,334);
	curveVertex(311,343);
	curveVertex(317,346);
	curveVertex(321,353);
	curveVertex(323,359);
	curveVertex(324,368);
	curveVertex(325,379);
	curveVertex(350,370);
	curveVertex(380,330);
	curveVertex(382,340);
	curveVertex(384,350);
	curveVertex(384,360);
	curveVertex(384,370);
	curveVertex(384,390);
	curveVertex(382,398);
	curveVertex(376,420);
	curveVertex(373,430);
	curveVertex(370,435);
	curveVertex(365,445);
	curveVertex(345,460);
	curveVertex(320,460);
	curveVertex(295,460);
	curveVertex(287,440);
	curveVertex(289,420);
	curveVertex(290,400);
	curveVertex(291,395);
	curveVertex(291,395);
	curveVertex(290,390);
	curveVertex(275,341);
	curveVertex(275,341);
	endShape();
	stroke(0);
	fill(255)
	// right arms 

	strokeWeight(0.1);
	fill(255,190,185)

	beginShape();
	curveVertex(275,341);
	curveVertex(275,341);
	curveVertex(250,400);
	curveVertex(248,440);
	curveVertex(254,430);
    curveVertex(280,360);
	curveVertex(275,341);
	curveVertex(275,341);	
	endShape(); 

	// left arm 
	beginShape();
	curveVertex(280,360);
	curveVertex(280,360);
	curveVertex(276,410);
	curveVertex(268,450);
	curveVertex(276,445);
	curveVertex(286,415);
	curveVertex(288,385);
	curveVertex(280,360);
	curveVertex(280,360);
	endShape(); 
	fill(255)
	// hair 
	fill(94,40,22);
	beginShape();
	curveVertex(292,288);
	curveVertex(292,288);
	curveVertex(278,295);
	curveVertex(275,300);
	curveVertex(278,310);
	curveVertex(285,315);
	curveVertex(305,316);
	curveVertex(315,314);
	curveVertex(335,310);
	curveVertex(310,330);
	curveVertex(285,340);
	curveVertex(275,338);
	curveVertex(264,330);
	curveVertex(255,315);
	curveVertex(252,305);
	curveVertex(254,290);
	curveVertex(260,280);
	curveVertex(270,275);
	curveVertex(285,272);
	curveVertex(290,272);
	curveVertex(300,272);
	curveVertex(310,273);
	curveVertex(313,272);
	curveVertex(318,271);
	curveVertex(292,288);
	curveVertex(292,288);	
	endShape();
	fill(255)


//	ellipse(400,200,50,50)

	if (grow_bubble == true){
	
		ballX += 6;
		ballY += 6;

	}

	// still bubble
	noStroke();
	fill(236,247,186);
	ellipse(455,168,350,350); 


 	//ellipse(400,200,50,50);



 	fill(13,20,67);
 	arc(350,800,800,150,PI,0);
 	fill(255);

	if (drawOn == true){
		drawFace(x,y);
	}
	
	



}


function mouseClicked(){

	

	if ((mouseX-455)*(mouseX-455)+(mouseY-168)*(mouseY-168)-175*175 < 0){

		drawOn = true;
		grow_bubble = true;

	}



}



// if mouse clicks inside the circle
// ellipse(200,200,100)
// if ((mouseX-200)*(mouseX-200)+(mouseY-200)*(mouseY-200)-50*50 < 0) {} 

