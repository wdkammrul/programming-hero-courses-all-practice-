// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfGBL0NigZnOtbraqpjeGk2CsEVijoVP8",
  authDomain: "user-email-password-auth-c53b6.firebaseapp.com",
  projectId: "user-email-password-auth-c53b6",
  storageBucket: "user-email-password-auth-c53b6.appspot.com",
  messagingSenderId: "116534857298",
  appId: "1:116534857298:web:7f0ec977a7c8df3f34998b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;