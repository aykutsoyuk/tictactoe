// const startBtn = document.querySelector(".start")
const restartBtn = document.querySelector(".restart")
const resultMes = document.querySelector("#result")
const board = document.querySelector(".board")

const cells = document.querySelectorAll(".cell")

runGame()

function runGame() { 
    cells.forEach(cell => cell.addEventListener('click', function (e) {
        if (e.target.textContent === "") {
            cell.innerHTML = 'X'
            compChoice()
        }
        
    }))}
     


function compChoice() {
    const randomCell = cells[Math.floor(Math.random() * 9)]
    if (((cells[1].textContent === cells[2].textContent && cells[2].textContent === "O") || (cells[4].textContent === cells[8].textContent && cells[8].textContent === "O") || (cells[3].textContent === cells[6].textContent && cells[6].textContent === "O")) && cells[0].textContent === "") {
        cells[0].innerHTML = "O"
    } else if (((cells[0].textContent === cells[2].textContent && cells[2].textContent === "O") || (cells[4].textContent === cells[7].textContent && cells[7].textContent === "O")) && cells[1].textContent === "") {
        cells[1].innerHTML = "O"
    } else if (((cells[0].textContent === cells[1].textContent && cells[1].textContent === "O") || (cells[4].textContent === cells[6].textContent && cells[6].textContent === "O") || (cells[5].textContent === cells[8].textContent && cells[8].textContent === "O")) && cells[2].textContent === "") {
        cells[2].innerHTML = "O"
    } else if (((cells[0].textContent === cells[6].textContent && cells[6].textContent === "O") || (cells[4].textContent === cells[5].textContent && cells[5].textContent === "O")) && cells[3].textContent === "") {
        cells[3].innerHTML = "O"
    } else if (((cells[0].textContent === cells[8].textContent && cells[8].textContent === "O") || (cells[2].textContent === cells[6].textContent && cells[6].textContent === "O") || (cells[1].textContent === cells[7].textContent && cells[7].textContent === "O") || (cells[3].textContent === cells[5].textContent && cells[5].textContent === "O")) && cells[4].textContent === "") {
        cells[4].innerHTML = "O"
    } else if (((cells[2].textContent === cells[8].textContent && cells[8].textContent === "O") || (cells[3].textContent === cells[4].textContent && cells[4].textContent === "O")) && cells[5].textContent === "") {
        cells[5].innerHTML = "O"
    } else if (((cells[0].textContent === cells[3].textContent && cells[3].textContent === "O") || (cells[2].textContent === cells[4].textContent && cells[4].textContent === "O") || (cells[7].textContent === cells[8].textContent && cells[8].textContent === "O")) && cells[6].textContent === "") {
        cells[6].innerHTML = "O"
    } else if (((cells[1].textContent === cells[4].textContent && cells[4].textContent === "O") || (cells[6].textContent === cells[8].textContent && cells[8].textContent === "O")) && cells[7].textContent === "") {
        cells[7].innerHTML = "O"
    } else if (((cells[0].textContent === cells[4].textContent && cells[4].textContent === "O") || (cells[2].textContent === cells[5].textContent && cells[5].textContent === "O") || (cells[6].textContent === cells[7].textContent && cells[7].textContent === "O")) && cells[8].textContent === "") {
        cells[8].innerHTML = "O"
    } else if (((cells[1].textContent === cells[2].textContent && cells[2].textContent === "X") || (cells[4].textContent === cells[8].textContent && cells[8].textContent === "X") || (cells[3].textContent === cells[6].textContent && cells[6].textContent === "X")) && cells[0].textContent === "") {
        cells[0].innerHTML = "O"
    } else if (((cells[0].textContent === cells[2].textContent && cells[2].textContent === "X") || (cells[4].textContent === cells[7].textContent && cells[7].textContent === "X")) && cells[1].textContent === "") {
        cells[1].innerHTML = "O"
    } else if (((cells[0].textContent === cells[1].textContent && cells[1].textContent === "X") || (cells[4].textContent === cells[6].textContent && cells[6].textContent === "X") || (cells[5].textContent === cells[8].textContent && cells[8].textContent === "X")) && cells[2].textContent === "") {
        cells[2].innerHTML = "O"
    } else if (((cells[0].textContent === cells[6].textContent && cells[6].textContent === "X") || (cells[4].textContent === cells[5].textContent && cells[5].textContent === "X")) && cells[3].textContent === "") {
        cells[3].innerHTML = "O"
    } else if (((cells[0].textContent === cells[8].textContent && cells[8].textContent === "X") || (cells[2].textContent === cells[6].textContent && cells[6].textContent === "X") || (cells[1].textContent === cells[7].textContent && cells[7].textContent === "X") || (cells[3].textContent === cells[5].textContent && cells[5].textContent === "X")) && cells[4].textContent === "") {
        cells[4].innerHTML = "O"
    } else if (((cells[2].textContent === cells[8].textContent && cells[8].textContent === "X") || (cells[3].textContent === cells[4].textContent && cells[4].textContent === "X")) && cells[5].textContent === "") {
        cells[5].innerHTML = "O"
    } else if (((cells[0].textContent === cells[3].textContent && cells[3].textContent === "X") || (cells[2].textContent === cells[4].textContent && cells[4].textContent === "X") || (cells[7].textContent === cells[8].textContent && cells[8].textContent === "X")) && cells[6].textContent === "") {
        cells[6].innerHTML = "O"
    } else if (((cells[1].textContent === cells[4].textContent && cells[4].textContent === "X") || (cells[6].textContent === cells[8].textContent && cells[8].textContent === "X")) && cells[7].textContent === "") {
        cells[7].innerHTML = "O"
    } else if (((cells[0].textContent === cells[4].textContent && cells[4].textContent === "X") || (cells[2].textContent === cells[5].textContent && cells[5].textContent === "X") || (cells[6].textContent === cells[7].textContent && cells[7].textContent === "X")) && cells[8].textContent === "") {
        cells[8].innerHTML = "O"
    } else if (cells[4].textContent === ""){
        cells[4].innerHTML = "O"
    } else if (randomCell.textContent === ""){
        randomCell.innerHTML = "O"
    } else { 
        for (i = 0 ; i <= 8 ; i++) {
            if (cells[i].textContent === "") {
                cells[i].innerHTML = "O"
                break
            }
        }

    }
}


