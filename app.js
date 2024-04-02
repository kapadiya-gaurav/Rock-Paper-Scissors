let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let userScoreCount = document.querySelector("#user-score");
let comScoreCount = document.querySelector("#comp-score");

//comp choice
const compGenChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

//user choice
choice.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const playGame = (userChoice) => {
    // console.log("User Choice = ", userChoice);
  let compChoice = compGenChoice();
    // console.log( "Comp choice = ", compChoice);

  if (userChoice === compChoice) {
    //Draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //comp choice will be scissors or paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //comp choice will be scissors or rock
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //comp choice will be paper or rock
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

let drawGame = () => {
  msg.innerText = "Game was Draw. Play again...";
  msg.style.backgroundColor = "#22333b";
};

let showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    msg.innerText = `You Win..! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "#386641";
    userScore++;
    userScoreCount.innerText = userScore;
  } else {
    msg.innerText = `You Lose... ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "#8d0801";
    compScore++;
    comScoreCount.innerText = compScore;
  }
};
