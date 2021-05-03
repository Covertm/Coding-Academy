async function getRandomQuote() {

    var apiString = "https://api.quotable.io/random?";
    var QuoteLengthInput = document.getElementById("quoteLength").value;
    var QuoteType = document.getElementById("Tags").value;

    var maxLength;

    if (QuoteLengthInput == 50) {
        maxLength = 99;
    }else if (QuoteLengthInput == 100) {
        maxLength = 199;}
    else{
        maxLength = 500;
    }

    apiString = apiString + "minLength=" + QuoteLengthInput + "&maxLength=" + maxLength + "&tags=" + QuoteType; 
    alert(apiString);
  
    var response = await fetch(apiString);
  
    document.getElementById("Random-Quote").innerHTML = "";  
    document.getElementById("Author").innerHTML = "";  
  
    var jsonData = await response.json();

    if (typeof(JSON.stringify(jsonData.content)) == "undefined") {
        document.getElementById("Random-Quote").innerHTML = "No quotes meet input criteria!"
        document.getElementById("Author").innerHTML = "";  
  
    }else
    {
        document.getElementById("Random-Quote").innerHTML = JSON.stringify(jsonData.content);
        var Author = JSON.stringify(jsonData.author);
        var AuthorNoQ = Author.replace(/['"]+/g, "")
        document.getElementById("Author").innerHTML = "Author ~ " + AuthorNoQ;
    
    }
        

    return true;
  }