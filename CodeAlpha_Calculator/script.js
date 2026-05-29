/* Display */

let display = document.getElementById("display");

/* Append Values */

function appendValue(value){

    display.value += value;
}

/* Clear Display */

function clearDisplay(){

    display.value = "";
}

/* Calculate Result */

function calculateResult(){

    display.value = eval(display.value);
}

/* Keyboard Support */

document.addEventListener("keydown", function(event){

    let key = event.key;

    if(
        (key >= 0 && key <= 9) ||
        key == "+" ||
        key == "-" ||
        key == "*" ||
        key == "/" ||
        key == "."
    ){

        appendValue(key);
    }

    else if(key == "Enter"){

        calculateResult();
    }

    else if(key == "Backspace"){

        display.value =
        display.value.slice(0, -1);
    }

    else if(key == "Escape"){

        clearDisplay();
    }

});