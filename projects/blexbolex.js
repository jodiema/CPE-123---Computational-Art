function setup() {
	createCanvas(600,700);
}
// add semicolons
function draw() {
	// nose
    var scaleN = 0.08;

    // cat ears
    var scaleE = 0.1;

    // cat
    var scaleC = 2;
    var xC = -450;
    var yC = -455;

    background(255);

    

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

    //    translate(xC,yC);
    //   scale(scaleC);

        ellipse(460,405,30,28);
        ellipse(458,440,25,55);
        ellipse(445,450,13,15);
        push();
            translate(440,450);
            rotate(-PI/9);
            ellipse(0,0,6,18);
        pop();
        
        push();
            translate(436,437);
            rotate(-PI/8);
            ellipse(0,0,6,33);
        pop();
        
        push();
            translate(430,420);
            rotate(-PI/20);
            ellipse(0,0,5,15);
        pop();

        push();
            translate(457,385);
            rotate(PI/2.1);
            scale(scaleE);
            triangle(0,125,75,0,150,125);
        pop();
        
        push();
            translate(461,400);
            rotate(-PI/2.1);
            scale(scaleE);
            triangle(0,125,75,0,150,125);

        pop(); 

        fill(255);
        ellipse(454,405,6.5,6.5);
        ellipse(467,405,6.5,6.5);
        fill(90,184,235);
        ellipse(453,404,3.5,3.5);
        ellipse(466,404,3.5,3.5);
    
    pop();

    stroke(0);

	// background
	noStroke();
	fill(90,184,235);
	rect(0,455,600,28);
 	fill(112,102,137);
	rect(0,625,63,100);
	rect(500,620,100,90);
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