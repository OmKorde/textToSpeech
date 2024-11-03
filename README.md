<h2>Code Breakdown</h2><br>
<h5>Initialization of Speech Synthesis:</h5><br>


const synth = window.speechSynthesis <br>
This line accesses the speechSynthesis API from the browser's window object, which provides methods to convert text to speech. The synth variable will be used to control the speech synthesis.<br>

<h4>Getting DOM Elements:</h4><br>

const textInput = document.getElementById('textInput');<br>
const speakButton = document.getElementById('speak-btn');<br>
Here, the code retrieves two elements from the DOM (Document Object Model):<br>
textInput: An input field where users can type the text they want to be spoken.<br>
speakButton: A button that, when clicked, will trigger the speech synthesis.<br>

<h3>Adding an Event Listener:</h3>
speakButton.addEventListener('click', () => <br>
This line adds an event listener to the speakButton. The event listener listens for a click event, and when the button is clicked, it executes the function defined within the parentheses.<br>

<h3>Canceling Previous Speech:</h3><br>

synth.cancel();<br>
Before speaking new text, this line cancels any speech that might be currently playing. This ensures that the old utterance does not overlap with the new one.<br>
Checking Input and Speaking:<br>

if (textInput.value !== '') {<br>
const utterance = new SpeechSynthesisUtterance(textInput.value);<br>
synth.speak(utterance);<br>
}<br>
The code checks if the textInput field is not empty. If there is text entered:<br>
A new instance of SpeechSynthesisUtterance is created with the text from the textInput. This object represents a speech request.<br>
Finally, synth.speak(utterance) is called to initiate the speech synthesis with the created utterance.<br>
Summary<br>
The code allows users to enter text into an input field and have it spoken aloud when they click a button. It uses the Web Speech API, specifically the speechSynthesis part, to handle the text-to-speech functionality.<br>
By canceling any ongoing speech before starting a new utterance, it ensures that the audio experience is clear and doesn't overlap.<br>
