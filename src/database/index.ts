// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC03IrFvJVdl9NrTSX9jZNEYNjtLqFrIcU",
  authDomain: "smart-expo-9183c.firebaseapp.com",
  projectId: "smart-expo-9183c",
  storageBucket: "smart-expo-9183c.appspot.com",
  messagingSenderId: "581814540593",
  appId: "1:581814540593:web:c7ad7a60b7219b6fdab810",
  measurementId: "G-HTT8DT37RE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);