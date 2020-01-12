var max_theta;
var max_theta2;
var k = 4/3;
var k2 = 2;
var theta;
var theta2;



var rStroke;


function setup(){
	createCanvas(700,700);
	background(0);
	fill(255);
	noStroke();
	theta = 0;
	theta2 = 0;
	rStroke = 0;
	max_theta = 0;
	max_theta2 = 0;

}

function drawPattern(sc,col){

	var x,y;
	red = 255;
	blue = 0;
	push();
	translate(width/2,height/2);
	scale(sc);
	
	for (theta = 0; theta < max_theta; theta += PI/900){
	
	x = cos(k*theta)*sin(theta);
	y = cos(k*theta)*cos(theta);

	fill(col);
	ellipse(x,y,rStroke);
	

	}

	max_theta += PI/50;

	
	if (rStroke < 0.12){

	rStroke += 0.0005;

	}

	

	pop();

}

function drawFlower(scl,rot,sp){

	var x2,y2;


	push();

	translate(width/2,height/2);
	scale(scl);
	rotate(rot);
	
	for (theta2 = 0; theta2 < max_theta2; theta2 += PI/1200){
	
	x2 = cos(k2*theta2)*sin(theta2);
	y2 = cos(k2*theta2)*cos(theta2);
	fill(200,0,0,100);
	ellipse(x2,y2,rStroke);


	if (rStroke < 0.0001){

	rStroke += 0.0001;

	}
	
	
/*	// rStroke = 0.004
	while (rStroke < 0.01){
	rStroke += 0.0000011;
		}*/

	

	} 


	max_theta2 += sp;




	pop();
	//fill(255);

}



function draw(){


drawFlower(250,0,PI/30);
drawFlower(350,PI/4,PI/2000);
drawPattern(90,color(200,0,255,255));
drawPattern(70,color(255,0,205,255));
drawPattern(30,color(0));
//drawPattern(210);
//drawPattern(190);
//drawPattern(200);


}


// change width