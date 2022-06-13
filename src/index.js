import './style.css';   
import createHeader from './header';

function containerMaker () {
    const container = document.createElement('div');
    container.setAttribute('id', 'content')

    container.appendChild(createHeader())

    return container
}

document.body.appendChild(containerMaker())