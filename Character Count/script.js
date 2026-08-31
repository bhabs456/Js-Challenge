const words = document.getElementById("words");   
const result = document.getElementById("result"); 

const countWords = () => {

    if(words.value === ""){      // check if the textarea is blank 
    alert("Write Something") // throws an empty alert
    return;
    }


    let noc = words.value.length;  // checks the length of the value written in textarea
    result.textContent = `Total No. of Characters: ${noc}`;    // print total characters in paragraph with static and dynamic text
}