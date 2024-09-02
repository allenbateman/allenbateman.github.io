
var r=205,g=20,b=100;
var r1=20,g1=100,b1=205;

var coffset = 80;

var sizex, sizey, size;
var res = 10;

function setup() {
  let canvasContainer = select('#root');
  let canvas = createCanvas(canvasContainer.width, canvasContainer.height);
  canvas.parent('root');
  background(200);
  frameRate(24);
  sizex = size = width / res;
  sizey = height / res;
}

function draw() {
  var x = floor(random(res));
  var y = floor(random(res));

  fill(random(r, r + coffset), random(g, g + coffset), random(b, b + coffset));
  square(x * size, y * size, size);

  fill(random(r1, r1 + coffset), random(g1, g1 + coffset), random(b1, b1 + coffset));
  circle(x * sizex + (sizex * 0.5), y * sizex + (sizex * 0.5), random(25,35));
}


