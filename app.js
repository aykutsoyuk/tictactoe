// const startBtn = document.querySelector(".start")
const restartBtn = document.querySelector(".restart")
const board = document.querySelector(".board")
const cells = document.querySelectorAll(".cell")

const easyBtn = document.querySelector("#easyBtn")
const hardBtn = document.querySelector("#hardBtn")


const winning = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

//fonksiyonlar iptal olmadığı için önce hangisi başlarsa o devam ediyon
hardBtn.addEventListener('click', function(e){
    hardBtn.classList.add("active")
    easyBtn.classList.remove("active")
    e.preventDefault()
    hardGameBegin()
    
}, false)
easyBtn.addEventListener('click', function(e){
    easyBtn.classList.add("active")
    hardBtn.classList.remove("active")
    e.preventDefault()
    easyGameBegin()
    
}, false)

restartBtn.addEventListener('click', function(){
        cells.forEach(cell => cell.textContent = "")
        document.querySelector("#result").removeAttribute('class')
        document.querySelector("#result").innerHTML = ""
        
    })
//////////////////////////// compthinking animasyon
// function compThinking() {
//     document.getElementsByClassName("bounce").style.display = ""
// }   



    function hardGameBegin() {
        cells.forEach(cell => cell.addEventListener('click', function (e) {
            if (e.target.textContent === "") {
                cell.innerHTML = 'X'  
                setTimeout(compChoiceHard, 100)
                // setTimeout(compThinking, 100)  
            }
            
            
        }))
    
    }


    function easyGameBegin() {
        cells.forEach(cell => cell.addEventListener('click', function (e) {
            if (e.target.textContent === "") {
                cell.innerHTML = 'X'  
                setTimeout(compChoiceEasy, 100)
                // setTimeout(compThinking, 100)  
            }
            
            
        }))
    
    }





/////////////////////////////////////////

function userWins() {
    document.querySelector("#result").classList.add("result-win")
    document.querySelector("#result").innerHTML = "you win"    
}
function compWins() {
    document.querySelector("#result").classList.add("result-lose")
    document.querySelector("#result").innerHTML = "you lose"    
}
 

function result() {
    // const resultMes = document.querySelector("#result")
    winning[0].every(arr => cells[arr].textContent === "O") ? compWins() : false
    winning[1].every(arr => cells[arr].textContent === "O") ? compWins() : false
    winning[2].every(arr => cells[arr].textContent === "O") ? compWins() : false
    winning[3].every(arr => cells[arr].textContent === "O") ? compWins() : false
    winning[4].every(arr => cells[arr].textContent === "O") ? compWins() : false
    winning[5].every(arr => cells[arr].textContent === "O") ? compWins() : false
    winning[6].every(arr => cells[arr].textContent === "O") ? compWins() : false
    winning[7].every(arr => cells[arr].textContent === "O") ? compWins() : false
    winning[0].every(arr => cells[arr].textContent === "X") ? userWins() : false
    winning[1].every(arr => cells[arr].textContent === "X") ? userWins() : false
    winning[2].every(arr => cells[arr].textContent === "X") ? userWins() : false
    winning[3].every(arr => cells[arr].textContent === "X") ? userWins() : false
    winning[4].every(arr => cells[arr].textContent === "X") ? userWins() : false
    winning[5].every(arr => cells[arr].textContent === "X") ? userWins() : false
    winning[6].every(arr => cells[arr].textContent === "X") ? userWins() : false
    winning[7].every(arr => cells[arr].textContent === "X") ? userWins() : false
    

}



function compChoiceHard() {
    const a = [0,1,6,7]
    const randomA = cells[a[Math.floor(Math.random() * a.length)]]
    const b = [0,2,3,5]
    const randomB = cells[b[Math.floor(Math.random() * b.length)]]
    const c = [1,2,7,8]
    const randomC = cells[c[Math.floor(Math.random() * c.length)]]
    const d = [3,5,6,8]
    const randomD = cells[d[Math.floor(Math.random() * d.length)]]
    const s = [1,3,5,7]
    const randomS = cells[s[Math.floor(Math.random() * s.length)]]
    const j = [0,2,6,8]
    const randomJ = cells[j[Math.floor(Math.random() * j.length)]]
    const k = [0,2,6]
    const randomK = cells[k[Math.floor(Math.random() * k.length)]]
    const l = [0,2,8]
    const randomL = cells[l[Math.floor(Math.random() * l.length)]]
    const m = [0,6,8]
    const randomM = cells[m[Math.floor(Math.random() * m.length)]]
    const n = [2,6,8]
    const randomN = cells[n[Math.floor(Math.random() * n.length)]]
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
    } else if (((cells[3].textContent === cells[2].textContent && cells[2].textContent === "X") || (cells[3].textContent === cells[8].textContent && cells[8].textContent === "X")) && randomA.textContent === "") {
        randomA.innerHTML = "O"
    } else if (((cells[1].textContent === cells[6].textContent && cells[6].textContent === "X") || (cells[1].textContent === cells[8].textContent && cells[8].textContent === "X")) && randomB.textContent === "") {
        randomB.innerHTML = "O"
    } else if (((cells[5].textContent === cells[0].textContent && cells[0].textContent === "X") || (cells[5].textContent === cells[6].textContent && cells[6].textContent === "X")) && randomC.textContent === "") {
        randomC.innerHTML = "O"
    } else if (((cells[7].textContent === cells[0].textContent && cells[0].textContent === "X") || (cells[7].textContent === cells[2].textContent && cells[2].textContent === "X")) && randomD.textContent === "") {
        randomD.innerHTML = "O"
    } else if (cells[0].textContent === cells[8].textContent && cells[8].textContent === "X" && randomS.textContent === ""){
        randomS.innerHTML = "O"
    } else if (cells[2].textContent === cells[6].textContent && cells[6].textContent === "X" && randomS.textContent === ""){
        randomS.innerHTML = "O"
    } else if (cells[1].textContent === cells[3].textContent && cells[3].textContent === "X" && randomK.textContent === ""){
        randomK.innerHTML = "O"
    } else if (cells[1].textContent === cells[5].textContent && cells[5].textContent === "X" && randomL.textContent === ""){
        randomL.innerHTML = "O"
    } else if (cells[3].textContent === cells[7].textContent && cells[7].textContent === "X" && randomM.textContent === ""){
        randomM.innerHTML = "O"
    } else if (cells[5].textContent === cells[7].textContent && cells[7].textContent === "X" && randomN.textContent === ""){
        randomN.innerHTML = "O"
    } else if (cells[2].textContent === cells[4].textContent && cells[4].textContent === "X" && cells[6].textContent === "O" && cells[0].textContent === ""){
        cells[0].innerHTML = "O"
    } else if (cells[0].textContent === cells[4].textContent && cells[4].textContent === "X" && cells[8].textContent === "O" && cells[6].textContent === ""){
        cells[6].innerHTML = "O"
    } else if (cells[6].textContent === cells[4].textContent && cells[4].textContent === "X" && cells[2].textContent === "O" && cells[8].textContent === ""){
        cells[8].innerHTML = "O"
    } else if (cells[8].textContent === cells[4].textContent && cells[4].textContent === "X" && cells[0].textContent === "O" && cells[2].textContent === ""){
        cells[2].innerHTML = "O"
    } else if (randomJ.textContent === ""){
        randomJ.innerHTML = "O"
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
    result()
}

function compChoiceEasy() {
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
    result()
}
