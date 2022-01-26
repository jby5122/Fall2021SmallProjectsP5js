let ball;
let gedaya;
let kabi;
let kedaya;
let pika;
let xiaokabi;
// let yibu;
let ballstatus;

let pokeArr = [];

function preload(){
  ball = loadImage('asset/ball.png');
  openball = loadImage('asset/open ball.png')
  gedaya = [loadImage('asset/gedaya.png'), "gedaya"];
  kabi = [loadImage('asset/kabi.png'),"kabi"];
  kedaya = [loadImage('asset/kedaya.png'),'kedaya'];
  pika = [loadImage('asset/pika.png'), "pika"];
  xiaokabi = [loadImage('asset/xiaokabi.png'),"xiaokabi"];
  // yibu = loadImage('asset/yibu.png');
}

function setup() {
  stadium = loadImage('asset/background.jpg')
  createCanvas(1000, 1000);
  // imageMode(CENTER);
  ball.resize(100, 100);
  openball.resize(100,100)
  gedaya[0].resize(200, 220)
  kabi[0].resize(200, 200);
  // yibu.resize(200, 200);
  xiaokabi[0].resize(180, 200);
  kedaya[0].resize(180, 200);
  pika[0].resize(200, 200);

}

function draw() {
  background(stadium);
  textAlign(CENTER);
  textSize (60);
  text("Click for pokemon", width/2, 200);
  //ball
  if(mouseIsPressed){
    image (openball, width/2, height/2);
    } else{
  image (ball, width/2, height/2);
    }
  
  //pokemon
  for (const poke of pokeArr) {
    poke[0].move();
   
    for (const otherpoke of pokeArr) {
      //skip yourself//
      if (poke === otherpoke){
        continue;
      }

      //evolution
      // print (poke.width);
      if (poke[0].pos.dist(otherpoke[0].pos)<poke[0].width){
        if ((poke[1] == "kedaya" ) && poke[0].kind == otherpoke[0].kind){
          // print (poke[1]);
          // print(pokeArr.indexOf(poke))
          pokeArr.splice(pokeArr.indexOf(poke),1);
          pokeArr.splice(pokeArr.indexOf(otherpoke),1);
          pokeArr.push([new pokemon (
            gedaya,
            createVector(mouseX, mouseY),
            createVector(random(-10,10), random(-10,10)),
            180
          ),"gedaya"]);
        }

        if ((poke[1] == "xiaokabi" ) && poke[0].kind == otherpoke[0].kind){
          // print (poke[1]);
          // print(pokeArr.indexOf(poke))
          pokeArr.splice(pokeArr.indexOf(poke),1);
          pokeArr.splice(pokeArr.indexOf(otherpoke),1);
          pokeArr.push([new pokemon (
            kabi,
            createVector(mouseX, mouseY),
            createVector(random(-10,10), random(-10,10)),
            180
          ),"kabi"]);
        }
      }

    }
    poke[0].show();
  }
}


function mousePressed() {

  //get pokemon
    let kindname = [kedaya, xiaokabi, pika]
    pokeArr.push ([new pokemon (
      kind = random(kindname),
      createVector(mouseX, mouseY),
      createVector(random(-10,10), random(-10,10)),
      180
    ), kind[1]])

}
