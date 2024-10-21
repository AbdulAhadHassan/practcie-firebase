// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  getAuth } from "firebase/auth"
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3cSY4GYnQxoLu4hHDAdn_J-RRcQhUXx4",
  authDomain: "fir-practi-6ef4b.firebaseapp.com",
  projectId: "fir-practi-6ef4b",
  storageBucket: "fir-practi-6ef4b.appspot.com",
  messagingSenderId: "838195983983",
  appId: "1:838195983983:web:38af4ee349092621a1ff9a",
  measurementId: "G-S94CCBEXR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
let qwe 



onAuthStateChanged(auth, (user) => {
  if (user) {
      console.log("user is loogged in", user)
      const uid = user.uid;
       qwe = true
 
      
    } else {
  console.log("user is not loogged in")
  qwe = false
 



}
})


console.log(onAuthStateChanged)
console.log(analytics)


export { app, auth, analytics }