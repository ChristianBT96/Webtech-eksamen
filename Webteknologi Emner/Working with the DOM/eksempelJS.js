
const formBtn = document.querySelector("#formBtn")
const nameInput = document.querySelector("#name")
const ageInput = document.querySelector("#age")
formBtn.addEventListener("click", () => {
    const name = nameInput.value
    const age = ageInput.value

    if (age > 40) {
        console.log("oyu are old")
    } else {
        console.log("you are young")
    }

    // console.log(`Your name is: ${name} and your age is: ${age}`)
});

