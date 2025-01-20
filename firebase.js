// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoWLkgwWtieZoXwOYNEUDP6InLVpKrX-U",
  authDomain: "blog-dbd87.firebaseapp.com",
  projectId: "blog-dbd87",
  storageBucket: "blog-dbd87.firebasestorage.app",
  messagingSenderId: "797152006895",
  appId: "1:797152006895:web:d152e3712de8cb611c011a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

export const fireStore = getFirestore(app);