import { auth } from './firebase.js';
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  fetchSignInMethodsForEmail
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

// ✅ Show "Account created successfully" message
const urlParams = new URLSearchParams(window.location.search);
const registered = urlParams.get("registered");

if (registered === "success") {
  const successBox = document.createElement("div");
  successBox.id = "successBox";
  successBox.textContent = "✅ Account created successfully. Please sign in.";
  successBox.style.background = "#2ecc71";
  successBox.style.color = "white";
  successBox.style.padding = "12px";
  successBox.style.marginBottom = "20px";
  successBox.style.textAlign = "center";
  successBox.style.borderRadius = "4px";
  const loginBox = document.querySelector(".login-box");
  loginBox.prepend(successBox);
}

// ✅ Clean URL after showing success message
if (window.location.search.includes("registered=success")) {
  window.history.replaceState({}, document.title, "index.html");
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".login-box");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const emailInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const credentialError = document.getElementById("credential-error");
    const emailHighlight = document.getElementById("email-highlight");

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let valid = true;

    if (!email || !emailPattern.test(email)) {
      emailInput.classList.add("error");
      emailError.style.display = "block";
      valid = false;
    } else {
      emailInput.classList.remove("error");
      emailError.style.display = "none";
    }

    if (password.length < 4 || password.length > 60) {
      passwordInput.classList.add("error");
      passwordError.style.display = "block";
      valid = false;
    } else {
      passwordInput.classList.remove("error");
      passwordError.style.display = "none";
    }

    if (!valid) {
      credentialError.style.display = "none";
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = `ProfileScreen.html`;
    } catch (err) {
      emailHighlight.textContent = email;
      credentialError.style.display = "block";
    }
  });

  // ✅ Forgot password flow
  const forgotBtn = document.getElementById("forgotBtn");

  forgotBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const emailInput = document.querySelector('input[type="text"]');
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailPattern.test(email)) {
      showSuccessBox("⚠️ Please enter a valid email address.");
      return;
    }

    try {
      //const methods = await fetchSignInMethodsForEmail(auth, email);
      //if (methods.length === 0) {
      //  showSuccessBox("⚠️ This email is not registered with FriendFlix.");
      //  return;
      //}

      await sendPasswordResetEmail(auth, email);
      showSuccessBox("📩 Password reset email sent! Check your inbox or spam folder.(If you didn’t receive it, maybe this account isn’t registered.)");
    } catch (err) {
      console.error("Firebase error:", err);
      showSuccessBox("Something went wrong. Please try again.");
    }
  });
});

function showSuccessBox(message) {
  const existing = document.getElementById("successBox");
  if (existing) existing.remove();

  const successBox = document.createElement("div");
  successBox.id = "successBox";
  successBox.textContent = message;
  successBox.style.background = "#2ecc71";
  successBox.style.color = "white";
  successBox.style.padding = "12px";
  successBox.style.marginBottom = "20px";
  successBox.style.textAlign = "center";
  successBox.style.borderRadius = "4px";

  const loginBox = document.querySelector(".login-box");
  loginBox.prepend(successBox);
}
setTimeout(() => {
  const box = document.getElementById("successBox");
  if (box) box.remove();
}, 10000);
