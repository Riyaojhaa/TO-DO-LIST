// const inputbox = document.querySelector("#inputbox");
const todobox = document.querySelector("#to-do-box");

inputbox.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addTodoItem(this.value);
        this.value = "";
    }
});

const addTodoItem = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${item} <img class="icon" src="close.png">`;
    
    listItem.addEventListener("click", function () {
        this.classList.toggle("done"); // done element is defined in css part
    });

    todobox.appendChild(listItem);
};

// for handling click on the close icon if needed
todobox.addEventListener("click", function (event) {
    if (event.target.classList.contains("icon")) {
        // Handle close icon click here, e.g., remove the corresponding list item
        event.target.parentElement.remove();
        // window.prompt("Task Finished","well done")
    }
});
