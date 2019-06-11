$(document).ready(function(){ 
  getJokeListener();
});

function getJokeListener() {
  $('#get-joke').on("click", getJoke);
}

// const getJoke = () => {
//   let headers = new Headers({'Accept': 'application/json'});
//   let request = new Request('https://icanhazdadjoke.com/', {headers: headers});
//   fetch (request)
//     .then(function(response){
//       return response.json();
//     })
//     .then(function(jokeJson){
//       putJokeOnPage(jokeJson);
//     });
// const putJokeOnPage = (jokeJson) => {
//   $('#joke-results').html(jokeJson.joke);
// }

function getJoke () {
  $.ajax({
    url: `https://icanhazdadjoke.com/`,
    data: 'json',
    headers: {'Accept': 'application/json'},
    success: successFunction,
    error: failureFunction,
  })
}

function successFunction(jokeJson) {
  $('#joke-results').html(jokeJson.joke);
}

function failureFunction() {
    alert('Sorry, I dont have any jokes')
}