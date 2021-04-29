function AddToList() {
    var NewName=document.forms["myForm"]["InName"].value;
    var NewList=document.forms["myForm"]["InList"].value;

    if (NewName == "") {
        alert("You must enter a name!");
        return false;
    }
    else if ((NewList != 1) && (NewList != 2)) {
        alert("You Must Select List 1 or 2!");
        document.forms["myForm"]["InList"].value = "";
        return false;
    }
    else{
        if (NewList == 1) {
            if (document.getElementById('CaseSen').checked) {
                var x = palindrome(NewName);
                var tableRef = document.getElementById("List1");
                (tableRef.insertRow(tableRef.rows.length)).innerHTML = NewName + " - " + x + '/CS';
            }else{
                var NewName2 = NewName.toLowerCase();
                var x = palindrome(NewName2);
                var tableRef = document.getElementById("List1");
                (tableRef.insertRow(tableRef.rows.length)).innerHTML = NewName + " - " + x + '/Not CS';
            }
        }
        else if (NewList == 2) {
            if (document.getElementById('CaseSen').checked) {
                var y = palindrome2(NewName);
                var tableRef = document.getElementById("List2");
                (tableRef.insertRow(tableRef.rows.length)).innerHTML = NewName + " - " + y + '/CS';
            }else {
                var NewName2 = NewName.toLowerCase();
                var y = palindrome2(NewName2);
                var tableRef = document.getElementById("List2");
                (tableRef.insertRow(tableRef.rows.length)).innerHTML = NewName + " - " + y + '/Not CS';

            }
        }
        document.forms["myForm"]["InName"].value = "";
        document.forms["myForm"]["InList"].value = "";
        return true;
    }
}

function palindrome(a) {

    var Name  = a.replaceAll(" ","");
    var FlipName = Name.split("").reverse().join("");

    if (Name == FlipName) {
        return true;
    }
    else{
        return false;
    }     
}

function palindrome2(a) {
    var name = a.replaceAll(" ","");
    var FlipName;    

    const usingArrayFrom = Array.from(name);
    usingArrayFrom.reverse();
    ArrayName = usingArrayFrom.toString();
    FlipName = ArrayName.replaceAll(',','');
    
    if (name == FlipName) {
        return true;
    }
    else{
        return false;
    }

}

function ResetList1() {
    var tableRef = document.getElementById("List1")
    tableRef.innerHTML = " ";
}

function ResetList2() {
    var tableRef = document.getElementById("List2")
    tableRef.innerHTML = " ";
}

