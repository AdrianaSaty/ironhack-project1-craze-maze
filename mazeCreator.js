let cols, rows; 
let w = 40; 
let grid = []; 
let stack = []; 
let currentDrawGrid; 
let currentPlayerGrid; 
let currentPlayerIndex;
let currentPlayerPositionX;
let currentPlayerPositionY;
let currentPlayerPositionI;

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
        this.wall = ['true', 'true', 'true', 'true']; //top, right, bottom, left
        this.visited = false;
      }

    grid(){
        console.log(`grid[${index(i,j)}]`)
        return `grid[${index(i,j)}]`;
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
        currentPlayerPositionX = this.x;
        currentPlayerPositionY = this.y;
    }

    top() {
        return this.y;
    }
    right() {
        return this.x + this.width;
    }
    bottom() {
        return this.y + this.height;
    }
    left() {
        return this.x;
    }

    crashTop(currentPlayerGrid) {
        this.currentPlayerGrid = currentPlayerGrid;

        // console.log('TOP player',this.top()) //position of player
        // console.log('TOP grid ',this.currentPlayerGrid.j * 40)
        if( this.top() < this.currentPlayerGrid.y ){
            console.log('TOP perdeu')
        } 
    }

    crashRight(currentPlayerGrid) {
        this.currentPlayerGrid = currentPlayerGrid;

        // console.log('RIGHT player',this.right()) //position of player
        // console.log('RIGHT ',this.currentPlayerGrid.x + w )
        
        if( this.right() > this.currentPlayerGrid.x + w ){
            console.log("RIGHT perdeu___")
        } 
    }

    crashBottom(currentPlayerGrid) {
        this.currentPlayerGrid = currentPlayerGrid;

        // console.log('BOTTOM player',this.bottom()) //position of player
        // console.log('BOTTOM ',this.currentPlayerGrid.x + w )
        
        if( this.bottom() > this.currentPlayerGrid.y + w ){
            console.log("BOTTOM perdeu __")
        } 
    }
    
    crashLeft(currentPlayerGrid) {
        this.currentPlayerGrid = currentPlayerGrid;

        console.log('LEFT player',this.bottom()) //position of player
        console.log('LEFT ',this.currentPlayerGrid.x )
        
        if( this.left() < this.currentPlayerGrid.x ){
            console.log("LEFT perdeu __")
        } 
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

    currentDrawGrid = grid[0]; 
    currentDrawGrid.visited = true; 
    stack.push(currentDrawGrid); 
    currentDrawGrid.highlight(); 
}


function randomRangeInt(min, max) { return Math.floor(Math.random() * (max - min) + min); }


function index(i, j) {
    if ( i<0 || j<0 || i > cols-1 || j > rows-1 ) { return -1; }
    return i + j * cols;
}


function runToRemoveWalls() {
  let next = currentDrawGrid.checkNeighbors(); 
  if (next) {
    next.visited = true; 
    stack.push(next);
    removeWall(currentDrawGrid, next);
    currentDrawGrid.draw();
    next.highlight();
    currentDrawGrid = next;
  } else if (stack.length > 0) {
    currentDrawGrid.draw();
    currentDrawGrid = stack.pop();
    currentDrawGrid.highlight();
  } 
  start = true;
}


function removeWall(currentDrawGrid, next) {
  let xx = currentDrawGrid.i - next.i;
  let yy = currentDrawGrid.j - next.j;
  if (xx === 1) {
    currentDrawGrid.wall[3] = false;
    next.wall[1] = false;
  } else if (xx === -1) {
    currentDrawGrid.wall[1] = false;
    next.wall[3] = false;    
  }
  
  if (yy === 1) {
    currentDrawGrid.wall[0] = false;
    next.wall[2] = false;
  } else if (yy === -1) {
    currentDrawGrid.wall[2] = false;
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
    player.speedX = 0;
    player.speedY = 0;

    currentPlayerIndex= index(Math.trunc( (currentPlayerPositionX + player.width/2)/w) , Math.trunc( (currentPlayerPositionY + player.height/2)/w) );
    currentPlayerGrid = grid[currentPlayerIndex]
    console.log('grid',currentPlayerGrid)

    if( currentPlayerGrid.wall[0]){
        player.crashTop(currentPlayerGrid);
    }

    // console.log('WALL RIGHT', currentPlayerGrid.wall[1])


    if( currentPlayerGrid.wall[1]){
        player.crashRight(currentPlayerGrid);
    }

    if( currentPlayerGrid.wall[2]){
        player.crashBottom(currentPlayerGrid);
    }

    if( currentPlayerGrid.wall[3]){
        player.crashLeft(currentPlayerGrid);
    }


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

