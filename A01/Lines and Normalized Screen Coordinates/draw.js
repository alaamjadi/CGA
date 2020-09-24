function draw() {
    // line(x1,y1, x2,y2)
    // draws a line from a point at Normalized screen coordinates x1,y1 to Normalized screen coordinates x2,y2

    // Here there are only three lines command, but to obtain the car you will need 8 of them
    line(-0.5, -0.3, -0.5, 0);
    line(0.5, -0.3, 0.5, 0);
    line(0.5, -0.3, -0.5, -0.3);
    line(-0.5, 0, -0.2, 0.1);
    line(0.5, 0, 0.3, 0.1);
    line(0.3, 0.1, 0.3, 0.3);
    line(-0.2, 0.1, -0.2, 0.3);
    line(-0.2, 0.3, 0.3, 0.3);
}

/*
function draw2() {
    //this function is to draw a circle
    for (i = 0; i < 360; i++) {
       line(0.8 * Math.cos(i), 0.8 * Math.sin(i), 0.8 * Math.cos(i + Math.PI / 64), 0.8 * Math.sin(i + Math.PI / 64));
    }
}
*/
///*
function draw2() {
    // Big and two small complete circles
    for (i = 0; i < 360; i++) {
        line(0.8 * Math.cos(i), 0.8 * Math.sin(i), 0.8 * Math.cos(i + Math.PI / 64), 0.8 * Math.sin(i + Math.PI / 64));
        line(0.1 * Math.cos(i), 0.4+0.1 * Math.sin(i), 0.1 * Math.cos(i + Math.PI / 64), 0.4+0.1 * Math.sin(i + Math.PI / 64));
        line(0.1 * Math.cos(i), -0.4+0.1 * Math.sin(i), 0.1 * Math.cos(i + Math.PI / 64), -0.4+0.1 * Math.sin(i + Math.PI / 64));
    }
    //Top medium half circle
    for (i = -70; i < 70; i++) {
        line(0.4 * Math.cos(i/45), 0.4+0.4 * Math.sin(i/45), 0.4 * Math.cos(i/45 + Math.PI / 64), 0.4+0.4 * Math.sin(i/45 + Math.PI / 64));
    }
    //Bottom medium half circle
    for (i = -210; i < -70; i++) {
        line(0.4 * Math.cos(i/45), -0.4+0.4 * Math.sin(i/45), 0.4 * Math.cos(i/45 + Math.PI / 64), -0.4+0.4 * Math.sin(i/45 + Math.PI / 64));
    }
}
//*/


/* for (i = 0; i < 360; i++) {
    x = 0.4*Math.cos(i);
    y = 0.4*Math.sin(i);
    x1 = Math.cos(i + Math.PI / 64);
    y1 = Math.sin(i + Math.PI / 64);
    if(x>0){
  line( x,y+0.4, 0.4* x1, 0.4*y1+0.4);
  }}
  
  for (i = 0; i < 360; i++) {
    x = 0.4*Math.cos(i);
    y = 0.4*Math.sin(i);
    x1 = Math.cos(i + Math.PI / 64);
    y1 = Math.sin(i + Math.PI / 64);
    if(x<0){
  line( x,y-0.4, 0.4* x1, 0.4*y1-0.4);
  }} */