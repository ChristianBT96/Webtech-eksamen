
const body = document.querySelector("body")
const divElement = document.createElement("div")
body.append(divElement)
// Making the fetch call
fetch('https://dog.ceo/api/breeds/list/all')
    // Converting received data to JSON
    .then(response => response.json())
    // Taking the actual data and doing something with it
    .then(data => {
        // Here we can use the data that is returned to us
        let breeds = data.message;
        // Log the data to the console
        console.log(breeds)
        // Log the number of breeds to the console
        // Using Object.keys() and/or Object.values() to get the number of breeds
        console.log(Object.keys(breeds).length);
        console.log(Object.values(breeds).length);

        divElement.innerText = Object.keys(breeds)[0]

    })
    .catch(error => console.log("Error"));



