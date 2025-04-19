// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
// Update the import to include specific Firestore functions
import { getFirestore, collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";




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
const auth = getAuth(app);
const db = getFirestore(app);

//submit button
const submit = document.getElementById('signInButton');
submit.addEventListener("click", function(event){
  event.preventDefault();

  //inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const selectedRole = document.getElementById('role').value;

  // In your registration code, replace db.collection with the correct syntax:
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      const user = userCredential.user;
      const uid = user.uid;
      const userData = {
          email: email,
          createdAt: new Date()
      };

      const role = selectedRole; // "mentor" or "pitcher"
      return setDoc(doc(db, role + "s", uid), userData);
  })
  .then(() => {
      console.log("User registered and stored as:", selectedRole);
      alert("Account is Created"); // Changed alert message
      window.location.href = "login.html";
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
  });
});
