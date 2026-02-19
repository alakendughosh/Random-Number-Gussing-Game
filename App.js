
let random = Math.floor(Math.random() * 100) + 1;

function checkGuess() {

    let guess = Number(document.getElementById("guessInput").value);
    let result = guess - random;

    if (result === 0) {
        document.getElementById("result").innerText =
            "🎉 Congrats! Correct Number!";
    }
    else if (result < 0) {
        document.getElementById("result").innerText =
            "Enter Higher Number";
    }
    else {
        document.getElementById("result").innerText =
            "Enter Lower Number";
    }
}
