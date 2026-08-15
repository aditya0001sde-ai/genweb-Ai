// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aiweb-369ca.firebaseapp.com",
  projectId: "aiweb-369ca",
  storageBucket: "aiweb-369ca.firebasestorage.app",
  messagingSenderId: "717291370838",
  appId: "1:717291370838:web:9f7b958abbbf4f6d2cfef7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}
