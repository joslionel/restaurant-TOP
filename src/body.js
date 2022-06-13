const createBody = (content) => {
    const bodyContainer = document.createElement('div');
    bodyContainer.classList.add('body');

    const paragraph = document.createElement('p');
    paragraph.textContent = content;
    bodyContainer.appendChild(paragraph);

    return bodyContainer;
}

export default createBody;