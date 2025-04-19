// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMBtmktzEY04ZkkYsF8Co6Q4iBoL-ZDJk",
  authDomain: "parkease-6flry.firebaseapp.com",
  databaseURL: "https://parkease-6flry-default-rtdb.firebaseio.com",
  projectId: "parkease-6flry",
  storageBucket: "parkease-6flry.firebasestorage.app",
  messagingSenderId: "987974602534",
  appId: "1:987974602534:web:df87b99ccd4d2b474ebbe7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//submit button
const submit = document.getElementById('signInButton');
submit.addEventListener("click", function(event){
  event.preventDefault() // Prevent the default form submission behavior

  //inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("login...");
    window.location.href = "index.html"; // Redirect to home page after successful registration
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
 // Show an alert when the button is clicked
});
