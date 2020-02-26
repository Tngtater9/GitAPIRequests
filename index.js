let APIendpoint = "https://api.github.com/users/";

function makeURL (){
    $('button').click(function(){
        let query = $('#git-user').val();
        let searchURL = APIendpoint + query + "/repos";
        fetch(searchURL)
        .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error(response.statusText);
          })
          .then(responseJson => displayResults(responseJson, query))
          .catch(err => {
            $('#js-error-message').text(`Something went wrong: ${err.message}`);
          });
    })

}

function displayResults (json, query) {
    $('h2').text(query);
    let results = "";
    json.forEach(repo => {
        results += `<li>${repo.name}</li>`
    })
    $('ol').html(results);
}



$(makeURL());
