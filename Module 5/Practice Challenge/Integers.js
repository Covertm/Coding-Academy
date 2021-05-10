"use strict";
exports.__esModule = true;
function ResetScreen() {
    var tableRef;
    var MinMax;
    tableRef = document.getElementById("List1").innerHTML = " ";
    tableRef = document.getElementById("Mean").innerHTML = " ";
    tableRef = document.getElementById("median").innerHTML = " ";
    tableRef = document.getElementById("modes").innerHTML = " ";
    MinMax = document.getElementById('minNum').disabled = false;
    MinMax = document.getElementById('maxNum').disabled = false;
    document.forms["myForm"]["InList"].value = "";
    document.forms["myForm"]["minNum"].value = "";
    document.forms["myForm"]["maxNum"].value = "";
    return true;
}
function setMinMax() {
    var minNumber = document.forms["myForm"]["minNum"].value;
    var maxNumber = document.forms["myForm"]["maxNum"].value;
    var TableRef2;
    if (isNaN(parseInt(minNumber)) || minNumber == "") {
        TableRef2 = document.getElementById('minNum');
        TableRef2.disabled = false;
        TableRef2 = document.getElementById('maxNum');
        TableRef2.disabled = false;
    }
    else if (isNaN((parseInt(maxNumber))) || (maxNumber == "")) {
        TableRef2 = document.getElementById('minNum');
        TableRef2.disabled = false;
        TableRef2 = document.getElementById('maxNum');
        TableRef2.disabled = false;
    }
    else {
        if (parseInt(minNumber) > parseInt(maxNumber)) {
            TableRef2 = document.getElementById('minNum');
            TableRef2.disabled = false;
            TableRef2 = document.getElementById('maxNum');
            TableRef2.disabled = false;
            document.forms["myForm"]["minNum"].value = "";
            document.forms["myForm"]["maxNum"].value = "";
            alert("Min number must be less than max number!!");
        }
        else {
            TableRef2 = document.getElementById('minNum');
            TableRef2.disabled = false;
            TableRef2 = document.getElementById('maxNum');
            TableRef2.disabled = false;
        }
    }
    return true;
}
function AddToList() {
    var NewList = document.forms["myForm"]["InList"].value;
    var MinNumber = document.forms["myForm"]["minNum"].value;
    var MaxNumber = document.forms["myForm"]["maxNum"].value;
    if (NewList == "") {
        alert("You must enter a number between Min & Max!");
    }
    else if ((parseInt(NewList) <= parseInt(MaxNumber)) && (parseInt(NewList) >= parseInt(MinNumber))) {
        var tableRef = document.getElementById("List1");
        (tableRef.insertRow(tableRef.rows.length)).innerHTML = NewList;
        document.forms["myForm"]["InList"].value = "";
        Mean();
        Median();
        Mode();
    }
    else {
        alert("You Must enter a number between Min and Max!");
        document.forms["myForm"]["InList"].value = "";
    }
    return true;
}
//************************************************************** */    
//*****************Mean***************************************** */    
//************************************************************** */  
function Mean() {
    var List = document.getElementById("List1");
    var sum = 0;
    for (var i = 0; i < List.rows.length; i++) {
        sum += parseInt((List.rows[i].innerHTML));
    }
    var average = sum / List.rows.length;
    document.getElementById("Mean").innerHTML = average.toString();
    return true;
}
//************************************************************** */    
//*****************Median*************************************** */    
//************************************************************** */    
function Median() {
    var numbers = [];
    var List = document.getElementById("List1");
    for (var i = 0; i < List.rows.length; i++) {
        numbers.push(parseInt(List.rows[i].innerHTML));
    }
    var median = 0, numsLen = numbers.length;
    numbers.sort();
    if (numsLen % 2 === 0) { // is even
        median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2; // average of two middle numbers
    }
    else { // is odd
        median = numbers[(numsLen - 1) / 2]; // middle number only
    }
    document.getElementById("median").innerHTML = median.toString();
    return true;
}
//************************************************************** */    
//*****************Mode***************************************** */    
//************************************************************** */    
function Mode() {
    var numbers = [];
    var List = document.getElementById("List1");
    var modes = [], count = [], num, maxIndex = 0, index;
    for (var i = 0; i < List.rows.length; i++) {
        numbers.push(parseInt(List.rows[i].innerHTML));
    }
    for (var i_1 = 0; i_1 < numbers.length; i_1 += 1) {
        num = numbers[i_1];
        count[num] = (count[num] || 0) + 1;
        if (count[num] > maxIndex) {
            maxIndex = count[num];
        }
    }
    for (index in count) {
        if (count.hasOwnProperty(index)) {
            if (count[index] === maxIndex) {
                modes.push(Number(index));
            }
        }
    }
    document.getElementById("modes").innerHTML = modes.toString();
    return true;
}
