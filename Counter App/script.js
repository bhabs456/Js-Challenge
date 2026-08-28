let count = 0;

let counter = document.getElementById("counter-value")

let increase = (() => {
    count = count + 1;
    console.log(count);
    counter.textContent = count;
})


let decrease = (() => {
    if(count > 0){
        count = count - 1;
        console.log(count);
        counter.textContent = count;
    }
    
})

let reset = (() => {
    count = 0;
    console.log(count);
    counter.textContent = count;
})