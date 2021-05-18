async function getBaconipsum() {
    var apiString = "https://baconipsum.com/api/";
    var theNewType = document.getElementById("newType").value;
    var theNewParagraphs = document.getElementById("newParagraphs").value;
    apiString = apiString + "?type=" + theNewType + "&paras=" + theNewParagraphs;
    alert(apiString); 

    var response = await fetch(apiString);
  
    
    document.getElementById("RawData").innerHTML = "";  
    document.getElementById("FormattedData").innerHTML = ""; 
    document.getElementById("EncryptedData").innerHTML = ""; 
  
    var jsonData = await response.json(); 

    document.getElementById("RawData").innerHTML = JSON.stringify(jsonData);
   

    for (var para in jsonData) {   
        document.getElementById("FormattedData").innerHTML += "<p>" + jsonData[para] + "</p>";
      }
  

    var theNewFormat = document.getElementById("newFormat").value;  
    var newJsonData;
    if (theNewFormat === "1"){
        newJsonData = cipher1(jsonData);
    }
    else if (theNewFormat ==="2") {
        newJsonData = cipher2(jsonData);
    }
    else{
        newJsonData = Str2Hex(jsonData);
        document.getElementById("EncryptedData").innerHTML = newJsonData;
    }
        
    for (var para in newJsonData) {   
      document.getElementById("EncryptedData").innerHTML += "<p>" + newJsonData[para] + "</p>";
    }
  
    return true;
  }
  
  function cipher1 (someJSON) {
  
         var newChar;
         var newCharCode;
         var newJSON=[];
  
      for (var para in someJSON) { 
        var newPara = "";              
        for (var chara in someJSON[para]){          
          newChar = someJSON[para][chara];          
          newCharCode = newChar.charCodeAt(0);      
          if ((newCharCode >= 65)&&(newCharCode <= 77) || ((newCharCode >= 97)&&(newCharCode <= 109)))      
            newChar = String.fromCharCode(newCharCode+13)      
          else if ((newCharCode >= 78)&&(newCharCode <= 90) || ((newCharCode >= 110)&&(newCharCode <= 122)))  
            newChar = String.fromCharCode(newCharCode-13)      

          newPara += newChar; 
        }  
  
      newJSON.push(newPara); 
  
      } 
  
    return newJSON; 
  }
  
  function cipher2 (someJSON) {
  
       var newChar;
       var newCharCode; 
       var newJSON=[]; 
  
    for (var para in someJSON) { 
      var newPara = "";
      var charPos = 0;
      for (var chara in someJSON[para]){
        newChar = someJSON[para][chara];
        newCharCode = newChar.charCodeAt(0);
        if (charPos === 0){
          newChar = String.fromCharCode(newCharCode+1)
          charPos = 1;
        }       
        else{                        
          newChar = String.fromCharCode(newCharCode-1)
          charPos = 0;
        }       
      newPara += newChar;
      }
  
    newJSON.push(newPara);
  
    } 
  
  return newJSON;
  }

  function Str2Hex(someJSON) {
    var tmp = someJSON;
    var str = '';
    for (var i=0; i<tmp.length; i++) {
      c = tmp.charCodeAt(i);
      str += '\\x' + d2h(c);
    }
    return str;
  }