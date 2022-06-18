const createFooter = (content) => {
    const footerContainer = document.createElement('div');
    footerContainer.classList.add('footer');

    const footerlinks = document.createElement('ul');

    const AJLink = document.createElement('li')
    AJLink.innerHTML = `<a href="https://www.angryjoes.com">Angry Joe's Web</a>`

    const JLLink = document.createElement('li')
    JLLink.innerHTML = `<a href="https://www.joslionel.com">Jos Lionel</a>`

    const footertxt = document.createElement('p');
    footertxt.innerHTML = 'Created by Jos Lionel - &copy 2022 Angry Joe\'s Web'

    footerContainer.appendChild(footertxt);
    footerContainer.appendChild(footerlinks);
    
    footerlinks.appendChild(AJLink);
    footerlinks.appendChild(JLLink);
    

    return footerContainer;
}

export default createFooter;