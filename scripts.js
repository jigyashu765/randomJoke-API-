const jokeText = document.getElementById("joke-text");
const jokeTextPunch = document.getElementById("joke-text-punch");
const btn = document.getElementById("btn");
const url = 'https://v2.jokeapi.dev/joke/Any';

function getJoke() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.type=="single") {
                jokeText.textContent = `${data.joke}`;
                jokeTextPunch.textContent = ""
            } else {
                jokeText.textContent = `${data.setup}`;
                jokeTextPunch.textContent = `${data.delivery}`
            }
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
        });
}

btn.addEventListener("click", getJoke);