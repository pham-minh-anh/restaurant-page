export default function () {
    const content = document.querySelector("div#content");
    const heading = document.createElement("h1");

    heading.textContent = "Contact us";
    content.appendChild(heading);

    const contact1 = document.createElement("p");
    contact1.textContent = "Email: myemail@gmail.com";
    content.appendChild(contact1);

    const contact2 = document.createElement("p");
    contact2.textContent = "Telephone: 0123456789";
    content.appendChild(contact2);
}
