// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt8Hxkj8doU_jB2td5MDZiyuJDaM8bPpA",
  authDomain: "simple-firebase-dd57d.firebaseapp.com",
  projectId: "simple-firebase-dd57d",
  storageBucket: "simple-firebase-ddo57d.appspot.com",
  messagingSenderId: "387751045101",
  appId: "1:387751045101:web:af6a9af784249039b6e9e4",
  measurementId: "G-75N71J1V7Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// step-2 export
export default app; 