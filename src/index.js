import './style.css';   
import createHeader from './header';
import { createBody, createContactContent, createHomeContent, createMenuContent } from "./body";
import createFooter from './footer';


function containerMaker () {
    const container = document.createElement('div');
    container.setAttribute('id', 'content')

    container.appendChild(createHeader())

    container.appendChild(createBody())

    container.appendChild(createFooter())

    

    return container
}

document.body.appendChild(containerMaker())

createHomeContent()

const addButtons = (function () {
    const navButtons = document.querySelectorAll('.navButton')
    navButtons.forEach(button => {button.addEventListener('click', event => clickMe(event))})
    
})()


function clickMe(e) {
    const navButtons = document.querySelectorAll('.navButton')
    navButtons.forEach(button => {button.classList.remove('active')})
    const clicked = document.getElementById(`${e.target.id}`)
    clicked.classList.add('active')
    switch (e.target.id) {
        case 'menuButton':
            
            createMenuContent();
            break;

        case 'homeButton':
            createHomeContent();
            break;
    
        case 'contactButton':
            createContactContent();
            break;

        default:
            break;
    }
    
}
 

