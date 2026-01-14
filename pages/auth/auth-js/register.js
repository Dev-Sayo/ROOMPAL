"use strict";
const myForm = document.getElementById("register-form");
const successMessage = document.getElementById("verify-email");

function errorMessage(input, message) {
  const errorDiv = document.getElementById(input.id + "Error");
  errorDiv.textContent = message;
  errorDiv.style.display = "block";
  input.classList.add("error-border");
}

function clearError() {
  const errorDivs = document.querySelectorAll(".error");
  errorDivs.forEach((div) => (div.style.display = "none"));

  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => input.classList.remove("error-border"));
}

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  clearError();

  //   input
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  //   inputs validations
  if (name.value.trim().length <= 2) {
    errorMessage(name, "name must be at least two character");
  }

  //   email validation
  if (!email.value.includes("@") || !email.value.includes(".com")) {
    errorMessage(email, "please enter a valid email address");
  }

  //   password vlidation
  if (!password.value.includes("#") || password.value.length >= 8) {
    errorMessage(password, "please enter at least 8 digits password with #");
  }

  //   confirm password validation
  //   if (.value.includes("@") || !email.value.includes(".com")) {
  //     nameError.textContent = "please enter a valid email address";
  //   } else {
  //     emailError.style.display = "none";
  //     email.classList.remove("error-border");
  //   }
});
