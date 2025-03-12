/**
 * Created by @zanza00 on 02/04/2016.
 *
 */
function setPlanetOfDay(number) {
    var day = (number >= 1 && number < 7) ? number : new Date().getDay();

    function changeBg() {
        var bodyElement = document.querySelector('body');

        var classOfTheDay = 'planet' + day;

        bodyElement.classList.add(classOfTheDay);
    }

    function setColorOfDay() {
        var classOfTheDay = 'color' + day;
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
        'I know Java Jutsu',
        'Code goes in, magic comes out',
        'Debugging is like being the detective in a crime movie where you\'re also the murderer',
        'It works on my machine ¯\\_(ツ)_/¯',
        'The code and I are having creative differences',
        'Coffee.exe is essential for code.exe to run',
        'My code doesn\'t always work, but when it does, I don\'t know why'
    ];

    var phrase = phrases[Math.floor(Math.random() * phrases.length)];

    var phraseElement = document.querySelector('#phrase');

    phraseElement.innerHTML = phrase;
}

setRandomPhrase();

setPlanetOfDay();
