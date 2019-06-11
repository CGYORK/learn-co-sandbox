$(document).ready(function() {
  //listen for the user to click the button
  // when the user clicks the button, send an AJAX request to get the repos from the URL
  // when we get the response back from the web request, we'll list the repos
  $('#get-repos').on('click', buttonClickCallback)
  $('#get-readme').on('click', getReadmeFromGit)
})

function buttonClickCallback () {
  let inputedGitId = $('#gitId').val();
  $.ajax({
    url: `https://api.github.com/users/${inputedGitId}/repos`,
    data: 'json',
    success: successFunction,
    error: failureFunction
  })
}

// {authorization: 'token <our github API token'}

function getReadmeFromGit() {
  let repoID = $('#repo-id').val()
  let url = `https://api.github.com/cgyork`
  let token = `21a46fcbfffd898db148f50246937197a6203bbb`
  fetch(url, {headers: {'Authorization': `token ${token}`}})
    .then(res => {
      return res.json()
    }).then(json => {
      debugger;
    })
}

function successFunction(response) {
  response.forEach(function(repo) {
    $('ul#repo-results').append('<li>' + repo.name + '</li>')
  })
}

function failureFunction(response) {
  alert('Sorry, something went wrong')
}