(function () {
  //Computer Response
  const response = ["Rock", "Paper", "Scissors"];
  const random = response[Math.round(Math.random() * response.length)];
  
  //Call Upon the User Buttons
  const player = document.querySelectorAll(".player");

  // Loop through each option
  player.forEach((signal) => {
    // Attach a click event
    signal.addEventListener("click", () => {
      //ID User Response
      const userSelection = signal.id;
      alert("You picked " + userSelection);

      const compare = `${userSelection} vs ${random}`;
      //document.querySelector("#GameOver").textContent = compare;

      if (
        (userSelection == "rock" && random == "scissors") ||
        (userSelection == "scissors" && random == "paper") ||
        (userSelection == "paper" && random == "rock")
      ) {
        document.querySelector("Win").textContent = `${compare} You Win`;
      } else if (userSelection == random) {
        document.querySelector("#Tie").textContent = `${compare} is a Tie.`;
      } else {
        document.querySelector("#Lose").textContent = `${compare} Computer Wins`;
      }
    });
  });
})();