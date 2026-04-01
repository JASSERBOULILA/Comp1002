// Assignment Three - Buggy Starter Code
// Fix the bugs so all four features work correctly.

let helloBtn = document.querySelector("#helloBtn");
let greetingOutput = document.querySelector("#greetingOutput");

// fixed the querySelector it was themeButton not themeBtn like the html
let themeBtn = document.querySelector("#themeBtn");

let messageInput = document.querySelector("#messageInput");
let liveOutput = document.querySelector("#liveOutput");

let welcomeForm = document.querySelector("#welcomeForm");
let nameInput = document.querySelector("#nameInput");
let formOutput = document.querySelector("#formOutput");

// 1. Greeting Button
helloBtn.addEventListener("click", function() {
    greetingOutput.textContent = "Hello, student!";
});

// 2. Theme Toggle
themeBtn.addEventListener("click", function() {
    // changed the name of the class it should be dark-mode not darkmode like in css
    document.body.classList.toggle("dark-mode");
});

// 3. Live Input
// for the event listener it should be input not change
messageInput.addEventListener("input", function() {
    // wrong variable name it should be messageInput.value not messageinput.value the I is uppercase;
    liveOutput.textContent = messageInput.value;
});

// 4. Welcome Form
// the event should be added to the function paramateres so it can be accessed
welcomeForm.addEventListener("submit", function(event) {
    event.preventDefault();
    formOutput.textContent = "Welcome, " + nameInput.value;
});