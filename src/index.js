import "./styles/main.scss";

function isEmpty(value) {
  if (!value) {
    return true;
  } else {
    return false;
  }
}

function showError(inputElement) {
  inputElement.nextElementSibling.style.display = "block";
  inputElement.classList.add("error-border");
}

function hideError(inputElement) {
  inputElement.nextElementSibling.style.display = "none";
  inputElement.classList.remove("error-border");
}

function isInputValid(inputElement) {
  if (!inputElement.nextElementSibling) {
    return;
  }
  if (isEmpty(inputElement.value) || !inputElement.validity.valid) {
    showError(inputElement);
  } else {
    hideError(inputElement);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#form");
  const formInputs = document.querySelectorAll("input");
  const password = document.querySelector("#password");
  const confirmPassword = document.querySelector("#password_confirm");

  function isPasswordSame(confirmPasswordField) {
    if (confirmPasswordField.value === password.value) {
      hideError(password);
    } else {
      showError(password);
    }
  }

  confirmPassword.addEventListener("change", function (e) {
    isPasswordSame(e.target);
  });

  form.addEventListener("submit", (e) => e.preventDefault());

  formInputs.forEach((input) => {
    input.addEventListener("change", (e) => isInputValid(e.target));
  });
});
