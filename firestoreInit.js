import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMBtmktzEY04ZkkYsF8Co6Q4iBoL-ZDJk",
  authDomain: "parkease-6flry.firebaseapp.com",
  databaseURL: "https://parkease-6flry-default-rtdb.firebaseio.com",
  projectId: "parkease-6flry",
  storageBucket: "parkease-6flry.firebasestorage.app",
  messagingSenderId: "987974602534",
  appId: "1:987974602534:web:1f93e17f9e580a124ebbe7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
