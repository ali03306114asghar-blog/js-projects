let number, attempts = 0, maxAttempts = 10, gameOver = false;
let low = 1, high = 100;
function init() {
    number = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    gameOver = false;
    low = 1; high = 100;
    document.getElementById('guessInput').value = '';
    document.getElementById('guessInput').disabled = false;
    document.getElementById('attempts').textContent = `Attempts: ${attempts}/${maxAttempts}`;
    document.getElementById('message').textContent = '';
    document.getElementById('hint').textContent = '';
    document.getElementById('restartBtn').style.display = 'none';
    document.getElementById('guessInput').focus();
}
function checkGuess() {
    if (gameOver) return;
    const input = document.getElementById('guessInput');
    const guess = parseInt(input.value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById('message').textContent = 'Please enter 1-100 only!';
        document.getElementById('message').style.color = '#f39c12';
        return;
    }
    attempts++;
    document.getElementById('attempts').textContent = `Attempts: ${attempts}/${maxAttempts}`;
    if (guess === number) {
        document.getElementById('message').textContent = `Correct! You won in ${attempts} attempts!`;
        document.getElementById('message').style.color = '#27ae60';
        endGame();
    } else if (guess < number) {
        document.getElementById('message').textContent = 'Too low! Try again.';
        document.getElementById('message').style.color = '#e74c3c';
        document.getElementById('hint').textContent = `Hint: Between ${guess} and ${high}`;
        low = guess;
    } else {
        document.getElementById('message').textContent = 'Too high! Try again.';
        document.getElementById('message').style.color = '#e74c3c';
        document.getElementById('hint').textContent = `Hint: Between ${low} and ${guess}`;
        high = guess;
    }
    if (attempts >= maxAttempts && guess !== number) {
        document.getElementById('message').textContent = `Game Over! Number was ${number}`;
        document.getElementById('message').style.color = '#e74c3c';
        endGame();
    }
    input.value = '';
    input.focus();
}
function endGame() {
    gameOver = true;
    document.getElementById('guessInput').disabled = true;
    document.getElementById('restartBtn').style.display = 'inline-block';
}
function restartGame() { init(); }
document.getElementById('guessInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') checkGuess();
});
init();
