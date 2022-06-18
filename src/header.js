const createHeader = () => {
    const navBar = document.createElement('div');
    navBar.classList.add('navBar')

    
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');
    
    homeBtn.classList.add('navButton', 'active')
    homeBtn.setAttribute('id', 'homeButton')
    homeBtn.innerText = 'Home';
    
    menuBtn.classList.add('navButton', 'inactive')
    menuBtn.setAttribute('id', 'menuButton')
    menuBtn.innerText = 'Menu';
    
    contactBtn.classList.add('navButton', 'inactive')
    contactBtn.setAttribute('id', 'contactButton')
    contactBtn.innerText = 'Contacts';

    

    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);

    

    // TODO: create logic for selecting correct tab here.

    return navBar;

}

export default createHeader