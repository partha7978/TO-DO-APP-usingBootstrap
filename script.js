let input = document.getElementById("userinput");
let button = document.getElementById("buttonAdd")
let ul = document.querySelector("ul");
let remove = document.getElementById("buttonDelete");
var li = document.querySelectorAll("li");
let list = document.querySelector("ul").getElementsByTagName("li");

const addAfterClick = () => {
    if(input.value.length > 0) {
        var li = document.createElement("li");
        li.classList.add("list-group-item");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";

        //for delete button in every li element
        let btn = document.createElement("button");
        btn.classList.add("btn", "btn-outline-warning");
        li.appendChild(btn);
        btn.textContent = "Delete";
    }
}


const addAfterKeypress = (event) => {
    if(input.value.length > 0 && event.keyCode === 13) {
        var li = document.createElement("li");
        li.classList.add("list-group-item");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";

        //for delete button in every li element
        let btn = document.createElement("button");
        btn.classList.add("btn", "btn-outline-warning");
        li.appendChild(btn);
        btn.textContent = "Delete";
    }
}

const removeAfterClick = (event) => {
    var last = list[list.length - 1];
    last.parentNode.removeChild(last);
    console.log("list length", list.length);
}

const removeAfterDeleteOrBackspace = (e) => {
    const key = e.key;
    if (key === "Backspace" || key === "Delete") {
        var last = list[list.length - 1];
        last.parentNode.removeChild(last);
        console.log("list length", list.length);
    }
}

button.addEventListener("click", addAfterClick);

input.addEventListener("keypress", addAfterKeypress);

remove.addEventListener("click", removeAfterClick);

remove.addEventListener('keydown', removeAfterDeleteOrBackspace);