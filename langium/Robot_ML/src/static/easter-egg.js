import { createEffect, createSignal } from './signals.js';


function getLetterString(letter) {
    switch (letter) {
        case 38:
            return '↑';
        case 40:
            return '↓';
        case 37:
            return '←';
        case 39:
            return '→';
        case 66:
            return 'B';
        case 65:
            return 'A';
        default:
            return letter;
    }
}



function easterEgg() {
    // if the user presses the keys "up, up, down, down, left, right, left, right, b, a" in this order, the easter egg will be triggered
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

    const [currentLetters, setCurrentLetters] = createSignal([]);

    const letterContainer = document.getElementById('letter-container');

    const letterHTML = (letter) => `<div style="background-color: grey; border-radius: 9999px; padding: 10px; text-align: center; font-size: 3em;">${getLetterString(letter)}</div>`;

    createEffect(() => {
        letterContainer.innerHTML = currentLetters().map(letter => letterHTML(letter)).join('');
    });


    let konamiCodePosition = 0;
    document.addEventListener('keydown', function (e) { 
        if (e.keyCode === konamiCode[konamiCodePosition++]) {
            setCurrentLetters([...currentLetters(), e.keyCode]);
            if (konamiCodePosition === konamiCode.length) {
                konamiCodePosition = 0;
                setCurrentLetters([]);
                handleEasterEgg();
            }
        } else {
            konamiCodePosition = 0;
            setCurrentLetters([]);
        }
    }
    );
}

function handleEasterEgg() {
    window.location.href = "https://www.youtube.com/watch?v=0tOXxuLcaog";
}


easterEgg();