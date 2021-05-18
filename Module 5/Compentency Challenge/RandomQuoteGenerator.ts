export{}
async function getRandomQuote() {

    let apiString: string = "https://api.quotable.io/random?";
    let QuoteLengthInput: string =  (<HTMLInputElement> document.getElementById("quoteLength")).value;
    let QuoteType: string = (<HTMLInputElement> document.getElementById("Tags")).value;

    let maxLength: number;

    if (parseInt(QuoteLengthInput) == 50) {
        maxLength = 99;
    }else if (parseInt(QuoteLengthInput) == 100) {
        maxLength = 199;}
    else{
        maxLength = 500;
    }

    apiString = apiString + "minLength=" + QuoteLengthInput + "&maxLength=" + maxLength + "&tags=" + QuoteType; 
    
    const response = await fetch(apiString);
    const jsonData = await response.json();

    document.getElementById("Random-Quote").innerHTML = "";  
    document.getElementById("Author").innerHTML = "";  
  
    

    if (typeof(JSON.stringify(jsonData.content)) == "undefined") {
        document.getElementById("Random-Quote").innerHTML = "No quotes meet input criteria!"
        document.getElementById("Author").innerHTML = "";  
  
    }else
    {
        document.getElementById("Random-Quote").innerHTML = JSON.stringify(jsonData.content);
        let Author: string = JSON.stringify(jsonData.author);
        let AuthorNoQ: string = Author.replace(/['"]+/g, "")
        document.getElementById("Author").innerHTML = "Author ~ " + AuthorNoQ;
    
    }

    return;
  }

  async function GetQuoteTypes() {

    let apiString = "https://api.quotable.io/tags";

    const response = await fetch(apiString);
    const jsonData = await response.json();

    let tableref: HTMLTableElement = (<HTMLTableElement> document.getElementById("QuoteTypes"));

    for (let i = 0; i < tableref.rows.length; i++){
        document.getElementById("QuoteTypes").innerHTML = "";    
    }
        
    for (let i = 0; i < jsonData.length; i++) {
        let QuoteType = jsonData[i].name;
        (tableref.insertRow(tableref.rows.length)).innerHTML = QuoteType;
    }      

    return;
  }
