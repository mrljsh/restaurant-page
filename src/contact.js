export default function createContact() {
    const contentDiv = document.getElementById('content');
    contentDiv.textContent = "";

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('content-container');


    const contactHeading = document.createElement('h2');
    contactHeading.textContent = "CONTACT US!";

    contactDiv.appendChild(contactHeading);

    contentDiv.append(contactDiv);
}