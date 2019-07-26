let widthCanvas = 200;
let heightCanvas = 200
canvas.width = widthCanvas;
canvas.height = heightCanvas;

let cols, rows;
let w = 40;
let grid = [];
let currentCell;

cols = (widthCanvas/w);
rows = (heightCanvas/w);

function setup(){
    createNewCells();
    currentCell = grid[0]
    currentCell.visited = true;
    currentCell.showVisited()
    drawLines();

    for (let i=1; i<grid.length; i++){
        //STEP 1
        let nextAvailableNeigbor =  currentCell.checkNeigbors();
        console.log('nexNeig', nextAvailableNeigbor)
        if( nextAvailableNeigbor){
            nextAvailableNeigbor.visited = true;
            currentCell = nextAvailableNeigbor;
            currentCell.visited = true;
        //STEP 3
            removeWalls(currentCell, nextAvailableNeigbor);

        //STEP 4
            currentCell.showVisited()
            
        }
        // drawLines()
    }
}


function createNewCells(){
    for (var j=0; j<rows; j++){
        for (let i=0; i<rows; i++){
            let cell = new Cell(i,j);
            grid.push(cell);
        }
    }
}

function index(i, j){
    if(i<0 || j<0 || i>cols-1 || j>rows-1){
        return -1;
    }
    return  i + (j)*cols;
}

function drawLines() {
    for (let i=0; i<grid.length; i++){
        grid[i].showLines(); 
    }
}

function removeWalls(a, b){
    let x = a.i - b.i;
    if( x === 1){
        a.walls[3] = false;
        b.walls[1] = false;
    } else if ( x === -1){
        a.walls[1] = false;
        b.walls[3] = false;
    }
    let y = a.j - b.j;
    if( y === 1){
        a.walls[0] = false;
        b.walls[2] = false;
    } else if ( x === -1){
        a.walls[2] = false;
        b.walls[0] = false;
    }

}

class Cell {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    constructor(i, j) {
        this.i = i;
        this.j = j; 
        this.walls = [true, true, true, true]; //[top, right, botton, left]
        this.visited = false;        
    }

    checkNeigbors() {
        // console.log('i',this.i,'   j',this.j, '  grid[index]', grid[ index (this.i, this.j - 1) ])

        let neigbors = [];
        let top = grid[ index (this.i, this.j - 1) ];
        let right = grid[ index (this.i + 1, this.j) ];
        let bottom = grid[ index(this.i, this.j+1)];
        let left = grid[ index(this.i-1, this.j)];
        

        // console.log('top', grid[ index (this.i, this.j - 1) ]);
        // console.log('right', grid[ index (this.i + 1, this.j) ] );
        // console.log('bottom', grid[ index(this.i, this.j+1) ] );
        // console.log('left', grid[index(this.i-1, this.j) ] );

        
        if(top && !top.visited){ //top is not undefined && hasn't been visited
            neigbors.push(top);
        }
        if(right && !right.visited){
            neigbors.push(right);
        }
        if(bottom && !bottom.visited){
            neigbors.push(bottom);
        }
        if(left && !left.visited){
            neigbors.push(left);
        }
console.log('neigbors',neigbors)
        if( neigbors.length>0){
            let randomValue = Math.floor(Math.random()*(neigbors.length + 1)); //verificar isso depois !!!!!!!!!!!!
            // console.log('random', randomValue);
            // console.log('neigbors.length', neigbors.length );

            console.log('neig escoliho',neigbors[randomValue])

            return neigbors[randomValue];
        } else {
            return 'undefined';
        }
    }


    showLines() {
        let x = this.i*w;
        let y = this.j*w;
        // this.ctx.strokeStyle = "#54fd02"; //COR VERDE NEON
        this.ctx.strokeStyle = '#54fd02';
        this.ctx.lineWidth = 5;
    

        if( this.walls[0] ) {
            this.ctx.beginPath(); //top line
            this.ctx.moveTo(x, y);
            this.ctx.lineTo(x+w, y);
            this.ctx.stroke();
        }
        if( this.walls[1] ) {
            this.ctx.beginPath(); //right line
            this.ctx.moveTo(x+w, y);
            this.ctx.lineTo(x+w, y+w);
            this.ctx.stroke();
        }
        if(this. walls[2] ) {
            this.ctx.beginPath(); //botton line
            this.ctx.moveTo(x+w, y+w);
            this.ctx.lineTo(x, y+w);
            this.ctx.stroke();
        }
        if( this.walls[3] ) {
            this.ctx.beginPath(); //left line
            this.ctx.moveTo(x, y+w);
            this.ctx.lineTo(x, y);
            this.ctx.stroke();
        } 
      
    }

    showVisited(){
        let x = this.i*w;
        let y = this.j*w;
        if( this.visited){ //fill the visited cells
            this.ctx.beginPath();
            this.ctx.fillStyle = "white";
            this.ctx.fillRect(x, y, x+w, y+w);
            this.ctx.stroke();
        }
    }
    
}

setup();
