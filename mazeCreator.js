
let cols, rows; 
let w = 40; 
let grid = []; 
let stack = []; 
let current; 
let start = false;

let canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 400;
let ctx = canvas.getContext("2d");

let background = canvas.getContext("2d");
background.fillStyle = "black";
background.fillRect(0, 0, canvas.width, canvas.height);


class Cell {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        this.x = i * w;
        this.y = j * w;
        this.wall = ['true', 'true', 'true', 'true'];
        this.visited = false;
      }

  checkNeighbors() {

    let neighbors = [];

    let top =   grid[index(this.i, this.j-1)];
    let right = grid[index(this.i+1, this.j)];
    let bot =   grid[index(this.i, this.j+1)];
    let left =  grid[index(this.i-1, this.j)];

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


  highlight() { 
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, w, w);
  }

  draw()  {   
    if ( !this.visited ) {
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, w, w);
    } else {
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, w, w);
        ctx.beginPath();
        ctx.strokeStyle = '#54fd02';
    //top line
    if( this.wall[0] ) {
        ctx.moveTo(this.x, this.y); 
        ctx.lineTo(this.x+w, this.y);
    }
    //right line
    if( this.wall[1] ) {
        ctx.moveTo(this.x+w, this.y);
        ctx.lineTo(this.x+w, this.y+w);
    }
    //botton line
    if(this. wall[2] ) {
        ctx.moveTo(this.x+w, this.y+w);
        ctx.lineTo(this.x, this.y+w);
    }
    //left line
    if( this.wall[3] ) {
        ctx.moveTo(this.x, this.y+w);
        ctx.lineTo(this.x, this.y);
    }
    ctx.stroke();
    }
  }

} 

class Player {
    constructor(width, height, color, x, y) {
      this.width = width;
      this.height = height;
      this.color = color;
      this.x = x;
      this.y = y;
      this.speedX = 0;
      this.speedY = 0;
      
    }
    
    updatePosition() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    
    newPosition() {
            ctx.clearRect(this.x, this.y, this.width, this.height);
        this.x += this.speedX;
        this.y += this.speedY;
    }

    left() {
        return this.x;
    }
    right() {
    return this.x + this.width;
    }
    top() {
    return this.y;
    }
    bottom() {
    return this.y + this.height;
    }

    crashWith(obstacle) {
        return !(
            this.bottom() < obstacle.top() ||
            this.top() > obstacle.bottom() ||
            this.right() < obstacle.left() ||
            this.left() > obstacle.right()
        );
    }
}


let player = new Player(15, 15, "red", 10, 10);


function drawGrid() {
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


function runToRemoveWalls() {
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
  start = true;
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


document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 38: // up arrow
        player.speedY -= 1;
        break;
      case 40: // down arrow
        player.speedY += 1;
        break;
      case 37: // left arrow
        player.speedX -= 1;
        break;
      case 39: // right arrow
        player.speedX += 1;
        break;
    }
};    


document.onkeyup = function(e) {
    console.log('oi')
player.speedX = 0;
player.speedY = 0;
};



function startGame() {
    runToRemoveWalls();

    if(start){
        player.newPosition();
        player.updatePosition();
    }

    requestAnimationFrame(startGame);

}


drawGrid();
startGame()

