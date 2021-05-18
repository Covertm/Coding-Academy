var ToDoTask = /** @class */ (function () {
    function ToDoTask(InputTask, InputStatus) {
        this.InputTask = InputTask;
        this.InputStatus = InputStatus;
    }
    return ToDoTask;
}());
var list = [];
var Urgent = document.getElementById("UrgentButton");
var enterButton = document.getElementById("SubmitButton");
var input = document.getElementById("ToDoTaskInput");
var item = document.getElementsByTagName("List1");
var table = document.getElementById("List1");
var isUrgent;
function inputLength() {
    return input.value.length;
}
function TableLength() {
    return item.length;
}
function AddToDo() {
    var TableRow = document.createElement("TR");
    TableRow.appendChild(document.createTextNode(input.value));
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("Complete"));
    TableRow.appendChild(dBtn);
    dBtn.addEventListener("click", MarkDone);
    var dBtn2 = document.createElement("button");
    dBtn2.appendChild(document.createTextNode("Delete"));
    TableRow.appendChild(dBtn2);
    dBtn2.addEventListener("click", deleteTask);
    table.appendChild(TableRow);
    document.getElementById("ToDoTaskInput").value = "";
    if (Urgent.checked) {
        TableRow.classList.toggle("UrgentTask");
    }
    function MarkDone() {
        TableRow.classList.toggle("done");
    }
    function deleteTask() {
        TableRow.classList.toggle("delete");
    }
}
function setUrgent() {
    isUrgent = Urgent.checked;
}
function ClearList() {
    document.getElementById("List1").innerHTML = "";
    document.getElementById('ToDoTaskInput').value = "";
}
