/* --- Binary to Hex ---  */

function randomNibble() {
    return (Math.floor(Math.random() * 15) + 1).toString(2).padStart(4, '0');
}

function binaryToHex(b) {
    const integer = parseInt(b, 2);
    return integer.toString(16);
}

function generateNewQuestion() {
    const randomBinaryElement = document.getElementById("randomBinary");
    const outputElement = document.getElementById("output");
    const hexInput = document.getElementById("hexInput");
    
    const randomBinary = randomNibble();
    randomBinaryElement.textContent = `${randomBinary}`;
    hexInput.value = ''; // Clear input

    return randomBinary; 
}

function updateOutput(randomBinary) {
    const hexInput = document.getElementById("hexInput").value;
    const outputElement = document.getElementById("output");
    const correctHex = binaryToHex(randomBinary);

    if (hexInput === correctHex) {
        outputElement.textContent = "Correct!";
    } else {
        outputElement.textContent = `Wrong. The correct answer is ${correctHex}.`;
    }
}

const binaryButton = document.getElementById("binaryButton");
let currentRandomBinary = generateNewQuestion(); // Initial question

binaryButton.addEventListener("click", function() {
    updateOutput(currentRandomBinary);
    currentRandomBinary = generateNewQuestion(); // Generate a new question
});

hexInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission
        updateOutput(currentRandomBinary); // Check the current question
        currentRandomBinary = generateNewQuestion(); // Generate a new question
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

function generateNewQuestion1() {
    const randomHexElement = document.getElementById("randomHex");
    const outputElement = document.getElementById("output");
    const binaryInput = document.getElementById("binaryInput");
    
    const randomHex = randomHexadecimal();
    randomHexElement.textContent = `${randomHex}`;
    binaryInput.value = '';

    return randomHex; 
}

function updateOutput1(randomHex) {
    const binaryInput = document.getElementById("binaryInput").value;
    const outputElement = document.getElementById("output");
    const correctBinary = hexToBinary(randomHex);

    if (binaryInput === correctBinary) {
        outputElement.textContent = "Correct!";
    } else {
        outputElement.textContent = `Wrong. The correct answer is ${correctBinary}.`;
    }
}

const hexButton = document.getElementById("hexButton");
const binaryInput = document.getElementById("binaryInput");
let currentRandomHex = generateNewQuestion1();

hexButton.addEventListener("click", function() {
    updateOutput1(currentRandomHex); 
    currentRandomHex = generateNewQuestion1();
});

binaryInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        updateOutput1(currentRandomHex); 
        currentRandomHex = generateNewQuestion1();
    }
});



/* --- Double Hex to Binary --- */

function randomHexadecimal2() {
    const characters = "0123456789ABCDEF";
    let result = '';
    for (let i = 0; i < 2; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function hexToBinary2(hex) {
    const binary = parseInt(hex, 16).toString(2);
    return binary.padStart(8, '0'); 
}

function generateNewQuestion2() {
    const randomHexElement = document.getElementById("randomHex2");
    const outputElement = document.getElementById("output");
    const binaryInput = document.getElementById("binaryInput2");
    
    const randomHex = randomHexadecimal2();
    randomHexElement.textContent = `${randomHex}`;
    binaryInput.value = '';

    return randomHex; 
}

function updateOutput2(randomHex) {
    const binaryInput = document.getElementById("binaryInput2").value;
    const outputElement = document.getElementById("output");
    const correctBinary = hexToBinary2(randomHex);

    if (binaryInput === correctBinary) {
        outputElement.textContent = "Correct!";
    } else {
        outputElement.textContent = `Wrong. The correct answer is ${correctBinary}.`;
    }
}

const hexButton2 = document.getElementById("hexButton2");
const binaryInput2 = document.getElementById("binaryInput2");
let currentRandomHex2 = generateNewQuestion2();

hexButton2.addEventListener("click", function() {
    updateOutput2(currentRandomHex2); 
    currentRandomHex2 = generateNewQuestion2();
});

binaryInput2.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        updateOutput2(currentRandomHex2); 
        currentRandomHex2 = generateNewQuestion2();
    }
});



/* --- Hex to Decimal --- */

function randomHexadecimal3() {
    const characters = "0123456789ABCDEF";
    let result = '';
    for (let i = 0; i < 2; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result; // Returns a string with two concatenated hexadecimal digits.
}

function hexToDecimal(hex) { // Modified function name
    const decimal = parseInt(hex, 16); // Directly convert to decimal
    return decimal; // Return the decimal value
}

function generateNewQuestion3() {
    const randomHexElement = document.getElementById("randomHex3");
    const outputElement = document.getElementById("output");
    const decimalInput = document.getElementById("decimalInput"); // Modify input ID
    
    const randomHex = randomHexadecimal3();
    randomHexElement.textContent = `${randomHex}`;
    decimalInput.value = ''; // Clear the input field

    return randomHex; // Return the new random hexadecimal for checking later
}

function updateOutput3(randomHex) {
    const decimalInput = document.getElementById("decimalInput").value; // Modify input ID
    const outputElement = document.getElementById("output");
    const correctDecimal = hexToDecimal(randomHex); // Use the modified function

    if (decimalInput === correctDecimal.toString()) { // Convert decimal to string for comparison
        outputElement.textContent = "Correct!";
    } else {
        outputElement.textContent = `Wrong. The correct answer is ${correctDecimal}.`;
    }
}

const decimalButton = document.getElementById("decimalButton");
const decimalInput = document.getElementById("decimalInput");
let currentRandomHex3 = generateNewQuestion3(); // Generate the initial question

decimalButton.addEventListener("click", function() {
    updateOutput3(currentRandomHex3); // Check the current question
    currentRandomHex3 = generateNewQuestion3(); // Generate a new question
});

// Add an event listener to the text field for the Enter key press event
decimalInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission
        updateOutput3(currentRandomHex3); // Check the current question
        currentRandomHex3 = generateNewQuestion3(); // Generate a new question
    }
});
