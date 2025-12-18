//console.log("Hello world!");

/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

// const playerStart = document.querySelector("#player-start");
const playerRestart = document.querySelector("#oops");
const playerRefresh = document.querySelector("#explore");
const turns = document.querySelectorAll(".turn");
const restartBtnElements = document.querySelectorAll(".restart");
const turnBtnElements = document.querySelectorAll(".turn-btn");

/*-------------------------------- Functions --------------------------------*/

const showTurn = (turnNum) => {
    turns.forEach((turn) => {
        turn.classList.remove("active")
    });
    document.getElementById(`turn-${turnNum}`).classList.add("active");
}

/*----------------------------- Event Listeners -----------------------------*/

restartBtnElements.forEach((restartBtnElement) => {
  restartBtnElement.addEventListener("click", () => {
    showTurn(0);
    }
    )
});

turnBtnElements.forEach((turnBtnElement) => {
  turnBtnElement.addEventListener("click", () => {
  let turnNum = turnBtnElement.id
  showTurn(turnNum);
  })
});

showTurn(0);
