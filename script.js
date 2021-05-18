let input = document.getElementById("userinput");
let button = document.getElementById("buttonAdd")
let ul = document.querySelector("ul");
let remove = document.getElementById("buttonDelete");
var li = document.querySelectorAll("li");
let list = document.querySelector("ul").getElementsByTagName("li");

button.addEventListener("click", function() {
    if(input.value.length > 0) {
        var li = document.createElement("li");
        li.classList.add("list-group-item");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
})

input.addEventListener("keypress", function(event) {
    if(input.value.length > 0 && event.keyCode === 13) {
        var li = document.createElement("li");
        li.classList.add("list-group-item");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
})



//For Removal
remove.addEventListener("click", function(event) {
    if(Event.keyCode === 46) {

    }
    var last = list[list.length - 1];
    last.parentNode.removeChild(last);
    console.log("list length", list.length);
})