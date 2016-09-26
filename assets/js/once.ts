/**
 * Created by @zanza00 on 26/09/2016.
 *
 */

declare var $:any

function setPlanetOfDay(num?: number) {
    let day = (num >= 1 && num < 7) ? num : new Date().getDay();

    function changeBg() {
        let bodyElement = document.querySelector('body');
        let classOfTheDay = `planet${day}`;

        bodyElement.classList.add(classOfTheDay);
    }

    function setColorOfDay() {
        let classOfTheDay = `color${day}`;
        $('.lead').addClass(classOfTheDay);
    }

    changeBg();
    setColorOfDay();

}

function setRandomPhrase() {
    var phrases = [
        'Sometimes the view is nice up here',
        'I poke the keys of the keyboard and somehow something happened',
        'Bingo Bongo Bango, bish <em>bash</em> bosh',
        'The schrodinger\'s bug is here ',
        'I know Java Jutsu'
    ];

    var phrase = phrases[Math.floor(Math.random() * phrases.length)];

    var phraseElement = document.querySelector('#phrase');

    phraseElement.innerHTML = phrase;
}

setRandomPhrase();

setPlanetOfDay();
