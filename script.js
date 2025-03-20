const choices = document.querySelectorAll("img");
const resultEl = document.querySelector(".result");
const playerChoiceEl = document.querySelector(".player-choice");
const computerChoiceEl = document.querySelector(".computer-choice");
const playerPointsEl = document.querySelector(".player-points");
const computerPointsEl = document.querySelector(".computer-points");

let playerPoints = 0;
let computerPoints = 0;

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const playerChoice = choice.id;
        const computerChoice = getComputerChoice();

        playerChoiceEl.textContent = playerChoice;
        computerChoiceEl.textContent = computerChoice;

        const result = determineWinner(playerChoice, computerChoice);
        resultEl.textContent = result;
    });
});

function getComputerChoice() {
    const options = ["rock", "paper", "scissor"];
    return options[Math.floor(Math.random() * options.length)];
}

function determineWinner(player, computer) {
    if (player === computer) return "It's a Tie!";
    if (
        (player === "rock" && computer === "scissor") ||
        (player === "scissor" && computer === "paper") ||
        (player === "paper" && computer === "rock")
    ) {
        playerPoints++;
        playerPointsEl.textContent = playerPoints;
        return "You Win!";
    } else {
        computerPoints++;
        computerPointsEl.textContent = computerPoints;
        return "Computer Wins!";
    }
}
