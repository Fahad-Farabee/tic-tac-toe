let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#rst-btn");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        box.innerText = "X";
        if(turnO === true){
            box.innerText = "O";
            turnO = false
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disabledBoxes = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner)=>{
    msg.innerText = `Congratulations , winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}



const checkWinner = () =>{
    for (let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" & pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val===pos3Val){
                console.log("winner", pos1Val);
                showWinner(pos1Val);

            }
        }
    }
}


const enableBoxes = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText="";

    }
}
const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);