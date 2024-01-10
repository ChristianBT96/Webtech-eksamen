
const ctx = document.querySelector("#myChart")

new Chart(ctx, {
    // Type af graf amn vil lave
    type: '',
    // Data til grafen
    data: {
        // Labels for den data der bliver brugt (også brugt i legend og hover)
        labels: [],
        // Datasets er et array af objekter med data
        datasets: [{
            // Label for datasettet
            label: '',
            // Data for datasettet
            data: []
        }]
    }
});