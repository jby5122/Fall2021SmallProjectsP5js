let factID=[];
let fact0;
let fact1;
let fact2;
let fact3;
let fact4;
let id;
let ids=[]

//fetch cat facts//
let fetchedData = fetch("https://cat-fact.herokuapp.com/facts")
.then(response => response.json())
.then(data => {
  console.log(data)
  for (i = 0; i < data.length; i++){
      factID.push([data[i],i])
  }
  // print(factID);
  return data})
.catch ((err) => {
  console.log(err)
})

function preload(){
  fact0 = loadImage ('images/wikipidia.png')
  fact1 = loadImage('images/grimace.png')
  fact2 = loadImage('images/dog.png')
  fact3 = loadImage('images/lactose.jpg')
  fact4 = loadImage('images/heartattacks.png')
}
function setup() {
  createCanvas(800, 800);
  fact0.resize(600, 600);
  fact1.resize(600, 600);
  fact2.resize(600, 600);
  fact3.resize(600, 600);
  fact4.resize(600, 600);
}

function draw() {
  background(220);
  textSize(40);
  textAlign(CENTER, CENTER);
  text("Click for random cat facts", width/2, height/2)
  imageMode(CENTER);
  // print (factID[0]);
  // text(id, 100, 100);
  print (id);
  if (id == "0") {
    image(fact0, width/2, width/2);
  } else if (id =="1") {
    image(fact1, width/2, width/2);
  } else if (id == "2") {
    image(fact2, width/2, width/2);
  } else if (id =="3") {
    image(fact3, width/2, width/2);
  } else if (id == "4") {
    image(fact4, width/2, width/2);
  }
  noLoop();

}

function mouseClicked() {
  for (i = 0; i < factID.length; i++){
    ids.push([factID[i][1].toString()])
}
  id = random (ids)
}