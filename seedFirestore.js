import {
  getFirestore, collection, addDoc
} from "firebase/firestore";

// Replace with your Firebase config
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

// Seed data
async function seedFirestore() {
  try {
    // Create Mentors with updated fields
    const mentorRef = await addDoc(collection(db, "mentors"), {
      fullName: "Lucius Fox",
      organization: "Wayne Enterprises",
      designation: "Chief Technology Officer",
      role: "mentor",
      aboutMe: "20+ years experience in R&D and technology innovation",
      education: "PhD in Engineering, MIT",
      gender: "Male",
      dateOfBirth: "1970-05-15",
      yearsOfExperience: "20",
      categoriesOfInterest: ["FinTech", "AI/ML", "CleanTech"],
      profileImage: "",
      joinedAt: new Date()
    });

    // Create Pitchers with updated fields
    const pitcherRef = await addDoc(collection(db, "pitchers"), {
      fullName: "Tony Stark",
      organization: "Stark Industries",
      designation: "CEO & Founder",
      role: "pitcher",
      aboutMe: "Innovative entrepreneur focused on clean energy solutions",
      education: "PhD in Engineering, MIT",
      gender: "Male",
      dateOfBirth: "1985-05-29",
      yearsOfExperience: "15",
      categoriesOfInterest: ["CleanTech", "AI/ML", "HealthTech"],
      profileImage: "",
      joinedAt: new Date(),
      // Pitcher-specific fields
      fundingStage: "SEED",
      seekingAmount: "$1.5M",
      valuation: "$8M",
      growth: "17%"
    });

    // Create Pitch linked to Pitcher
    await addDoc(collection(db, "pitches"), {
      title: "Arc Reactor Technology",
      description: "Clean energy solution for sustainable future",
      pitcherId: pitcherRef.id,
      createdAt: new Date()
    });

    // Create Feedback linked to Mentor and Pitch
    await addDoc(collection(db, "feedback"), {
      mentorId: mentorRef.id,
      pitchId: "PUT_PITCH_ID_HERE",
      comments: "Great vision. Consider expanding your GTM strategy.",
      createdAt: new Date()
    });

    console.log("Database seeded successfully.");
  } catch (error) {
    console.error("Error seeding Firestore:", error);
  }
}

seedFirestore();
