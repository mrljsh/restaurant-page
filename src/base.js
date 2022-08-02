import createHome from "./home";
import createMenu from "./menu";

export default function createBasePage(){
    console.log("Called createBasePage")
    createNav();
    createMain();
    createFooter();
};

const createNav = () => {
    const nav = document.createElement('nav');
    const heading = createNavHeading("RestaurantBar");
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
    const unorderedList = document.createElement('ul');
    
    const homeLink = document.createElement('li');
    homeLink.textContent = "Home";
    homeLink.classList.add('nav-link', 'active');
    homeLink.addEventListener('click', (e) => {
        createHome();
        activeLink(e.target);
        console.log(e.target);
    })


    const menuLink = document.createElement('li');
    menuLink.textContent = "Menu";
    menuLink.classList.add('nav-link');
    menuLink.addEventListener('click', (e) => {
        createMenu();
        activeLink(e.target);
    })

    const contactLink = document.createElement('li');
    contactLink.textContent = "Contact";
    contactLink.classList.add('nav-link');
    
    unorderedList.appendChild(homeLink);
    unorderedList.appendChild(menuLink);
    unorderedList.appendChild(contactLink);

    return unorderedList;
}

const activeLink = (linkIndex) => {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('active');
    });
    
    linkIndex.classList.add('active');

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