// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeZ9mU9BbdwTpCqpfjFS1sGPkq1WCd-CQ",
  authDomain: "edins-portfolio.firebaseapp.com",
  projectId: "edins-portfolio",
  storageBucket: "edins-portfolio.firebasestorage.app",
  messagingSenderId: "1002847347684",
  appId: "1:1002847347684:web:d691db334ee82763b4ddf1",
  measurementId: "G-XZP0NJ26SW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);