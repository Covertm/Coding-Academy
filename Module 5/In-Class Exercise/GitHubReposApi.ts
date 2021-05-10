export{}

async function getUserRepos() {

    let apiString: string = "https://api.github.com/users/";

    let NewUser: string = (<HTMLInputElement> document.getElementById("newUser")).value;
    
    apiString = apiString + NewUser + "/repos"
 
    const response = await fetch(apiString);
  
    let jsonData = await response.json();
    
    let NewRepos: string = "";

    if (response.status == 404){

        (<HTMLInputElement> document.getElementById("theRepos")).innerHTML = NewUser + " not a valid username!";
        
        (<HTMLInputElement> document.getElementById("newUser")).innerHTML = "";  
  
    }else if (response.status >= 200 && response.status <= 299){
        for (let i=0; i < jsonData.length; i++) {
            NewRepos += "<p><a href=" + jsonData[i].html_url + "/ target=" + "\"_blank\"" + ">" + jsonData[i].name + " </a></p>";
        }

        (<HTMLInputElement> document.getElementById("Repos-title")).innerHTML = `${NewUser} 's GitHub Repos:`;
        (<HTMLInputElement> document.getElementById("theRepos")).innerHTML = NewRepos;
        (<HTMLInputElement> document.getElementById("newUser")).innerHTML = "";
           
    }else {

        (<HTMLInputElement> document.getElementById("theRepos")).innerHTML = `${NewUser} is invalid, please confirm username and retry!`;
        (<HTMLInputElement> document.getElementById("newUser")).innerHTML = "";  
    }

    scroll(0,0);

    return;
}