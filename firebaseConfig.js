// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCid68Lc8uFmaszAKWP1FU0JQ1Gzv_V0nk",
  authDomain: "bancodedados-ec10d.firebaseapp.com",
  databaseURL: "https://bancodedados-ec10d-default-rtdb.firebaseio.com",
  projectId: "bancodedados-ec10d",
  storageBucket: "bancodedados-ec10d.appspot.com",
  messagingSenderId: "418987834675",
  appId: "1:418987834675:web:77a68f39e881a7b3685246",
  measurementId: "G-VQL98RBND1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);