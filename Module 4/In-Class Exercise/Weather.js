async function GetCity() {

    var apiString = "https://api.weather.gov/products/locations";
 
    var response = await fetch(apiString);
  
    var jsonData = await response.json();
   
    if (response.status == 400){
        document.getElementById("NewCity").innerHTML = "";  
        document.getElementById("ErrorMessage").innerHTML = "";  
        document.getElementById("ErrorMessage").innerHTML = "Error Loading Weather Forcast Office Information";
        
  
    }else if (response.status >= 200 && response.status <= 299){
        for (index in jsonData.locations) {
          if (jsonData.locations[index] != null) {
            var CityList = document.getElementById("NewCity");
            CityList.options[CityList.options.length] = new Option(jsonData.locations[index], jsonData.locations[index]);
          }
        }
           
    }else {
        alert("Successful but did not load")
    }

    return true;
}

async function GetForcast() {

    var apiString = "https://api.weather.gov/gridpoints/";

    var wfoArray = document.getElementById("NewCity");

    var opt = wfoArray.options[wfoArray.selectedIndex].value;

    apiString += opt + "/47,30/forecast";
 

    var response = await fetch(apiString);
  
    var jsonData = await response.json();

    alert(jsonData.features[0].properties.name);

    return true;
}
