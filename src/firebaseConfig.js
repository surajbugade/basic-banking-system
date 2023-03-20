// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBJeQ4bogTVq7t0o6sUcDd7shWBJtOjSt4",
  authDomain: "banking-system-cac02.firebaseapp.com",
  projectId: "banking-system-cac02",
  storageBucket: "banking-system-cac02.appspot.com",
  messagingSenderId: "374066965646",
  appId: "1:374066965646:web:8fcf01ce476addbc74eddf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);