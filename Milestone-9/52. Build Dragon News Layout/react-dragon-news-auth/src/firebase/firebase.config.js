// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdMfFCPMPW0P1RcRroD0vkxKC2qwYU_Lo",
  authDomain: "react-dragon-news-auth-b78b4.firebaseapp.com",
  projectId: "react-dragon-news-auth-b78b4",
  storageBucket: "react-dragon-news-auth-b78b4.appspot.com",
  messagingSenderId: "201637492257",
  appId: "1:201637492257:web:1acb01a2df6aff35e5d560",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;