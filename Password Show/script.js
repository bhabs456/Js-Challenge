const password = document.getElementById("input-password");
const eyeIcon = document.getElementById("eye-icon");

eyeIcon.addEventListener("click", () => {       // using eventlistener to check for click in svg icon if yes then function happens..
    if(password.type === "password"){        // checks password in which format and then changes 
        password.type = "text";
    }
    else{
        password.type = "password";
    }

    // password.type = password.type === "password" ? "text" : "password"; // another way by using Ternary operator
})
