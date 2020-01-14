// add triangle/vertices 
function setup(){

    createCanvas(600,600);
    background(255);
    noLoop();
}

function drawFruit(x,y,fill_color,stroke_color,rot,sc){

    push();
    translate(x,y);
    rotate(rot);
    scale(sc);
    // leaf
    noStroke();
    fill(rand_color());
    push();
    translate(-270,-45)
    rotate(-PI/4);
    arc(200,200,30,20,0,PI);
    arc(200,200,30,20,PI,0);
    stroke(0);
    strokeWeight(0.6);
    line(185,200,215,200);
    line(192,200,200,190);
    line(200,200,208,191);
    line(192,200,205,208);
    line(200,200,212,205);
    // triangle(200,200,200,215,215,207.5);
    pop();

    noStroke();
    fill(noTrans());
    ellipse(0,43,70,20);
    ellipse(0,78,70,20);
    rect(-23,35,45,50);
    fill(rand_color());
    ellipse(0,0,85,70);
    fill(rand_color());
    ellipse(-17,-5,13);
    ellipse(18,-5,13);

    pop();

    //	rect(20,40,10,15);
    //	line(20,47.5,30,47.5);

}

function drawBackground(){

    var x, y, dist;
    rect(300,300,100);

    stroke(0);
    noFill();
    eL = 2
    bC = 0
    bE = 0
    for (i=0; i<1000;i++){
        strokeWeight(0.4);
        stroke(rand_color());
        ellipse(300,300,eL);
        //	rect(0,0,eL,eL);
        eL += 8;

    }
}

function draw(){

    drawBackground();
    for (c = 0; c<15; c++){
        drawFruit(random(width),random(height),rand_color,rand_color,random(2*PI),random(0.2,1.6));
    }
}

function rand_color(){
    return color(random(255),random(255),random(255),random(180,255))
}

function noTrans(){

    return color(random(255), random(255), random(255));
}


