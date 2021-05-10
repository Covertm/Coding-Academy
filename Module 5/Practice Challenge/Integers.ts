export{}

function ResetScreen() {
    
    let tableRef: String;
    let MinMax: boolean;
    
    tableRef = (<HTMLInputElement> document.getElementById("List1")).innerHTML = " ";

    tableRef = (<HTMLInputElement>document.getElementById("Mean")).innerHTML = " ";

    tableRef = (<HTMLInputElement>document.getElementById("median")).innerHTML = " ";

    tableRef = (<HTMLInputElement>document.getElementById("modes")).innerHTML = " ";

    MinMax = (<HTMLInputElement> document.getElementById('minNum')).disabled=false;

    MinMax = (<HTMLInputElement> document.getElementById('maxNum')).disabled=false;

    document.forms["myForm"]["InList"].value = "";
    document.forms["myForm"]["minNum"].value = "";
    document.forms["myForm"]["maxNum"].value = "";
    
    return;
}

function setMinMax():boolean {

    let minNumber: string = document.forms["myForm"]["minNum"].value;
    let maxNumber: string = document.forms["myForm"]["maxNum"].value;
    let TableRef2: any;

    if (isNaN(parseInt(minNumber)) || minNumber == ""){

        TableRef2 = document.getElementById('minNum');
        TableRef2.disabled=false;

        TableRef2 = document.getElementById('maxNum');
        TableRef2.disabled=false;
    }
    else if (isNaN((parseInt(maxNumber))) || (maxNumber == "")){
        TableRef2 = document.getElementById('minNum');
        TableRef2.disabled=false;

        TableRef2 = document.getElementById('maxNum');
        TableRef2.disabled=false;
    }
    else {
        if (parseInt(minNumber) > parseInt(maxNumber)) {
            TableRef2 = document.getElementById('minNum');
            TableRef2.disabled=false;

            TableRef2 = document.getElementById('maxNum');
            TableRef2.disabled=false;

            document.forms["myForm"]["minNum"].value = "";
            document.forms["myForm"]["maxNum"].value = "";

            alert("Min number must be less than max number!!");
        }
        else{
            TableRef2 = document.getElementById('minNum');
            TableRef2.disabled=false;

            TableRef2 = document.getElementById('maxNum');
            TableRef2.disabled=false;
        }

    }
    return true;
}

function AddToList(): boolean {

    let NewList=document.forms["myForm"]["InList"].value;
    let MinNumber=document.forms["myForm"]["minNum"].value;
    let MaxNumber=document.forms["myForm"]["maxNum"].value;
    

    if (NewList == "") {
        alert("You must enter a number between Min & Max!");
    }
    else if ((parseInt(NewList) <= parseInt(MaxNumber)) && (parseInt(NewList) >= parseInt(MinNumber))) {
        let tableRef: any = document.getElementById("List1");
        (tableRef.insertRow(tableRef.rows.length)).innerHTML = NewList;

        document.forms["myForm"]["InList"].value = "";

        Mean();

        Median();
        
        Mode();
 
    }
    else{
        alert("You Must enter a number between Min and Max!");
        document.forms["myForm"]["InList"].value = "";
    }

    return true;
}

//************************************************************** */    
//*****************Mean***************************************** */    
//************************************************************** */  
function Mean(): boolean {

    let List: HTMLTableElement = (<HTMLTableElement> document.getElementById("List1"));
    let sum: number = 0;

    for (let i: number = 0; i < List.rows.length; i++) {
        sum += parseInt((List.rows[i].innerHTML));
    }
          
    let average: number = sum / List.rows.length;

    document.getElementById("Mean").innerHTML = average.toString();

    return true;
}

//************************************************************** */    
//*****************Median*************************************** */    
//************************************************************** */    
function Median(): boolean {

    let numbers: Array<any> =[];
    let List: any = document.getElementById("List1");
 
    for (var i=0; i < List.rows.length; i++) {
        numbers.push(parseInt(List.rows[i].innerHTML));
    }
    
    var median = 0, numsLen = numbers.length;
    numbers.sort();
         
    if (numsLen % 2 === 0) { // is even
        median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2; // average of two middle numbers
    } else { // is odd
        median = numbers[(numsLen - 1) / 2]; // middle number only
    }

    document.getElementById("median").innerHTML = median.toString();

    return true;
}

//************************************************************** */    
//*****************Mode***************************************** */    
//************************************************************** */    
function Mode(): boolean {

    let numbers: Array<any> =[];
    let List: any = document.getElementById("List1");
    let modes: Array<any> = [], count: Array<any> = [], num: number, maxIndex: number = 0, index: string;
 
    for (var i=0; i < List.rows.length; i++) {
        numbers.push(parseInt(List.rows[i].innerHTML));
    }
 
    for (let i: number = 0; i < numbers.length; i += 1) {
        num = numbers[i];
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