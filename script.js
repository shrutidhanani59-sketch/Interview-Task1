document.querySelector('.homeScreen p').style.display = "block";
document.querySelector('.gameScreen').style.display = "none";
document.querySelector('.gameover p').style.display = "none";

// Start Game
document.querySelector('.homeScreen p').onclick = function () {

    document.querySelector('.gameScreen').style.display = "block";
    document.querySelector('.homeScreen p').style.display = "none";
};


// Generate random number only ONE time
let randomNumber = parseInt(Math.random() * 100) + 1;

console.log(randomNumber);


// User enters number
document.querySelector('.userNumber').onchange = function () {

    let userNumber = Number(document.querySelector('.userNumber').value);

    document.querySelector('.box').innerHTML = userNumber;


    if (userNumber > randomNumber) {

        alert("Guess a lower number");

    }
    else if (userNumber < randomNumber) {

        alert("Guess a higher number");

    }
    else {

        alert("🎉 Number is correct. You are win!");

        document.querySelector('.gameScreen').style.display = "none";
        document.querySelector('.gameover p').style.display = "block";
    }
};

