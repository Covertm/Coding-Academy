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
            var tableRef = document.getElementById("List1");
           (tableRef.insertRow(tableRef.rows.length)).innerHTML = NewName;
        }
        else if (NewList == 2) {
            var tableRef = document.getElementById("List2");
            (tableRef.insertRow(tableRef.rows.length)).innerHTML = NewName;
        }
        document.forms["myForm"]["InName"].value = "";
        document.forms["myForm"]["InList"].value = "";
        return true;
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

