import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDSJFXIegVVsfVQJAwz-3ZUWLqvj4OyZ08",
  authDomain: "electronihaven.firebaseapp.com",
  projectId: "electronihaven",
  storageBucket: "electronihaven.appspot.com",
  messagingSenderId: "268616080035",
  appId: "1:268616080035:web:b9365007a47fed5ac67d16",
  measurementId: "G-VC74GRKC4D",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
