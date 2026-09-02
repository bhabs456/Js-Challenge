const time = document.getElementById("time");
const timeFormat = document.getElementById("time-format");



document.addEventListener("DOMContentLoaded", () => {       // when the webpage is full loaded, eventlistener starts
    showTime();                                             // runs the showtime function, to show current date
    setInterval(showTime, 1000);                            // again runs the func for 1 sec repeatedly 
})  

const showTime = () => {
    let date = new Date();                      // creates a new Date object that represents the current date and time at the exact moment the code runs
    
    let hrs = date.getHours();                  // return current hr
    let mins = date.getMinutes();               // return current mins
    let secs = date.getSeconds();               // return current secs 

    hrs = hrs<10 ? `0${hrs}` : hrs;             // adds a starting 0 for all if time has single digit eg: 1=9 hours mis secs 
    mins = mins<10 ? `0${mins}` : mins;
    secs = secs<10 ? `0${secs}` : secs;

    timeFormat.textContent = hrs>=12 ? "PM" : "AM";         // change am pm acc to 12 hour clock

    time.textContent = `${hrs} : ${mins} : ${secs}`;        // show time in order in the respective html 
}

