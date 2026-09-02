const userName = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const message = document.getElementById("message");

const validateForm = () => {
  if (userName.value === "") {
    message.textContent = "Enter your name";
  } else if (email.value === "") {
    message.textContent = "Enter your email";
  } else if (number.value === "") {
    message.textContent = "Enter your phone number";
  } else if (password.value === "") {
    message.textContent = "Enter your password";
  } else if (confirmPassword.value === "") {
    message.textContent = "Confirm your password";
  } else if (password.value !== confirmPassword.value) {
    message.textContent = "Passwords do not match";
  } else if (!email.value.includes("@") || !email.value.includes(".")) {
    message.textContent = "Enter a valid email";
  } else {
    message.textContent = "Registration successful!";
  }
};
