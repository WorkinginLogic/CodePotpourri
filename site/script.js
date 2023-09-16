/* --- Binary to Hex ---  */

function randomNibble() {
    return (Math.floor(Math.random() * 15) + 1).toString(2).padStart(4, '0');
}

function binaryToHex(b) {
    const integer = parseInt(b, 2);
    return integer.toString(16);
}

function generateNewb2hQuestion() {
    const randomBinaryElement = document.getElementById("randomBinary");
    const outputElement = document.getElementById("output");
    const hexInput = document.getElementById("hexInput");
    
    const randomBinary = randomNibble();
    randomBinaryElement.textContent = `${randomBinary}`;
    hexInput.value = ''; // Clear input

    return randomBinary; 
}

function updateb2hOutput(randomBinary) {
    const hexInput = document.getElementById("hexInput").value;
    const outputElement = document.getElementById("output");
    const correctHex = binaryToHex(randomBinary);

    if (hexInput === correctHex) {
        outputElement.textContent = "Correct!";
    } else {
        outputElement.textContent = `Wrong. The correct answer is ${correctHex}.`;
    }
}

const b2hButton = document.getElementById("b2hButton");
let currentRandomBinary = generateNewb2hQuestion(); // Initial question

b2hButton.addEventListener("click", function() {
    updateb2hOutput(currentRandomBinary);
    currentRandomBinary = generateNewb2hQuestion(); // Generate a new question
});

hexInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission
        updateb2hOutput(currentRandomBinary); // Check the current question
        currentRandomBinary = generateNewb2hQuestion(); // Generate a new question
    }
});



/* --- Hex to Binary --- */



function randomHexadecimal() {
    const characters = "0123456789ABCDEF";
    let result = '';
    for (let i = 0; i < 1; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function hexToBinary(hex) {
    const binary = parseInt(hex, 16).toString(2);
    return binary.padStart(4, '0'); 
}

function generateNewQuestion() {
    const randomHexElement = document.getElementById("randomHex");
    const outputElement = document.getElementById("output");
    const binaryInput = document.getElementById("binaryInput");
    
    const randomHex = randomHexadecimal();
    randomHexElement.textContent = `${randomHex}`;
    binaryInput.value = '';

    return randomHex; 
}

function updateh2bOutput(randomHex) {
    const binaryInput = document.getElementById("binaryInput").value;
    const outputElement = document.getElementById("output");
    const correctBinary = hexToBinary(randomHex);

    if (binaryInput === correctBinary) {
        outputElement.textContent = "Correct!";
    } else {
        outputElement.textContent = `Wrong. The correct answer is ${correctBinary}.`;
    }
}

const h2bButton = document.getElementById("h2bButton");
const binaryInput = document.getElementById("binaryInput");
let currentRandomHex = generateNewQuestion();

h2bButton.addEventListener("click", function() {
    updateh2bOutput(currentRandomHex); 
    currentRandomHex = generateNewQuestion();
});

binaryInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        updateh2bOutput(currentRandomHex); 
        currentRandomHex = generateNewQuestion();
    }
});

