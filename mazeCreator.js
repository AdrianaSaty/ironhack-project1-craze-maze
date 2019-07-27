
let cols, rows; 
let w = 40; 
let grid = []; 
let stack = []; 
let current; 
let frame = 0;



let canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 400;
let ctx = canvas.getContext("2d");


let background = canvas.getContext("2d");
background.fillStyle = "black";
background.fillRect(0, 0, canvas.width, canvas.height);



function init() {
  
  cols = canvas.width / w;  
  rows = canvas.height / w; 
  

     for ( let j=0; j<rows; j++ ) {
    
       for ( let i=0; i<cols; i++ ) {

        grid.push(new Cell(i, j)); 
      }
    }

    current = grid[0]; 
    current.visited = true; 
    stack.push(current); 
    current.highlight(); 
  }

function randomRangeInt(min, max) { return Math.floor(Math.random() * (max - min) + min); }

function index(i, j) {
  if ( i<0 || j<0 || i > cols-1 || j > rows-1 ) { return -1; }
 return i + j * cols;
}


function run() {

  let next = current.checkNeighbors(); 

  if (next) {

    next.visited = true; 
    stack.push(next);
    removeWall(current, next);
    current.draw();
    next.highlight();
    current = next;
  } else if (stack.length > 0) {
    current.draw();
    current = stack.pop();
    current.highlight();
  } 
}


function removeWall(current, next) {

  let xx = current.i - next.i;
  let yy = current.j - next.j;

  if (xx === 1) {
    current.wall[3] = false;
    next.wall[1] = false;
  } else if (xx === -1) {
    current.wall[1] = false;
    next.wall[3] = false;    
  }
  
  if (yy === 1) {
    current.wall[0] = false;
    next.wall[2] = false;
  } else if (yy === -1) {
    current.wall[2] = false;
    next.wall[0] = false;
  }

}


function Cell(i, j) {

  this.i = i;
  this.j = j;
  this.x = i * w;
  this.y = j * w;
  this.wall = ['true', 'true', 'true', 'true'];
  this.visited = false;


  this.checkNeighbors = () => {

    let neighbors = [];

    let top =   grid[index(i, j-1)];
    let right = grid[index(i+1, j)];
    let bot =   grid[index(i, j+1)];
    let left =  grid[index(i-1, j)];

    if ( top && !top.visited) { neighbors.push(top); }       
    if ( right && !right.visited) { neighbors.push(right); }  
    if ( bot && !bot.visited) { neighbors.push(bot); }       
    if ( left && !left.visited) { neighbors.push(left); }     

    if ( neighbors.length > 0 ) { 

      var r = randomRangeInt(0, neighbors.length); 
      return neighbors[r];
    } else {
      return undefined;
    }
  }


  this.highlight = () => { 
  
    // ctx.fillStyle = "#1a1a1a";
    ctx.fillStyle = "black";

    ctx.fillRect(this.x, this.y, w, w);
  }

  this.draw = () => {   
  
    if ( !this.visited ) {

      ctx.fillStyle = "black";
      ctx.fillRect(this.x, this.y, w, w);
    } else {

      ctx.fillStyle = "black";
      ctx.fillRect(this.x, this.y, w, w);
     
      ctx.beginPath();

      ctx.strokeStyle = '#54fd02';
      if ( this.wall[0] ) { ctx.moveTo(this.x+w, this.y);  ctx.lineTo(this.x, this.y); }
      if ( this.wall[1] ) { ctx.moveTo(this.x+w, this.y+w); ctx.lineTo(this.x+w, this.y); } 
      if ( this.wall[2] ) { ctx.moveTo(this.x, this.y+w); ctx.lineTo(this.x+w, this.y+w); } 
      if ( this.wall[3] ) { ctx.moveTo(this.x, this.y); ctx.lineTo(this.x, this.y+w); } 
      ctx.stroke();
  }
  }

} 



init(); 
setInterval(function(){ run(); }, 1);


