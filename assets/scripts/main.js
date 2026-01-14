"use strict";
const regiterRoute = document.querySelectorAll(".registerRoute");

regiterRoute.forEach((route) => {
  route.addEventListener("click", () => {
    window.location.href = "register.html";
    regiterRoute.innerText = "Create account";
  });
});
