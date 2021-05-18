function ResetScreen() {
    var tableRef = document.getElementById("List1")
    tableRef.innerHTML = " ";
    var tableRef = document.getElementById("Mean")
    tableRef.innerHTML = " ";
    var tableRef = document.getElementById("median")
    tableRef.innerHTML = " ";
    var tableRef = document.getElementById("modes")
    tableRef.innerHTML = " ";
    document.getElementById('minNum').disabled=false;
    document.getElementById('maxNum').disabled=false;
    document.forms["myForm"]["InList"].value = "";
    document.forms["myForm"]["minNum"].value = "";
    document.forms["myForm"]["maxNum"].value = "";
}

function setMinMax() {
    var minNumber = document.forms["myForm"]["minNum"].value;
    var maxNumber = document.forms["myForm"]["maxNum"].value;

    if (isNaN(minNumber) || minNumber == ""){
        document.getElementById('minNum').disabled=false;
        document.getElementById('maxNum').disabled=false;
    }
    else if (isNaN(maxNumber) || maxNumber == ""){
        document.getElementById('minNum').disabled=false;
        document.getElementById('maxNum').disabled=false;
    }
    else {
        if (parseInt(minNumber) > parseInt(maxNumber)) {
            document.getElementById('minNum').disabled=false;
            document.getElementById('maxNum').disabled=false;
            document.forms["myForm"]["minNum"].value = "";
            document.forms["myForm"]["maxNum"].value = "";
            alert("Min number must be less than max number!!");
        }
        else{
            document.getElementById('minNum').disabled=true;
            document.getElementById('maxNum').disabled=true;
        }

    }
    return;
}

function AddToList() {

    var NewList=document.forms["myForm"]["InList"].value;
    var MinNumber=document.forms["myForm"]["minNum"].value;
    var MaxNumber=document.forms["myForm"]["maxNum"].value;

    if (NewList == "") {
        alert("You must enter a number between Min & Max!");
    }
    else if ((parseInt(NewList) <= parseInt(MaxNumber)) && (parseInt(NewList) >= parseInt(MinNumber))) {
        
        var tableRef = document.getElementById("List1");
        (tableRef.insertRow(tableRef.rows.length)).innerHTML = NewList;

        document.forms["myForm"]["InList"].value = "";

        tableref = document.getElementById("List1");
        var rows = tableref.rows.length;
        var sum = 0;

//************************************************************** */    
//*****************Mean***************************************** */    
//************************************************************** */  
        for (var i=0; i < rows; i++) {
            sum += parseInt((tableref.rows[i].innerHTML));
        }
          
        var average = sum / rows;

//        tableItem = parseInt((tableref.rows[0].innerHTML));
        document.getElementById("Mean").innerHTML = average;


//************************************************************** */    
//*****************Median*************************************** */    
//************************************************************** */    
    var numbers=[];
 
    for (var i=0; i < rows; i++) {
        numbers.push(parseInt(tableref.rows[i].innerHTML));
    }
    
    var median = 0, numsLen = numbers.length;
    numbers.sort();
         
    if (numsLen % 2 === 0) { // is even
        median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2; // average of two middle numbers
    } else { // is odd
        median = numbers[(numsLen - 1) / 2]; // middle number only
    }

    document.getElementById("median").innerHTML = median;

//************************************************************** */    
//*****************MODE***************************************** */    
//************************************************************** */   
    var modes = [], count = [], i, number, maxIndex = 0;
 
    for (i = 0; i < numbers.length; i += 1) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }

    for (i in count)
        if (count.hasOwnProperty(i)) {
           if (count[i] === maxIndex) {
            modes.push(Number(i));
        }
    }
    var mode = modes.toString();

    document.getElementById("modes").innerHTML = mode;

}

    else{
        alert("You Must enter a number between Min and Max!");
        document.forms["myForm"]["InList"].value = "";
    }

    return;
}