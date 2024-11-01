const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 3;

document.getElementById("guessButton").addEventListener("click", function () {
  const userGuess = Number(document.getElementById("guessInput").value);
  const resultElement = document.getElementById("result");

  if (userGuess === randomNumber) {
    resultElement.textContent =
      "Congratulations! You guessed the correct number!";
    resultElement.style.color = "green";
  } else if (userGuess > randomNumber) {
    attempts--;
    resultElement.textContent = `Too high! You have ${attempts} attempts left.`;
    resultElement.style.color = "red";
  } else {
    attempts--;
    resultElement.textContent = `Too low! You have ${attempts} attempts left.`;
    resultElement.style.color = "red";
  }

  if (attempts === 0 && userGuess !== randomNumber) {
    resultElement.textContent = `Sorry, you're out of attempts! The correct number was ${randomNumber}.`;
    resultElement.style.color = "red";
    document.getElementById("guessButton").disabled = true;
  }
});
