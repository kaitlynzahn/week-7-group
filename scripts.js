//get access to the html page
const app = document.getElementById('root');

//create a variable called container & give it a class "container"
const container = document.createElement('div');
container.setAttribute = ('class', 'containter');

//calls html page & changes container element
app.appendChild(container);

//to get data
var request = new XMLHttpRequest();

//brings you to raw data
request.open('GET', 'http://augur.osshealth.io:5000/api/unstable/repos', true);

//function to parse data
request.onload = function() {
    //parse
    var data = JSON.parse(this.response);

    //if you have a valid request
    if(request.status >= 200 && request.status < 400) {
        //for every repo
        data.forEach(repo => {
            //log the repo_id, repo_name, commits_all_time
            console.log(repo.repo_id, repo.repo_name, repo.commits_all_time)
            
            //create "div" element card and give it class "card"
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
            
            //create element for repo name
            const h1 = document.createElement('h1');
            h1.textContent = repo.repo_name;
            
            //insert the card to html page
            container.appendChild(card);
            //put repo name in card
            card.appendChild(h1);
        });     
    }
    //error if invalid request
    else {
        console.log('error')
    }
}

request.send()