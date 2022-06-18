import headerImage from "./images/header-platter.jpg";

// TODO - clear body should clear inner html from body container. a separate function should probably
//  create the body container, and a second function(s) should add content to that container
// this way I can clear the ontent from the body and leave the container
// 

const clearBody = () => {
    const bodyContainer = document.querySelector('.body');

    bodyContainer.innerHTML = '';

    return bodyContainer;
}

const createBody = () => {
    const bodyContainer = document.createElement('div');
    

    bodyContainer.classList.add('body');

    bodyContainer.innerHTML = '';

    return bodyContainer;
}

const createHomeContent = () => {

    clearBody()

    const bodyContainer = document.querySelector('.body');

    const pageHeader = document.createElement('h1');
    pageHeader.textContent = 'Welcome to Mikey\'s Cafe';
    bodyContainer.appendChild(pageHeader);

    const bannerImage = document.createElement('img');
    bannerImage.src = headerImage;
    bodyContainer.appendChild(bannerImage)

    const paragraph = document.createElement('p');
    paragraph.textContent = `
    Mikey's is a family run cafe. Proud to be serving delicious, fresh Homemade Breakfasts, Lunches, Snacks & refreshments. Using local produce & suppliers.`;
    bodyContainer.appendChild(paragraph);

    return bodyContainer;
}

const createMenuContent = () => {

    clearBody()

    const bodyContainer = document.querySelector('.body');

    const paragraph = document.createElement('p');
    paragraph.textContent = `This is a menu`;
    bodyContainer.appendChild(paragraph);
}

const createContactContent = () => {

    clearBody()

    const bodyContainer = document.querySelector('.body');

    const paragraph = document.createElement('p');
    paragraph.textContent = `This is a contact page`;
    bodyContainer.appendChild(paragraph);
}

export { createBody, createHomeContent, createMenuContent, createContactContent };