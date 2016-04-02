/**
 * Created by @zanza00 on 02/04/2016.
 *
 */

function changeBg() {
    var bodyElement = document.querySelector('body');

    var classOfTheDay = 'planet' + new Date().getDay();

    bodyElement.classList.add(classOfTheDay);
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

changeBg();