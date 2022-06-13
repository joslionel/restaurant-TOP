import './style.css';   
import createHeader from './header';
import createBody from './body';
import createFooter from './footer';


function containerMaker () {
    const container = document.createElement('div');
    container.setAttribute('id', 'content')

    container.appendChild(createHeader())

    container.appendChild(createBody('wassup'))

    container.appendChild(createFooter())

    return container
}

document.body.appendChild(containerMaker())