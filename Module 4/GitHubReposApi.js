async function getUserRepos() {

    var apiString = "https://api.github.com/users/";

    var NewUser = document.getElementById("newUser").value;
    
    apiString = apiString + NewUser + "/repos"
 
    var response = await fetch(apiString);
  
    var jsonData = await response.json();
    
    var NewRepos = "";

    if (response.status == 404){
        document.getElementById("theRepos").innerHTML = NewUser + " not a valid username!"
        document.getElementById("newUser").innerHTML = "";  
  
    }else if (response.status >= 200 && response.status <= 299){
        for (var i=0; i < jsonData.length; i++) {
            NewRepos += "<p><a href=" + jsonData[i].html_url + "/ target=" + "\"_blank\"" + ">" + jsonData[i].name + " </a></p>";
        }

        document.getElementById("Repos-title").innerHTML = NewUser + "'s GitHub Repos:"
        document.getElementById("theRepos").innerHTML = NewRepos;
        document.getElementById("newUser").innerHTML = "";
           
    }else {
        document.getElementById("theRepos").innerHTML = NewUser + " is invalid, please confirm username and retry!"
        document.getElementById("newUser").innerHTML = "";  
    }

    scroll(0,0);

    return true;
  }