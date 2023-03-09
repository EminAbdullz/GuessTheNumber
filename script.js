// Button reloader
const reload = document.querySelector("#reload").addEventListener("click" ,reload=>{
    location.reload();
})
/* <!-- Guess the random num --> */

// Get value of the input
const input = document.querySelector("input");
// Get block for screen the result
let result = document.querySelector(".result");
// Get button and addEventListener // also we can hang up onclick on the button
let button = document.querySelector("button").addEventListener("click" , press=>{
    guessNumber();
})
// We need amount of attempts and target
let attempts = 5;
let random = () => {
    return Math.floor(Math.random () * 11);
}
let target = random();
let guessNumber = () => {
    if(+input.value === +target) alert(`Well done ,it is ${target}`), location.reload();
    else{
        if(attempts > 0){
            attempts -= 1;
            result.innerHTML = " ";
            result.insertAdjacentHTML(
                "afterbegin",
                `<p>Attempts left  ${attempts}</p>`
                );

            }else{
            alert(`Guessed Number was ${target}`),
            location.reload();
        }
    }
}

//! ////////////////////////////////////////////////////////////////////////////////////
// <!-- Guess the number -->
let forAttempts = document.querySelector(".forAttempts");
let guesser = document.querySelectorAll("#guesser").forEach(guesser=>{
    guesser.addEventListener("click" , press=>{
        if(+ guesser.value === +target){
            location.reload();
            alert("No way u did that");
        }
        else{
            if(attempts > 0){
                attempts -=1;
                forAttempts.innerHTML = " ";
                forAttempts.insertAdjacentHTML(
                    "beforeend",
                    `<p>Attempts left ${attempts}</p>`
                )
            }else{
                alert(`Guessed Number was ${target}`);
                location.reload();
            }
        }
    })
})






