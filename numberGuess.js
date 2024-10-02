// Generate a random number between 1 and 10
const number = Math.floor(Math.random() * 10) + 1;
let guess = 0;

// To keep asking until the user guesses the correct number
while (guess !== number) {
    // Ask the user to guess a number
    guess = parseInt(prompt("Guess a number between 1 and 10: "), 10);

    // Check if the guess is too high, too low, or correct
    if (guess > number) {
        console.log("Too high! Try again.");
    } else if (guess < number) {
        console.log("Too low! Try again.");
    } else {
        console.log("Correct! You guessed the number.");
    }
}