import renderHomepage from "./homepage.js";
import renderMenu from "./menu.js";
import renderContact from "./contact.js";

renderHomepage();

const homeButton = document.querySelector("button#home");
homeButton.addEventListener("click", () => {
    clearContent();
    renderHomepage();
});

const menuButton = document.querySelector("button#menu");
menuButton.addEventListener("click", () => {
    clearContent();
    renderMenu();
});

const contactButton = document.querySelector("button#contact");
contactButton.addEventListener("click", () => {
    clearContent();
    renderContact();
});

function clearContent() {
    document.querySelector("#content").replaceChildren()
}