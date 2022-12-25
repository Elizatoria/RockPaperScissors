(function () {
  //Computer Response
  const response = ["Rock", "Paper", "Scissors"];
  const random = response[Math.round(Math.random() * response.length)];
  
  //Call Upon the User Response
  const handSignals = document.querySelectorAll(".hand-signal");

  // Loop through each option
  handSignals.forEach((signal) => {
    // Attaches a click event
    signal.addEventListener("click", () => {
      // Gets the ID so you can figure out what the user clicked on
      const whatTheUserSelected = signal.id;
      alert("You picked " + whatTheUserSelected);
    });
  });
})();