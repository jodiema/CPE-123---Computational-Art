/*
Project 1 - RIP Whiskers the Cat

Created By Ahmed Shalan, Jodie Ma, Connor Graves

October 7, 2016
*/


var xPos = 0;
var yPos = 0;
var ratio = 1;
var rainX =[];
var rainY =[];
var rainL =[];
var rainScale = 2;
var rainQuantity = 1000;
var rainSpeedMin = 5;
var rainSpeed = [];
var rainMove = true;
var transCounter = 0;
var transSpeed = 0.25;
var reachedPeak = false;
var transX, transY, scaleFactor;
var rotateC = 0;

	// nose
    var scaleN = 0.08;

    // cat ears
    var scaleE = 0.1;

    // cat
    var scaleC = 2;
    var xC = 458;
    var yC = 440;

var rainAngle = 3.145/5;
function drawRain(x, y, length)
{
	push()
		rotate(rainAngle);

		strokeWeight(2);
		stroke(0,75,255);
		scale(rainScale);
		line(x * (1/rainScale), y * (1/rainScale), x * (1/rainScale) + length, y * (1/rainScale));
	pop();
}

function setup() {
	createCanvas(880, 900);
	background(255, 222, 166);
	scaleFactor = 1;
	transX = 300;
	transY = 570;

	for(var i=0; i <= rainQuantity; i++)
	{
		scale(rainScale);
		rainX[i] = random(width * 3);
		rainY[i] = random(height * 10); 
		rainL[i] = random(50, 50 * rainScale);
		rainSpeed[i] = random(1) + 1;
	}
	
}


function draw() {
	background(50);
	noStroke();
	rect(300, 1500, 2000, 300);
	triangle(100, 1800, 565, 1800, 565, 500);
	fill(255, 200,200);
	rect(565, 0, 1500, 1500);
	push();
		scale(0.8);
		DrawDistrait();
	pop();
	push();
	translate(400, 0);
	scale(0.8);
		DrawRescuer();
	pop();
	push();
		scale(0.5);
		translate(1100, 1000);
		DrawRainDude();
	pop();
}

function DrawRainDude()
{


//grid
/*
strokeWeight(1);
for (var i = 0; i <= 19; i++)
{
	line(i*50, 0, i*50, height);
	line(0, i*50, width, i*50);
}*/

//scarf
fill(217, 208, 66);
noStroke();
ellipse(350, 277, 90, 45);
quad(350, 287, 350, 235, 475, 210, 465, 250)
//Head
push();
	translate(300, 400);
	rotate(-PI/6);
	fill(250, 12, 102);
	stroke(250, 12, 102, 200);
	ellipse(130, -130, 60, 100);
	ellipse(110, -125, 40, 10);
	fill(255, 222, 166);
	noStroke();
	ellipse(100, -115, 20, 5);
pop();
noStroke();
	fill(61,40,0);
	beginShape();
		vertex(336, 200);
		vertex(342, 218);
		vertex(353, 212);
		vertex(350, 208);
		vertex(360, 203);
		vertex(365, 213);
		vertex(377, 210);
		vertex(355, 180);
	endShape();
//hat

fill(15,106,131);
	beginShape();
		vertex(300, 225);
		vertex(370, 175);
		vertex(360, 170);
		vertex(350, 177);
		vertex(337, 165);
		vertex(302, 190);
		vertex(309, 203);
		vertex(303, 210);
	endShape();

strokeWeight(5);
fill(61,40,0);
stroke(61, 40, 0);
line(309, 203, 350, 177);
strokeJoin(ROUND);
strokeWeight(2);

//umbrella canvas
arc(200, 200, 300, 300, 5*PI/6, 11*PI/6, CHORD);

//umbrella
push();
	translate(300, 300);
	rotate(-PI/6);
	strokeWeight(6);

	//umbrella handle
	stroke(217, 208, 66);
	line(-40, -120, -40, 0);
	noFill();
	curve(-40, -120, -40, 0, -60, 0, -60, -120);
	//umbrella canvas triangles
	strokeWeight(2);
	stroke(61, 40, 0);
	fill(61, 40, 0);
	triangle(-15, -280, -65, -280, -40, -310);
	triangle(-75, -145, -5, -145, -40, -115);
	triangle(-5, -145, 65, -145, 30, -115);
	triangle(-145, -145, -75, -145, -110, -115);
	triangle(-145, -145, -187, -145, -187, -115);
	triangle(65, -145, 113, -145, 113, -115);

	//Top Hand
	fill(250, 12, 102, 175);
	stroke(250, 12, 102, 100);
	ellipse(-40, -60, 15, 30);
	ellipse(-47, -60, 10, 10);
	ellipse(-47, -50, 10, 10);
	ellipse(-47, -70, 10, 10);
	//Bottom Hand
	ellipse(-40, -20, 15, 30);
	ellipse(-47, -20, 10, 10);
	ellipse(-36, -33, 10, 10);
	ellipse(-47, -10, 10, 10);
	ellipse(-47, -30, 10, 10);
pop();

//legs
quad(410, 550, 440, 400, 490, 600, 440, 600);
quad(440, 600, 475, 570, 525, 585, 515, 635); //~~~~~~~~~~~~~~~~~~~~~~~~~~~
rect(280, 580, 55, 100);
ellipse(285, 690, 50, 10);
rect(280, 685, 52, 5);
rect(320, 685, 12, 10);

push();
	translate(300, 400);
	rotate(-5*PI/12);
	ellipse(-170, 280, 50, 10);
	rect(-175, 275, 52, 5);
	rect(-135, 275, 12, 10);
pop();

//coat
fill(15, 106, 131);
stroke(15, 106, 131);
beginShape();
	vertex(260, 345);
	vertex(290, 400);
	vertex(330, 375);
	vertex(335, 435);
	vertex(280, 550);
	vertex(280, 600);
	vertex(400, 590);
	vertex(450, 425);
	vertex(490, 510);

	vertex(472, 520);
	vertex(474, 530);

	vertex(505, 515);
	vertex(470, 425);
	vertex(430, 280);
	vertex(390, 220);
	vertex(340, 250);
	vertex(320, 280);
	vertex(321, 295);
endShape(CLOSE);
ellipse(315, 375, 70, 70);
 
 push();
 translate(0, -2300);
for(var i = 0; i <= rainQuantity; i++)
{
	drawRain(rainX[i], rainY[i], rainL[i]);
	if(rainMove)
	rainX[i] += rainSpeedMin * rainSpeed[i];
	if(rainX[i] > height * 2)
	rainX[i] = 0;
}
pop();
}
function DrawRescuer()
{



    

    noStroke();
    fill(90,184,235);
	textSize(85);
	textFont("Arial Black");
	text("RESCUER",80,150);
	stroke(0);
    
    

	// reference lines 
/*	strokeWeight(.1)
	line(300,0,300,700)
	line(0,350,600,350)
	line(0,175,600,175)
	line(0,525,600,525)
	line(150,0,150,700)
	line(450,0,450,700) */
   
    // cat 

    noStroke();
    fill(102,62,21);
    
    push();

        translate(xC,yC);
        rotate(rotateC); 
        rotateC += PI/100;
    //   scale(scaleC);

        ellipse(2,-35,30,28);
        ellipse(0,0,25,55);
        ellipse(-13,10,13,15);
        push();
            translate(-18,10);
            rotate(-PI/9);
            ellipse(0,0,6,18);
        pop(); 
        
        push();
            translate(-22,-3);
            rotate(-PI/8);
            ellipse(0,0,6,33);
        pop();
        
        push();
            translate(-28,-20);
            rotate(-PI/20);
            ellipse(0,0,5,15);
        pop();

        push();
            translate(-1,-55);
            rotate(PI/2.1);
            scale(scaleE);
            triangle(0,125,75,0,150,125);
        pop(); 
        
        push();
            translate(3,-40);
            rotate(-PI/2.1);
            scale(scaleE);
            triangle(0,125,75,0,150,125);

        pop(); 

        fill(255);
        ellipse(-4,-35,6.5,6.5);
        ellipse(9,-35,6.5,6.5);
        fill(90,184,235);
        ellipse(-5,-36,3.5,3.5);
        ellipse(8,-36,3.5,3.5);
    
    pop();

    yC += 2.5; 
    stroke(0);

	// background
	noStroke();
	fill(90,184,235);
	rect(0,455,600,28);
 	fill(112,102,137);
	//rect(0,625,63,100);
	//rect(500,620,100,90);
	rect(505,200,100,120);
	rect(-18,200,100,120);
	stroke(0);
	
    //head
    noStroke();
    fill(255,148,142);
    push();
    translate(250,285);
    rotate(PI/8);
    ellipse(0,0,50,55);
    pop(); 
    stroke(0);

    //hair
    noStroke();
    fill(102,62,21);
    push();
    translate(242,274);
    rotate(PI/3.8);
    ellipse(0,0,25,35);
    pop(); 

    push();
    translate(260,271);
    rotate(PI/1.5);
    ellipse(0,0,25,40);
    pop();
    stroke(0);
    noFill();
   
    // nose 
    noStroke();
    fill(255,148,142);
    push();
    translate(240,285);
    rotate(PI/10);
    scale(scaleN);
    triangle(300,-100,450,125,150,125);
    pop();
    noFill();
    // first shoe
	fill(102,62,21);
	beginShape();
	curveVertex(100,428);
	curveVertex(100,428);
	curveVertex(113,428);
	curveVertex(110,445);
	curveVertex(115,448);
	curveVertex(119,449);
	curveVertex(120,455);
	curveVertex(99,452);
	curveVertex(100,428);
	curveVertex(100,428);
	endShape();

	// first leg
	noStroke()
	fill(255,148,142);
	beginShape();
	curveVertex(120,428);
	curveVertex(120,428);
	curveVertex(125,440);
	curveVertex(154,455);
	curveVertex(165,445); 
 	curveVertex(161,430); 
 	curveVertex(145,430);
 	curveVertex(120,428);
 	curveVertex(120,458);
//	curveVertex(165,435); 
//	curveVertex(165,435);
	endShape();
	stroke(0);

    
    // pants
    fill(102,62,21);
    beginShape();
    curveVertex(140,370);
    curveVertex(140,370);
    curveVertex(120,390);
    curveVertex(143,428);
    curveVertex(200,428);
    curveVertex(210,400);
    curveVertex(150,390);
    curveVertex(140,370);
    curveVertex(140,370);
    endShape();
    noFill();

    

    //second leg
    noStroke();
    fill(255,148,142);
    push();
    translate(214,424);
    rotate(PI/10);
    ellipse(0,0,17,45);
    pop();
    
    push();
    translate(205,397);
    rotate(PI/10);
    rect(0,0,16,45);
    pop();
    noFill();

    ellipse(600,200,20,20);

    //right hand
    fill(255,148,142);
 	ellipse(255,448,30,14);
    fill(255);
    ellipse(252,453,7,4);
    ellipse(254,453,4,4);
 	stroke(0);

    //left hand 
    noStroke();
    push();
    fill(255,148,142);
    translate(308,355);
    rotate(PI/2.5);
    ellipse(0,0,13,35);
    pop();
    noFill();

    push();
    fill(255,148,142);
    translate(304,364);
    rotate(-PI/2.1);
    ellipse(0,0,6,35);
    pop();
    fill(255,148,142);
    ellipse(306,360,10);
    noFill();

    stroke(0);



    // sweater
/*    noFill();
    beginShape();
    curveVertex(140,370);
    curveVertex(140,370)
    curveVertex(150,400)
    curveVertex(185,400)
    curveVertex(280,370)
    curveVertex(280,370)
    endShape(); */
    noStroke();
    fill(90,184,235);
    ellipse(141,375,20,20);

    push();
    translate(160,393);
    rotate(-PI/2.8);
    ellipse(0,0,20,60);
    pop();

    push();
    translate(200,290);
    rotate(PI/4.5);
    rect(0,0,65,100);
    pop();

    push();
    translate(228,320);
    rotate(-PI/4);
    ellipse(0,0,50,80);
    pop();
 	
    ellipse(230,350,20,10);

    rect(233,330,28,113);


    push();
    translate(230,340);
    rotate(-PI/3);
    rect(0,0,25,65);
    pop(); 
 	fill(255);
    stroke(0);
	
 	
 	// second leg part 2
 	noStroke();
 	fill(102,62,21);
 	push();
 	translate(200,414);
 	rotate(PI/10);
 	ellipse(0,0,15,33);
 	pop();
 	fill(255);
 	stroke(0);

 	// second shoe
 	fill(102,62,21);
 	beginShape();
 	curveVertex(185,454);
 	curveVertex(185,454);
 	curveVertex(225,454);
 	curveVertex(222,446);
 	curveVertex(211,448);
 	curveVertex(188,445);
 	curveVertex(185,454);
 	curveVertex(185,454);
 	endShape();
 	fill(255);


    //face
    fill(102,62,21);
    push();
    translate(268,295);
    rotate(PI/7);
    ellipse(0,0,1.8,5.8);
    pop();

    push();
    translate(260,305);
    rotate(-PI/3);
    ellipse(0,0,1.5,5.5);
    pop();


   
}

function DrawDistrait()
{
	//Background color


	//Creates the stop sign in the background
	noStroke();

	push();
		translate(transX, transY);

		scale(scaleFactor);
	
		//Stop signs bar
		fill(130,190,200);
		rect(0, -325, 12, 325);

		//Main part of sign
		fill(235, 70, 0);
		ellipse(6,-360,70);

		//Inner part of sign
		fill(255, 240, 190);
		rect(-14, -366, 40, 12);
		
/*
		translate(306, 388);

		//Stop signs bar
		fill(130,190,200);
		//rect(300, 225, 12, 325);


		//Main part of sign
		fill(235, 70, 0);
		ellipse(305, 200, 70, 70);

		//Inner part of sign
		fill(255, 240, 190);
		rect(285, 195, 40, 12);
*/

	pop();
		/*
		Uncomment for gridlines on the image

			fill(0,0,0, 150);
			rect(50, 0, 1, height);
			rect(100, 0, 1, height);
			rect(150, 0, 1, height);
			rect(200, 0, 1, height);
			rect(250, 0, 1, height);
			rect(300, 0, 1, height);
			rect(350, 0, 1, height);
			rect(400, 0, 1, height);

			rect(0, 50, width, 1);
			rect(0, 100, width, 1);
			rect(0, 150, width, 1);
			rect(0, 200, width, 1);
			rect(0, 250, width, 1);
			rect(0, 300, width, 1);
			rect(0, 350, width, 1);
			rect(0, 400, width, 1);
			rect(0, 450, width, 1);
			rect(0, 500, width, 1);
			rect(0, 550, width, 1);
		*/

	//Creates the text for the image using the font Courier
	//Text is "Un Distrait"
	fill(130,190,200);

	textSize(60);
	//textFont("Courier");
	textFont("Trebuchet MS");
	textStyle(BOLD);
	text("UN", 30, 90);

	textSize(75);
	text("DISTRAIT", 30, 150);

	

	if(!reachedPeak){
		transCounter += transSpeed;
		if (transCounter == 75)
			reachedPeak = true;
	}
	else if(reachedPeak){
		transCounter -= transSpeed;
		if (transCounter == 0){
			reachedPeak = false;
		}
	}



	//Making the transparent police guard in the background
	fill(0, 0, 0, transCounter);

	beginShape();

		//The head of the police
		curveVertex(155, 180);
		curveVertex(151, 176);
		curveVertex(152, 173);
		curveVertex(157, 170);
		curveVertex(163, 168);
		curveVertex(169, 165);
		curveVertex(178, 162);
		curveVertex(187, 161);
		curveVertex(195, 161);
		curveVertex(200, 161);
		curveVertex(203, 170);
		curveVertex(198, 179);
		curveVertex(202, 187);
		curveVertex(205, 192);
		curveVertex(202, 197);
		curveVertex(192, 197);
		curveVertex(192, 200);
		curveVertex(195, 206);
		curveVertex(198, 208);
		curveVertex(202, 213);
		curveVertex(200, 220);

		//More of the lower body
		curveVertex(197, 227);
		curveVertex(207, 236);
		curveVertex(229, 242);
		curveVertex(247, 245);
		curveVertex(261, 253);
		curveVertex(267, 277);
		curveVertex(266, 301);
		curveVertex(255, 326);
		curveVertex(251, 357);
		curveVertex(249, 399);
		curveVertex(255, 434);
		curveVertex(261, 456);
		curveVertex(265, 508);
		curveVertex(267, 543);
		curveVertex(238, 555);
		curveVertex(227, 558);
		curveVertex(246, 565);
		curveVertex(251, 571);
		curveVertex(243, 577);
		curveVertex(219, 572);
		curveVertex(209, 576);
		curveVertex(194, 544);
		curveVertex(162, 540);
		curveVertex(156, 561);
		curveVertex(155, 567);
		curveVertex(142, 564);
		curveVertex(132, 572);
		curveVertex(110, 578);
		curveVertex(102, 571);
		curveVertex(117, 560);
		curveVertex(124, 556);
		curveVertex(115, 532);
		curveVertex(102, 528);
		curveVertex(102, 481);
		curveVertex(115, 469);
		curveVertex(110, 438);
		curveVertex(111, 425);
		curveVertex(110, 398);
		curveVertex(80, 393);
		curveVertex(66, 382);
		curveVertex(68, 343);
		curveVertex(74, 320);
		curveVertex(91, 263);
		curveVertex(110, 246);
		curveVertex(137, 244);
		curveVertex(155, 244);
		curveVertex(155, 223);
		curveVertex(155, 199);
		curveVertex(155, 184);

	endShape();



	push();
		//Creating the main portion of the body
		fill(115, 65, 0);

		beginShape();

			curveVertex(223,271);
			curveVertex(202,275);
			curveVertex(195,279);
			curveVertex(192,284);
			curveVertex(185,319);
			curveVertex(180,363);
			curveVertex(179,383);
			curveVertex(185,402);
			curveVertex(193,418);
			curveVertex(177,430);
			curveVertex(198,460);
			curveVertex(204,461);
			curveVertex(207,457);
			curveVertex(215,452);
			curveVertex(218,453);
			curveVertex(219,460);
			curveVertex(224,490);
			curveVertex(218,490);
			curveVertex(191,482);
			curveVertex(185,495);
			curveVertex(186,513);
			curveVertex(190,522);
			curveVertex(200,524);
			curveVertex(203,515);
			curveVertex(193,512);
			curveVertex(195,502);
			curveVertex(230,520);
			curveVertex(230,520);
			curveVertex(236,519);
			curveVertex(246,499);
			curveVertex(251,478);
			curveVertex(264,492);
			curveVertex(279,508);
			curveVertex(320,555);
			curveVertex(330,547);
			curveVertex(332,537);
			curveVertex(332,522);
			curveVertex(329,508);
			curveVertex(320,511);
			curveVertex(320,523);
			curveVertex(312,511);
			curveVertex(303,500);
			curveVertex(268,436);
			curveVertex(279,418);
			curveVertex(285,390);
			curveVertex(281,341);
			curveVertex(269,282);
			curveVertex(254,274);
			curveVertex(237,270);
			curveVertex(229,270);

		endShape();


		//Creating the green shirt
		fill(115, 135, 5);
		rect(224, 266, 20, 140);


		//Creating the face
		fill(245, 90, 80);

		beginShape();
				
			curveVertex(222,265);
			curveVertex(227,267);
			curveVertex(232,267);
			curveVertex(237,267);
			curveVertex(242,265);
			curveVertex(243,258);
			curveVertex(245,251);
			curveVertex(245,243);
			curveVertex(244,235);
			curveVertex(237,233);
			curveVertex(229,232);
			curveVertex(223,235);
			curveVertex(221,240);
			curveVertex(221,244);
			curveVertex(220,247);
			curveVertex(215,249);
			curveVertex(214,249);
			curveVertex(214,252);
			curveVertex(215,252);
			curveVertex(219,253);
			curveVertex(219,257);

		endShape();

		//Creating the hair
		fill(100, 55, 5);
		
		beginShape();

			curveVertex(225,232);
			curveVertex(228,231);
			curveVertex(236,231);
			curveVertex(237,231);
			curveVertex(240,232);
			curveVertex(244,234);
			curveVertex(246,238);
			curveVertex(246,243);
			curveVertex(245,250);
			curveVertex(243,258);
			curveVertex(241,250);
			curveVertex(238,247);
			curveVertex(235,249);
			curveVertex(234,245);
			curveVertex(234,240);
			curveVertex(231,237);
			curveVertex(224,235);

		endShape();

		//Making the white part of his shoe
		fill(255,245,220);

		beginShape();

			curveVertex(321,524);
			curveVertex(322,515);
			curveVertex(325,509);
			curveVertex(328,515);
			curveVertex(329,532);
			curveVertex(325,551);
			curveVertex(320,532);

		endShape();


	pop();
}
