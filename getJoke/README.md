# Jokester

Click a button to get a random hilarious dad joke! [Check it out](http://jokester.surge.sh/).

## Instructions

* Create an HTML file, `index.html` that links to the jQuery CDN and links to a JS file that you need to make, `index.js`
* Your HTML file needs a button with an ID of `"get-joke"` and a div with an id of `"joke"`.
* Your JS file should use the document ready function. Inside the document ready function you need to:
  * Add an event listener to the click of the "get-joke" button.
  * When that button is clicked, a callback function should be invoked.
  * You will define this callback function to:
    * Use fetch to make a request to the I Can Haz Dad Joke API at this URL: `https://icanhazdadjoke.com/`
    * The fetch request needs to include request headers that specify that you are asking for JSON.
    * If the request is successful, a function should be invoked that takes the joke you got back in the response and puts it on thep age in the "joke" div. 

