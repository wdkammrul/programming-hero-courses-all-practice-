// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqzr-fC6phik-l0Zq8mq8_vnduzCG40ag",
  authDomain: "auth-moha-milon-12839.firebaseapp.com",
  projectId: "auth-moha-milon-12839",
  storageBucket: "auth-moha-milon-12839.appspot.com",
  messagingSenderId: "135495618566",
  appId: "1:135495618566:web:bd8d5bec91a09967c9f387",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 