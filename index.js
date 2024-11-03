
const synth=window.speechSynthesis;
const textInput=document.getElementById('textInput');
const speakButton=document.getElementById('speak-btn');
speakButton.addEventListener('click',()=>{
    synth.cancel();
    if(textInput.value!==''){
        const utterance=new SpeechSynthesisUtterance(textInput.value);
        synth.speak(utterance);
    }
})

// Code Breakdown
// Initialization of Speech Synthesis:

// javascript
// Copy code
// const synth = window.speechSynthesis;
// This line accesses the speechSynthesis API from the browser's window object, which provides methods to convert text to speech. The synth variable will be used to control the speech synthesis.
// Getting DOM Elements:

// javascript
// Copy code
// const textInput = document.getElementById('textInput');
// const speakButton = document.getElementById('speak-btn');
// Here, the code retrieves two elements from the DOM (Document Object Model):
// textInput: An input field where users can type the text they want to be spoken.
// speakButton: A button that, when clicked, will trigger the speech synthesis.
// Adding an Event Listener:

// javascript
// Copy code
// speakButton.addEventListener('click', () => {
// This line adds an event listener to the speakButton. The event listener listens for a click event, and when the button is clicked, it executes the function defined within the parentheses.
// Canceling Previous Speech:

// javascript
// Copy code
// synth.cancel();
// Before speaking new text, this line cancels any speech that might be currently playing. This ensures that the old utterance does not overlap with the new one.
// Checking Input and Speaking:

// javascript
// Copy code
// if (textInput.value !== '') {
//     const utterance = new SpeechSynthesisUtterance(textInput.value);
//     synth.speak(utterance);
// }
// The code checks if the textInput field is not empty. If there is text entered:
// A new instance of SpeechSynthesisUtterance is created with the text from the textInput. This object represents a speech request.
// Finally, synth.speak(utterance) is called to initiate the speech synthesis with the created utterance.
// Summary
// The code allows users to enter text into an input field and have it spoken aloud when they click a button. It uses the Web Speech API, specifically the speechSynthesis part, to handle the text-to-speech functionality.
// By canceling any ongoing speech before starting a new utterance, it ensures that the audio experience is clear and doesn't overlap.