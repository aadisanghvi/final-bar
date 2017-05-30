function preload() 
{
  bar = loadImage('https://dl.dropboxusercontent.com/s/xc5nemu0oosjs18/rsz_screen_shot_2017-05-22_at_82641_am.png');
  barleft = loadImage('https://dl.dropboxusercontent.com/s/5zkyi6l8vkqv89g/rsz_screen_shot_2017-05-22_at_84502_am.png?dl=0')
  glasstwo = loadImage('https://dl.dropboxusercontent.com/s/5rh6lqwcfvae4bh/empty%20glass%20with%20no%20note.png?dl=0');
  glass = loadImage('https://dl.dropboxusercontent.com/s/2shhnkvgdir2pxx/wine-glass-png-31808.png?dl=0');
  glassone =  loadImage('https://dl.dropboxusercontent.com/s/5rh6lqwcfvae4bh/empty%20glass%20with%20no%20note.png?dl=0');
  noteglass = loadImage('https://dl.dropboxusercontent.com/s/rcot13rg3mzfqc0/empty%20glass%20with%20a%20note.png?dl=0');
  calendar = loadImage('https://dl.dropboxusercontent.com/s/rm1oyuzspladcoo/Calendar%20%20%281%29.png?dl=0')
}


function setup()
{
  createCanvas(800,600);

  moveglassoneX = 500;
  moveglassoneY = 330;
  endglassoneX = 30;
  endglassoneY = 535;
  stateofglassone = 1;

  moveglasstwoX = 450;
  moveglasstwoY = 450;
  endglasstwoX = 110;
  endglasstwoY = 535;
  stateofglasstwo = 1;

  moveglassX = 300;
  moveglassY = 100;
  endglassX = 190;
  endglassY = 535;
  stateofglass = 1;
//startup canvas
  canvas = 2;
}

function draw()
{
  if (canvas == 1)
  {
    canvas1();
  }
  else if (canvas == 2)
  {
    canvas2();
  }
  else if (canvas == 3)
  {
    canvas3();
  }
  else
  {
    canvas1();
  }
}

function canvas1()
{
  background(125,125,125);
  image(bar,0,0);
  itemGrid();
  fill(125,125,125);
  rect(50,185,50,50);
  fill(255,255,255);
  text("LEFT",61,215);
  
  
  if (mouseX > 50 && mouseX < 100 && mouseY > 185 && mouseY < 235 && mouseIsPressed == true)
  {
    canvas = 2;
  }

 
  if (stateofglassone == 1)
  {
    moveglassoneX = 190;
    moveglassoneY = 320;
    image(glassone,moveglassoneX,moveglassoneY,50,50);
  }
  else if (stateofglassone == 2)
  {
    image(glassone,endglassoneX,endglassoneY,50,50);
  }

  if (stateofglasstwo == 1)
  {
    moveglasstwoX = 610;
    moveglasstwoY = 335;
    image(glasstwo,moveglasstwoX,moveglasstwoY,50,50);
  }
  else if (stateofglasstwo == 2)
  {
    image(glasstwo,moveglasstwoX,moveglasstwoY,50,50);

    {
      stateofglasstwo = 3;
    }
  }
  else if (stateofglasstwo == 3)
  {
    image(glasstwo,endglasstwoX,endglasstwoY,50,50);
  }

  if (stateofglass == 1)
  {
    moveglassX = 275;
    moveglassY = 370;
    image(noteglass,moveglassX,moveglassY,50,50);
  }
  else if(stateofglass == 2)
  {
    moveglassX = 275;
    moveglassY = 40;
    image(noteglass,moveglassX,moveglassY,300,300);

    if (!(moveglassX > endglassX && moveglassY < endglassY))
    {
      stateofglass = 5
    }
  }
  else if (stateofglass == 3)
  {
    image(noteglass,moveglassX,moveglassY,50,50);

    if (moveglassX > endglassX)
    {
      moveglassX = moveglassX - 2;
    }
    if (moveglassY < endglassY)
    {
      moveglassY = moveglassY + 8;
    }
    if (!(moveglassX > endglassX && moveglassY < endglassY))
    {
      stateofglass = 4
    }
  }
  else if (stateofglass == 4)
  {
    image(noteglass,endglassX,endglassY,50,50);
  }

else if (stateofglass == 5)
  {
    image(noteglass,endglassX,endglassY,300,300);
  }
//zoomed glass click area
  if (mouseX > 350 && mouseX < 500 && mouseY > 50 && mouseY < 350)
  {
    cursor(HAND);
    if (mouseIsPressed == true && stateofglass == 2)
    {
      stateofglass = 2;
    }
  }
  else if (mouseX > 290 && mouseX < 310 && mouseY > 360 && mouseY < 420)
  {
    cursor(HAND);
    if (mouseIsPressed == true && stateofglass == 1)
    {
      stateofglass = 2;
    }
  }
  else if (mouseX > 550 && mouseX < 650 && mouseY > 350 && mouseY < 400)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      stateofglasstwo = 2;
    }
  }
  else if (mouseX > 200 && mouseX < 250 && mouseY > 250 && mouseY < 350)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      stateofglassone = 2;
    }
  }
  else
  {
    cursor(ARROW);
  }
}

function canvas2()
{
  background(172,172,172);
  image(barleft,0,0);
  fill(255,255,255);
  rect(700,125,50,50);
  fill(0,0,0);
  text("RIGHT",705,153);
  
  if (stateofglass == 1)
  {
    moveglassX = 375;
    moveglassY = 350;
    image(calendar,moveglassX,moveglassY,50,50);
  }
  else if(stateofglass == 2)
  {
    moveglassX = 275;
    moveglassY = 40;
    image(calendar,moveglassX,moveglassY,300,300);

    if (!(moveglassX > endglassX && moveglassY < endglassY))
    {
      stateofglass = 5
    }
  }
  else if (stateofglass == 3)
  {
    image(calendar,moveglassX,moveglassY,50,50);

    if (moveglassX > endglassX)
    {
      moveglassX = moveglassX - 2;
    }
    if (moveglassY < endglassY)
    {
      moveglassY = moveglassY + 8;
    }
    if (!(moveglassX > endglassX && moveglassY < endglassY))
    {
      stateofglass = 4
    }
  }
  else if (stateofglass == 4)
  {
    image(calendar,endglassX,endglassY,50,50);
  }

  else if (stateofglass == 5)
  {
    image(calendar,endglassX,endglassY,300,300);
  }
  //zoomed glass click area
  if (mouseX > 350 && mouseX < 500 && mouseY > 50 && mouseY < 350)
  {
    cursor(HAND);
    if (mouseIsPressed == true && stateofglass == 2)
    {
      stateofglass = 2;
    }
  }
  //regular click area
  else if (mouseX >= 370 && mouseX <= 410 && mouseY >= 150 && mouseY <= 400)
  {
    cursor(HAND);
    if (mouseIsPressed == true && stateofglass == 1)
    {
      stateofglass = 2;
    }
  }

  //change canvas button
  if (mouseX >= 700 && mouseX <= 800 && mouseY >= 125 && mouseY <= 180)
  {
    cursor(HAND);
    if (mouseIsPressed)
    {
      canvas = 1;
    }
  }
  else
  {
    cursor(ARROW); 
  }

}


function itemGrid()
{
  // background for item grid
  fill(50,50,50);
  rect(10,510,780,580);

  // left most box
  fill(125,125,125);
  rect(20,520,70,70);

  // middle most box
  fill(125,125,125);
  rect(100,520,70,70);

  // right most box
  fill(125,125,125);
  rect(180,520,70,70);
}

function paintCanvasButtons()
{
  if (mouseX > myX+170 && mouseX < myX+170+100 && mouseY > myY+300 && mouseY < myY+300+50 && mouseIsPressed)
  {
    canvas = 2;
  }
}