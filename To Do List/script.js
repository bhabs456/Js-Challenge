const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === ''){    // if input blank 
        alert("Blank, Write Something.")
    }
    else{
        let li = document.createElement("li");   // Make a element li
        li.innerHTML = inputBox.value;  // store the data of input box in li html
        listContainer.appendChild(li); // this to show the text in list task

        let span = document.createElement("span");  // Create a element span
        span.innerHTML = "\u00d7";  // add a unicode character cross
        li.appendChild(span);  // this to show cross with the task
    }
    inputBox.value = ""; // this is to make input empty after adding.
    saveData();
}

listContainer.addEventListener("click" , function(e){   // check clicks in the listContainer
    if(e.target.tagName === "LI"){                      // if click on Li 
        e.target.classList.toggle("checked");   
        saveData();        // toggle checked feature and un toggle also
    }
    else if(e.target.tagName === "SPAN"){               // if click on span  
        e.target.parentElement.remove();
        saveData();                // remove parent element li (means delete the task)
    }
}, false);

function saveData(){   // to store the changes when refreshed website
    localStorage.setItem("data", listContainer.innerHTML);  // stores website data in list container in the name of data.
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");   // it shows data in website when refreshed in the name "data"
}

showData();  // shows data