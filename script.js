const row = 15;
const column = 15;
const maze = document.querySelector(".maze");

const mazeGame = () => {
    for(i=0;i<row*column;i++){
        const cell = document.createElement("div");
        cell.className = Math.random() < 0.7 ? "path" : "wall";
        maze.appendChild(cell);
    }
}
mazeGame();

const playerPosition = Math.floor(Math.random()*225);
let cells = document.querySelectorAll(".maze div");
cells[playerPosition].classList.add("player");
const destination = row*column - 1;
cells[destination].classList.add("destination");

let currentPosition = playerPosition;

const updateplayerPosition = () => {
    cells.forEach(cell => cell.classList.remove("player"));
    cells[currentPosition].classList.add("player");
}

const checkWinner = () => {
    if(currentPosition === destination){
        alert("You Won!!");
    }
}

const movePlayer = (x,y) => {
    const rowidx = currentPosition % column;
    const columnidx = Math.floor(currentPosition / column);
    const rowPosition = rowidx + x;
    const columnPosition = columnidx + y;
    const newPosition = rowPosition + columnPosition*column;

    if(rowPosition>=0 && rowPosition<column && columnPosition>=0 && columnPosition<column && !cells[newPosition].classList.contains("wall")){
        currentPosition = newPosition;
        updateplayerPosition();
        checkWinner();
    }
}

document.addEventListener("keydown",(e)=>{
    switch(e.key){
        case 'ArrowUp': 
        movePlayer(0,-1);
        break;
        case 'ArrowDown': 
        movePlayer(0,1);
        break;
        case 'ArrowLeft': 
        movePlayer(-1,0);
        break;
        case 'ArrowRight': 
        movePlayer(1,0);
        break;
    }
})