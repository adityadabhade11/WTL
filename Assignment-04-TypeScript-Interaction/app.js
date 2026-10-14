"use strict";
function greetUser() {
    const nameInput = document.getElementById("name");
    const display = document.getElementById("display");
    if (nameInput && display) {
        const name = nameInput.value.trim();
        if (name === "") {
            display.innerText = "Please enter your name!";
        }
        else {
            display.innerText =
                `Hello, ${name}! Welcome to our TypeScript app.`;
        }
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("greetBtn");
    if (button) {
        button.addEventListener("click", greetUser);
    }
});
