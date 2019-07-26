// let widthCanvas = 400;
// let heightCanvas = 400
// canvas.width = widthCanvas;
// canvas.height = heightCanvas;

// let cols, rows;
// let w = 40;
// let grid = [];
// let currentCell;
// let count = 0;

// function setup(){
//     // console.log('setup', 1)

//     cols = (widthCanvas/w);
//     rows = (heightCanvas/w);

//     for (var j=0; j<rows; j++){
//         for (let i=0; i<rows; i++){
//             let cell = new Cell(i,j);
//             grid.push(cell);
            
//             currentCell = grid[count]
//             let nextAvailableNeigbor =  currentCell.checkNeigbors();
//             if( nextAvailableNeigbor){
//                 nextAvailableNeigbor.visited = true;
//                 currentCell = nextAvailableNeigbor;
//             }
//             count = count + 1;
//         }
//     }


//     currentCell.visited = true;
   
//     // console.log('grid.visited', grid[0].visited, currentCell.visited)

    
// }



// class Cell {
//     canvas = document.getElementById("canvas");
//     ctx = canvas.getContext("2d");

//     constructor(i, j) {
//         this.i = i;
//         this.j = j; 
//         this.walls = [true, true, true, true]; //[top, right, botton, left]
//         this.visited = false;        
//     }

//     checkNeigbors() {
//         console.log('i',this.i)
//         console.log('j',this.j)
//         console.log('funcao indexxxxxxx', index (this.i + 1, this.j))
//         let neigbors = [];
            
//         let top = grid[ index (this.i, this.j - 1) ];
//         let right = grid[ index (this.i + 1, this.j) ];
//         let bottom = grid[ index(this.i, this.j+1)];
//         let left = grid[ index(this.i-1, this.j)];
        
//         console.log('top', grid[ index (this.i, this.j - 1) ]);
//         console.log('right', grid[ index (this.i + 1, this.j) ] );
//         console.log('bottom', grid[ index(this.i, this.j+1) ] );
//         console.log('left', grid[index(this.i-1, this.j) ] );


        
        
//         if(top && !top.visited){ //top is not undefined && hasn't been visited
//             neigbors.push(top);
//         }
//         if(right && !right.visited){
//             neigbors.push(top);
//         }
//         if(bottom && !bottom.visited){
//             neigbors.push(top);
//         }
//         if(left && !left.visited){
//             neigbors.push(top);
//         }

//         if( neigbors.length>0){
//             let randomValue = Math.floor(Math.random()*neigbors.length + 1); //verificar isso depois !!!!!!!!!!!!
//             // console.log('random', randomValue);
//             // console.log('neigbors.length', neigbors.length );

//             return neigbors[randomValue];
//         } else {
//             return 'undefined';
//         }
//     }

//     show() {
//         let x = this.i*w;
//         let y = this.j*w;
//         // this.ctx.strokeStyle = "#54fd02"; //COR VERDE NEON
//         this.ctx.strokeStyle = 'red';
//         this.ctx.lineWidth = 5;

//         if( this.walls[0] ) {
//             this.ctx.beginPath(); //top line
//             this.ctx.moveTo(x, y);
//             this.ctx.lineTo(x+w, y);
//             this.ctx.stroke();
//         }
//         if( this.walls[1] ) {
//             this.ctx.beginPath(); //right line
//             this.ctx.moveTo(x+w, y);
//             this.ctx.lineTo(x+w, y+w);
//             this.ctx.stroke();
//         }
//         if(this. walls[2] ) {
//             this.ctx.beginPath(); //botton line
//             this.ctx.moveTo(x+w, y+w);
//             this.ctx.lineTo(x, y+w);
//             this.ctx.stroke();
//         }
//         if( this.walls[3] ) {
//             this.ctx.beginPath(); //left line
//             this.ctx.moveTo(x, y+w);
//             this.ctx.lineTo(x, y);
//             this.ctx.stroke();
//         } 
//         if( this.visited){ //fill the visited cells
//             this.ctx.fillStyle = "#de944d";
//             this.ctx.fillRect(x, y, x+w, y+w);
//         }
//     }
    
// }



// function draw() {
//     for (let i=0; i<grid.length; i++){
//         grid[i].show(); 
//     // console.log('grid.visited', grid[0].visited)
//         currentCell = grid[i]
//     }

//     let nextAvailableNeigbor =  currentCell.checkNeigbors();
//     if( nextAvailableNeigbor){
//         nextAvailableNeigbor.visited = true;
//         currentCell = nextAvailableNeigbor;
//     }
//     count = count + 1;


// }

// function index(i, j){
//     if(i<0 || j<0 || i>cols-1 || j>rows-1){
//         return -1;
//     }
//     return  i + (j)*cols;
// }


// setup();
// draw();

// console.log('index',index(0,-1))
