export default function createBasePage(){
    console.log("Called createBasePage")
    createNav();
    createMain();
    createFooter();
};

const createNav = () => {
    const nav = document.createElement('nav');
    const heading = createNavHeading("Restaurant bar");
    const navList = createNavLinks();    

    

    nav.appendChild(heading);
    nav.appendChild(navList);
    document.body.appendChild(nav);


}

const createNavHeading = (name) => {
    const heading = document.createElement('h1');
    heading.textContent = name;
    heading.classList.add('navHeading');
    return heading;
}

const createNavLinks = () => {
    const listItems = ["Home", "Menu", "Contact"];

    const unorderedList = document.createElement('ul');
    
    for(const l in listItems){
        const listViewItem = document.createElement('li');
        listViewItem.textContent = listItems[l];
        unorderedList.appendChild(listViewItem);
    }

    return unorderedList;
}

const createMain = () => {
    const main = document.createElement('main');
    const contentDiv = document.createElement('div');
    contentDiv.setAttribute('id', 'content');
    main.appendChild(contentDiv);
    document.body.appendChild(main);
}

const createFooter = () => {
    const footer = document.createElement('footer');
    const footerParagraph = document.createElement('p');
    const paragraphAnchor = document.createElement('a');

    paragraphAnchor.textContent = "Created by mrljsh, 2022"
    paragraphAnchor.href = "https://github.com/mrljsh"

    footerParagraph.appendChild(paragraphAnchor);
    footer.appendChild(footerParagraph);
    document.body.appendChild(footer);
}