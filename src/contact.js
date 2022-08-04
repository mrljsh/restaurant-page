export default function createContact() {
    const contentDiv = document.getElementById('content');
    contentDiv.textContent = "";

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('content-container');

    const contactHeading = document.createElement('h2');
    contactHeading.textContent = "CONTACT US";

    contactDiv.append(contactHeading, contactAddress(), contactTelephone(), createMap());

    contentDiv.append(contactDiv);
}

const contactAddress = () => {
    const span = document.createElement('span');

    const addressPara = document.createElement('p');
    addressPara.textContent = "Address:";

    const addressParagraphContent = document.createElement('p');
    addressParagraphContent.textContent = '2880 Broadway, New York';

    span.append(addressPara, addressParagraphContent);
    return span;
}

const contactTelephone = () => {
    const span = document.createElement('span');

    const telePara = document.createElement('p');
    telePara.textContent = "Telephone:"

    const telephoneParagraphContent = document.createElement('p');
    telephoneParagraphContent.textContent = '+123 456 789';

    span.append(telePara, telephoneParagraphContent);
    return span;
}

const createMap = () => {
    const map = document.createElement('div');
    map.innerHTML = '<div class="mapouter"><div class="gmap_canvas"><iframe width="700" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br><style>.mapouter{position:relative;text-align:right;height:400px;width:700px;}</style><a href="https://www.embedgooglemap.net">google map html generator</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:400px;width:700px;}</style></div></div>'
    map.classList.add('google-map')

    return map;
}