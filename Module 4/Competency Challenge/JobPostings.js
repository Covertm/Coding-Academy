async function GetJobs() {

    var apiString = 'http://api.icndb.com/jokes/random?'
   
    var FirstName = document.forms["NameForm"]["FirstName"].value;
    var LastName = document.forms["NameForm"]["LastName"].value;

    if(FirstName > "" && LastName > "") {
        apiString = apiString + "firstName=" + FirstName + "&lastName=" + LastName;
    } else if (document.getElementById("Explicit").checked) {
       apiString = apiString + "?limitTo=[explicit]";
    }else{
        apiString = apiString + "?exclude=[explicit]";
    }
 
    var response = await fetch(apiString);
  
    var jsonData = await response.json();
   
    if (response.status == 400){
  
    }else if (response.status >= 200 && response.status <= 299){
            var ChuckJoke = jsonData.value.joke;
            document.getElementById("ChuckJoke").innerHTML = ChuckJoke;

            var JokeNum = jsonData.value.id;
            document.getElementById("JokeNum").innerHTML = " Joke ID ~ " + JokeNum;
           
    }else {
        alert("Successful but did not load")
    }

    return true;
}


async function GetJokes() {
    if (document.getElementById("Explicit").checked) {

      var Explicit = "limitTo=[explicit]";
  }else{
      var Explicit = "exclude=[explicit]";
  }

  var FirstName = document.getElementById("FirstName");
  var LastName = document.getElementById("LastName")

  var response = await fetch(apiString);

  var jsonData = await response.json();
 
  if (response.status == 400){

      alert("error occured during call to API")

  }else if (response.status >= 200 && response.status <= 299){
          alert(jsonData.value.joke);
          var ChuckJoke = jsonData.value.joke;
          document.getElementById("ChuckJoke").innerHTML = ChuckJoke;

          var JokeNum = jsonData.value.id;
          document.getElementById("JokeNum").innerHTML = " Joke ID ~ " + JokeNum;
         
  }else {
      alert("Successful but did not load")
  }

  return true;
}
