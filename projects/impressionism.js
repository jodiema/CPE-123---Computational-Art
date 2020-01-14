function setup() {

    createCanvas(600, 850);
    background(255);
    noStroke();
    smooth();
    stroke(0,0,50);
    strokeWeight(20);
    line(0,10,600,0);
    noStroke();
    drawGround();
    drawGround2();
    drawBackground();
    drawMoon();
    drawExtraLight2();
    drawExtraLight();
    drawLight();
    drawLight2();
    drawLight3();
    drawInside3();
    drawInside4();
    drawInside5();
    drawInside6();
    drawInside2();
    drawInside();


    // reference lines 
    stroke(25);
    strokeWeight(15);
    line(0,740,width+30,495);
    strokeWeight(1);
    //line(0,700,width,700);

    //line(370,height,width,500);

    fill(40,0,100);
    noStroke();
    //triangle(0,740,width+30,495,0,600);
    stroke(0);
    noFill();

    drawLightPoles()


}

function drawLight() {
    for (var y=0; y < height; y+=25) {
        for (var x=0; x < width; x+=10) {
            if (impl_circ(width/5, height/3.2, 180, x, y) < 0) {
                fill(300+random(-50,50),120+random(-35,35),0,160);
            } else {
                noFill();
            }
            ellipse(x+random(-2,2), y+random(-2,2),random(20,70),random(23,42));
        }
    } 
}


function drawLight2() {
    for (var y=0; y < height; y+=25) {
        for (var x=0; x < width; x+=10) {
            if (impl_circ(350, 320, 85, x, y) < 0) {
                fill(300+random(-50,50),120+random(-35,35),0,160);
            } else {
                noFill();
            }
            ellipse(x+random(-2,2), y+random(-2,2),random(20,70),random(23,42));
        }
    } 
}

function drawLight3() {
    for (var y=0; y < height; y+=25) {
        for (var x=0; x < width; x+=10) {
            if (impl_circ(470, 360, 55, x, y) < 0) {
                fill(300+random(-50,50),120+random(-35,35),0,160);
            } else {
                noFill();
            }
            ellipse(x+random(-2,2), y+random(-2,2),random(20,70),random(23,42));
        }
    } 
}

function drawExtraLight() {
    for (var y=0; y < height; y+=25) {
        for (var x=0; x < width; x+=10) {
            if (impl_circ(width/9, height/1.8, 100, x, y) < 0) {
                fill(300+random(-50,50),150+random(-35,35),0,160);
            } else {
                noFill();
            }
            ellipse(x+random(-2,2), y+random(-2,2),random(20,70),random(23,42));
        }
    } 
}

function drawExtraLight2() {
    for (var y=0; y < height; y+=25) {
        for (var x=0; x < width; x+=10) {
            if (impl_circ(width/12, height/13, 85, x, y) < 0) {
                fill(250+random(-50,50),70+random(-35,35),0,160);
            } else {
                noFill();
            }
            ellipse(x+random(-2,2), y+random(-2,2),random(20,70),random(23,42));
        }
    } 
}


function drawInside(){
    for (var y1=0; y1 < height; y1+=15) {
        for (var x1=0; x1 < width; x1+=15) {
            if (impl_circ(width/5, height/3.2, 70, x1, y1) < 0) {
                fill(300+random(-50,50),190+random(-35,35),0,random(160));
            } else {
                noFill();
            }
            ellipse(x1+random(-2,2), y1+random(-2,2),random(20,70),random(23,42));
        }
    } 
}

function drawInside2(){
    for (var y1=0; y1 < height; y1+=15) {
        for (var x1=0; x1 < width; x1+=15) {
            if (impl_circ(350, 320, 54, x1, y1) < 0) {
                fill(300+random(-50,50),190+random(-35,35),0,random(160));
            } else {
                noFill();
            }
            ellipse(x1+random(-2,2), y1+random(-2,2),random(20,40),random(23,42));
        }
    } 
}

function drawInside3(){
    for (var y1=0; y1 < height; y1+=15) {
        for (var x1=0; x1 < width; x1+=15) {
            if (impl_circ(470, 360, 40, x1, y1) < 0) {
                fill(300+random(-50,50),190+random(-35,35),0,random(160));
            } else {
                noFill();
            }
            ellipse(x1+random(-2,2), y1+random(-2,2),random(20,40),random(23,42));
        }
    } 
}

function drawInside4(){
    for (var y1=0; y1 < height; y1+=15) {
        for (var x1=0; x1 < width; x1+=15) {
            if (impl_circ(520, 380, 35, x1, y1) < 0) {
                fill(300+random(-50,50),190+random(-35,35),0,random(160));
            } else {
                noFill();
            }
            ellipse(x1+random(-2,2), y1+random(-2,2),random(20,40),random(23,42));
        }
    } 
}

function drawInside5(){
    for (var y1=0; y1 < height; y1+=15) {
        for (var x1=0; x1 < width; x1+=15) {
            if (impl_circ(560,400, 30, x1, y1) < 0) {
                fill(300+random(-50,50),190+random(-35,35),0,random(160));
            } else {
                noFill();
            }
            ellipse(x1+random(-2,2), y1+random(-2,2),random(20,40),random(23,42));
        }
    } 
}

function drawInside6(){
    for (var y1=0; y1 < height; y1+=15) {
        for (var x1=0; x1 < width; x1+=15) {
            if (impl_circ(590,420, 32, x1, y1) < 0) {
                fill(300+random(-50,50),190+random(-35,35),0,random(160));
            } else {
                noFill();
            }
            ellipse(x1+random(-2,2), y1+random(-2,2),random(20,40),random(23,42));
        }
    } 
}

function drawLightPoles(){

    // poles 
    stroke(0,0,50);
    strokeWeight(8);
    line(width/5,height/3.2,width/5,640);
    strokeWeight(5);
    line(350,320,350,570);
    strokeWeight(4);
    line(470,360,470,540);
    strokeWeight(3);
    line(520,380,520,525);
    strokeWeight(2.5);
    line(560,400,560,513);
    line(590,420,590,506);
    noStroke(); 

    // light bulbs
    fill(255,255,0);
    ellipse(width/5,height/3.2,60);
    ellipse(350,320,50);
    ellipse(470,360,40);
    ellipse(520,380,30);
    ellipse(560,400,20);
    ellipse(590,420,10);
    noFill();


}

function drawBackground(){
    var d, res1;


    for (var y=5; y<height; y+=5)
    {
        for (var x=5; x<width; x+=10)
        {
            d = distance(x, y, x, -200);
            res1 = imp_line(x, y, width+30,450,0,600);
            if (res1 < 0)
                noFill();   
            else
                fill(0, 0, 200+random(-50,50)-d/5,150);

            //ellipse(x+random(-2,2), y+random(-2,2), random(30,52),random(30,52));
            ellipse(x+random(-2,2), y+random(-2,2)+10, random(10,75),random(5,22));
        }
    }
}

function drawGround(){

    var d, res1;


    for (var y=5; y<height; y+=5)
    {
        for (var x=5; x<width; x+=10)
        {
            d = distance(x, y, x, height);
            res1 = imp_line(x, y, 370,height,width-30,500);
            if (res1 < 0)
                fill(random(20,70),0,70,250);
            //fill(300+random(-50,50),80+random(-35,35),0,160);
            else
                fill(random(0,47),0,70,250);
            //fill(0, 0, 200+random(-50,50),random(180,255));
            ellipse(x+random(-2,2), y+random(-2,2)+10, random(10,72),random(5,22));
        }
    }
}

function drawGround2(){

    var d, res1;


    for (var y=5; y<height; y+=5)
    {
        for (var x=5; x<width; x+=10)
        {
            d = distance(x, y, x, height);
            res1 = imp_line(x, y, 0,723,width+30,478);
            if (res1 < 0)
                fill(random(20,50));
            else
                noFill();
            ellipse(x+random(-2,2), y+random(-2,2)+10, random(10,72),random(5,22));
        }
    }
}

function drawMoon(){
    for (var y1=0; y1 < height; y1+=6) {
        for (var x1=0; x1 < width; x1+=10) {
            d = distance(470, 120, x1, y1);
            if (impl_circ(470, 120, 80, x1, y1) < 0) {
                //fill(300+random(-50,50,190+random(-35,35)-d,0,random(160));
                fill(200-d*2.8,200-d*3,255-d*2.8,150);
            } else {
                noFill();
            }
            ellipse(x1+random(-2,2), y1+random(-2,2),random(10,72),random(5,22));
        }
    } 
}



function impl_circ(cx, cy, radi, in_x, in_y) {
    return ((in_x-cx)*(in_x-cx) + (in_y-cy)*(in_y-cy) - radi*radi);
}

function imp_line(x, y, x0, y0, x1, y1)
{
    return (y0-y1)*x + (x1-x0)*y + x0*y1 - x1*y0;
}

function distance(x0, y0, x1, y1)
{
    return sqrt(pow(x0-x1, 2) + pow(y0-y1, 2));
}
