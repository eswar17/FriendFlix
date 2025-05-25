// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCEtiDilDHSXpucdC_oPW-vgBYnsgIv1Qw",
  authDomain: "friendflix-8c346.firebaseapp.com",
  projectId: "friendflix-8c346",
  storageBucket: "friendflix-8c346.firebasestorage.app",
  messagingSenderId: "716663178628",
  appId: "1:716663178628:web:1fc686217973726aafc9d1",
  measurementId: "G-D29S5N66QL"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
