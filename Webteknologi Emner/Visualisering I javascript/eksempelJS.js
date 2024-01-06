

const ctx = document.querySelector("#myChart")

// Make the chart
new Chart(ctx, {
    // Select the type
    type: 'bar',
    // Select the data
    data: {
        // Labels for the data also used in the legend and on hover
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        // Datasets is an array of objects with the data
        datasets: [{
            // Label for the dataset
            label: "Antal",
            // The data for the dataset
            data: [4, 23, 26, 28, 67]
        }]
    }
});




const button = document.querySelector("button")
const body = document.querySelector("body")
button.addEventListener("click", () => {
    body.style.backgroundColor = "red"
})



















