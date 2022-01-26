class girls {
  constructor (x, y, xSpeed, ySpeed, dress) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.dress = dress;
  }
  front (){
    if (this.y < 410) {
      this.y += this.ySpeed;
      return this.y;
    }
  }
  left (){
    if (this.y >= 410) {
      this.x -= this.xSpeed;
    }
  }

  right (){
    if (this.y >=410) {
      this.x +=this.xSpeed;
    }
  }  
  

  show (){
    noStroke();
    fill (126, 201, 222);
    ellipse (this.x, this.y, 100, 100)
  }
}

class boys {
  constructor (x, y, xSpeed, ySpeed, dress) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.dress = dress;
  }
  front (){
    if (this.y > 790) {
      this.y -= this.ySpeed;
      return this.y;
    }
  }
  left (){
    if (this.y <= 790) {
      this.x -= this.xSpeed;
    }
  }

  right (){
    if (this.y <=790) {
      this.x +=this.xSpeed;
    }
  }  
  

  show (){
    noStroke();
    fill (136, 145, 245);
    ellipse (this.x, this.y, 100, 100)
  }
}

let girls1;
let girls2;
let girls3;
let girls4;
let girls5;
let boys1;
let boys2;
let boys3;
let boys4;
let boys5;

function setup() {
  createCanvas(1200, 1200);
  girls1 = new girls (200, 200, 3, 3);
  girls2 = new girls (400, 200, 3, 3);
  girls3 = new girls (600, 200, 3, 3);
  girls4 = new girls (800, 200, 3, 3);
  girls5 = new girls (1000, 200, 3, 3);
  boys1 = new boys (200, 1000, 3, 3);
  boys2 = new boys (400, 1000, 3, 3);
  boys3 = new boys (600, 1000, 3, 3);
  boys4 = new boys (800, 1000, 3, 3);
  boys5 = new boys (1000, 1000, 3, 3);
}

function draw() {
  //background dance floor set up//
  background(0);
  push();
  fill(255);
  rotate(PI/4);
  translate (-100,-700)
  const square_size=200
  const num_row = 8
  const num_col = 2*num_row
  var posX = 0
  var posY = 0
  for(var i = 0; i < num_row; i++) {
    posX=0  
    for(var j = 0; j < num_col; j++)
        if (i % 2 != 0)
          {
  
          rect( posX+200, posY,square_size, square_size);
          posX += square_size*2
          
          } 
          else{
            rect( posX, posY,square_size, square_size);
            posX += square_size*2
            
          }
          posY += square_size
  }
  pop();
  
  //Let's dance!!!!!!!
  let dancetime = millis ();
  if (dancetime <2000){
    girls1.front();
    girls1.left();
    girls2.front();
    girls2.left();
    girls3.front();
    girls3.left();
    girls4.front();
    girls4.left();
    girls5.front();
    girls5.left();
    boys1.front();
    boys1.left();
    boys2.front();
    boys2.left();
    boys3.front();
    boys3.left();
    boys4.front();
    boys4.left();
    boys5.front();
    boys5.left();
  } else if (dancetime >=2000 && dancetime < 3900) {
    girls1.right();
    girls2.right();
    girls3.right();
    girls4.right();
    girls5.right();
    boys1.right();
    boys2.right();
    boys3.right();
    boys4.right();
    boys5.right();
  } else if (dancetime >= 3900 && dancetime < 5000) {
    girls1.left();
    girls2.left();
    girls3.left();
    girls4.left();
    girls5.left();
    boys1.left();
    boys2.left();
    boys3.left();
    boys4.left();
    boys5.left();
  }

  girls1.show();
  girls2.show();
  girls3.show();
  girls4.show();
  girls5.show();
  boys1.show();
  boys2.show();
  boys3.show();
  boys4.show();
  boys5.show();
  

}
    