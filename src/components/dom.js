function renderDOM() {
    const root = document.querySelector('#root');
    const h1 = document.createElement('h1');
    const nav = document.createElement('nav');
    const div = document.createElement('div');
    const input = document.createElement('input');
    const button = document.createElement('button');
    const main = document.createElement('main');
    const mainContent = ['City', 'Country', 'Current', 'Humidity'];
    const image = document.createElement('img');


    h1.classList.add('logo');
    nav.classList.add('nav');
    div.classList.add('search');
    input.type = 'text';
    input.placeholder = 'Enter your city...';
    
    h1.textContent = 'Weather App';
    button.textContent = 'Send';

    mainContent.forEach((item) => {
        const h1 = document.createElement('h1');
        h1.id = `${item}`;
        main.append(h1);
    })

    main.append(image);

    div.append(input, button);
    nav.append(h1, div);

    root.append(nav, main);
}

export default renderDOM;