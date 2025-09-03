let jokeUrl = "https://official-joke-api.appspot.com/jokes/random";
let punchline = document.querySelector(".punchline");
let setup = document.querySelector(".setup");
let btn = document.querySelector(".btn");

let getJoke = async () =>{
    let response = await fetch(jokeUrl);
    let joke = await response.json();
    // console.log(joke);
    // console.log(joke.setup)
    // console.log(joke.punchline);

    punchline.innerText = joke.punchline;
    setup.innerText = joke.setup;
}

btn.addEventListener("click", getJoke);




