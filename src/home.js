export default function createHome() {
    const contentDiv = document.getElementById('content');
    contentDiv.textContent = "";

    const homeHeading = createElementWithID("h1", "RestaurantBar", "homeHeading");
    contentDiv.appendChild(homeHeading);

    const homeHeadingSubText = createElement("p", "Family owned restaurant since 1976.");
    homeHeadingSubText.classList.add("subheading")
    contentDiv.appendChild(homeHeadingSubText);

    const menuButton = createElement("button", "OUR MENU");
    menuButton.classList.add('menuButton');
    menuButton.addEventListener('click', () => {
        const links = document.querySelectorAll('.menu-link');
        links[1].click();
    })
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