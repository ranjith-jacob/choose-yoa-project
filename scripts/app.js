

/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

const turns = document.querySelectorAll(".turn");
const restartBtnElements = document.querySelectorAll(".restart");
const turnBtnElements = document.querySelectorAll(".turn-btn");
const flipCoin = document.getElementById("flip-btn");

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
  let turnNum = turnBtnElement.classList [1];
  showTurn(turnNum);
  })
});

flipCoin.addEventListener("click", () => {
  let flip = Math.floor(Math.random() * 2);
  if (flip === 1) {
    showTurn(5);
  } else { 
    showTurn(6);
  }
});

showTurn(0);

/*------------------------------ Code graveyard ------------------------------*/

//console.log("Hello world!");
// const playerStart = document.querySelector("#player-start");
// const playerRestart = document.querySelector("#oops");
// const playerRefresh = document.querySelector("#explore");

