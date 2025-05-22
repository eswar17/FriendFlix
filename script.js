const validUsers = [
  { username: "9849627978", password: "eswar" },
  { username: "984962797", password: "eswa" },
];

function validateForm(event) {
      event.preventDefault();
      let valid = true;

      const emailInput = document.querySelector('input[type="text"]');
      const passwordInput = document.querySelector('input[type="password"]');

      const emailError = document.getElementById("email-error");
      const passwordError = document.getElementById("password-error");
      const credentialError = document.getElementById("credential-error");
      const emailHighlight = document.getElementById("email-highlight");
      if (!emailInput.value.trim()) {
        emailInput.classList.add("error");
        emailError.style.display = "block";
        valid = false;
      } else {
        emailInput.classList.remove("error");
        emailError.style.display = "none";
      }

      if (passwordInput.value.length < 4 || passwordInput.value.length > 60) {
        passwordInput.classList.add("error");
        passwordError.style.display = "block";
        valid = false;
      } else {
        passwordInput.classList.remove("error");
        passwordError.style.display = "none";
      }

      if (valid) {
    const userFound = validUsers.some(user =>
      user.username === emailInput.value.trim() && user.password === passwordInput.value
    );

    if (!userFound) {
      emailHighlight.textContent = emailInput.value;
      credentialError.style.display = "block";
    } else {
      credentialError.style.display = "none";
     window.location.href = "ProfileScreen.html";
    }
  } else {
    credentialError.style.display = "none";
  }
    }

    document.addEventListener("DOMContentLoaded", () => {
      const form = document.querySelector(".login-box");
      form.addEventListener("submit", validateForm);
    });