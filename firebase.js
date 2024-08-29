// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7ScJ7HcX6W4SUSDRxsCjLl2ZQIhPO2MY",
  authDomain: "flashcards-ai-117fb.firebaseapp.com",
  projectId: "flashcards-ai-117fb",
  storageBucket: "flashcards-ai-117fb.appspot.com",
  messagingSenderId: "334592557151",
  appId: "1:334592557151:web:c1936f9422ae324a131bea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;