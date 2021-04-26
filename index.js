// SANITY CHECK
// console.log("Hello World from js");

// Element selecteren
const header = document.getElementById("bigTitle");
// Elements are like objects
// Properties:
console.log("INNERTEXT:", header.innerText);
console.log("ID", header.id);
console.log("STYLE:", header.style);
console.log("CLASS:", header.className);

// Change properties

header.innerText = "YOU GOT HACKED";

// header.remove();

// Creating new elements from scratch
const newText = document.createElement("p");
newText.innerText = "I AM A NEW PARAGRAPH";
// and appending them
document.body.appendChild(newText);
console.log(newText);

// Responding to events
// - Select the button
// 1. Add id tot the button (html)
// 2. Select the button
const button = document.getElementById("best-button");
// console.log(button);

// - Listen to events
// - Handle the events (pass a function as event handler)
let counter = 1;
button.addEventListener("click", () => {
    console.log("HANDLE IT!");
    const header = document.getElementById('bigTitle');
    console.log(header);
    header.innerText = "JavaScript rules everything around me";
    header.style.color = "blue";
    // header.innerText = counter;
    // counter = counter + 1;

});