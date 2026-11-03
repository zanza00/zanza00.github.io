function setPlanetOfDay(number) {
    var day = (number >= 1 && number < 7) ? number : new Date().getDay();

    document.body.classList.add('planet' + day);

    document.querySelectorAll('.lead').forEach(function (el) {
        el.classList.add('color' + day);
    });
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

    document.querySelector('#phrase').innerHTML = phrases[Math.floor(Math.random() * phrases.length)];
}

function setupTabs() {
    var links = document.querySelectorAll('.masthead-nav a');
    var panels = document.querySelectorAll('.tab-panel');

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            links.forEach(function (l) { l.classList.remove('active'); });
            panels.forEach(function (p) { p.classList.remove('active'); });
            link.classList.add('active');
            document.querySelector(link.getAttribute('href')).classList.add('active');
        });
    });
}

setRandomPhrase();
setPlanetOfDay();
setupTabs();
