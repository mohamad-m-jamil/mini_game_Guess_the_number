let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessButton = document.getElementById('guess-button');
const guessInput = document.getElementById('guess-input');
const resultDiv = document.getElementById('result');
const resetButton = document.getElementById('reset-button');

guessButton.addEventListener('click', () => {
    const userGuess = Number(guessInput.value);
    attempts++;

    if (userGuess === randomNumber) {
        resultDiv.textContent = `Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts.`;
        guessButton.disabled = true;
        resetButton.style.display = 'inline-block';
    } else if (userGuess < randomNumber) {
        resultDiv.textContent = 'Too low! Try again.';
    } else {
        resultDiv.textContent = 'Too high! Try again.';
    }
    guessInput.value = '';
    guessInput.focus();
});

resetButton.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    resultDiv.textContent = '';
    guessButton.disabled = false;
    resetButton.style.display = 'none';
});
