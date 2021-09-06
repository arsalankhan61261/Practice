const selectBox = document.getElementById('select-box');
const button = document.getElementById('btn');

const data = [
    {
        name: 'John',
        text: "I'm Angry",
        lang: "en-US"
    },
    {
        name: 'William',
        text: "I'm Happy",
        lang: "sv-SE"
    },
    {
        name: 'Lisa',
        text: "I'm Hungry",
        lang: "pl-PL"
    },
    {
        name: 'Peter',
        text: "I want a Ciggrate",
        lang: "fr-CA"
    }
];

let voicesArray = [];

const message = new SpeechSynthesisUtterance();
/* console.log(message); */
function showSelect () {
const voices = data.forEach((voice) => {
      /* console.log(voice); */
      /* console.log(voice.lang); */
      /* console.log(voice.name); */
      let option = document.createElement('option');
        option.textContent = `${voice.name} (${voice.lang})`;
        
        // option.setAttribute('data-lang', voice.lang);
        // option.setAttribute('data-name', voice.name);
        selectBox.appendChild(option);
       
        // message.lang = voice.lang;
        // message.text = voice.text;
        // console.log(message);
});
};

// speechSynthesis.speak(message);
// console.log(message);

function speakVoice() {
    voicesArray = data;
    voicesArray.forEach((voice) => {
        message.lang = voice.lang;
        message.text = voice.text;
        speechSynthesis.speak(message);
        console.log(speech);
    })
};


button.addEventListener('click', () => { 
    speakVoice();
});

showSelect();