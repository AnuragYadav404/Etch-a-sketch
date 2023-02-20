

const board = document.querySelector('.board');
const btn = document.querySelector('.btn');
btn.addEventListener('click', reset);


function makeGrid(rows, cols) {
    board.style.setProperty('--grid-row', rows);
    board.style.setProperty('--grid-col', cols);
    board.style.backgroundColor = 'teal';
    // console.log(board.style)
    for(let i=0;i<(rows*cols);i++) {
        let cell = document.createElement('div');
        board.appendChild(cell).classList = 'grid-item';
    }
}

function removeCells(e){
    let cells = document.querySelectorAll('.grid-item');
    cells.forEach(cell=>{
        cell.remove(cell);
    })
}

function action(e){
    this.style.setProperty('background-color','gold');   
}

function reset(e){
    let rows = Math.floor(prompt("Enter the number of rows", 16));
    let cols = Math.floor(prompt("Enter the number of Columns", 16));
    rows = rows>100 ? 100 : rows;
    cols = cols>100 ? 100 : cols;

    removeCells();
    makeGrid(rows, cols);
    flair();
}



function flair(){
    let cells = document.querySelectorAll('.grid-item');
    cells.forEach(cell=>{
        cell.addEventListener('mouseover', action);
})
}





makeGrid(16, 16);
flair();