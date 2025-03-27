document.addEventListener("DOMContentLoaded", function () {
    const okayButton = document.querySelector(".okay-btn");
    const problemInput = document.getElementById("problemInput");
    const paper = document.getElementById("paper");
    const finalMessage = document.getElementById("finalMessage");

    if (okayButton) {
        okayButton.addEventListener("click", function () {
            if (problemInput.value.trim() !== "") {
                paper.textContent = problemInput.value;

                // Start animation
                paper.classList.remove("hidden");
                setTimeout(() => {
                    paper.classList.add("torn"); // Apply tearing effect
                }, 1000);

                setTimeout(() => {
                    paper.classList.add("falling"); // Move paper into the dustbin
                }, 2000);

                setTimeout(() => {
                    paper.classList.add("hidden"); // Hide paper completely
                    finalMessage.classList.remove("hidden"); // Show final reassuring message
                    problemInput.value = ""; // Clear the text box
                }, 3000);
            }
        });
    }
});

// Whack-a-Mole Logic
let score = 0;
let currentMole = -1;
let gameInterval;

function placeMole() {
    let holes = document.getElementsByClassName('hole');
    for (let hole of holes) {
        hole.innerHTML = '';
    }

    currentMole = Math.floor(Math.random() * 9);
    let hole = holes[currentMole];

    let mole = document.createElement('div');
    mole.classList.add('mole', 'show');
    hole.appendChild(mole);
}

function hitMole(index) {
    if (index === currentMole) {
        score++;
        document.getElementById('score').innerText = score;
        placeMole();
    }
}

function startGame() {
    score = 0;
    document.getElementById('score').innerText = score;
    if (gameInterval) clearInterval(gameInterval);
    gameInterval = setInterval(placeMole, 1000);
}

function stopGame() {
    clearInterval(gameInterval);
    alert(`Game over! Your final score is: ${score}`);
}
