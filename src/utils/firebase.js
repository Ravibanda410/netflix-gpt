// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkpSH6oi44o1ITfOEpaCbi83I8NpJcv1E",
  authDomain: "netflixgpt-7cabd.firebaseapp.com",
  projectId: "netflixgpt-7cabd",
  storageBucket: "netflixgpt-7cabd.appspot.com",
  messagingSenderId: "498594730823",
  appId: "1:498594730823:web:217e7d67a19f48d4a5f262",
  measurementId: "G-4Z4B133Z91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();