export default function createHome() {
    const contentDiv = document.getElementById('content');

    const homeHeading = createElementWithID("h1", "RestaurantBar", "homeHeading");
    contentDiv.appendChild(homeHeading);

    const homeHeadingSubText = createElement("p", "Family owned restaurant since 1976.");
    homeHeadingSubText.classList.add("subheading")
    contentDiv.appendChild(homeHeadingSubText);

    const menuButton = createElement("button", "OUR MENU");
    menuButton.classList.add('menuButton');
    contentDiv.appendChild(menuButton);
}

const createElement = (element, content) => {
    const newElement = document.createElement(element);
    newElement.textContent = content;
    return newElement;
}

const createElementWithID = (element, content, id) => {
    const newElement = document.createElement(element);
    newElement.textContent = content;
    newElement.setAttribute('id', id);
    return newElement;
}