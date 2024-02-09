// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASZTblC890OS5wma5kclbAIjOtSGnj1dg",
  authDomain: "reactfirebase-621b0.firebaseapp.com",
  projectId: "reactfirebase-621b0",
  storageBucket: "reactfirebase-621b0.appspot.com",
  messagingSenderId: "732794191365",
  appId: "1:732794191365:web:8615ee2fccad3b93f4666c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default db;
