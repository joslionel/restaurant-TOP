const createHeader = () => {
    const navBar = document.createElement('div');
    navBar.classList.add('navBar');

    const headerIcon = document.createElement('h2');
    headerIcon.textContent = 'Mikey\'s Cafe'
    headerIcon.classList.add('navHeader')

    const navElement = document.createElement('div');
    navElement.classList.add('navElement');
    
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');
    
    homeBtn.classList.add('navButton', 'active')
    homeBtn.setAttribute('id', 'homeButton')
    homeBtn.innerText = 'Home';
    
    menuBtn.classList.add('navButton')
    menuBtn.setAttribute('id', 'menuButton')
    menuBtn.innerText = 'Menu';
    
    contactBtn.classList.add('navButton')
    contactBtn.setAttribute('id', 'contactButton')
    contactBtn.innerText = 'Contacts';

    

    navElement.appendChild(homeBtn);
    navElement.appendChild(menuBtn);
    navElement.appendChild(contactBtn);

    navBar.appendChild(headerIcon)
    navBar.appendChild(navElement)

    // TODO: create logic for selecting correct tab here.

    return navBar;

}

export default createHeader