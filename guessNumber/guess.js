$(document).ready(function() {
// Your javascript goes here
  $('#guess-btn').on('click', myCallback)
  })
  
  function myCallback() {
    // 1. generate a random number between 1 and 10
    // 2. select the input element from the page and get the number that the user typed in
    
    const randomNumber = Math.floor((Math.random() * 10) + 1);
    const inputedNumberString = $('#guess-number').val();
    const inputedNumber = parseInt(inputedNumberString);
      if (inputedNumber === randomNumber) {
        $('#results').html('WINNER! You guessed ' + inputedNumber + " and the correct answer was " + randomNumber);
      } else if (inputedNumber > 10 || inputedNumber < 1){
        alert('Learn to count')
      } else {
        $('#results').html('You LOSE... you guessed ' + inputedNumber + ' and the correct answer was ' + randomNumber)
    }
}
  
