
function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(255,253,206);

	fill(0);
	textSize(48)
	textFont("Georgia")

	//background
	stroke(255);
	fill(45,242,82);
	triangle(0,0,200,0,200,200);
	triangle(0,200,0,0,200,200);
	triangle(0,0,200,0,200,200);
	triangle(200,0,400,0,200,200);
	triangle(400,0,400,200,200,200);
	fill(32,203,82);
	triangle(0,100,0,200,200,200);
	fill(217,249,71);
	triangle(100,0,0,0,200,200)
	fill(248,67,50)
	triangle(300,0,200,0,200,200)
	fill(73,91,244)
	triangle(400,100,400,200,200,200)
	fill(63,164,91);
	triangle(0,200,0,400,200,200);
	fill(129,211,253);
	triangle(400,200,400,400,200,200);
	fill(255,150,73);
	triangle(200,0,100,0,200,200)
	fill(247,115,220)
	triangle(300,0,400,0,200,200)
	fill(244,75,154)
	triangle(400,0,400,100,200,200)
	
	fill(255)
	//grass
	noStroke();
	fill(85,40,248);
	rect(0,250,20,200);
	rect(20,230,20,200)
	rect(40,240,20,200)
	rect(60,250,20,200)
	rect(80,230,20,200)
	rect(100,240,20,200)
	rect(120,250,20,200)
	rect(140,230,20,200)
	rect(160,240,20,200)
	rect(180,250,20,200)
	rect(200,230,20,200)
	rect(220,240,20,200)
	rect(240,250,20,200)
	rect(260,230,20,200)
	rect(280,240,20,200)
	rect(300,250,20,200)
	rect(320,230,20,200)
	rect(340,240,20,200)
  	rect(360,250,20,200)
	rect(380,230,20,200)
	stroke(0);
	fill(124,166,255)
	rect(0,330,400,100)
	fill(240,215,169)

	// tail
	fill(248,230,159)
	arc(145,300,30,20,PI,0)
	arc(145,300,30,20,0,PI)
	// ears
	fill(240,215,169)
	ellipse(145,70,55,120)
	ellipse(260,70,55,120)
	fill(225,111,99)
	ellipse(145,70,20,60)
	ellipse(260,70,20,60)
	fill(240,215,169)


	// left arm
	push();
		translate(260,245)
		rotate(PI/4)
		ellipse(0,0,30,80)
	pop();

	// right arm 
	push();
		translate(142,245)
		rotate(-PI/4)
		ellipse(0,0,30,80)
	pop();

	// body
	rect(150,200,100,130)
	// legs
	arc(170,330,40,70,PI,0)
	arc(230,330,40,70,PI,0)

	// head
	stroke(0)
	strokeWeight(0.2)
    ellipse(200,160,190,170)
   
    fill(250)
	// whiskers
	fill(0);
	triangle(100,185,100,195,160,190)
	triangle(100,205,100,215,160,200)
	triangle(300,185,300,195,240,190)
	triangle(300,205,300,215,240,200)

	// eyes 
	fill(0);
	ellipse(160,170,25,25)
	ellipse(245,170,25,25)
	fill(255)

	//nose
	fill(225,111,99)
	ellipse(200,185,15,10)
	// eyes 

	// mouth
	fill(225,91,82)
	arc(200,200,40,40,0,PI)
	line(180,200,220,200)
	fill(255)

}
