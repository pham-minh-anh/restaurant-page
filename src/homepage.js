export default function () {
    const content = document.querySelector("div#content");
    const heading = document.createElement("h1");
    const description = document.createElement("p");

    heading.textContent = "Mem's restaurant";
    description.textContent = "A small kitchen serving the food we grew up eating. Broth simmered overnight, herbs picked the same morning, and nothing that needs explaining. Come in on a weeknight, take the corner table, order the phở or whatever the board says we made today. Twelve seats, one shared pot of tea, no rush.";

    content.appendChild(heading);
    content.appendChild(description);
}
