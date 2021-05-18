interface ITask {
    InputTask: string,
    InputStatus: number
}

class ToDoTask implements ITask {
    InputTask: string;
    InputStatus: number;

    constructor(InputTask: string, InputStatus: number) {
        this.InputTask = InputTask;
        this.InputStatus = InputStatus;

    }
}

let list: Array<ITask> = [];

const Urgent: HTMLInputElement = <HTMLInputElement> document.getElementById("UrgentButton");
  
const enterButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("SubmitButton");
const input: HTMLInputElement = <HTMLInputElement>document.getElementById("ToDoTaskInput");
const item: HTMLCollectionOf<HTMLLIElement> = <HTMLCollectionOf<HTMLLIElement>>document.getElementsByTagName("List1");
const table: HTMLTableRowElement = <HTMLTableRowElement> document.getElementById("List1");

let isUrgent: boolean;

function inputLength(): number {
    return input.value.length;
}

function TableLength(): number {
    return item.length;
}

function AddToDo() {

    const TableRow: HTMLTableRowElement = <HTMLTableRowElement> document.createElement("TR");

    TableRow.appendChild(document.createTextNode(input.value));

    const dBtn: HTMLButtonElement =<HTMLButtonElement>document.createElement("button");
    dBtn.appendChild(document.createTextNode("Complete"));
    TableRow.appendChild(dBtn);

    dBtn.addEventListener("click", MarkDone);

    const dBtn2: HTMLButtonElement =<HTMLButtonElement>document.createElement("button");
    dBtn2.appendChild(document.createTextNode("Delete"));
    TableRow.appendChild(dBtn2);

    dBtn2.addEventListener("click", deleteTask);

    table.appendChild(TableRow);

    (<HTMLInputElement> document.getElementById("ToDoTaskInput")).value = "";

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
    (<HTMLInputElement> document.getElementById('ToDoTaskInput')).value = "";
}