

// Fetch

fetch("API-url")
    .then(response => response.json())
    .then(data => {
        // Gør noget med data f.eks. log det til konsollen eller send det videre til en anden funktion eller lignende.
    });

// addEventListener

const element = document.getElementById("element-id/element-class/element-tag");
element.addEventListener("click", () => {
    // Gør noget når elementet bliver klikket på.
});

// setTimeout
setTimeout(() => {
    // Gør noget efter f.eks. 2 sekunder.
} , 2000);

