// Create a function called arrayAdder that takes two parameters: an array of numbers and a number
const array = [1, 2, 3, 4, 5, 6]
const arrayAdder = (array, number) => {
    let newArray = []
    array.forEach((arrayNumber) => {
        newArray.push(arrayNumber + number)
    })
    return newArray
};
console.log(arrayAdder(array, 20))
// Kan også bare bruge .map()
console.log(array.map(number => {
    return number + 4
}))

const body = document.querySelector("body")
const divElement = document.createElement("div")

divElement.innerText = array[0].toString()

body.append(divElement)


