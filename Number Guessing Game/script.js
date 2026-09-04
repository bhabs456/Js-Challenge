let randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number from 1 to 100

let attempts = 0; // Store number of attempts

let bestScore = localStorage.getItem("bestScore"); // Get saved best score from localStorage

if (bestScore) {
    document.getElementById("bestScore").textContent = bestScore; // Show best score on page
}

const guessInput = document.getElementById("guessInput"); // Get input element
const guessBtn = document.getElementById("guessBtn"); // Get Guess button
const message = document.getElementById("message"); // Get message element
const attemptsEl = document.getElementById("attempts"); // Get attempts element
const bestScore1 = document.getElementById("bestScore"); // Get best score element

guessBtn.addEventListener("click", () => { // Run when Guess button is clicked

    const guess = Number(guessInput.value); // Convert input value from string to number

    if (guess > 100 || !guess || guess < 1) { // Check if guess is invalid

        message.textContent = "Invalid Guess"; // Show invalid message
        guessInput.value = ""; // Clear input
        return; // Stop the function
    }

    attempts += 1; // Increase attempts by 1
    attemptsEl.textContent = attempts; // Display attempts

    if (guess === randomNumber) { // Check if guess is correct

        message.textContent = "Correct Guess"; // Show success message
        message.style.color = "green"; // Change message color

        if (!bestScore || attempts < Number(bestScore)) { // Check if current score is better

            localStorage.setItem("bestScore", attempts); // Save new best score
            bestScore1.textContent = attempts; // Display new best score
        }
    }

    else if (guess > randomNumber) { // Check if guess is greater than random number

        message.textContent = "Too High Guess"; // Show too high message
        message.style.color = "#ef4444"; // Change message color to red
    }

    else { // Runs when guess is lower than random number

        message.textContent = "Too Low Guess"; // Show too low message
        message.style.color = "#38bdf8"; // Change message color to blue
    }

    guessInput.value = ""; // Clear input after guess
});

const newGame = () => { // Function to start a new game

    randomNumber = Math.floor(Math.random() * 100) + 1; // Generate new random number
    attempts = 0; // Reset attempts
    attemptsEl.textContent = 0; // Display 0 attempts
    message.textContent = "Start Guess.."; // Reset message
    message.style.color = "#fff"; // Reset message color
    guessInput.value = ""; // Clear input
};