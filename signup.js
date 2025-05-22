import { auth, db } from './firebase.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const email = phone + "@friendflix.com";
  console.log(email);
  const statusEl = document.getElementById("signup-status");
  statusEl.style.display = "none";

  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", userCred.user.uid), {
      phone,
      email,
      createdAt: serverTimestamp()
    });

    statusEl.textContent = "Signup successful!";
    statusEl.style.color = "lime";
    statusEl.style.display = "block";
  } catch (error) {
    statusEl.textContent = "Error: " + error.message;
    statusEl.style.color = "#e87c03";
    statusEl.style.display = "block";
  }
});
