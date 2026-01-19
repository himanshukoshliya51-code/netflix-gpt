// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUytpY9jQHhAbky5oD69dBKJw3Q2WolBs",
  authDomain: "netflixgpt-725c7.firebaseapp.com",
  projectId: "netflixgpt-725c7",
  storageBucket: "netflixgpt-725c7.firebasestorage.app",
  messagingSenderId: "331132511154",
  appId: "1:331132511154:web:1844e8656e1c5c4edb3aab",
  measurementId: "G-98QC6S9764"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();