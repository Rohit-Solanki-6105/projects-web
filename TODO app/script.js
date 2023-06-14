let todo = document.createElement("div");
todo.classList.add("todo")
let span = document.createElement("span");
span.innerHTML = "\u00d7";
// todo.appendChild(span);

let todoList = document.getElementById("todos");



$("#add").click(function() {
    let inputTodo = document.getElementById("todo_in").value;

    if (inputTodo.trim().length === 0) {
        alert("Please enter what to do.");
    } else {
        let todo = document.createElement("div");
        todo.classList.add("todo");
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";

        todo.innerHTML = inputTodo;
        todo.appendChild(span);
        todoList.appendChild(todo);
    }
    save_data()
});

todoList.addEventListener("click", function(e) {
    if (e.target.tagName === "DIV" || e.target.tagName === "div") {
        e.target.classList.toggle("done");
    } else if (e.target.tagName === "SPAN" || e.target.tagName === "span") {
        e.target.parentNode.remove();
    }
    save_data()
});

$("#del_all").click(function(){
    todoList.innerHTML = "";
    save_data()
});

function save_data(){
    localStorage.setItem("todo_data",todoList.innerHTML);
}

$(document).ready(function(){
    todoList.innerHTML = localStorage.getItem("todo_data");
});