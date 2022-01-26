//The MIT License (MIT)

// Copyright (c) 2016 Martin Schneider @bitcraftlab

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
class rects {
  constructor (x, y, hue, id) {
    this.x = x;
    this.y = y;
    this.hue = hue;
    this.id=id;
  }

  show() {
    fill(11,22,33)
    rect(this.x, this.y, 80, 80)
  }

  
}


// gui params
var myAngle = 30;
var myColor = '#eeee00';

var gui;
var rectangles = [];
let counter;

function setup() {

  createCanvas(windowWidth, windowHeight);

  // Create the GUI
  sliderRange(0, 90, 1);
  gui = createGui('p5.gui');
  gui.addGlobals('myColor', 'myAngle');
  counter = 0;

  // Only call draw when then gui is changed
  // noLoop();
  for (i = 0; i < 500; i+=150) {
   
  
    rectangles.push (
      new rects (
      i + 200,
      200,
      (250, 202, 233),
      counter += 1
      )
      // new rects (
      //   i+ 200,
      //   350,
      //   (11, 22, 33),
      //   counter += 1
      //   )
      // ,
      // new rects (
      //   i+ 200,
      //   500,
      //   (11, 22, 33),
      //   counter += 1
      //   )
    )
  }
}


function draw() {

  // this is a piece of cake
  background(0);
  fill(myColor);
  angleMode(DEGREES);
  arc(mouseX, mouseY, 100, 100, myAngle/2, 360 - myAngle/2, PIE);


  
  //map is faster then for loop drawing
  rectangles.map((rects)=> rects.show())

  // print(rectangles)
  for ( const rect of rectangles){
    console.log(rect.x,typeof rect.x)
    let d=dist(rect.x,rect.y,mouseX,mouseY)
    if (d<=80){
      rectangles.splice(rectangles.indexOf(rect),1)
      // console.log("eat!")
    }
  }
  
}


// dynamically adjust the canvas to the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


