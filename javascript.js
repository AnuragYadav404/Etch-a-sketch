

const board = document.querySelector('.board');



const gridSize = document.querySelector('#grid-resize');
const outputSize = document.querySelector('.resize-output');
outputSize.textContent = gridSize.value;
gridSize.addEventListener('input', () => {
    outputSize.textContent = gridSize.value;
})

gridSize.addEventListener('input',reset);

const gridSizeValue = gridSize.value;
console.log(gridSizeValue)

function reset() {
    let dim = outputSize.textContent;
    removeCells();
    makeGrid(dim, dim);
    flair();
}



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




function flair(){
    let cells = document.querySelectorAll('.grid-item');
    cells.forEach(cell=>{
        cell.addEventListener('mouseover', action);
})
}


makeGrid(gridSizeValue, gridSizeValue);
flair();