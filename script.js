const buttonElement = document.querySelector(".sign-up");
const errorDiv = document.querySelector(".error-div");
const errorMessage = errorDiv.querySelector(".error-message");

buttonElement.addEventListener("click", (event) => {
  let password = document.querySelector("#password").value;
  let confirmPassword = document.querySelector("#confirm-password").value;

  if (password !== confirmPassword) {
    errorMessage.textContent = "Passwords do not match";
    errorDiv.style.display = "block";
    event.preventDefault();
  } else {
    errorDiv.style.display = "none";
  }
});
