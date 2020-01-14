function setup(){
    createCanvas(600,600);
    background(120,217,219);
    noLoop();
}


function drawRiver(){
    stroke(21,149,186);
    strokeWeight(2);
    fill(56,90,219);
    rect(-10,441,620,180)
}

function drawBrickWall(){
    var x,y,w,b1,b2,b3,b4;
    x = 0;
    y = 340;
    w = 100;
    b1 = 55;
    b2 = 27.5;
    b3 = 55;
    b4 = 27.5;
    fill(200,240);
    rect(x,y,600,w);
    line(0,y+w/4,600,y+w/4);
    line(0,y+w/2,600,y+w/2);
    line(0,y+(w/4)*3,600,y+(w/4)*3);

    stroke(0);

    while (b1 < 600 ){
        line(b1,340,b1,y+w/4);
        b1 += 55;

    }

    while (b2 < 600){
        line(b2,365,b2,y+w/2);
        b2 += 55;

    }

    while (b3 < 600){
        line(b3,390,b3,y+(w/4)*3);
        b3 += 55;
    }

    while (b4 < 600){
        line(b4,415,b4,y+w);
        b4 += 55;

    }

}



function drawHouses(fill_col, stroke_col, other_col, x, y, w, h){

    fill(fill_col, 100);
    stroke(stroke_col);
    rect(x,y,w,h);



    // windows
    stroke(255);
    strokeWeight(2.5);
    fill(stroke_col,150);
    rect(x+w/1.8, y+h/4,w/3,h/4);
    fill(other_col,150) 
    rect(x+w/9, y+h/4,w/3,h/4);

    // window 1 lines
    line(x+w/9,(y+h/4)+h/8,(x+w/9)+w/3,(y+h/4)+h/8);
    line((x+w/9)+w/6,(y+h/4),(x+w/9)+w/6,(y+h/4)+h/4);

    // window 2 lines
    line((x+w/1.8),(y+h/4)+h/8,(x+w/1.8)+w/3,(y+h/4)+h/8);
    line((x+w/1.8)+w/6,y+h/4,(x+w/1.8)+w/6,(y+h/4)+h/4);

    // door
    fill(rand_color());
    noStroke();
    rect(x+w/3,y+h/1.33,w/3.5,h/4);
    fill(rand_color());
    strokeWeight(0.5);
    // door knob
    ellipse((x+w/3)+w/4.5,(y+h/1.33)+h/8,5);
    fill(noTrans());
    // chimney
    rect(x+w/1.4,y-50,w/5,50);
    fill(noTrans());
    //rooftop
    triangle(x,y,x+w,y,x+w/2,y-50);



    stroke(0);
}


// rect(20,40,10,15);
// line(20,47.5,30,47.5);


function drawBoat(){


}


function draw(){

    // houses 
    var x, w, h;
    x = 0;
    while (x < 600)
    {
        h = random(100,200);
        w = random(80,100);

        if (w+x > 600)
            w = 600-x;

        drawHouses(rand_color(),rand_color(),rand_color(),x,250-h,w,h);
        drawHouses(noTrans(),noTrans(),noTrans(),x,350-h,w,h);

        x += w;



    }

    drawBrickWall();
    drawRiver();
    drawBoat();

} 



function rand_color(){

    return color(random(255), random(255), random(255),random(100,255));
}

function noTrans(){

    return color(random(255), random(255), random(255));
}

