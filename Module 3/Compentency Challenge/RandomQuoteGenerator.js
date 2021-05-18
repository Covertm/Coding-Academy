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

  async function GetQuoteTypes() {

    var apiString = "https://api.quotable.io/tags";
    var response = await fetch(apiString);  
    var jsonData = await response.json();

    var tableref = document.getElementById("QuoteTypes");

    for (var i = 0; i < tableref.rows.length; i++){
        document.getElementById("QuoteTypes").innerHTML = "";    
    }
        
    for (var i = 0; i < jsonData.length; i++) {
        var QuoteType = jsonData[i].name;
        (tableref.insertRow(tableref.rows.length)).innerHTML = QuoteType;
    }      

    return true;
  }