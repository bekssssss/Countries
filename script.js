const countryNames = 'https://restcountries.com/v3.1/region/europe';

const selectCountry = document.querySelector('#select');
const div = document.querySelector('#div');

let dateAll = [];

fetch(countryNames)
    .then(res => res.json())
    .then(data => {
        dateAll = data;
        console.log(data);
        selectCountry.innerHTML += data.map(country => {
            return `<option class="options" id="${country.name.common}">${country.name.common}</option>`;
        }).join('');
    })
    .catch(error => {
        console.error('Error fetching country names:', error);
    });

selectCountry.addEventListener('change', (e) => {
    const selectedOption = e.target.selectedOptions[0];
    console.log(selectedOption.id);
    dateAll.forEach((item) => {
        let array = Object.keys(item.languages);
        let valuta = Object.keys(item.currencies);
        console.log(array);
        if (item.name.common === selectedOption.id) {
            console.log(item);
            div.innerHTML = `<img src="${item.flags.png}" alt="Flag of ${item.name.common}">
            <span>Страна: ${item.translations.rus.common}</span>
            <span>Столица: ${item.capital}</span>
            <span>Язык: ${item.languages[array[0]]}</span>
            <span>Валютаgg: ${item.currencies[valuta[0]].name}</span>`;
        }
    });
});
