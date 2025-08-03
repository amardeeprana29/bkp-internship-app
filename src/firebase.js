// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config — replace with yours
const firebaseConfig = {
  apiKey: "AIzaSyBuvlXeJwVFX1ks1uoJhGN0-civEI2ACOQ",
  authDomain: "bkp-internship-app.firebaseapp.com",
  projectId: "bkp-internship-app",
  storageBucket: "bkp-internship-app.firebasestorage.app",
  messagingSenderId: "623503675144",
  appId: "1:623503675144:web:97f8ea8a7eb75eee2026bd",
  measurementId: "G-73TJ6YFWCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore DB
const db = getFirestore(app);

export { db };
