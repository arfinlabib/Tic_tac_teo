let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset_btn");
let turnO = true;
let newgameBtn = document.querySelector(".new_game");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector(".msg")
const winningPatten = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;
        checkWinner();
    })
});

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations The Winner  is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for (let patten of winningPatten) {
        pos1Val = boxes[patten[0]].innerText;
        pos2Val = boxes[patten[1]].innerText;
        pos3Val = boxes[patten[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }

        }
    };
};
newgameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);