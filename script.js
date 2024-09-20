let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let user_Score = document.querySelector("#userscore");
let comp_Score = document.querySelector("#compscore");
console.log(choices);
let userScore = 0;
let compScore = 0;  

const genCompChoice = () => {
  let opt = ["rock", "paper", "scissors"];
  let randIdx = Math.floor(Math.random() * 3);
  return opt[randIdx];
};
const Winner = (compWin, userChoice, compChoice) => {
  if (compWin) {
    compScore++;
    msg.innerText = ` You Lose !  ${compChoice} beats the ${userChoice} `;
    msg.style.background = "red";
    comp_Score.innerText = compScore;
  } else {
    userScore++;
    msg.innerText = `You Win!! ${userChoice} beats the  ${compChoice}`;
    msg.style.background = "green";
    user_Score.innerText = userScore;
  }
};
const playGame = (userChoice) => {
  let compChoice = genCompChoice();

  if (userChoice === compChoice) {
    msg.innerText = "Draw ,Play again";
    msg.style.background = "gray";
  } else {
    let compWin = true;
    if (compChoice === "rock") {
      compWin = userChoice === "paper" ? false : true;
    } else if (compChoice === "paper") {
      compWin = userChoice === "rock" ? true : false;
    } else {
      compWin = userChoice === "paper" ? true : false;
    }
    Winner(compWin, userChoice, compChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
