// script.js
const sentence = "Welcome to Noorani";
let index = 0;

function typeSentence() {
    if (index < sentence.length) {
        document.getElementById("sentence").textContent += sentence[index];
        index++;
        setTimeout(typeSentence, 100); // Adjust typing speed here
    }
}

window.onload = typeSentence;  // Starts typing when the page loads
