import headerImage from "./images/header-platter.jpg";
import Sides from './assets/Sides.csv';
import MainMeals from "./assets/MainMeals.csv";
import Drinks from './assets/Drinks.csv';
import Breakfasts from './assets/Breakfast.csv';


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
    bannerImage.classList.add('image')
    bodyContainer.appendChild(bannerImage)

    const paragraph = document.createElement('p');
    paragraph.textContent = `
    Mikey's is a family run cafe. Proud to be serving delicious, fresh Homemade Breakfasts, 
    Lunches, Snacks & refreshments. Using local produce & suppliers.`;
    bodyContainer.appendChild(paragraph);

    const paragraph2 = document.createElement('p');
    paragraph2.innerHTML = `
    You may see a sampling of our menu by clicking the link above. To get in touch
    please call or email! We look forward to serving you.`;
    bodyContainer.appendChild(paragraph2);

    return bodyContainer;
}

const createMenuContent = () => {

    clearBody()

    

    const bodyContainer = document.querySelector('.body');

    const heading = document.createElement('h1');
    heading.textContent = 'Menu';

    const breakfastHeading = document.createElement('h2');
    breakfastHeading.textContent = 'Breakfast Bites'

    const sidesHeading = document.createElement('h2');
    sidesHeading.textContent = 'Sides';
    
    const mainMealsHeading = document.createElement('h2');
    mainMealsHeading.textContent = 'Main Meals';

    const drinksMenuHeading = document.createElement('h2');
    drinksMenuHeading.textContent = 'Hot & Cold Drinks';

    
    const brekContainer = document.createElement('div');
    brekContainer.appendChild(breakfastHeading);

    Breakfasts.forEach(brek => {
        const itemContainer = document.createElement('div')
        itemContainer.classList.add('menuRow');
        const item = document.createElement('p');
        item.classList.add('menuItem', 'bold');
        item.innerText = brek[0].toLowerCase();
        const desc = document.createElement('p');
        desc.innerText = brek[1].toLowerCase();
        desc.classList.add('menuItem');
        const price = document.createElement('p');
        price.innerText = brek[2];
        price.classList.add('menuItem');
        itemContainer.append(item, desc, price);
        brekContainer.append(itemContainer)

    });

    const mealContainer = document.createElement('div');
    mealContainer.appendChild(mainMealsHeading);

    MainMeals.forEach(main => {
        const itemContainer = document.createElement('div')
        itemContainer.classList.add('menuRow');
        const item = document.createElement('p');
        item.classList.add('menuItem', 'bold');
        item.innerText = main[0].toLowerCase();
        const desc = document.createElement('p');
        desc.innerText = main[1].toLowerCase();
        desc.classList.add('menuItem');
        const price = document.createElement('p');
        price.innerText = main[2];
        price.classList.add('menuItem');
        itemContainer.append(item, desc, price);
        mealContainer.append(itemContainer)

    });

    const sidesContainer = document.createElement('div');
    sidesContainer.appendChild(sidesHeading);

    Sides.forEach(side => {
        const itemContainer = document.createElement('div')
        itemContainer.classList.add('menuRow');
        const item = document.createElement('p');
        item.classList.add('menuItem', 'bold');
        item.innerText = side[0].toLowerCase();
        const desc = document.createElement('p');
        desc.innerText = side[1].toLowerCase();
        desc.classList.add('menuItem');
        const price = document.createElement('p');
        price.innerText = side[2];
        price.classList.add('menuItem');
        itemContainer.append(item, desc, price);
        sidesContainer.append(itemContainer)

    });

    const drinksContainer = document.createElement('div');
    drinksContainer.appendChild(drinksMenuHeading);

    Drinks.forEach(drink => {
        const itemContainer = document.createElement('div')
        itemContainer.classList.add('drinkRow');
        const item = document.createElement('p');
        item.classList.add('menuItem', 'bold');
        item.innerText = drink[0].toLowerCase();
        const price = document.createElement('p');
        price.innerText = drink[1];
        price.classList.add('menuItem');
        itemContainer.append(item, price);
        drinksContainer.append(itemContainer)

    });
    
    const topMenuRow = document.createElement('div');
    topMenuRow.classList.add('row');

    const bottomMenuRow = document.createElement('div');
    bottomMenuRow.classList.add('row');

    topMenuRow.appendChild(brekContainer);
    topMenuRow.appendChild(mealContainer);

    topMenuRow.appendChild(sidesContainer);
    topMenuRow.appendChild(drinksContainer);

    bodyContainer.appendChild(heading);
    bodyContainer.appendChild(topMenuRow);
    // bodyContainer.appendChild(bottomMenuRow);

    
    return bodyContainer
}

const createContactContent = () => {

    clearBody()

    const bodyContainer = document.querySelector('.body');

    const contact = ['Mikey', 'mikey@mikeys.cafe', '01970 612 093']

    const heading = document.createElement('h2');
    heading.innerHTML = "Get in touch";

    
    const container = document.createElement('div')
    container.classList.add('menuRow')

    const header1 = document.createElement('p')
    header1.classList.add('bold')
    header1.innerHTML = 'Name';
    const header2 = document.createElement('p')
    header2.classList.add('bold')
    header2.innerHTML = 'Email';
    const header3 = document.createElement('p')
    header3.classList.add('bold')
    header3.innerHTML = 'Phone';

    const name = document.createElement('p');
    name.innerText = contact[0]
    const email = document.createElement('a');
    email.href = `mailto:${contact[1]}`
    email.innerText = contact[1]
    const phone = document.createElement('p');
    phone.innerText = contact[2]

    

    container.append(header1, header2, header3, name, email, phone)

    bodyContainer.append(heading)
    bodyContainer.append(container)
}

export { createBody, createHomeContent, createMenuContent, createContactContent };