document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const submitBtn = document.getElementById("submitBtn");

  // Regular expressions for validation
  const nameRegex = /^[a-zA-Z0-9 ]+$/;
  const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/;
  const passwordRegex = /.{8,}/;

  // Add event listeners for input fields
  name.addEventListener("input", validateName);
  phone.addEventListener("input", validatePhone);
  email.addEventListener("input", validateEmail);
  password.addEventListener("input", validatePassword);

  function validateName() {
    if (!nameRegex.test(name.value)) {
      name.classList.add("is-invalid");
      document.getElementById("name-error").textContent = "Name is invalid.";
    } else {
      name.classList.remove("is-invalid");
      document.getElementById("name-error").textContent = "";
    }
    validateForm();
  }

  function validatePhone() {
    if (!phoneRegex.test(phone.value)) {
      phone.classList.add("is-invalid");
      document.getElementById("phone-error").textContent =
        "Phone is invalid (xxx-xxx-xxxx).";
    } else {
      phone.classList.remove("is-invalid");
      document.getElementById("phone-error").textContent = "";
    }
    validateForm();
  }

  function validateEmail() {
    if (!emailRegex.test(email.value)) {
      email.classList.add("is-invalid");
      document.getElementById("email-error").textContent =
        "Email is invalid (must be @northeastern.edu).";
    } else {
      email.classList.remove("is-invalid");
      document.getElementById("email-error").textContent = "";
    }
    validateForm();
  }

  function validatePassword() {
    if (!passwordRegex.test(password.value)) {
      password.classList.add("is-invalid");
      document.getElementById("password-error").textContent =
        "Password must be at least 8 characters.";
    } else {
      password.classList.remove("is-invalid");
      document.getElementById("password-error").textContent = "";
    }
    validateForm();
  }

  function validateForm() {
    if (
      nameRegex.test(name.value) &&
      phoneRegex.test(phone.value) &&
      emailRegex.test(email.value) &&
      passwordRegex.test(password.value)
    ) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  }
});
