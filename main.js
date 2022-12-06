let passwordField = document.querySelector("input");

let eyeIcon = document.querySelector(".showBtn");

function showpassword(e) {
  e.target.classList.toggle("fa-eye-slash");
  if (passwordField.getAttribute("type") === "password") {
    passwordField.setAttribute("type", "text");
  } else {
    passwordField.setAttribute("type", "password");
  }
}

eyeIcon.addEventListener("click", showpassword, true);
