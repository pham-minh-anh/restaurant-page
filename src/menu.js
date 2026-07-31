export default function () {
    const content = document.querySelector("div#content");
    const heading = document.createElement("h1");

    heading.textContent = "Mem's menu";
    content.appendChild(heading);

    const item1 = document.createElement("p");
    item1.textContent = "$15 Beef Pho";
    content.appendChild(item1);

    const item2 = document.createElement("p");
    item2.textContent = "$20 Wonton noodles";
    content.appendChild(item2);

    const item3 = document.createElement("p");
    item3.textContent = "$8 Banh Mi";
    content.appendChild(item3);

    const item4 = document.createElement("p");
    item4.textContent = "$10 Sticky rice with eggs and grilled pork";
    content.appendChild(item4);

    const item5 = document.createElement("p");
    item5.textContent = "$2 Iced tea";
    content.appendChild(item5);
}