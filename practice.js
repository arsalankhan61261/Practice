const selectBox = document.getElementById('select-box');
const button = document.getElementById('btn');

const data = [
    {
        name: 'Arsalan',
        text: "Arsalan is a Good person",
        lang: "en-US"
    },
    {
        name: 'Asif',
        text: "Asif is Happy",
        lang: "de-DE"
    },
    {
        name: 'John',
        text: "John want some cigrattes",
        lang: "it-IT"
    },
    {
        name: 'Wilson',
        text: "Willson needs a job",
        lang: "pl-PL"
    }
];

let voicesArray = [];

/* const speech = window.speechSynthesis; */

function selectText() {
    data.forEach((voice) => {
        // console.log(voice);
        let option = document.createElement('option');
        option.textContent = `${voice.name} (${voice.lang})`;
        /* console.log(voice.text); */
       
        option.setAttribute('lang', voice.lang);
        option.setAttribute('name', voice.name);
        option.setAttribute('value', voice.text);
        selectBox.appendChild(option);
    })
    // console.log(selectBox);
};

selectText();

button.addEventListener('click', () => {
    const message = new SpeechSynthesisUtterance();
    message.text = selectBox.value;
    message.lang = selectBox.options[selectBox.selectedIndex].lang;
    // console.log(message);
    if ( selectBox.selectedIndex = selectBox.value ) {
        speechSynthesis.speak(message);
    } else {
        return;
    };

    function xyz () {
        if ( selectBox.value == message.text ) {
            e.preventDefault();
        } else {
            return;
        }
    };
    xyz ();
});



selectBox.addEventListener('change', xyz);
