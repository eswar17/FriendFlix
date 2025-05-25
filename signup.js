import { auth, db } from './firebase.js';
import {
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

//document.addEventListener("DOMContentLoaded", () => {
//  const form = document.getElementById("signupForm");
//  const emailInput = document.getElementById("email");
//  const emailError = document.getElementById("email-error");
//  const passwordInput = document.getElementById("password");
//  const passwordError = document.getElementById("password-error");
//  const statusMsg = document.getElementById("signup-status");
//
//  form.addEventListener("submit", async (e) => {
//    e.preventDefault();
//
//    const email = emailInput.value.trim();
//    const password = passwordInput.value.trim();
//    let valid = true;
//
//    // ✅ Email format check
//    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//    if (!emailPattern.test(email)) {
//      emailError.style.display = "block";
//      valid = false;
//    } else {
//      emailError.style.display = "none";
//    }
//
//    // ✅ Password length check
//    if (password.length < 4 || password.length > 60) {
//      passwordError.style.display = "block";
//      valid = false;
//    } else {
//      passwordError.style.display = "none";
//    }
//
//    if (!valid) return;
//
//    try {
//      // ✅ Firebase create user
//      const userCred = await createUserWithEmailAndPassword(auth, email, password);
//      const user = userCred.user;
//
//      // ✅ Save user data to Firestore
//      await setDoc(doc(db, "users", user.uid), {
//        email: email,
//        createdAt: new Date().toISOString()
//      });
//
//      // ✅ Redirect to login page with success message
//      window.location.href = `index.html?registered=success`;
//    } catch (err) {
//      console.error(err);
//      let msg = "Something went wrong. Try again.";
//
//      if (err.code === "auth/email-already-in-use") {
//        msg = "⚠️ This email is already registered.";
//      } else if (err.code === "auth/invalid-email") {
//        msg = "⚠️ Invalid email format.";
//      } else if (err.code === "auth/weak-password") {
//        msg = "⚠️ Password is too weak.";
//      }
//
//      statusMsg.textContent = msg;
//      statusMsg.style.display = "block";
//    }
//  });
//});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");
  const statusMsg = document.getElementById("signup-status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    statusMsg.style.display = "block";
    statusMsg.textContent = "🚫 We’ve temporarily disabled Sign Up. Please try again later.";
  });
});
