(function () {
  //Call Upon the User Buttons
  const player = document.querySelectorAll(".player");

  //Call Necessary IDs
  const GameStart = document.querySelector("#GameStart");
  const Tie = document.querySelector("#Tie");
  const Win = document.querySelector("#Win");
  const Lose = document.querySelector("#Lose");
  const heading1 = document.querySelector("#heading1");
  const heading2 = document.querySelector("#heading2");
  const resultsText = document.querySelector("#resultsText");

  // Loop through each option for the User
  player.forEach((signal) => {
    // Attach a click event
    signal.addEventListener("click", () => {
      //ID User Response
      const userSelection = signal.id;
      
      //Computer Response
      const response = ["Rock", "Paper", "Scissors"];
      const random = response[Math.floor(Math.random() * response.length)];

      //Compare Results
      const compare = `${userSelection} vs ${random}`;
      
      //Determine Who Won
      if (userSelection === random) {
        resultsText.textContent = `${compare} is a Tie. Click on the Picture to Play Again.`;
        heading2.classList.remove("hidden");
        Tie.classList.remove("hidden");
        GameStart.classList.add("hidden");
        heading1.classList.add("hidden");
      } else if (
              (userSelection === "Rock" && random === "Scissors") ||
              (userSelection === "Scissors" && random === "Paper") ||
              (userSelection === "Paper" && random === "Rock")
            ) {
      resultsText.textContent = `${compare} You Win! Click on the Picture to Play Again.`;
      heading2.classList.remove("hidden");
      Win.classList.remove("hidden");
      GameStart.classList.add("hidden");
      heading1.classList.add("hidden");
      } else {
          resultsText.textContent = `${compare} Computer Wins. Click on the Picture to Play Again.`;
          heading2.classList.remove("hidden");
          Lose.classList.remove("hidden");
          GameStart.classList.add("hidden");
          heading1.classList.add("hidden");
        }
  });
  });

  //Reset the Game
  const results = document.querySelectorAll(".results");
    results.forEach((restart) => {
    restart.addEventListener("click", () => {
      GameStart.classList.remove("hidden");
      heading1.classList.remove("hidden");
      heading2.classList.add("hidden");
        Lose.classList.add("hidden");
        Win.classList.add("hidden");
        Tie.classList.add("hidden");
    });
  });
})();