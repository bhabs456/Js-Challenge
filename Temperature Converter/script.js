// define all main things that will be needed
const inputBox = document.getElementById("input-box");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
const tempConverter = document.querySelector(".temp-converter")


const convert = () => {                 //function made for conversion logic 
    if(toFahrenheit.checked){           // if fahrenheit radio is clicked 
        let temp = Number(inputBox.value);   // stores string value in temp 
        temp = temp * 9 / 5 + 32;            // calculates temperature
        result.textContent = temp + "°F";    // shows data in para 
    }

    else if(toCelsius.checked){             // same for celsius
        let temp = Number(inputBox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp + "°C";
    }

    else{                                               // if nothing selected
        result.textContent = "Select a Conversion!!"    // alert box comes
    }
}

// To store data to prevent data loss on refresh 

// const setData = () => {
//     localStorage.setItem("data", tempConverter.innerHTML);
// }

// const showData = () => {
//     tempConverter.innerHTML = localStorage.getItem("data");
// }

// showData();