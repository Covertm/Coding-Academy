async function getBaconipsum() {

    var apiString = "https://baconipsum.com/api/";
    var theNewParagraphs = document.getElementById("Paragraphs").value;
    apiString = apiString + "?type=meat-and-filler&paras=" + theNewParagraphs + "&start-with-lorem=1";
    alert(apiString);
  
    var response = await fetch(apiString);
  
    document.getElementById("RawData").innerHTML = "";  
    document.getElementById("FormattedData").innerHTML = ""; 
  
    var jsonData = await response.json();
    
    document.getElementById("RawData").innerHTML = JSON.stringify(jsonData);
   
    for (var para in jsonData) {   
        document.getElementById("FormattedData").innerHTML += "<p>" + jsonData[para] + "</p>";
      }
  
    return true;
  }