// WORKING WITH THE DOM
// 1. Html/Css
// 2. Selecting elements
// 3. Inserting elements
// 4. Event listeners
// 5. Changing elements

// 1. HTML/CSS
// See index.html and style.css
// Common HTML elements: div, p, h1, h2, h3, a, img, ul, li, span, button, input, form
// Css selecting classes: .class
// Css selecting id: #id
// Css selecting element: element


// 2. Selecting elements
// querySelector / querySelectorAll

const h1 = document.querySelector("h1");

const allParagraphs = document.querySelectorAll("p");

const testDiv = document.querySelector("#test");

const aElements = document.querySelectorAll("a");

// 3. Inserting elements

const divElement = document.createElement("div");
divElement.textContent = "Hello World2";

testDiv.append(divElement);


// 4. Event listeners

aElements.forEach((aElement) => {
    aElement.addEventListener("click", (event) => {
        console.log("Clicked on a link");
    });
});

// 5. Changing elements
// innerText / textContent

h1.innerText = "Hello World";
testDiv.textContent = "Hello World";



