// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCJtsNuaDWF9reMnj7yRQzLUAv6jqfUWM",
  authDomain: "second-firebase-d6b60.firebaseapp.com",
  projectId: "second-firebase-d6b60",
  storageBucket: "second-firebase-d6b60.appspot.com",
  messagingSenderId: "1096602586131",
  appId: "1:1096602586131:web:8d32557edd9014ebbf83e6",
  measurementId: "G-453N3M4CTS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app; 