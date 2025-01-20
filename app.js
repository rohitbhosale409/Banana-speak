// Select the button and input field
var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");

// Log the selected input element to ensure it's not null
console.log("Text Input Element:", textInput);

function clickHandler() {
    console.log("Button clicked!");
    // Log the current value of the input field
    console.log("Input Value:", textInput.value);
}

// Attach the click event listener to the button
if (btnTranslate) {
    btnTranslate.addEventListener("click", clickHandler);
} else {
    console.error("Button with id 'btn-translate' not found in the DOM!");
}
