// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMBtmktzEY04ZkkYsF8Co6Q4iBoL-ZDJk",
  authDomain: "parkease-6flry.firebaseapp.com",
  databaseURL: "https://parkease-6flry-default-rtdb.firebaseio.com",
  projectId: "parkease-6flry",
  storageBucket: "parkease-6flry.appspot.com",
  messagingSenderId: "987974602534",
  appId: "1:987974602534:web:df87b99ccd4d2b474ebbe7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle login form submission
const signInForm = document.getElementById('signInForm');

signInForm.addEventListener("submit", function(event){
  event.preventDefault(); // Prevent default form submission

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  // Optional: Basic validation
  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Successfully signed in
      alert("Login successful!");
      window.location.href = "index.html"; // Redirect to home page
    })
    .catch((error) => {
      if (error.code === "auth/user-not-found") {
        alert("User not found. Please create an account.");
      } else if (error.code === "auth/wrong-password") {
        alert("Incorrect password. Please try again.");
      } else {
        alert("Error: " + error.message);
      }
    });
});
