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
        lang: "pl-PL"
    },
    {
        name: 'John',
        text: "John want some cigrattes",
        lang: "pl-PL"
    },
    {
        name: 'Wilson',
        text: "Willson needs a job",
        lang: "fr-CA"
    }
];

let voicesArray = [];

// const speech = window.speechSynthesis;

function renderVoices() {
    data.forEach((voice) => {
        /* console.log(voice); */
        let option = document.createElement('option');
        option.textContent = `${voice.name} (${voice.lang})`;
       
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        option.setAttribute('value', option.value);
        selectBox.appendChild(option);  
    })
    
};

renderVoices();

function getIndex() {
    
};



function getText() {
    var a = selectBox.options[selectBox.selectedIndex].value;
    console.log(a);
	voicesArray = data;
    voicesArray.forEach((voice) => {
    
    const message = new SpeechSynthesisUtterance();
	message.text = voice.text;
    message.lang = voice.lang;
    console.log(message);
    speechSynthesis.speak(message);
    })
};

button.addEventListener('click', () => {
    getText();
});