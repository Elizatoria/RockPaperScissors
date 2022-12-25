(function () {
  //Computer Response
  // const response = ["Rock", "Paper", "Scissors"];
  // const random = response[Math.round(Math.random() * response.length)];
  
  //Call Upon the User Buttons
  const player = document.querySelectorAll(".player");

  // Loop through each option
  player.forEach((signal) => {
    // Attach a click event
    signal.addEventListener("click", () => {
      //ID User Response
      const userSelection = signal.id;
      alert("You picked " + userSelection);

      const response = ["Rock", "Paper", "Scissors"];
      const random = response[Math.round(Math.random() * response.length)];

      const compare = `${userSelection} vs ${random}`;
      const GameOver = document.querySelector("#GameOver");

      //Tie
if (userSelection === random) {
  GameOver.textContent = `${compare} is a Tie.`;
}

//Rock
if (userSelection === "Rock") {
  if (random === "Scissors") {
    GameOver.textContent = `${compare} You Win`;
  } else {
    GameOver.textContent = `${compare} Computer Wins`;
  }
}
// Paper
else if (userSelection === "Paper") {
  if (random === "Rock") {
    GameOver.textContent = `${compare} You Win`;
  } else {
    GameOver.textContent = `${compare} Computer Wins`;
  }
}
// Scissors
else if (userSelection === "Scissors") {
  if (random === "Paper") {
    GameOver.textContent = `${compare} You Win`;
  } else {
    GameOver.textContent = `${compare} Computer Wins`;
  }
}

  });
  });
})();