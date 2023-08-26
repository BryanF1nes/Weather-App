import API_KEY from './key';

function handleUpdate() {
    const submit = document.querySelector('button');
    const input = document.querySelector('input');

    submit.addEventListener('click', () => {
        populateFields(input.value);
        input.value = ''
    });
}

async function populateFields(search) {
    loader();
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${capitalizeFirstLetter(search)}`)
    const data = await response.json();
    
    const city = document.getElementById('City');
    const country = document.getElementById('Country');
    const current = document.getElementById('Current');
    const humidity = document.getElementById('Humidity');
    const image = document.querySelector('img');

    setTimeout(() => {
        city.textContent = `City: ${data.location.name}`;
        country.textContent = `Country: ${data.location.country}`;
        current.textContent = `Current: ${data.current.feelslike_f}\u00b0F`;
        humidity.textContent = `Humidity: ${data.current.humidity}%`;
        image.src = data.current.condition.icon;
        image.alt = data.current.condition.text;
        console.log(data)
    }, 3000);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function loader() {
    const main = document.querySelector('main');
    const div = document.createElement('div');
    
    div.classList.add('loader');
    setTimeout(() => {
        div.remove();
    }, 3000);

    main.append(div)
}

export default handleUpdate;