const hints = document.querySelectorAll(".hint");
const inputs = document.querySelectorAll("input");

function onFocus(event) {
    const inputNum = Number(event.target.getAttribute("data-input-num"));
    hints[inputNum].classList.remove("hidden");
}

function onBlur(event) {
    const inputNum = Number(event.target.getAttribute("data-input-num"));  
    const isValid = validate(inputNum, event.target.value); 
    if(isValid) {
        hints[inputNum].classList.add("hidden"); 
        inputs[inputNum].classList.remove("invalid-input");
    }  else {
        inputs[inputNum].classList.add("invalid-input");
    }
}

function validate(inputNum, text) {
    switch(inputNum) {
        case 0:
            return text !== "";
        case 1:
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(text);
        case 2:
            return text.length > 7;
        case 3:
            return inputs[2].value === text;
    }
}

inputs.forEach(input => {
    input.addEventListener("focus", onFocus);
    input.addEventListener("blur", onBlur);
})